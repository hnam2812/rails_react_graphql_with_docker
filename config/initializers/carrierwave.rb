CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'                        # required
  config.fog_credentials = {
    provider:              'AWS',
    aws_access_key_id:     Settings.aws_access_key_id,
    aws_secret_access_key: Settings.aws_secret_access_key,
    use_iam_profile:       false,
    region:                'us-east-2',
    path_style:            true
  }
  config.fog_directory  = Settings.s3_bucket
  config.fog_public     = false
  config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" }
end
