$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/SalesforceTesting.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the Login Functionality",
  "description": "",
  "id": "verify-the-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Login with Valid Username and clear Password - Login Error Message",
  "description": "",
  "id": "verify-the-login-functionality;verify-login-with-valid-username-and-clear-password---login-error-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter value into the textbox \"Username\" \"hema@tek.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter value into the textbox \"password\" \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click on the Button \"Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify Text \"error\" \"Please enter your password.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "HomePage",
      "offset": 12
    }
  ],
  "location": "SalesforceStandardSteps.User_is_on(String)"
});
formatter.result({
  "duration": 1420668862,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.base.Preconditions.checkArgument(ZLjava/lang/String;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V\r\n\tat org.openqa.selenium.firefox.Preferences.checkPreference(Preferences.java:224)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:154)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:125)\r\n\tat org.openqa.selenium.firefox.Preferences.readDefaultPreferences(Preferences.java:104)\r\n\tat org.openqa.selenium.firefox.Preferences.\u003cinit\u003e(Preferences.java:65)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:81)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:71)\r\n\tat org.openqa.selenium.firefox.internal.ProfilesIni.getProfile(ProfilesIni.java:131)\r\n\tat com.training.base.SalesForceWebDriverBase.getCurrentDriver(SalesForceWebDriverBase.java:52)\r\n\tat com.training.pages.SalesForceBasePage.\u003cinit\u003e(SalesForceBasePage.java:15)\r\n\tat com.training.pages.HomePage.\u003cinit\u003e(HomePage.java:7)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat java.lang.Class.newInstance(Class.java:442)\r\n\tat com.training.factory.PageFactory.initialize(PageFactory.java:31)\r\n\tat com.training.steps.SalesforceStandardSteps.User_is_on(SalesforceStandardSteps.java:33)\r\n\tat ✽.Given User is on \"HomePage\"(src/test/resources/Feature/SalesforceTesting.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 35
    },
    {
      "val": "hema@tek.com",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 35
    },
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 26
    }
  ],
  "location": "SalesforceStandardSteps.User_Click_on_the_Button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 13
    },
    {
      "val": "Please enter your password.",
      "offset": 21
    }
  ],
  "location": "SalesforceStandardSteps.verify_Text(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Login with Valid Username and valid Password - Login to Salesforce",
  "description": "",
  "id": "verify-the-login-functionality;verify-login-with-valid-username-and-valid-password---login-to-salesforce",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User Enter value into the textbox \"Username\" \"hema@tek.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Enter value into the textbox \"password\" \"kannama123\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User Click on the Button \"Login\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HomePage",
      "offset": 12
    }
  ],
  "location": "SalesforceStandardSteps.User_is_on(String)"
});
formatter.result({
  "duration": 2559816020,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.base.Preconditions.checkArgument(ZLjava/lang/String;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V\r\n\tat org.openqa.selenium.firefox.Preferences.checkPreference(Preferences.java:224)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:154)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:125)\r\n\tat org.openqa.selenium.firefox.Preferences.readDefaultPreferences(Preferences.java:104)\r\n\tat org.openqa.selenium.firefox.Preferences.\u003cinit\u003e(Preferences.java:65)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:81)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:71)\r\n\tat org.openqa.selenium.firefox.internal.ProfilesIni.getProfile(ProfilesIni.java:131)\r\n\tat com.training.base.SalesForceWebDriverBase.getCurrentDriver(SalesForceWebDriverBase.java:52)\r\n\tat com.training.pages.SalesForceBasePage.\u003cinit\u003e(SalesForceBasePage.java:15)\r\n\tat com.training.pages.HomePage.\u003cinit\u003e(HomePage.java:7)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat java.lang.Class.newInstance(Class.java:442)\r\n\tat com.training.factory.PageFactory.initialize(PageFactory.java:31)\r\n\tat com.training.steps.SalesforceStandardSteps.User_is_on(SalesforceStandardSteps.java:33)\r\n\tat ✽.Given User is on \"HomePage\"(src/test/resources/Feature/SalesforceTesting.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 35
    },
    {
      "val": "hema@tek.com",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 35
    },
    {
      "val": "kannama123",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 26
    }
  ],
  "location": "SalesforceStandardSteps.User_Click_on_the_Button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Check RememberMe-testcase 3",
  "description": "",
  "id": "verify-the-login-functionality;check-rememberme-testcase-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User is on \"SignInPage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User Enter value into the textbox \"Username\" \"hema123@tek.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User Enter value into the textbox \"Password\" \"kannama123\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User Click on the Button \"RememberMe\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Click on the Button \"Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Verify title \"Home Page ~ Salesforce - Developer Edition\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "SignInPage",
      "offset": 12
    }
  ],
  "location": "SalesforceStandardSteps.User_is_on(String)"
});
formatter.result({
  "duration": 1544277505,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.base.Preconditions.checkArgument(ZLjava/lang/String;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V\r\n\tat org.openqa.selenium.firefox.Preferences.checkPreference(Preferences.java:224)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:154)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:125)\r\n\tat org.openqa.selenium.firefox.Preferences.readDefaultPreferences(Preferences.java:104)\r\n\tat org.openqa.selenium.firefox.Preferences.\u003cinit\u003e(Preferences.java:65)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:81)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:71)\r\n\tat org.openqa.selenium.firefox.internal.ProfilesIni.getProfile(ProfilesIni.java:131)\r\n\tat com.training.base.SalesForceWebDriverBase.getCurrentDriver(SalesForceWebDriverBase.java:52)\r\n\tat com.training.pages.SalesForceBasePage.\u003cinit\u003e(SalesForceBasePage.java:15)\r\n\tat com.training.pages.SignInPage.\u003cinit\u003e(SignInPage.java:7)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat java.lang.Class.newInstance(Class.java:442)\r\n\tat com.training.factory.PageFactory.initialize(PageFactory.java:31)\r\n\tat com.training.steps.SalesforceStandardSteps.User_is_on(SalesforceStandardSteps.java:33)\r\n\tat ✽.Given User is on \"SignInPage\"(src/test/resources/Feature/SalesforceTesting.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 35
    },
    {
      "val": "hema123@tek.com",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 35
    },
    {
      "val": "kannama123",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RememberMe",
      "offset": 26
    }
  ],
  "location": "SalesforceStandardSteps.User_Click_on_the_Button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 26
    }
  ],
  "location": "SalesforceStandardSteps.User_Click_on_the_Button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Home Page ~ Salesforce - Developer Edition",
      "offset": 14
    }
  ],
  "location": "SalesforceStandardSteps.Verify_Title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Verify Forgot Password - Test Case - 4A",
  "description": "",
  "id": "verify-the-login-functionality;verify-forgot-password---test-case---4a",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User is on \"Home Page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User Enter value into the textbox \"Username\" \"hema@tek.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User Click on the Button \"ForgotPassword\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User is on \"ForgotPasswordPage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User Enter value into the textbox \"UsernameForgotPassword\" \"hema@tek.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User Click on the Button \"Continue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User is on \"CheckYourEmailPage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Verify title \"Check Your Email | Salesforce\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click on the Button \"ReturnToLogin\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User is on \"SignInPage\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Page",
      "offset": 12
    }
  ],
  "location": "SalesforceStandardSteps.User_is_on(String)"
});
formatter.result({
  "duration": 8974608793,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.base.Preconditions.checkArgument(ZLjava/lang/String;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V\r\n\tat org.openqa.selenium.firefox.Preferences.checkPreference(Preferences.java:224)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:154)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:125)\r\n\tat org.openqa.selenium.firefox.Preferences.readDefaultPreferences(Preferences.java:104)\r\n\tat org.openqa.selenium.firefox.Preferences.\u003cinit\u003e(Preferences.java:65)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:81)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:71)\r\n\tat org.openqa.selenium.firefox.internal.ProfilesIni.getProfile(ProfilesIni.java:131)\r\n\tat com.training.base.SalesForceWebDriverBase.getCurrentDriver(SalesForceWebDriverBase.java:52)\r\n\tat com.training.pages.SalesForceBasePage.\u003cinit\u003e(SalesForceBasePage.java:15)\r\n\tat com.training.pages.HomePage.\u003cinit\u003e(HomePage.java:7)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat java.lang.Class.newInstance(Class.java:442)\r\n\tat com.training.factory.PageFactory.initialize(PageFactory.java:31)\r\n\tat com.training.steps.SalesforceStandardSteps.User_is_on(SalesforceStandardSteps.java:33)\r\n\tat ✽.Given User is on \"Home Page\"(src/test/resources/Feature/SalesforceTesting.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 35
    },
    {
      "val": "hema@tek.com",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ForgotPassword",
      "offset": 26
    }
  ],
  "location": "SalesforceStandardSteps.User_Click_on_the_Button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ForgotPasswordPage",
      "offset": 12
    }
  ],
  "location": "SalesforceStandardSteps.User_is_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UsernameForgotPassword",
      "offset": 35
    },
    {
      "val": "hema@tek.com",
      "offset": 60
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 26
    }
  ],
  "location": "SalesforceStandardSteps.User_Click_on_the_Button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CheckYourEmailPage",
      "offset": 12
    }
  ],
  "location": "SalesforceStandardSteps.User_is_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Your Email | Salesforce",
      "offset": 14
    }
  ],
  "location": "SalesforceStandardSteps.Verify_Title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ReturnToLogin",
      "offset": 26
    }
  ],
  "location": "SalesforceStandardSteps.User_Click_on_the_Button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SignInPage",
      "offset": 12
    }
  ],
  "location": "SalesforceStandardSteps.User_is_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 43,
  "name": "Forgot Password - TestCase 4B",
  "description": "",
  "id": "verify-the-login-functionality;forgot-password---testcase-4b",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "User is on \"Home Page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User Enter value into the textbox \"Username\" \"123@tek.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User Enter value into the textbox \"Password\" \"123\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User Click on the Button \"Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "verify Text \"WrongUnPwdError\" \"Please check your username and password. If you still can\u0027t log in, contact your Salesforce administrator.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Page",
      "offset": 12
    }
  ],
  "location": "SalesforceStandardSteps.User_is_on(String)"
});
formatter.result({
  "duration": 1817378237,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.base.Preconditions.checkArgument(ZLjava/lang/String;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V\r\n\tat org.openqa.selenium.firefox.Preferences.checkPreference(Preferences.java:224)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:154)\r\n\tat org.openqa.selenium.firefox.Preferences.setPreference(Preferences.java:125)\r\n\tat org.openqa.selenium.firefox.Preferences.readDefaultPreferences(Preferences.java:104)\r\n\tat org.openqa.selenium.firefox.Preferences.\u003cinit\u003e(Preferences.java:65)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:81)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:71)\r\n\tat org.openqa.selenium.firefox.internal.ProfilesIni.getProfile(ProfilesIni.java:131)\r\n\tat com.training.base.SalesForceWebDriverBase.getCurrentDriver(SalesForceWebDriverBase.java:52)\r\n\tat com.training.pages.SalesForceBasePage.\u003cinit\u003e(SalesForceBasePage.java:15)\r\n\tat com.training.pages.HomePage.\u003cinit\u003e(HomePage.java:7)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat java.lang.Class.newInstance(Class.java:442)\r\n\tat com.training.factory.PageFactory.initialize(PageFactory.java:31)\r\n\tat com.training.steps.SalesforceStandardSteps.User_is_on(SalesforceStandardSteps.java:33)\r\n\tat ✽.Given User is on \"Home Page\"(src/test/resources/Feature/SalesforceTesting.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 35
    },
    {
      "val": "123@tek.com",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 35
    },
    {
      "val": "123",
      "offset": 46
    }
  ],
  "location": "SalesforceStandardSteps.User_Enter_value_into_the_textbox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 26
    }
  ],
  "location": "SalesforceStandardSteps.User_Click_on_the_Button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WrongUnPwdError",
      "offset": 13
    },
    {
      "val": "Please check your username and password. If you still can\u0027t log in, contact your Salesforce administrator.",
      "offset": 31
    }
  ],
  "location": "SalesforceStandardSteps.verify_Text(String,String)"
});
formatter.result({
  "status": "skipped"
});
});