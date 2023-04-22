# Credit-Card-Checker :credit_card:
Codecademy JavaScript Project

## Project Scenario
In this project I assumed a role of a clerk who was tasked with writing a JavaScript programme that verifies which credit cards are valid, after my company had reasons to suspect that credit card distributors have been mailing out cards that have invalid numbers. I was given a sample of 15 credit card numbers for the programme tests.

## Project Objective
The objective of this project was to put in practice my knowledge of JavaScript functions and loops, to be able to handle checks on multiple cards at the time.

## Code Overview:
1. Arrays wih credit card numbers
2. Functions:
    * validateCred() 
    * findInvalidCards(batch)
    * idInvalidCardCompanies(badCards)

#### 1. Arrays with credit card numbers
There are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array.
    
#### 2. Functions

* validateCred()

The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. validateCred() implements [Lunh Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm#Description) which is used to validate credit card numbers:

![Lunh algorithm](https://user-images.githubusercontent.com/124626130/233794891-1dd4b738-8001-4bff-b8f9-94df32481f45.png)

* findInvalidCards(batch)

The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

* idInvalidCardCompanies(badCards)

The final function returns an array of companies that have mailed out cards with invalid numbers.

