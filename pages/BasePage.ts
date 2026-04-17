import {Page} from '@playwright/test';

export class BasePage{
    protected page: Page;
    constructor(page: Page){
        this.page = page;
    }

    async click(locator: string){
        await this.page.click(locator);
    }

    async type(locator: string, text: string){
        await this.page.locator(locator).fill(text);
    }
    async navigateTo(url: string){
        await this.page.goto('url');
    }

    async getText(locator: string){
        return await this.page.locator(locator).innerText();
    }

    async hover(locator: string){
        await this.page.locator(locator).hover();
    }

    async waitForTimeout(timeout: number){
        await this.page.waitForTimeout(timeout);
    }


}