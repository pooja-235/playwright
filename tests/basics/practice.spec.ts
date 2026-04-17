import {test , expect,request} from '@playwright/test'

test('Practice make my trip', async ({page}) => {
    await page.goto('https://www.makemytrip.com/');
    const title = await page.title();
    console.log('Page Title: ' + title);
    

})

test("api example",async ({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    const responseBody = await response.json();
    console.log('Response Body: ', responseBody);

    const expectedResponse = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };
    expect(responseBody).toEqual(expectedResponse);
    const statusCode = response.status();
    console.log('Status Code: ' + statusCode);
    expect(statusCode).toBe(200);
});

test('API POST request example', async function ({request})
{
    const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

 const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: postData,
    headers: {
        'Content-Type': 'application/json',
    },
 });



});

test('broken links', async ({page}) => {
    await page.goto('https://www.makemytrip.com/');
    const links = await page.$$eval('a',(anchor)=>
    anchor.map(a=>a.href).filter(href=>href.startsWith('http'))
    );

    const requestContext = await request.newContext();
    for(const link of links){
        const resp = await requestContext.get(link);
        if(resp.status() >= 400){
            console.log(`Broken link: ${link} - Status: ${resp.status()}`);
        }
    }

});

 test('broken links',async({page})=>{
        const links =(await page.$$eval('a',all=>all.map(a->a.href)))
    })