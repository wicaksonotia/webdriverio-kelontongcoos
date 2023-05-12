Feature: [KATALOG SRC] 01. List

  Scenario Outline: As a user, I can see the list of categories and products

    Given I am on the Home page
    When I click menu Katalog SRC
    Then I should be able to see the list of categories and products
