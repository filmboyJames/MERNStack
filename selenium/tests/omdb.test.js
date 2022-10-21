require("chromedriver"); // You WILL need to update chrome on the LoD
const { Builder, By, Key, until } = require("selenium-webdriver");
//Builder - what builds our browser
//By - how we select the element to click or input values into
//Key - keyboard functionality
const { expect } = require("chai");

describe("selenium tests", function () {
    this.timeout(40_000);

it.skip("should find an api request URL", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.omdbapi.com/");
        const search = await driver.findElement(By.id("t"));
        await search.sendKeys("donnie darko");
        await search.sendKeys(Key.ENTER);
        const result = await driver.wait(until.elementLocated(By.css("#search-by-title-request > pre >a")));
      expect(await result.getText()).to.equal("http://www.omdbapi.com/?t=donnie+darko");
    } finally {
      await driver.quit();
    }
  })

})