$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registeruserreffering.feature");
formatter.feature({
  "name": "Registered user refer product to friend Successfully",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Registered user refer product to friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@registeruserreffering"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on registration button",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.clickOnRegistrationButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter email address \u0026 password",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterEmailAddressPassword()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#FirstName\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EGIDHPE\u0027, ip: \u0027192.168.0.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\shahm\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49670}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: efad30b9f764a92f8b3d883d8eb784b2\n*** Element info: {Using\u003did, value\u003dFirstName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Utils.sendText(Utils.java:29)\r\n\tat org.example.RegistrationPage.userEntersRegistrationDetails(RegistrationPage.java:28)\r\n\tat org.example.MyStepdefs.userEnterEmailAddressPassword(MyStepdefs.java:68)\r\n\tat ✽.User enter email address \u0026 password(file:///C:/Users/shahm/IdeaProjects/NewLastHomewrk/./src/test/resources/features/registeruserreffering.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on computers",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.clickOnComputers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on item",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.clickOnItem()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on email a friend button",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.clickOnEmailAFriendButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter friend\u0027s email address \u0026 password",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.enterFriendSEmailAddressPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is able to refer successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsAbleToReferSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});