package com.training.pages;

import java.io.IOException;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Function;
import com.training.utility.PropertyReader;

import junit.framework.Assert;

public abstract class CoreBasePage {

	WebDriver driver;
	static int timeOutInSeconds;
	PropertyReader propertyReader = new PropertyReader();
	public HashMap<String, By> ObjRep = new HashMap<String, By>();
	public static HashMap<String, String> capturedData = new HashMap<String, String>();

	public static Logger logger = Logger.getLogger(CoreBasePage.class.getName());

	public CoreBasePage(WebDriver driver) {
		this.driver = driver;
		setTimeOut();
	}

	private int setTimeOut() {
		try {
			if (propertyReader.getApplicationproperty("timOutInSeconds") == null) {
				timeOutInSeconds = 30;
			} else {
				timeOutInSeconds = Integer.parseInt(propertyReader.getApplicationproperty("timOutInSeconds"));

			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		logger.info("Aplication  time out  is set to =" + timeOutInSeconds + "seconds");
		return timeOutInSeconds;

	}

	public void addObject(String str, By by) {
		ObjRep.put(str, by);
	}

	public WebElement getObject(String objectName) {
		By by = null;
		WebElement element = null;
		try {
			if (ObjRep.get(objectName) != null) {
				by = ObjRep.get(objectName);
			} else {
				logger.info(objectName + "is not present in the given page class, PLease check");
			}

		} catch (NullPointerException ne) {
			ne.printStackTrace();
			logger.info(objectName + "is not present int the page");
		}

		waitForDisplayed(objectName, timeOutInSeconds);
		if (driver.findElement(by) != null) {
			element = driver.findElement(by);
		} else {
			logger.info("Unable to do findElement opertation on object -" + objectName);
			Assert.fail("Unable to do findElement opertation on object -" + objectName);

		}

		return element;
	}

	public WebElement waitForDisplayed(String objectName, int timOutSeconds) {
		By by = ObjRep.get(objectName);
		return waitForDisplayed(driver.findElement(by), timOutSeconds);

	}

	private WebElement waitForDisplayed(final WebElement webElement, int timeOutInSeconds) {
		WebDriverWait webDriverWait = new WebDriverWait(driver, timeOutInSeconds);
		return webDriverWait.withMessage("Element is not loaded in specific timeout").ignoring(WebDriverException.class)
				.until(new Function<WebDriver, WebElement>() {
					public WebElement apply(WebDriver webDriver) {
						return webElement.isDisplayed() ? webElement : null;
					}
				});

	}

	// ---------------------------------------------------
	public void EnterValueIntoTextBox(String objectName, String value) {
		EnterValueIntoTextBox(getObject(objectName), value);
	}

	private void EnterValueIntoTextBox(WebElement element, String text) {
		try {
			waitForDisplayed(element, 2);
			// element.clear();
			element.sendKeys(text);

		} catch (UnhandledAlertException ar) {
			driver.switchTo().alert().dismiss();
		}
	}

	// ---------------------------------------------------------------------------------------------
	public void click(String objectName) {
		click(getObject(objectName));
	}

	private boolean click(WebElement element) throws Error {
		try {
			waitForDisplayed(element, timeOutInSeconds);
			if (isDisplayed(element)) {
				element.click();
				return true;
			}
			return false;
		} catch (UnhandledAlertException ar) {
			driver.switchTo().alert().dismiss();
			return false;
		} catch (Exception e) {
			return false;
		}

	}

	// --------------------
	private boolean isDisplayed(WebElement element) throws Error {
		try {
			return element.isDisplayed();
		} catch (UnhandledAlertException ar) {
			driver.switchTo().alert().dismiss();
			return false;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	private WebElement waitForValuesToLoadinDropdown(final WebElement webElement, int timeOutInSeconds) {
		final Select droplist = new Select(webElement);
		FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(timeOutInSeconds, TimeUnit.SECONDS)
				.pollingEvery(5, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);
		return wait.until(new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver d) {
				return (!droplist.getOptions().isEmpty() ? webElement : null);
			}
		});

	}

	// ------------------------------------------------

	public void selectValueFromDropdown(String objectName, String value) {
		By by = null;
		by = ObjRep.get(objectName);
		WebElement element = driver.findElement(by);
		selectValueFromDropdown(element, value);

	}

	public void verifyTitleContains(String wTitle) {
		FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(timeOutInSeconds, TimeUnit.SECONDS)
				.pollingEvery(5, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);
		if (driver.getTitle().contains(wTitle)) {
			Assert.assertTrue(true);
		} else {
			logger.info("Title -" + driver.getTitle());
			Assert.fail(
					"'" + wTitle + "'Title from the data table is not match with UI title" + driver.getTitle() + "'");
		}
	}

	/*------------------------------------------------------------------------*/

	public void verifyPartialText(String objectName, String value) {

		Assert.assertTrue(value + "is not partially matched with UI" + getText(objectName),
				getText(objectName).toString().trim().contains(value.trim()));

	}

	public String getText(String objectName) {

		return getText(getObject(objectName));
	}

	private String getText(WebElement element) {
		String text = "";
		try {
			waitForDisplayed(element, timeOutInSeconds);
			logger.info("text -" + element.getText());
			text = element.getText().trim().equals("") ? "" : element.getText().trim();

		} catch (UnhandledAlertException ar) {
			driver.switchTo().alert().dismiss();
		}

		return text;
	}

	/*---------------------------------------------------------------------------------*/
	private void selectValueFromDropdown(WebElement element, String value) {
		try {

			FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver)
					.withTimeout(timeOutInSeconds, TimeUnit.SECONDS).pollingEvery(5, TimeUnit.SECONDS)
					.ignoring(NoSuchElementException.class);
			// waitForDisplayed(element, timeOutInSeconds);
			// waitForValuesToLoadinDropdown(element, timeOutInSeconds);
			Select select = new Select(element);

			select.selectByVisibleText(value);

		} catch (UnhandledAlertException ar) {
			driver.switchTo().alert().dismiss();
		}
	}
}
