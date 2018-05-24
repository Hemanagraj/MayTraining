package com.training.test;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.training.base.SalesForceWebDriverBase;
import com.training.factory.PageFactory;
import com.training.pages.SalesForceBasePage;

public class VerifyLoginSuccessTest extends BaseTest {

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
	public void VerifyLoginSucess() {
		page = pageFactory.initialize("SignInPage");
		page.EnterValueIntoTextBox("Username", "hema@tek.com");
		page.EnterValueIntoTextBox("Password", "kannama123");
		page.verifyTitleContains("Login | Salesforce");
		page.click("Login");

	}

}
