import puppeteer from 'puppeteer';

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function run() {
    const browser = await puppeteer.launch(
        {
            args: [ '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--proxy-server=' ]
        }
    );

    let pages = []

    for (let i = 0; i < 4; i++) {
        pages.push(await browser.newPage());
        await pages[i].goto("https://kms-01.cognitivehealthintl.com/demo/");
        
        const roomInput = await pages[i].$('#room_id');
        await roomInput.click({ clickCount: 3 });
        await roomInput.type('bot-test-2');

        const startVideoButton = await pages[i].$('#btnJoinCall')
        startVideoButton.click()
    }

    await delay(30000);

    for (let i = 0; i < 2; i++) {
        const endCallButton = await pages[i].$('#btn-leave-call')
        endCallButton.click()
    }

    browser.close()
}

run();

