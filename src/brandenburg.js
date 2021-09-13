//@ts-check
'use strict';

const fs = require('fs');

const req = new (require('request-easy').https)({
    hostname: 'data.geobasis-bb.de',
    path: '/geobasis/daten/dgm/xyz/'
});

req.onError = (con, cb, err) => console.log(err);

async function run() {
    const [status, headers, body] = await req.asyncGet();

    if (200 !== status) {
        console.log('cant fetch links. try again.');
        return;
    }

    const links = body.toString()
        .match(/\"dgm_\d+\-\d+\.zip\"/g).map(v => 'https://data.geobasis-bb.de/geobasis/daten/dgm/xyz/' + v.slice(1, -1)).join('\n');

    fs.writeFileSync(`${__dirname}/../data/brandenburg.txt`, links + '\n');
}

run();
