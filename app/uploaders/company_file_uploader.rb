# require 'carrierwave/processing/mime_types'

class CompanyFileUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  if Rails.env.production? || Rails.env.staging?
    storage :fog
  else
    storage :file
  end

  def store_dir
    "uploads/company/#{mounted_as}/#{model.legal_name}/"
  end

  def extension_whitelist
    %w(pdf)
  end

  def size_range
    0..10.megabytes
  end

  protected

  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) || model.instance_variable_set(var, SecureRandom.uuid)
  end
end
