// import {test , expect} from '@playwright/test'

// test('Handling dropdowns', async ({page}) => {

//  //   await page.setViewportSize({width: 1920, height: 1080})
//     await page.goto('https://www.wikipedia.org/');

//     await page.selectOption('select', {label: 'Eesti'});
//     await page.selectOption('select', {value: 'hi'});
//     await page.selectOption('select', {index: 0});

//     const options = await page.locator('option').all();

//     console.log('All options:' + options.length);
//     for (const option of options) {
//         const text = await option.textContent();
//         const lang = await option.getAttribute('lang');
//         console.log(`${text} - ${lang}`);
//     }

// })