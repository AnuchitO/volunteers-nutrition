Given /^I am on google\.com$/ do
  # visit('http://www.google.com/')
  visit('http://www.google.com/')
end

When /^I enter "([^"]*)"$/ do |term|
  fill_in('q',:with => term)
end

Then /^I should see results$/ do
  expect(page).to have_content('pizza')
end
