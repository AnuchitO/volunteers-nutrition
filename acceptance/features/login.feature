Feature: Login

  Scenario: After Login to Call Jumper Should redirect to Main Page
    Given Open Call Jumper
    When Login Call Jumper
    Then I should see Main Page
