
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button is displayed', async () => {
    const choices = await driver.findElement(By.id('draw'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('See all bots button is displayed', async () => {
    const duo = await driver.findElement(By.id('see-all'))
    const displayed = await duo.isDisplayed()
    expect(displayed).toBe(true)
})