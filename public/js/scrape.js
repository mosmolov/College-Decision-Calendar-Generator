const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.once('request', interceptedRequest => {
        interceptedRequest.continue({
                "URL": "https://script.googleusercontent.com/macros/echo?user_content_key=sQ5EWmRtYC8oAtudI_Wvo4J7TEOkdeLxGjF-l1_3lSvuq7X31I0e5TUmkRXwSZ1hqx1iLlP2Gs-uQ0Xa7fJkfFadyXVMIvQDOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa_6nIVpCqN96qpQ7nT5jQFviIr6kI7aon01AcCiYZHcL_yRgA9H-2NLRTWrPoAdgwUvfueUxLWndoOBe2EMPy1BLh9qZqpzetAphNhsYRp8Vl2M2SIw1mG9WiEfBwOoBHYmxORNrRfOixlNQocOsCYy2eOT58SF-R2Bh-0xUhNhcQkaYh23fgBU0mwdWxIaj2t9UiDGR-h-J&lib=MyEhEoIO0nIUk3v6hok7jHNJanGjJz9RS",
                "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "x-client-data": "CIi2yQEIo7bJAQjEtskBCKmdygEItP/LAQjnhMwBCLaFzAEIy4nMAQiZj8wBGIyeywE=",
                "Referer": "https://applyingto.college/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "content-type": "application/javascript"

                },
                "body": null,
                "method": "GET"
                
        })
    })
    const reponse = await page.goto("https://applyingto.college/calendar");
    const values = await response.json();
    console.log(values);
    return values;
})
return values;