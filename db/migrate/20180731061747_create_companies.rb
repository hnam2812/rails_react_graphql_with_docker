class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :legal_name
      t.string :contact_name
      t.string :contact_phone

      t.timestamps
    end
  end
end
