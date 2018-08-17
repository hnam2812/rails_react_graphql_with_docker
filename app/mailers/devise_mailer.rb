class DeviseMailer < Devise::Mailer
  layout "mailer"

  protected

  def initialize_from_record(record)
    super
  end
end
