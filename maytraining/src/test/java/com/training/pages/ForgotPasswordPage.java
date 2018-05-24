package com.training.pages;

import org.openqa.selenium.By;

public class ForgotPasswordPage extends SalesForceBasePage {

	public ForgotPasswordPage() {
		
		super();

		addObject("HeaderForgotPassword", By.id("header"));
		addObject("UsernameForgotPassword", By.id("un"));
		addObject("Continue", By.id("continue"));
		
	}
		
	}
	

