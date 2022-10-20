require("chromedriver"); // You WILL need to update chrome on the LoD
const { Builder, By, Key, until } = require("selenium-webdriver");
//Builder - what builds our browser
//By - how we select the element to click or input values into
//Key - keyboard functionality
const { expect } = require("chai");

describe("selenium tests", function () {
    this.timeout(40_000);

it.skip("should find an evening dress", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://automationpractice.com/index.php");
        const search = await driver.findElement(By.id("search_query_top"));
        await search.sendKeys("evening dress");
        await search.sendKeys(Key.ENTER);
        const result = await driver.findElement(By.css("#center_column > ul > li > div > div.right-block > h5"));
      expect(await result.getText()).to.equal("Printed Dress");
    } finally {
      await driver.quit();
    }
  })

})