package com.training.pages;

import org.openqa.selenium.By;

public class HomePage extends SalesForceBasePage {
	public HomePage() {
		super();
		addObject("PhHeader",By.id("phHeader"));
		addObject("userNav",By.id("userNav"));
		//addObject("UserNavArrow",By.id("userNav-arrow"));
		
		addObject("UserNavArrow",By.xpath(".//*[@id='userNav-arrow']"));
		//addObject("userNavButton",By.xpath(".//*[@id='userNavButton']")); 
		addObject("userNavButton",By.id("userNavButton"));
		addObject("UserMenuItems",By.id("userNav-menuItems"));
		
		addObject("AccountTab",By.xpath(".//*[@id='Account_Tab']/a"));
		
		
		
	}

}
