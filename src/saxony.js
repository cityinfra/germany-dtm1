//@ts-check
'use strict';

const fs = require('fs');

const req = new (require('request-easy').https)({
    hostname: 'geoportal.sachsen.de',
    path: '/cps/feed-viewer.html?dataset=true&url=https://geodownload.sachsen.de/inspire/el_atom/Dataset_el_dgm1.xml'
});


async function run() {
    const [status, headers, body] = await req.asyncGet();

    if (200 !== status) {
        console.log('cant fetch links. try again.');
        return;
    }

    const links = Array.from(
        new Set(body.toString().match(/\"https.*dgm1_\d+\.zip\"/g)
            .map(v => v.slice(1, -1)))
    ).join('\n');

    fs.writeFileSync(`${__dirname}/../data/saxony.txt`, links + '\n');
}
run();
