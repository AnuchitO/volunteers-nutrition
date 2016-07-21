Given(/^Open Call Jumper$/) do
  visit('/')
end

When(/^Login Call Jumper$/) do
    fill_in('email', :with => 'suzuki11109@gmail.com')
    fill_in('password', :with => '1234')
    click_button('Sign In')
end

Then(/^I should see Main Page$/) do
    expect(page).to have_content('Main Page')
end
