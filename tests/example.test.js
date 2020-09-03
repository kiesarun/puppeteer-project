const puppeteer = require('puppeteer')
const { expect } = require('chai')

describe('My First Puppeteer Test', () => {
    let browser
    let page

    before(async function() {
        browser = await puppeterr.launch({
            headless: false,
            slowMo: 10,
            devtools: false
        })
        page = await browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
    })

    after(async function() {
        await browser.close()
    })

    beforeEach(async function() {
        // runs before each test step
    })

    afterEach(async function() {
        // runs after each test step
    })

    it('should launch the browser', async function() {

        await page.goto('https://www.google.co.th/?hl=th')
        await page.waitForSelector('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
        await page.type('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input', 'youtube\n', {delay: 0})
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('#rso > div:nth-child(1) > div > div.r > a > h3', element => element.textContent)
        const count = await page.$$eval('h1', element => element.length)
        console.log('Title: ' , title)
        console.log('url: ' , url)
        console.log('Text in H1: ' , text)
        console.log('Number of H1 tags on the page: ' , count)
        
        expect(title).to.be.a('string', 'Example Domain')
        expect(url).to.include('youtube')
        expect(text).to.be.a('string', 'Example Domain')
        expect(count).to.equal(7)

        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.waitForSelector('#signin_button')
        await page.click('#signin_button')
        // await page.waitFor(() => !document.querySelector('#signin_button'))
        const eiei = await document.querySelector('#signin_button')
        console.log(eiei)
        await page.waitForSelector('#signin_button', { 
            hidden: true,
            timeout: 3000
        })
    })
})