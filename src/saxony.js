'use strict';

const req = new (require('request-easy').https)({
    hostname: 'geocloud.landesvermessung.sachsen.de'
});

const fs = require('fs');
let str = '';

// build list with links
const links = [];
for (let x = 278; x <= 464; x += 2) {
    for (let z = 5560; z <= 5728; z += 2) {
        links.push([x, z]);
    }
}


async function testLink() {
    const [[x, z]] = links.slice(0, 1);
    const path = `/index.php/s/B1ioxntinuukMHd/download?path=%2F&amp;&files=dgm1_${x}${z}.zip`;
    const [status, headers, body] = await req.asyncHead({ path });

    if (200 === status) {
        str += `https://geocloud.landesvermessung.sachsen.de${path}\n`;
    }
    else if (404 !== status) {
        console.log('error get ', path);
        console.log('status is', status);
        console.log('retry');

        return;
    }

    links.shift();
}

async function run() {
    while (links.length) {
        await testLink();
    }
    fs.writeFileSync(`${__dirname}/../data/saxony.txt`, str);
}
run();
