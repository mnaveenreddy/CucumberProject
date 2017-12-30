package com.zopa.runner;

import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
monochrome=true,
features="src/test/java/com/zopa/testcases",
plugin={"pretty","html:target/cucumber-html-report",
		"com.cucumber.listener.ExtentCucumberFormatter:ExtentReports/ExtentReports.html" },
         glue="com/zopa/testcases/")
public class SuiteRunner extends AbstractTestNGCucumberTests{
	@AfterClass
    public static void teardown() {
        //Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", "Mac OSX");
        Reporter.setTestRunnerOutput("Sample test runner output message");
    }

}
