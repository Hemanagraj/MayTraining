package com.training.test;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.training.base.SalesForceWebDriverBase;
import com.training.factory.PageFactory;
import com.training.pages.SalesForceBasePage;

public class VerifyLoginFailureTest extends BaseTest {

	PageFactory pageFactory = new PageFactory();
	static String dateStamp = null;
	SalesForceBasePage page;

	@BeforeTest
	public void setup() throws Exception {
		SalesForceWebDriverBase.loadInitialURL();
	}
	@AfterMethod
    public void teardown(){

        System.out.println("****** In After Method tear down *********");
        System.out.println("Removing driver instance from current thread and closing all sesions");
        //Driver.getCurrentDriver().quit();

    }

    
	@AfterTest
	public void tearDown() throws Exception {
		SalesForceWebDriverBase.closeBrowser();
	}

	@Test
	public void VerifyLoginFailure() {
		page = pageFactory.initialize("SignInPage");
		page.EnterValueIntoTextBox("Username", "hema@tek.com");
		page.EnterValueIntoTextBox("Password", "123");
		page.verifyTitleContains("Login | Salesforce");
		page.click("RememberMe");
		page.click("Login");
		page.verifyPartialText("error",
				"Please check your username and password. If you still can't log in, contact your Salesforce administrator.");
		page = pageFactory.initialize("HomePage");

	}

}
