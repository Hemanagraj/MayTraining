package com.training.pages;

import java.util.logging.Logger;

import org.openqa.selenium.WebDriver;

import com.training.base.SalesForceWebDriverBase;

public class SalesForceBasePage extends CoreBasePage {
	static WebDriver driver;

	public static Logger logger = Logger.getLogger(SalesForceBasePage.class.getName());

	public SalesForceBasePage() {
		super(driver = SalesForceWebDriverBase.getCurrentDriver());

		// TODO Auto-generated constructor stub
	}

}
