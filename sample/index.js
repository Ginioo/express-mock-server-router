import express from 'express';
import cors from 'cors';
import mockServerRouter from 'src/../build/index.js';

const app = express();
const port = process.env.MOCK_SERVER_PORT || 3000;
const mockAPIUrl = '/api/v1.mock';
const router = mockServerRouter({
    routes: [
        { url: mockAPIUrl, path: 'data/' }
    ]
});

app.use(cors());
app.use(router);

app.get('/', (req, res) => {
    res.send(`mock server is running on <a href="${mockAPIUrl}"}>${mockAPIUrl}</a>`);
});

app.listen(port, () => {
    console.log(`mock server is running on port ${port}`);
});
