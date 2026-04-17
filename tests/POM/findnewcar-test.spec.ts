//import{test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { NewCarsPage } from '../../pages/NewCarsPage';
import { test, expect } from '../../utils/test-base';
import { readCSVData } from '../../utils/readCSV';

test.describe('Find New Car Test',()=>{
    // let homePage: HomePage; 
    // let newCarsPage: NewCarsPage;
    
    test.beforeEach(async({pages})=>{
        // homePage = new HomePage(page);
        // newCarsPage = new NewCarsPage(page);
        // await homePage.navigateToHomePage();

        await pages.homePage.navigateToHomePage();
    })

    test('Find New Car',async({pages})=>{
        await pages.homePage.findNewCar();
        await expect(pages.page).toHaveURL(/.*new-cars/);
        await console.log(await pages.newCarsPage.getHeaderTest());
        await expect(await pages.newCarsPage.getHeaderTest()).toContain('New Cars');
        await pages.newCarsPage.gotoBMW();
        await expect(pages.page).toHaveURL(/.*bmw/);
    })

    const testData = readCSVData('data/testdata.csv');
     test('Parameterized Find New Car',async({pages})=>{
        for( const data of testData){
            await pages.homePage.findNewCar();
            await expect(pages.page).toHaveURL(/.*new-cars/);
            await console.log(await pages.newCarsPage.getHeaderTest());
            await expect(await pages.newCarsPage.getHeaderTest()).toContain('New Cars');
            
            if(data.carBrand === 'bmw'){
                await pages.newCarsPage.gotoBMW();
                await expect(pages.page).toHaveURL(/.*bmw/);
            }
            else if(data.carBrand === 'hyundai'){
                await pages.newCarsPage.gotoHyundaiCar();
                await expect(pages.page).toHaveURL(/.*hyundai/);
            }   
            else if(data.carBrand === 'honda'){     
                await pages.newCarsPage.gotoHondaCar();
                await expect(pages.page).toHaveURL(/.*honda/);
            } 
            else if(data.carBrand === 'toyota'){
                await pages.newCarsPage.gotoToyotaCar();
                await expect(pages.page).toHaveURL(/.*toyota/);     
            }
        }
    });

});