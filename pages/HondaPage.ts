import{Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HondaPage extends BasePage{
 
 //   private locators = allLocators.NewCarsPage;
    constructor(page: Page){
        super(page);
    }  
}