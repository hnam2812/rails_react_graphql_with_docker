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

FactoryBot.define do
  factory :company do
    legal_name { Faker::Company.name }
    contact_name { Faker::Company.name }
    contact_phone { Faker::PhoneNumber.phone_number }
  end
end
