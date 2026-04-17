import {Page} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { NewCarsPage } from '../pages/NewCarsPage';
import {BMWPage} from '../pages/BMWPage';
import {HyundaiPage} from '../pages/HyundaiPage';
import {HondaPage} from '../pages/HondaPage';
import {ToyotaPage} from '../pages/ToyotaPage'; 

export class PageFixture{
    
    readonly homePage: HomePage;
    readonly newCarsPage: NewCarsPage;
    readonly bmwPage: BMWPage;
    readonly hyundaiPage: HyundaiPage;
    readonly hondaPage: HondaPage;
    readonly toyotaPage: ToyotaPage;
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
        this.homePage = new HomePage(page);
        this.newCarsPage = new NewCarsPage(page);
        this.bmwPage = new BMWPage(page);
        this.hyundaiPage = new HyundaiPage(page);
        this.hondaPage = new HondaPage(page);
        this.toyotaPage = new ToyotaPage(page);
    }

    get basePage():Page{
        return this.page;
    }
}