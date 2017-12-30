package com.zopa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.zopa.base.TestBase;

public class LoanFormPage extends TestBase {
	public WebDriver driver;
	public String expectedadress="STIKEMAN ELLIOTT COTTONS LANE SE1 2QG LONDON";
    public LoanFormPage(WebDriver driver)
    {
	this.driver=driver;
	PageFactory.initElements(driver, this);
    }
    @FindBy(id="member_email") public WebElement enteremail;
    @FindBy(xpath="//*[@id='content']/div/div/div/form/fieldset[1]/div[2]/p[1]/span[2]/label")
    public WebElement titleMr;
    @FindBy(id="applications_loan_apply_first_name") public WebElement firstname; 
    @FindBy(id="applications_loan_apply_last_name") public WebElement lastname;
    @FindBy(id="applications_loan_apply_home_phone") public WebElement phonenumber;
    @FindBy(id="date_of_birth_day") public WebElement birthday;
    @FindBy(id="date_of_birth_month") public WebElement birthmonth;
    @FindBy(id="date_of_birth_year") public WebElement  birthyear;
    @FindBy(xpath="//*[@id='content']/div/div/div/form/fieldset[1]/div[5]/p[1]/span[3]/label") 
    public WebElement homeimprovements;
    @FindBy(id="address_postcode") public WebElement postcode;
    @FindBy(xpath="//*[@id='address-lookup']/p[2]/input") public WebElement lookupaddress;
    @FindBy(id="address_possible_address") public WebElement possibleadress;
    @FindBy(id="address_from_2i") public WebElement moveinmonth;
    @FindBy(id="address_from_1i") public WebElement moveinyear;
    @FindBy(name="select_address") public WebElement selectaddress;
    @FindBy(name="cancel_address") public WebElement canceladress;
    @FindBy(xpath="//*[@id='content']/div/div/div/form/fieldset[3]/div[1]/p/span[2]/label") 
    public WebElement employeefulltime;
    @FindBy(id="applications_loan_apply_salary") public WebElement annualsalary ;
    @FindBy(xpath="//*[@id='content']/div/div/div/form/fieldset[3]/div[3]/p[1]/span[2]/label") 
    public WebElement outrightowner;
    @FindBy(xpath="//*[@id='member_password']") public WebElement createpassword;
    
    public void enterEmail_validate(String Email) throws InterruptedException
    {
    	enteremail.sendKeys(Email);
    	Thread.sleep(3000);
    	//Validating Email address using regex 
    	validateemail(Email);
    	titleMr.click();
    }
    public void fname_lname_phone(String Firstname,String Lastname, String Phone)
    {
    	firstname.sendKeys(Firstname);
    	lastname.sendKeys(Lastname);
    	phonenumber.sendKeys(Phone);
    }
    public void dateofbirth(String Day ,String Month,String Year)
    {
    	birthday.sendKeys(Day);
    	birthmonth.sendKeys(Month);
    	birthyear.sendKeys(Year);
    }
    public void ukpostcode_validatepostcode(String Postcode,String Moveinmonth,String Moveinyear) throws InterruptedException
    {
    	homeimprovements.click();
    	postcode.sendKeys(Postcode);
    	Thread.sleep(4000);
    	//Validates Uk Postcode
    	validatepostcode(Postcode);
    	lookupaddress.click();
    	Thread.sleep(5000);
    	String actualddress=possibleadress.getText();
    	//Validating the address
    	if(expectedadress.equals(actualddress))
    	{
    		dropdown(moveinmonth, Moveinmonth);
    		dropdown(moveinyear, Moveinyear );
    		selectaddress.click();
    	}else
    	{
    		canceladress.click();
    	}
    }
    public void annualsalary(String Salary)
    {
    	employeefulltime.click();
    	annualsalary.sendKeys(Salary);
    }
    public void createpassword(String Password)
    {
    	outrightowner.click();
    	createpassword.sendKeys(Password);	
    }

    
}
