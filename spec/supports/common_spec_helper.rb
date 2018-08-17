module CommonSpecHelper
  def sign_in(email:, password:)
    visit "/login"
    page.find_field("email").set(email)
    page.find_field("password").set(password)
    find(".btn-primary").click
  end
end
