package com.training.pages;

import org.openqa.selenium.By;

public class AccountCreateNewViewPage extends SalesForceBasePage {

	public AccountCreateNewViewPage() {
		
		super();

		
		
		addObject("Save",By.xpath(".//*[@id='editPage']/div[1]/table/tbody/tr/td[2]/input[1]"));
		addObject("Cancel",By.xpath(".//*[@id='editPage']/div[1]/table/tbody/tr/td[2]/input[2]"));
		addObject("ViewName",By.id("fname"));
		addObject("ViewUniqueName",By.id("devname"));
		addObject("Field1",By.id("fcol1"));
		addObject("Operator1",By.id("fop1"));
		addObject("Value1",By.id("fval1"));
		
		
	}
		
	}
	

