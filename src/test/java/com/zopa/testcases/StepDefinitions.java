package com.zopa.testcases;

import com.zopa.base.TestBase;
import com.zopa.pages.HomePage;
import com.zopa.pages.LoanFormPage;
import com.zopa.pages.QuotesPage;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions extends TestBase {
	
	TestBase cucumber=new TestBase();

	@Given("^a web \"([^\"]*)\" is at the \"([^\"]*)\" homepage$")
	public void a_web_is_at_the_homepage(String browser, String zopa) throws Throwable {
	    cucumber.openBrowser(browser);
	    cucumber.navigate(zopa);
	 }

	@When("^the user clicks on Get a Zopa Loan$")
	public void the_user_clicks_on_Get_a_Zopa_Loan() throws Throwable {
	  HomePage hp=new HomePage(driver);
	  hp.clickOnZopaloan();
	    
	}

	@When("^the user is at the quotes page and clicks on Get my personalised rates$")
	public void the_user_is_at_the_quotes_page_and_clicks_on_Get_my_personalised_rates() throws Throwable {
	    QuotesPage qp=new QuotesPage(driver);
	    qp.getquotes();
	    
	}

	@When("^the user is at the loan form page and enter the \"([^\"]*)\" and clicks on Title$")
	public void the_user_is_at_the_loan_form_page_and_enter_the_and_clicks_on_Title(String email) throws Throwable {
	    LoanFormPage lp=new LoanFormPage(driver);
	    lp.enterEmail_validate(email);
	    @Given("^I filled all the fields in the form and clicked on calc elegibility button$")
	    public void I_filled_all_the_fields_in_the_form_and_clicked_on_calc_elegibility_button(DataTable table) throws Throwable {
	       System.out.println("I filled all the fields in the form and clicked on calc elegibility button");
	       GetElegibilityPage gp=PageFactory.initElements(driver, GetElegibilityPage.class);
	       List<Map<String, String>>  data=table.asMaps();
	       System.out.println(data.get(0).get("location"));
	       gp.gotoDesideToApplyPage(data.get(0).get("location"), data.get(0).get("residency"), data.get(0).get("dobda"), data.get(0).get("dobmo"), data.get(0).get("dobye"), 
	       data.get(0).get("empty"), data.get(0).get("companyname"), data.get(0).get("incomedetails"));
	   
	}

	@When("^the user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_enters_and_and(String firstname, String lastname, String phone) throws Throwable {
		LoanFormPage lp=new LoanFormPage(driver);
		lp.fname_lname_phone(firstname, lastname, phone);
	    
	}
	
	@When("^the user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" into the date of birth fields$")
	public void the_user_enters_and_and_into_the_date_of_birth_fields(String day, String month, String year) throws Throwable {
	    
		LoanFormPage lp=new LoanFormPage(driver);
		lp.dateofbirth(day, month, year);
	}
	@When("^the user cliks on homeimprovements and enters \"([^\"]*)\" and clicks on lookup address and enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_cliks_on_homeimprovements_and_enters_and_clicks_on_lookup_address_and_enters_and(String postcode, String moveinmonth, String moveinyear) throws Throwable {
		LoanFormPage lp=new LoanFormPage(driver);
		lp.ukpostcode_validatepostcode(postcode, moveinmonth, moveinyear);
	}
	
    @When("^the user clicks on employed full time and enters the \"([^\"]*)\" and clicks on out right owner$")
	public void the_user_clicks_on_employed_full_time_and_enters_the_and_clicks_on_out_right_owner(String salary) throws Throwable {
		LoanFormPage lp=new LoanFormPage(driver);
	    lp.annualsalary(salary);   
	}

	@Then("^the user creates the \"([^\"]*)\"$")
	public void the_user_creates_the(String password) throws Throwable {
		LoanFormPage lp=new LoanFormPage(driver);
		lp.createpassword(password);
	    
	}

	

}
