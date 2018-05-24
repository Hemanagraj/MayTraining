package com.training.pages;

import org.openqa.selenium.By;

public class SignInPage extends SalesForceBasePage {
	public SignInPage() {
		super();

		addObject("Username", By.id("username"));
		addObject("Password", By.id("password"));
		addObject("Login", By.id("Login"));
		addObject("RememberMe", By.id("rememberUn"));
		addObject("error", By.id("error"));
		addObject("ForgotPassword",By.id("forgot_password_link"));
		addObject("LoginError",By.className("loginError"));
		addObject("WrongUnPwdError",By.id("error"));
				
	}

}
