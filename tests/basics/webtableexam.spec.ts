import {test , expect} from '@playwright/test'

test('webtable example', async ({page}) => {
    await page.goto('https://money.rediff.com/indices/nse');

    const rows = await page.locator('#dataTable>tbody>tr').all();
    const col = await page.locator('#dataTable>tbody>tr:nth-child(1)>td').all();
    const text1 = await page.locator('#dataTable>tbody>tr:nth-child(1)>td:nth-child(1)');

    console.log('Total rows:' + rows.length);
    
    console.log('Total rows:' + col.length);
     console.log('first col value:' +await text1.innerText());
});