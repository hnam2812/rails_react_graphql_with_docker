class ApplicationController < ActionController::Base
  include BulletHelper
  before_action :store_user_location!, if: :storable_location?

  protect_from_forgery with: :exception

  responders :flash
  respond_to :html

  private

  def storable_location?
    request.get? && is_navigational_format? && !devise_controller? && !request.xhr?
  end

  def store_user_location!
    store_location_for(:user, request.fullpath)
  end

  def authenticate_request!
    unless user_id_in_token?
      return render json: { errors: ["Not Authenticated"] }, status: :unauthorized
    end
    @current_user = User.find(auth_token["user_id"])
  rescue JWT::VerificationError, JWT::DecodeError, ActiveRecord::RecordNotFound
    render json: { errors: ["Not Authenticated"] }, status: :unauthorized
  end

  def http_token
    @http_token ||= if request.headers["Authorization"].present?
      request.headers["Authorization"].split(" ").last
    end
  end

  def auth_token
    @auth_token ||= JsonWebToken.decode(http_token)
  end

  def user_id_in_token?
    http_token && auth_token && auth_token["user_id"].to_i
  end
end
