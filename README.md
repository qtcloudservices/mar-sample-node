# Managed Application Runtime - Node.js Application Example 

This is an example Node.js application for Qt Cloud Services - Managed Application Runtime ("**MAR**").

## Getting Started

See the Managed Application Runtime getting started documentation at Qt Cloud Services [Developer Documentation ](https://developer.qtcloudservices.com/mar/getting-started)

## Details About This Example

### main.js file

If you take a look at the source code, you'll notice how we are trying to get the port number from environment variables "**PORT**". This is due to fact that when your application is running in Qt Cloud Services cloud, you can not assign the port number manually. Each MAR instance will get a port number and it is exposed to application via environment variable. There are also other environment variables available, but we don't need to use them in this example application.

### package.json file

The important part of the **package.json** file is defined in ``scripts.start`` property. It will define how MAR will handle the application **start** event. In here, we specify we want to execute ``node main.js`` which will start the node application. 

## Running and Testing Application Locally

You can start this application from the application root directory with following command:

```
node main.js
```

Once the server has started, test the server with your web browser at address http://127.0.0.1:8080

## Deploying to Cloud

Please see the Qt Cloud Services [Developer Documentation ](https://developer.qtcloudservices.com/mar/getting-started)
