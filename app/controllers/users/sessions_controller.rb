module Users
  class SessionsController < Devise::SessionsController
    def create
      user = User.find_for_database_authentication(email: user_params[:email])
      if user&.valid_password?(user_params[:password])
        render json: payload(user)
      else
        render json: { errors: "Invalid Email or password" }, status: :unauthorized
      end
    end

    private

    def payload(user)
      return nil unless user.id
      {
        auth_token: JsonWebToken.encode(user_id: user.id),
        email: user.email
      }
    end

    def user_params
      params.permit(:email, :password)
    end
  end
end
