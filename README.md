This is a demo project for universal link and deep link working in parallel

# Universal link

## Server

A. Nginx method
1. Set up a dummy server with nginx
   1. brew install nginx (if the computer did not installed nginx before)
   2. update nginx.conf for the root folder for the nginx server (located at line 44) to the location of the `dummyServer` folder of this repo
      - the nginx.conf file location can be found by running $ nginx -t
   3. run $ nginx to fire up the dummy server

2. Use Ngrok to tunnel the dummy server
   1. run $ ngrok http 3000 // or what port the dummy server is listening on

reference: https://medium.com/zrealm-ios-dev/universal-links-%E6%96%B0%E9%AE%AE%E4%BA%8B-12c5026da33d

## IOS

1. Add the tunneled url to associated domain in xcode
2. select the build target at the left panel of xcode
3. select `Signing & Capabilities`
4. select `+ Capability`
5. search for `Associated Domains`
6. add the tunneled url (without https://) in the format of applinks:${url}

## Android

1. Click `Tools` -> `App Link Assistant`
2. Click step 1 `Add URL intent filters` and add the ngrok link, set autoVerify to `true` for the created intent
3. Click step 3 `Associate Website` to generate the linking file and replace the content inside `assetlinks.json`

## Point to note

if the universal link is not working properly, please try to use release build instead of debug build

### IOS

1. click the build target on the app bar of xcode
2. select `Edit Scheme`
3. change the `Build Configuration` to `Release` in `Run` Tab

### Android

1. run $ npx react-native run android --mode release

## Testing

### IOS

1. open up reminder app on simulator
2. paste the universal link in it
3. click on the link
4. for the first time, you will need to paste the link in the browser and a banner will pop up asking to open the application

### Android

1. run $ adb shell am start -a android.intent.action.VIEW -d "{universal link}"
