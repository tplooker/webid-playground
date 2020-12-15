# WebId Playground

A little demo POC to play with the current [WebID Proposal](https://github.com/WICG/WebID)

This is currently available experimentally as per the [instructions](https://github.com/WICG/WebID/blob/master/HOWTO.md)

**Note** This demo is currently broken due to what appears to be an issue with the implementation of the API

# Setup

Install packages

```
npm install
```

Run up ngrok

```
npm run start:ngrok
```

Update [server.js](./server.js) `idp_url` to be that of the exposed ngrok endpoint

Update [rp.html](./rp.html) provider url to be that of the exposed ngrok endpoint

Run up the server

```
npm run start:server
```

Navigate to [rp.html](./rp.html) and click login