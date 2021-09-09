'use strict';

const fs = require('fs');

const req = new (require('request-easy').https)({
  hostname: 'www.opengeodata.nrw.de',
  path: '/produkte/geobasis/hm/dgm1_xyz/dgm1_xyz/index.json'
});

req.onError = (con, cb, err) => console.log(err);

async function run() {
  const [status, headers, body] = await req.asyncGet();

  if (200 !== status) {
    console.log('cant fetch links. try again.');
    return;
  }

  const links = JSON.parse(body).datasets[0].files
    .map(f => `https://www.opengeodata.nrw.de/produkte/geobasis/hm/dgm1_xyz/dgm1_xyz/${encodeURIComponent(f.name)}`)
    .join('\n');

  fs.writeFileSync(`${__dirname}/../data/north_rhine-westphalia.txt`, links + '\n');
}

run();
