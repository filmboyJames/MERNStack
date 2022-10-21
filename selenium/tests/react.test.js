require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("jordan react tests", function () {
    this.timeout(40_000);

it("Should convert miles to kilometres", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex1");
        const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
        await search.sendKeys("10");
        const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("16");
    } finally {
      await driver.quit();
    }
  })


it("Should convert kilometres to miles", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex1");
        const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
        await search.sendKeys("16");
        const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
      expect(await result.getAttribute("value")).to.equal("10");
    } finally {
      await driver.quit();
    }
  })

  it("Should display the counted number of clicks", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex2");
        const search = await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)"))
        for(let i=0; i<3; i++){
            await search.click();
        }
        const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("3");
    } finally {
      await driver.quit();
    }
  })

  it("Should display the searched for film", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex3");
        const search = await driver.findElement(By.css("#filmTitle"))
        await search.sendKeys("seven brides for seven brothers");
        await search.sendKeys(Key.ENTER);
        const result = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > div > div")));
      expect(await result.getText()).to.equal("Seven Brides for Seven Brothers");
    } finally {
      await driver.quit();
    }
  })

  it("Should display the searched for film", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex3");
        const search = await driver.findElement(By.css("#filmTitle"))
        await search.sendKeys("seven brides for seven brothers");
        await search.sendKeys(Key.ENTER);
        const result = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > div > div")));
      expect(await result.getText()).to.equal("Seven Brides for Seven Brothers");
    } finally {
      await driver.quit();
    }
  })
 
})