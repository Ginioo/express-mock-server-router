import map from 'lodash/map';
import { Router } from 'express';
import mockApiMiddleware from 'src/mockApiMiddleware';

const mockServerRouter = ({ routes = [] }) => {
    const router = Router();

    map(routes, ({ url, path }) => {
        router.use(url, mockApiMiddleware(path));
    });

    return router;
};

export default mockServerRouter;
