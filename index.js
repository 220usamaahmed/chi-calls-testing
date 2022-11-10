import puppeteer from 'puppeteer';

async function run() {
    const browser = await puppeteer.launch(
        {
            args: [ '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--proxy-server=' ]
        }
    );

    const page = await browser.newPage();
    await page.goto("https://kms-01.cognitivehealthintl.com/demo/");
    
    const roomInput = await page.$('#room_id');
    await roomInput.click({ clickCount: 3 });
    await roomInput.type('bot-test-2');

    const startVideoButton = await page.$('#btnJoinCall')
    startVideoButton.click()

    await page.waitForTimeout(10000);

    const endCallButton = await page.$('#btn-leave-call')
    endCallButton.click()

    browser.close()
}

run();