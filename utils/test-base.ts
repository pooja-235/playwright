import{test as basetest ,expect} from '@playwright/test';
import {PageFixture} from '../fixtures/page-fixture';   

type TestFixtures = {
    pages: PageFixture;
}

export const test = basetest.extend<TestFixtures>({
    pages: async ({page}, use) => {
        await use(new PageFixture(page));
    }
})

export {expect};