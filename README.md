# Express Mock Server Router

[![buddy pipeline](https://app.buddy.works/nikeorzgithub/express-mock-server-router/pipelines/pipeline/231450/badge.svg?token=b14695cb0d8354d4ed7b640a2ea9ea5169108947844d14785c4c51c255f921b6 "buddy pipeline")](https://app.buddy.works/nikeorzgithub/express-mock-server-router/pipelines/pipeline/231450)

> This is an express routing middleware for easily build up a mock restful API server.


### [Demo](https://codesandbox.io/embed/sweet-browser-c78s3?fontsize=14&hidenavigation=1&theme=dark)

### Install
##### npm
```
npm install express-mock-server-router
```
##### yarn
```
yarn add express-mock-server-router
```

### Usage
```javascript
import express from 'express';
import mockServerRouter from 'express-mock-server-router';

const app = express();
const port = 3000;
const mockAPIUrl = '/api/v1.mock';

// `data/` is a under your project root. 
app.use(mockServerRouter({
    routes: [
        { url: mockAPIUrl, path: 'data/' }
    ]
}));

app.get('/', (req, res) => {
    res.send(`mock server is running on <a href="${mockAPIUrl}"}>${mockAPIUrl}</a>`);
});

app.listen(port, () => {
    console.log(`mock server is running on port ${port}`);
});

```
