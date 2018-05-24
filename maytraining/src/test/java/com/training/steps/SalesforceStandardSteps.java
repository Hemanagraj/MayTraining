package com.training.steps;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import com.training.base.SalesForceWebDriverBase;
import com.training.factory.PageFactory;
import com.training.pages.SalesForceBasePage;
import com.training.test.BaseTest;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SalesforceStandardSteps extends BaseTest{
	PageFactory pageFactory = new PageFactory();
	static String dateStamp = null;
	SalesForceBasePage page;

	@BeforeTest
	public void setup() throws Exception {
		SalesForceWebDriverBase.loadInitialURL();
	}

	@AfterTest
	public void tearDown() throws Exception {
		SalesForceWebDriverBase.closeBrowser();
	}
	
	@Given("^User is on \"(.*?)\"$")
	public void User_is_on(String arg1) throws Throwable {
		page = PageFactory.initialize(arg1);
	}

	@When("^User Enter value into the textbox \"(.*?)\" \"(.*?)\"$")
	public void User_Enter_value_into_the_textbox(String objectName, String value) throws Throwable {
		page.EnterValueIntoTextBox(objectName, value);
	}
	
	
	@Then("^User Click on the Button \"(.*?)\"$")
	public void User_Click_on_the_Button(String objectName) throws Throwable {
		page.click(objectName);
	}

	@And("^verify Text \"(.*?)\" \"(.*?)\"$" )
    public void verify_Text(String objectName,String Value)
    {
		page.verifyPartialText(objectName, Value);
    }

	@And("^Verify title \"(.*?)\"$")
public void Verify_Title(String Value)
{page.verifyTitleContains(Value);
		}
}
