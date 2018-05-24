package com.training.base;

import java.io.IOException;
import java.util.logging.Logger;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.training.utility.PropertyReader;

/**
 * Hello world!
 *
 */
public class SalesForceWebDriverBase {
	public static final int iWaitSeconds = 20;
	protected static PropertyReader propReader = new PropertyReader();
	protected static WebDriver driver;
	static String sUrl = null;

	public static Logger logger = Logger.getLogger(SalesForceWebDriverBase.class.getName());

	public SalesForceWebDriverBase() {

	}

	public static String getAppURLNew() {
		try {
			sUrl = propReader.getApplicationproperty("url").trim();

		} catch (IOException e) {
			e.printStackTrace();
		}
		return sUrl;
	}

	public static WebDriver getCurrentDriver() {
		if (driver == null) {
			try {

				String sBrowserName = propReader.getApplicationproperty("browser.type").trim();
				System.out.println("Browser Name" + sBrowserName);
				System.setProperty("browser", sBrowserName);
				if (sBrowserName.trim().equalsIgnoreCase("firefox")) {
					System.out.println("Inside the sBrowserName" + sBrowserName);
					;
					System.setProperty("webdriver.gecko.driver","C:\\QA Automation\\geckodriver-v0.20.1-win64\\geckodriver.exe");
					ProfilesIni allProfiles = new ProfilesIni();
					FirefoxProfile profile = allProfiles.getProfile("default");
					DesiredCapabilities capabalities = DesiredCapabilities.firefox();
					capabalities.setCapability("marionette", true);
					driver = new FirefoxDriver(capabalities);

				}
			} catch (Exception exception) {
				logger.info("Exeption -" + exception.getMessage());
			}

		}
		return driver;
	}

	public static void openURL(String url) throws Exception {
		getCurrentDriver().get(url);

	}

	public static void loadInitialURL() throws Exception {
		String sUrl = getAppURLNew();
		System.out.println("URL " + sUrl);
		driver = getCurrentDriver();
		driver.get(sUrl);
		Thread.sleep(3000);
	}

	public static void closeBrowser() {

		try {
			if (driver != null) {
				driver.close();
				driver.quit();
				driver = null;
				logger.info("closing the browser");
			}

		} catch (Exception e) {
			logger.info("Shutdown hook -cannot close browser:unreachable browser");
		}

	}

}
