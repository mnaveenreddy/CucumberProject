package com.zopa.base;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.Test;

public class TestBase {

	public static WebDriver driver;
	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
			Pattern.CASE_INSENSITIVE);
    public static final String postcoderegx = "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\\s?[0-9][A-Za-z]{2})";
	public static final Pattern VALID_UK_POSTCODE_REGEX = Pattern.compile(postcoderegx, Pattern.CASE_INSENSITIVE);;

	public void openBrowser(String browser) {

		if (browser.equalsIgnoreCase("firefox")) {
			driver = new FirefoxDriver();
			driver.manage().window().maximize();

		} else if (browser.equals("ie")) {
			System.setProperty("webdriver.ie.driver", "path");
			driver = new InternetExplorerDriver();
			driver.manage().window().maximize();

		} else if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "path");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		}
	}

	public void navigate(String url) {
		driver.get(url);
	}

	public void dropdown(WebElement ele, String value) {
		Select dropdown = new Select(ele);
		dropdown.selectByValue(value);
	}

	public void validateemail(String emailStr) {
		Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
		if (matcher.find()) {
			System.out.println("Valid Email Address: " + matcher.group(0));
		} else {
			System.out.println("Not matching");
		}
	}

	public void validatepostcode(String postcode) {
		Matcher matcher = VALID_UK_POSTCODE_REGEX.matcher(postcode);
		if (matcher.find()) {
			System.out.println("valid Uk Postcode: " + matcher.group(0));
		} else {
			System.out.println("Invalid Uk Postcode");
		}

	}

}
