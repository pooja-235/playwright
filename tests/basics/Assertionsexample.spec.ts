import {test , expect} from '@playwright/test'

test('assertions example', async ({page}) => {
    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');

    await expect(page).toHaveURL('http://www.tizag.com/htmlT/htmlcheckboxes.php');

    //toHavetitle
    //tohave text
    //toHaveAttribute
    //toHaveClass
    //toHaveCount
    //toHaveValue
    //toHaveCSS
    //toBeVisible
    //toBeHidden
    //toBeChecked
    //toBeDisabled
    //toBeEditable
    //toBeEmpty
    //toBeFocused
    //toBeTruthy
    //toBeFalsy
    //toContainText
    //toContainAttribute
    //toContainClass
    //toContainValue
    //toContainCSS


})