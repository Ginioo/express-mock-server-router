import { split, isArray, isObject, get, map } from 'lodash';
import { readFileSync, access, F_OK } from 'fs';
import path from 'path';
import uuid from 'uuid';

export default (dataRootPath) => (req, res, next) => {
    dataRootPath = dataRootPath.replace('/', '');
    const subPath = split(split(req.originalUrl, req.baseUrl).pop().replace('/', ''), '?').shift();
    const filename = req.method.toLowerCase() + '.json';
    const file = path.resolve(dataRootPath, subPath, filename);

    access(file, F_OK, err => {
        if (!err) {
            // File exists
            const data = readFileSync(file);
            const parsedData = JSON.parse(data);
            let response = {};
            if (isArray(parsedData)) {
                response = map(parsedData, item => {
                    const id = get(item, 'id', false);
                    if (id !== false && id.toString().toLowerCase() === '_uid_') {
                        item.id = uuid.v4();
                    }

                    return {
                        ...item
                    }
                });
            } else if (isObject(parsedData)) {
                response = { ...parsedData };
                const id = get(parsedData, 'id', false);
                if (id !== false && id.toString().toLowerCase() === '_uid_') {
                    response.id = uuid.v4();
                }

                if (req.query.id !== undefined) {
                    response.id = req.query.id
                }
            }

            res.send(response);
        } else {
            // console.error(JSON.stringify(err));
            next();
        }
    });
};
