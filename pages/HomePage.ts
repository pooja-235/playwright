import{Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HomePage extends BasePage{
 
    private locators = allLocators.HomePage;
    constructor(page: Page){
        super(page);
    }

  //  private newCarsMenu = ()=>this.page.locator('//div[normalize-space()="NEW CARS"]');
   // private findNewCarsMenu = ()=>this.page.locator('text=Find New Cars');

    async navigateToHomePage(){
        await this.page.goto('');
    }
    
    async findNewCar(){
            await this.hover(this.locators.newCarsMenu);
            await this.click(this.locators.findNewCarsMenu);

    }


}
