package com.training.pages;

import org.openqa.selenium.By;

public class AccountEditPage extends SalesForceBasePage {

	public AccountEditPage() {
		
		super();

		addObject("AccountName",By.id("acc2"));
		addObject("ParentAccount",By.id("acc3"));
		addObject("ParentAccountLookup",By.id("acc3_lkwgt"));
		addObject("AccountNumber",By.id("acc5"));
		addObject("Save",By.className("btn"));
		//addObject("");
		
		
		
	}
		
	}
	

