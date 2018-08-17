# == Schema Information
#
# Table name: companies
#
#  id                           :bigint(8)        not null, primary key
#  legal_name                   :string
#  contact_name                 :string
#  contact_phone                :string
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  deleted_at                   :datetime
#  vesting_schedule             :text
#  rights                       :text
#  restrictive_legends          :text
#  acceleration_provisions      :text
#  address                      :string
#  certificate_of_incorporation :string
#  ceo_signature                :string
#  secretary_signature          :string
#

class Company < ApplicationRecord
  acts_as_paranoid

  # mount_uploader :ceo_signature, CompanyFileUploader
  mount_base64_uploader :certificate_of_incorporation, CompanyFileUploader
  mount_base64_uploader :ceo_signature, CompanyFileUploader
  mount_base64_uploader :secretary_signature, CompanyFileUploader

  validates :legal_name, presence: true

  def certificate_of_incorporation_filename
    certificate_of_incorporation.try(:file).try(:filename)
  end

  def ceo_signature_filename
    ceo_signature.try(:file).try(:filename)
  end

  def secretary_signature_filename
    secretary_signature.try(:file).try(:filename)
  end

  def certificate_of_incorporation_file_size
    (certificate_of_incorporation.try(:file).try(:size).to_f / 1000).to_i
  end

  def ceo_signature_file_size
    (ceo_signature.try(:file).try(:size).to_f / 1000).to_i
  end

  def secretary_signature_file_size
    (secretary_signature.try(:file).try(:size).to_f / 1000).to_i
  end

  def certificate_of_incorporation_file_extension
    certificate_of_incorporation.try(:file).try(:extension)
  end

  def ceo_signature_file_extension
    ceo_signature.try(:file).try(:extension)
  end

  def secretary_signature_file_extension
    secretary_signature.try(:file).try(:extension)
  end
end
