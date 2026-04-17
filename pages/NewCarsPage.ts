import{Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class NewCarsPage extends BasePage{
 
    private locators = allLocators.NewCarsPage;
    constructor(page: Page){
        super(page);
    }  
    
    async getHeaderTest():Promise<string>{
        return await this.getText(this.locators.newCarsHeading);
    }

    async gotoBMW(){
      //  await this.waitForTimeout(2000);
        await this.click(this.locators.bmwCar);
    }

    async gotoHondaCar(){
        await this.click(this.locators.hondaCar);
    }

    async gotoToyotaCar(){
        await this.click(this.locators.toyotaCar);
    }

    async gotoHyundaiCar(){
        await this.click(this.locators.hyundaiCar);
    }



}