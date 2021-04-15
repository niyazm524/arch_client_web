// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('pressSendButton', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  // Непосредственно тест
  it('pressSendButton', async function() {
    // Переход по ссылке
    await driver.get("http://localhost:63342/arch_client_web/index.html")
    await driver.manage().window().setRect(968, 1029)
    // Нажатие на кнопку
    await driver.findElement(By.css("input:nth-child(3)")).click()
  })
})
