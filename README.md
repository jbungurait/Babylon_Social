# Babylon_Social
Babylon Social is a social network for finding friends and creating thoughts that uplift each other. 
Add your thoughts, find friends, and post reactions to shared content.


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Usage
```md
This app is back end based. To use the app dowload the repository from GitHub. 
Once the app has dowloaded run npm install to install the neccessary packages that run the program. 
After the packages have installed run the `npm run start` comand in the cli to start the server. 
From there you will need Insomnia or similar programs to send requests to the server. 
```


## Video 
[](https://drive.google.com/file/d/1d12hhjMePsKy_VKrXNJbVEfIzftpnDGh/view)



## Credits
* [Mongoose](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_prosp-brand_gic-null_amers-us_ps-all_desktop_eng_lead&utm_term=mongoose%20db&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986498&adgroup=150907550874&cq_cmp=1718986498&gad=1&gclid=CjwKCAjw3ueiBhBmEiwA4BhspBOGOVaTGKwKWJKavbc38ruZtYU87msfGkCRvMTnTMehAZthr5YXOBoC6PwQAvD_BwE)
* [Validator](https://www.npmjs.com/package/validator)
* [Express](https://www.npmjs.com/package/express)
* [Body-Parser](https://www.npmjs.com/package/body-parser)

## Creator
Josh Ungurait
[GitHub](https://github.com/jbungurait/Babylon_Social)