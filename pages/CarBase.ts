import{Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class CarBase extends BasePage{
 
    private locators = allLocators.NewCarsPage;
    constructor(page: Page){
        super(page);
    }  
    async getCarTitle():Promise<string>{
        return await this.getText(allLocators.CarBase.carTitle);
    }

}