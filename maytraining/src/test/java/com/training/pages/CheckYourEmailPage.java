package com.training.pages;

import org.openqa.selenium.By;

public class CheckYourEmailPage extends SalesForceBasePage{

	public CheckYourEmailPage()
	{
		super();
		
		addObject("CheckYourEmailHeader",By.xpath(".//*[@id='header']"));
		
		addObject("ReturnToLogin",By.xpath(".//*[@id='forgotPassForm']/a"));
		
	}
	
}
