import split from 'lodash/split';
import { readFileSync, access, F_OK } from 'fs';
import path from 'path';

export default (dataRootPath) => (req, res, next) => {
    dataRootPath = dataRootPath.replace('/', '');
    const subPath = split(split(req.originalUrl, req.baseUrl).pop().replace('/', ''), '?').shift();
    const filename = req.method.toLowerCase() + '.json';
    const file = path.resolve(dataRootPath, subPath, filename);

    access(file, F_OK, err => {
        if (!err) {
            // File exists
            const data = readFileSync(file);
            res.send(JSON.parse(data));
        } else {
            // console.error(JSON.stringify(err));
            next();
        }
    });
};
