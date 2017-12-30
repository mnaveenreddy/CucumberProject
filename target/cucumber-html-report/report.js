$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoanApplication.feature");
formatter.feature({
  "line": 1,
  "name": "personal Loan Application",
  "description": "",
  "id": "personal-loan-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Applying Loan with Valid data",
  "description": "",
  "id": "personal-loan-application;applying-loan-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "a web \"\u003cbrowser\u003e\" is at the \"\u003czopa\u003e\" homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user is at the quotes page and clicks on Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user is at the loan form page and enter the \"\u003cemail\u003e\" and clicks on Title",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cphonenumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user enters \"\u003cday\u003e\" and \"\u003cmonth\u003e\" and \"\u003cyear\u003e\" into the date of birth fields",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user cliks on homeimprovements and enters \"\u003cpostcode\u003e\" and clicks on lookup address and enters \"\u003cmoveinmonth\u003e\" and \"\u003cmoveinyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user clicks on employed full time and enters the \"\u003csalary\u003e\" and clicks on out right owner",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user creates the \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "personal-loan-application;applying-loan-with-valid-data;",
  "rows": [
    {
      "cells": [
        "browser",
        "zopa",
        "email",
        "firstname",
        "lastname",
        "phonenumber",
        "day",
        "month",
        "year",
        "postcode",
        "moveinmonth",
        "moveinyear",
        "salary",
        "password"
      ],
      "line": 16,
      "id": "personal-loan-application;applying-loan-with-valid-data;;1"
    },
    {
      "cells": [
        "firefox",
        "https://www.zopa.com/",
        "test1234@zopa.com",
        "Test",
        "Test12",
        "07809112233",
        "12",
        "01",
        "1980",
        "SE1 2QG",
        "3",
        "2017",
        "45000",
        "Zopatest1"
      ],
      "line": 17,
      "id": "personal-loan-application;applying-loan-with-valid-data;;2"
    },
    {
      "cells": [
        "firefox",
        "https://www.zopa.com/",
        "test12345@zopa.com",
        "Test1",
        "Test13",
        "07809122333",
        "13",
        "02",
        "1982",
        "SE1 2QG",
        "5",
        "2014",
        "4000",
        "Zopatest2"
      ],
      "line": 18,
      "id": "personal-loan-application;applying-loan-with-valid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Applying Loan with Valid data",
  "description": "",
  "id": "personal-loan-application;applying-loan-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "a web \"firefox\" is at the \"https://www.zopa.com/\" homepage",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user is at the quotes page and clicks on Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user is at the loan form page and enter the \"test1234@zopa.com\" and clicks on Title",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user enters \"Test\" and \"Test12\" and \"07809112233\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user enters \"12\" and \"01\" and \"1980\" into the date of birth fields",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user cliks on homeimprovements and enters \"SE1 2QG\" and clicks on lookup address and enters \"3\" and \"2017\"",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user clicks on employed full time and enters the \"45000\" and clicks on out right owner",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user creates the \"Zopatest1\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 7
    },
    {
      "val": "https://www.zopa.com/",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.a_web_is_at_the_homepage(String,String)"
});
formatter.result({
  "duration": 8519491227,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_clicks_on_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 8171385696,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_is_at_the_quotes_page_and_clicks_on_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 2873018140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234@zopa.com",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_user_is_at_the_loan_form_page_and_enter_the_and_clicks_on_Title(String)"
});
formatter.result({
  "duration": 3504251318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 17
    },
    {
      "val": "Test12",
      "offset": 28
    },
    {
      "val": "07809112233",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.the_user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1724199366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 17
    },
    {
      "val": "01",
      "offset": 26
    },
    {
      "val": "1980",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.the_user_enters_and_and_into_the_date_of_birth_fields(String,String,String)"
});
formatter.result({
  "duration": 505738701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE1 2QG",
      "offset": 47
    },
    {
      "val": "3",
      "offset": 97
    },
    {
      "val": "2017",
      "offset": 105
    }
  ],
  "location": "StepDefinitions.the_user_cliks_on_homeimprovements_and_enters_and_clicks_on_lookup_address_and_enters_and(String,String,String)"
});
formatter.result({
  "duration": 10465399724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.the_user_clicks_on_employed_full_time_and_enters_the_and_clicks_on_out_right_owner(String)"
});
formatter.result({
  "duration": 1992281256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zopatest1",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.the_user_creates_the(String)"
});
formatter.result({
  "duration": 325722075,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Applying Loan with Valid data",
  "description": "",
  "id": "personal-loan-application;applying-loan-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "a web \"firefox\" is at the \"https://www.zopa.com/\" homepage",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user is at the quotes page and clicks on Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user is at the loan form page and enter the \"test12345@zopa.com\" and clicks on Title",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user enters \"Test1\" and \"Test13\" and \"07809122333\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user enters \"13\" and \"02\" and \"1982\" into the date of birth fields",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user cliks on homeimprovements and enters \"SE1 2QG\" and clicks on lookup address and enters \"5\" and \"2014\"",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user clicks on employed full time and enters the \"4000\" and clicks on out right owner",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user creates the \"Zopatest2\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 7
    },
    {
      "val": "https://www.zopa.com/",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.a_web_is_at_the_homepage(String,String)"
});
formatter.result({
  "duration": 8913303233,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_clicks_on_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 6969299082,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_is_at_the_quotes_page_and_clicks_on_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 2101974740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test12345@zopa.com",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_user_is_at_the_loan_form_page_and_enter_the_and_clicks_on_Title(String)"
});
formatter.result({
  "duration": 3707424175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1",
      "offset": 17
    },
    {
      "val": "Test13",
      "offset": 29
    },
    {
      "val": "07809122333",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.the_user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 586033048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 17
    },
    {
      "val": "02",
      "offset": 26
    },
    {
      "val": "1982",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.the_user_enters_and_and_into_the_date_of_birth_fields(String,String,String)"
});
formatter.result({
  "duration": 1915228535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE1 2QG",
      "offset": 47
    },
    {
      "val": "5",
      "offset": 97
    },
    {
      "val": "2014",
      "offset": 105
    }
  ],
  "location": "StepDefinitions.the_user_cliks_on_homeimprovements_and_enters_and_clicks_on_lookup_address_and_enters_and(String,String,String)"
});
formatter.result({
  "duration": 10538150238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.the_user_clicks_on_employed_full_time_and_enters_the_and_clicks_on_out_right_owner(String)"
});
formatter.result({
  "duration": 580921716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zopatest2",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.the_user_creates_the(String)"
});
formatter.result({
  "duration": 836241957,
  "status": "passed"
});
});