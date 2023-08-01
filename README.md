# Fire React House
Fire React House is a baseline template site, no user authentication or backend.

## App Accounts:
These accounts may already be provided by your company, so check first!
* [GitHub](https://github.com/)
    * GitHub is a Microsoft company that safely stores and syncs our code base to the cloud and is an industry standard. I usually just used my personal Github account for this.
* [Firebase](https://firebase.google.com)
    * Firebase is a backend platform providing services for apps like databasing, web hosting, file storage, user authentication, server side functions, and more. Their infrastructure is backed by Google Cloud Platform (Firebase was purchased by Google).
    Millions of developers worldwide empower their apps with Firebase!
* [SendGrid](https://www.sendgrid.com/)
    * SendGrid is a Twilio company that is a developer friendly, reliable email sending and management platform. You will need to get a few values like the app ID, admin, and search API keys, and add to Firebase Function config and/or .env file. You'll also want to create a Dynamic Template in the Email API tab, and copy the values from the functions > src > utils > email-templates > ContactMessage.html to a new dynamic template on the SendGrid Dashboard.

## System Installs

* [Node.js](https://nodejs.org/en/download/current)
    * Used for running npm mainly, which is our Javascript package manager. Install the "Current" version for your OS.
* [Firebase CLI](https://firebase.google.com/docs/cli)
    * Used to run out backend deploying commands mainly, like `firebase deploy`.
* [Github Desktop](https://desktop.github.com/)
    * You can also use the CLI, but the Desktop version is much easier on my feeble brain.
* [git](https://git-scm.com/downloads)
    * This often is a question prompt when installing Node.js I believe to also install "git", so you may already have it installed from this, if not heres the link.
* [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/)
    * This is just my personal preference IDE to edit code files and have an inline terminal window on, but there are many other IDEs. 
    I use the "Insiders" VSCode because you can link a Github profile to your VSCode profile and save preferences. See bottom of README for Doug's favorite VSCode Extensions!
* [Python2.7 or 3](https://www.python.org/downloads/)
    * Not 100% on this one because this is almost always already installed, so try without manually installing this.
* [Something Else](https://www.minute.tech)
    * I will add to this list if I forgot any, I know I did...

## Featured NPM libraries:
* [react](https://www.npmjs.com/package/react)
    * Component organization and front end rendering
* [firebase](https://www.npmjs.com/package/firebase)
    * Database, authentication, server side functions, file storage, etc
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
    * Link and page navigation
* [styled-components](https://www.npmjs.com/package/styled-components)
    * JavaScript CSS styling
* [polished](https://www.npmjs.com/package/polished)
    * Supplementary library to styled-components that provides utility functions to manipulate CSS
* [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
    * Dynamic page meta data, such as page title
* [react-grid-system](https://www.npmjs.com/package/react-grid-system)
    * Responsive grid system
* [react-image-lightbox](https://www.npmjs.com/package/react-image-lightbox)
    * Enlarging images for easy viewing mobile and desktop
* [react-hook-form](https://www.npmjs.com/package/react-hook-form)
    * Breezy form building
* [react-toastify](https://www.npmjs.com/package/react-toastify)
    * Notification alerts
* [react-icons](https://www.npmjs.com/package/react-icons)
    * Quickly and easily use popular icons such as Font Awesome

## Initialization

**1. Create Github project using this template**
   - Name with a dash `-` instead of a dot `.` such as `appname-com` to line up with Firebase project name

**2. Clone this new Github project to desktop for setup**

**3. Create 2 Firebase projects (live and test) for this new site @ https://console.firebase.google.com/**
   - Names with a dash `-` instead of a dot `.` such as `appname-com` to match GitHub repo name
   - Initialize Analytics, Authentication, Firestore, Storage, Hosting, and Functions in the Firebase project console by clicking through those tabs on the left
   - Add a web app under Gear > Project Settings > Your Apps, then grab the Config snippet to copy past in a `.env` file (copy and rename `template.env` to `.env`)
   - You be prompted for Blaze billing in Functions tab, enable and set an alert to like $25, this won't cost much unless your app blows up!

**4. Install NPM libraries**
   - Run `npm install` in the terminal window in main directory
   - Navigate to functions directory with `cd ./functions/` then run `npm install` there as well, then back to main directory `cd ../`

**5. Set new Firebase project aliases**
   - Delete file `.firebaserc`
   - $ `firebase use --add` once for each 'live' and 'test'

**6. Set Firebase Function variables (SendGrid)**
   - $ `firebase functions:config:set sendgrid_api.key="SG.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" --project test`
   - $ `firebase functions:config:set sendgrid_api.key="SG.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" --project live`

**7. Search for TODOs around code**
   - "Fire React House" / "fire-react-house" / "fire-react-house" usages replaced by your app name in some places
   - Update `name` in `package.json` from `fire-react-house` to your appname
   - Update `robots.txt` to be the main domain for this site, with extension path of `/sitemap.xml`. This is used for SEO.
   - Update `sitemap.xml` to be the main domain for this site with current date. Remember to come back to this file and update the paths for SEO!
   - Update `manifest.json` to be this app's name and colors. This file is used for installing the web app on mobile and desktop devices.
   - Update `index.html` in `public` folder such as default `<title>`, `theme-color`, `description`, and more
   - Update `README.md`, at least the title and description to this project. I just copy-paste the same description used in `index.html`.

**8. Add in icons to public**
   - Use this site to generate icon from PNG file (https://favicon.io/), then add that 48x48, 192, apple-touch-icon and 512 icon files to the `public` folder in the project

**9. Update font at `App.css` in src assets**
   - font `.ttf`/`.otf` font file placed in assets > fonts

**10. You may want to adjust the Headers such as the Content Security Policy to match your exact app needs.**
   - Check `firebase.json`
   - https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#mitigating_cross-site_scripting
   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
   - https://www.permissionspolicy.com/

**11. Build**
   - $ `npm run-script build`
   - $ `npm run-script build:test1` if using another `.env`

**12. Deploy to alias**
   - $ `firebase deploy --project=live`
   - Note that any Firebase Hosting accessed will always use the `production` environment, and live (not localhost) links, will always be at the `live` Firebase project! i.e. `fire-react-house` is still using the `fire-react-house` project env.

**99. Extra Config**
   - If custom domain, add it to the authorized domain in Firebase console > Authentication > Sign in Method 
       - Make sure to add `appname.com` and `www.appname.com`
       - You can add a redirect from `appname.web.app` & `appname.firebaseapp.com` to your custom domain by adding to `firebase.json`:
       ```
        "hosting": {
            "public": "build",
            "redirects": [
                    {
                    "source": "/",
                    "destination": "https://www.website.com/",
                    "type": 301
                    }
                ],
            ....
        }
        ```
   - For extra security, limit your API keys to certain functions, domains, etc
       - https://console.cloud.google.com/apis/credentials

## Customization
**Further customizations would be done through hard coding the source code. Have fun coding!!**

## Multiple Firebase project .env's 
Building from multiple .env files is using the library installed by `npm install env-cmd`.

**1. Create or use another Firebase project and get the config variables to place in our `.env.test1` file. Make sure to set all the steps above that pertain to a Firebase project being used with this template.**
   - See `package.json` for npm build changes for .test1, etc

**2. Add the newly created Firebase project to this React project**
   - $ `firebase use --add`

**3. Run a test environment (.env file is different)**
   - $ `npm run-script start:test1`

**4. Build a test environment (.env file is different)**
   - $ `npm run-script build:test1` 

**5. Deploy to test environment**
   - $ `firebase deploy --project=test --only hosting`

## Multiple hosting URLs for one Firebase project 
Sometimes you may want to showcase a quick frontend draft for the client. You can deploy that build directly to a new hosting URL like "draft1"

**1. Name the two targets you wish, but first make sure these are hosting site names on each of test and live projects:**
   -  $ `firebase target:apply hosting draft draft-appname`  
   -  $ `firebase target:apply hosting prod prod-appname`  
 
**2. Then update `firebase.json` file like so:**
```
...
"hosting": [
    {
      "target": "draft",
      "public": "build",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    },
    {
      "target": "prod",
      "public": "build",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    }
  ]
}

```  

**3. Then deploy to specific target like so:**
   - $ `firebase deploy --only hosting:draft --project=test`

**4. Clear target names:**
   - $ `firebase target:clear hosting draft`

## Misc:
- Check Firebase config values: $ `firebase functions:config:get --project=live`
- More Firebase CLI commands: https://firebase.google.com/docs/cli
