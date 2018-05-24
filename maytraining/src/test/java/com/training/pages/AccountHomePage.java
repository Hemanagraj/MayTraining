package com.training.pages;

import org.openqa.selenium.By;

public class AccountHomePage extends SalesForceBasePage {

	public AccountHomePage() {
		
		super();

		addObject("NewAccount", By.xpath(".//*[@id='hotlist']/table/tbody/tr/td[2]/input"));
		addObject("CreateNewView",By.xpath("/html/body/div[1]/div[2]/table/tbody/tr/td[2]/div[2]/form/div/span/span[2]/a[2]"));
	    
	}
		
	}
	

