const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({ 
            headless: false,
            slowMo: 250,
            devtools: false
        })
        const page = await browser.newPage()
        await page.goto('https://www.google.com/')
        await page.waitForSelector('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
        await page.type('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input', 'youtube\n', {delay: 0})
        await page.waitFor(2000)
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('#rso > div:nth-child(1) > div > div > div.r > a > h3', element => element.textContent)
        console.log('Text in H1: ' , text)
        await browser.close()
    })
})