return if Rails.env.production?

ActiveRecord::Base.transaction do
  User.destroy_all
  Shareholder.destroy_all
  Company.destroy_all

  User.create(email: 'admin1@skeleton_app.com', password: '123456', confirmed_at: Time.zone.now)
  User.create(email: 'admin2@skeleton_app.com', password: '123456', confirmed_at: Time.zone.now)

  3.times do
    shareholder_name = "#{Faker::Name.first_name} #{Faker::Name.last_name}"
    shareholder_h = {
      legal_name: shareholder_name,
      contact_email: Faker::Internet.email(shareholder_name, '_'),
      contact_address: Faker::Address.full_address,
      contact_phone: Faker::PhoneNumber.cell_phone,
      note: Faker::Lorem.sentence,
      verified: false,
    }
    Shareholder.create(shareholder_h)
  end

  3.times do
    company_name = Faker::Company.name
    company_h = {
      legal_name: company_name,
      contact_name: "#{company_name} #{Faker::Company.industry}",
      contact_phone: Faker::PhoneNumber.cell_phone,
    }
    Company.create(company_h)
  end
end
