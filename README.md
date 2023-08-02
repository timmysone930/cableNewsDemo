This is a demo project for universal link and deep link working in parallel

# IOS

## Universal link

1. Set up a dummy server with nginx

   1. create a folder for the dummy server
   2. create a folder named `.well-known` inside the folder of the dummy server
   3. create a file named `apple-app-site-association` (without any extension) inside the `.well-known` folder
   4. update nginx.conf for the root folder for the nginx server (located at line 44) to the location of the dummy server folder
      - the nginx.conf file location can be found by running $ nginx -t
   5. run $ nginx to fire up the dummy server

2. Use Ngrok to tunnel the dummy server

   1. run $ ngrok http 3000 // or what port the dummy server is listening on

3. Add the tunneled url to associated domain in xcode

   1. select the build target at the left panel of xcode
   2. select `Signing & Capabilities`
   3. select `+ Capability`
   4. search for `Associated Domains`
   5. add the tunneled url (without https://) in the format of applinks:${url}

4. Build the app to the simulator and go to the tunnel url in the browser, the banner will pop up in the top of the page
