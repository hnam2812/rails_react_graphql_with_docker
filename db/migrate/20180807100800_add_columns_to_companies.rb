class AddColumnsToCompanies < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :vesting_schedule, :text
    add_column :companies, :rights, :text
    add_column :companies, :restrictive_legends, :text
    add_column :companies, :acceleration_provisions, :text
    add_column :companies, :address, :string
    add_column :companies, :certificate_of_incorporation, :string
    add_column :companies, :ceo_signature, :string
    add_column :companies, :secretary_signature, :string
  end
end
