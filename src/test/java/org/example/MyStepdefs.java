package org.example;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.asserts.SoftAssert;


public class MyStepdefs {

    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    RegistrationResultPage registrationResultPage = new RegistrationResultPage();
    SoftAssert softAssert = new SoftAssert();
    JewelryPage jewelryPage = new JewelryPage();
    GuestCheckout guestCheckout = new GuestCheckout();
    DigitalDownload digitalDownloads = new DigitalDownload();
    ProductComparision productComparision = new ProductComparision();
    ProductDetailsPage productDetailsPage = new ProductDetailsPage();
    ShippingAddress shippingAddress = new ShippingAddress();
    PaymentMethod paymentMethod = new PaymentMethod();
    Computers computers = new Computers();
    Categories categories = new Categories();
    NewsPage newsPage = new NewsPage();
    CheckOutResult checkOutResult = new CheckOutResult();
    ChangeCurrency changeCurrency = new ChangeCurrency();
    AddToCartButton addToCartButton = new AddToCartButton();


    //User able to register successfully


    @Given("user is on register page")
    public void userIsOnRegisterPage() {
        //click on register button
        homePage.clickOnRegisterButton();
    }

    @When("user enters all registration details")
    public void userEntersAllRegistrationDetails() {
        //fill up registration details
        registrationPage.verifyUserIsOnRegisterPage();
    }

    @And("user clicks on registration button")
    public void userClicksOnRegistrationButton() {
        registrationPage.userEntersRegistrationDetails();

    }

    @Then("user should able to register successfully")
    public void userShouldAbleToRegisterSuccessfully() {
        //verify registrations success message
        registrationResultPage.verifyUserSeeRegistrationSuccessMessage();
    }

    //Register User can refer product successfully


    @When("Click on registration button")
    public void clickOnRegistrationButton() {
        homePage.clickOnRegisterButton();
        registrationPage.verifyUserIsOnRegisterPage();}

    @And("User enter email address & password")
    public void userEnterEmailAddressPassword() {
        registrationPage.userEntersRegistrationDetails();
    }

    @And("click on computers")
    public void clickOnComputers() {
        homePage.ClickOnComputerCategory();
    }

    @And("click on item")
    public void clickOnItem() {
        categories.verifyUserOnComputerCategoriesPage();
        categories.userClickOnNoteBook();
        categories.userClickOnAppleMac();
    }

    @And("Click on email a friend button")
    public void clickOnEmailAFriendButton() {
    }

    @And("Enter friend's email address & password")
    public void enterFriendSEmailAddressPassword() {
    }

    @Then("User is able to refer successfully")
    public void userIsAbleToReferSuccessfully() {
        categories.userReferToFriend();
    }


    //Non User can not refer a friend

    @Given("User is on homePage")
    public void userIsOnHomePage() {
        homePage.ClickOnComputerCategory();
    }

    @When("Click on notebooks from sub-categories")
    public void clickOnNotebooksFromSubCategories() {
        productDetailsPage.VerifyUserIsOnComputerCatagoryPage();
    }

    @And("User refer to a friend")
    public void userReferToAFriend() {
        productDetailsPage.userClickOnNoteBook();
        productDetailsPage.userClickOnAppleMac();
    }


    @Then("Non register user can not refer a friend")
    public void nonRegisterUserCanNotReferAFriend() {
        productDetailsPage.UserReferToFriend();
    }

    //UserShouldBeAbleToSortProductHighToLowByPrice

    @Given("user is on homepage")
    public void userIsOnHomepage() {
        homePage.ClickOnComputerCategory();
    }

    @And("click on computer categories")
    public void clickOnComputerCategories() {
        computers.UserClickOnNotebook();
    }

    @Then("User able to see price arranged from High To low")
    public void userAbleToSeePriceArrangedFromHighToLow() {
        computers.SelectDropdownByVisibleText();
    }

    //verifyGuestUserShouldBeAbleToCheckOutSuccessfully


    @Given("click on jewelry on homepage")
    public void clickOnJewelryOnHomepage() {
        homePage.clickOnJewelryCategory();
    }

    @And("click on add to cart on any product")
    public void clickOnAddToCartOnAnyProduct() {
        jewelryPage.addToCartProduct();
    }

    @And("Enter the guest details")
    public void enterTheGuestDetails() {
        guestCheckout.checkoutAsGuest();
    }

    @And("Enter Shipping Address")
    public void enterShippingAddress() {
        shippingAddress.userShippingAddress();
    }

    @Then("Enter choose payment detail & checkout successfully")
    public void enterChoosePaymentDetailCheckoutSuccessfully() {
        paymentMethod.userChoosePaymentMethod();
    }

    //verify Add To Cart Button Is Present On All Featured Product


    @When("verify Add To Cart Button Is Present On All Featured Product")
    public void verifyAddToCartButtonIsPresentOnAllFeaturedProduct() {
        addToCartButton.verifyAddToCartButton();
    }

    @Then("All product has add to cart option")
    public void allProductHasAddToCartOption() {
    }


    //User should able to compare products


    @Given("User is on HomePage")
    public void userisOnHomePage() {
        homePage.clickOnDigitalDownloads();
    }

    @When("click on DigitalDownloads button")
    public void clickOnDigitalDownloadsButton() {
        digitalDownloads.chooseProductsToCompare();
    }

    @And("Click on add to compare list for item")
    public void clickOnAddToCompareListForItem() {
    }

    @And("Click on product comparision from green navigation bar")
    public void clickOnProductComparisionFromGreenNavigationBar() {
    }

    @Then("User should navigate to compare product page")
    public void userShouldNavigateToCompareProductPage() {
        productComparision.verifyUserOnProductComparisonPage();
    }

    ////User should be able to change the currency


    @Given("user can change currency")
    public void userCanChangeCurrency() {
        changeCurrency.userselectcurrency();
    }

    @Then("user should be able to see price changed with symbol change")
    public void userShouldBeAbleToSeePriceChangedWithSymbolChange() {
        changeCurrency.verifyCurrency();
    }
}

