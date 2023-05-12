Feature: [PESAN ANTAR] 02. Voucher

  Scenario Outline: As a user, I can use voucher to reduce total price

    Given I am on the Home page
    When I click menu Pesan Antar
    Then I should be able to use voucher
