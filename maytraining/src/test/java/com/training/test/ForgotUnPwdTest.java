package com.training.test;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.training.base.SalesForceWebDriverBase;
import com.training.factory.PageFactory;
import com.training.pages.SalesForceBasePage;

public class ForgotUnPwdTest extends SalesForceBasePage{
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
	
	@Test
	public void ForgotUnPwd() {
		page = pageFactory.initialize("SignInPage");
		page.EnterValueIntoTextBox("Username", "hema123@tek.com");
		page.EnterValueIntoTextBox("Password", "123");
		page.click("Login");
		page.verifyPartialText("WrongUnPwdError", "Please check your username and password. If you still can't log in, contact your Salesforce administrator.");
 	}
	
	
	
}


