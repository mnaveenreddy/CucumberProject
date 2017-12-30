Feature: personal Loan Application


Scenario Outline: Applying Loan with Valid data
Given  a web "<browser>" is at the "<zopa>" homepage
When the user clicks on Get a Zopa Loan
And the user is at the quotes page and clicks on Get my personalised rates
And the user is at the loan form page and enter the "<email>" and clicks on Title
And the user enters "<firstname>" and "<lastname>" and "<phonenumber>" 
And the user enters "<day>" and "<month>" and "<year>" into the date of birth fields
And the user cliks on homeimprovements and enters "<postcode>" and clicks on lookup address and enters "<moveinmonth>" and "<moveinyear>"
And the user clicks on employed full time and enters the "<salary>" and clicks on out right owner
Then the user creates the "<password>"

 Examples:
|browser|zopa                 |email            |firstname|lastname|phonenumber|day|month|year|postcode|moveinmonth|moveinyear|salary|password|
|firefox|https://www.zopa.com/|test1234@zopa.com|Test     |Test12  |07809112233|12 |01   |1980|SE1 2QG |       3  | 2017     |45000 |Zopatest1|
|firefox|https://www.zopa.com/|test12345@zopa.com|Test1     |Test13  |07809122333|13 |02   |1982|SE1 2QG |       5  | 2014    |4000 |Zopatest2|
