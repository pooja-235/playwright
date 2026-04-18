import {test , expect} from '@playwright/test'

/*test('Handling links', async ({page}) => {
    await page.goto('https://www.wikipedia.org/');

  //  const alllink = await page.locator('a').all();
    const block = await page.locator('//*[@id="www-wikipedia-org"]/footer/nav')
    const alllink = await block.locator('a').all();

    console.log('All links:' + alllink.length);

    for (const link of alllink) {
        const text = await link.textContent();
        const href = await link.getAttribute('href');
        console.log(`${text} - ${href}`);
    }   
});*/