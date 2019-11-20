# Mock Server Router

> This is an express router for mock api server

### Usage
```javascript
import express from 'express';
import mockServerRouter from 'express-mock-server-router';

const app = express();
const port = 3000;

app.use(mockServerRouter({
    routes: [
        { url: '/api/v1.mock', path: 'data/' }
    ]
}));

app.get('/', (req, res) => {
    res.send(`mock server is running on <a href="${mockAPIUrl}"}>${mockAPIUrl}</a>`);
});

app.listen(port, () => {
    console.log(`mock server is running on port ${port}`);
});

```
### Demo
```
yarn install

yarn start
```
