package com.training.runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(format= {"pretty","html:target/cucumber","json:target/cucumber-report.json"},
glue= {"com.training.steps"},
features= {"src/test/resources/Feature/SalesforceTesting.feature"},
tags= {})

public class SalesforceTestRunnerSuit {

}
