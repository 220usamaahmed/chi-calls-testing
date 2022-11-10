import puppeteer from 'puppeteer';

async function run() {
    const browser = await puppeteer.launch(
        {
            args: [ '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream' ]
        }
    );

    for (let i = 0; i < 5; i++) {
        const page = await browser.newPage();
        await page.goto("https://kms-01.cognitivehealthintl.com/demo/");
        
        const roomInput = await page.$('#room_id');
        await roomInput.click({ clickCount: 3 });
        await roomInput.type('bot-test');
    
        const startVideoButton = await page.$('#btnJoinCall')
        startVideoButton.click()
    
        await page.waitForTimeout(10000);
    }

    browser.close()
}

run();