require "rails_helper"

RSpec.describe "Company management", type: :feature do
  before do
    user = FactoryBot.create(:user, password: "123456")
    sign_in(email: user.email, password: "123456")
    FactoryBot.create_list(:company, 5)
  end

  it "Company Index", js: true do
    visit "/companies"
    expect(page.all("table.companies tr.item-row").count).to eq 5
  end

  it "Company Show", js: true do
    company = Company.first
    visit "/companies/#{company.id}"
    expect(page).to have_text(company.legal_name)
    expect(page).to have_text(company.contact_name)
    expect(page).to have_text(company.contact_phone)
  end

  it "Company New", js: true do
    visit "/companies/new"
    expect(page).to have_text("Add New Company")
    page.find_field("legalName").set("Test Company legalName")
    page.find_field("contactName").set("Test Company contactName")
    page.find_field("contactPhone").set("Test Company contactPhone")
    find(".btn-primary[type='submit']").click

    expect(page).to have_css("table.companies")
    expect(page.all("table.companies tr.item-row").count).to eq 6
    expect(page).to have_text("Test Company legalName")
    expect(page).to have_text("Test Company contactName")
    expect(page).to have_text("Test Company contactPhone")
  end

  it "Company Edit", js: true do
    visit "/companies/#{Company.last.id}/edit"
    expect(page).to have_text("Edit Company")
    page.find_field("legalName").set("LegalName Edited")
    page.find_field("contactName").set("ContactName Edited")
    page.find_field("contactPhone").set("ContactPhone Edited")
    find(".btn-primary[type='submit']").click

    expect(page).to have_css("table.companies")
    expect(page.all("table.companies tr.item-row").count).to eq 5
    expect(page).to have_text("LegalName Edited")
    expect(page).to have_text("ContactName Edited")
    expect(page).to have_text("ContactPhone Edited")
  end

  scenario 'Company Delete', js: true do
    Company.last.update(legal_name: 'OutdatedCompany')
    visit "/companies/#{Company.last.id}"
    expect(page).to have_text("OutdatedCompany")

    click_button 'DELETE'
    within 'div.modal-dialog' do
      expect(page).to have_text('Do you want to delete company OutdatedCompany?')
      click_button 'Delete'
    end

    expect(page).to have_current_path('/companies')
    expect(page.all('table.companies tr.item-row').count).to eq 4
    expect(page).to have_no_text("OutdatedCompany")
    expect(Company.count).to eq 4
    expect(Company.with_deleted.count).to eq 5
  end
end
