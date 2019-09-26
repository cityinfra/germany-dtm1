'use strict';

const fs = require('fs');

const req = new (require('request-easy').https)({
    hostname: 'fbinter.stadt-berlin.de',
    path: '/fb/berlin/service_intern.jsp?id=a_dgm@senstadt&type=FEED'
});

async function run() {
    const [status, headers, body] = await req.asyncGet();

    if (200 !== status) {
        console.log('cant fetch links. try again.');
        return;
    }

    const links = body.toString().match(/\"http\:\/\/fbarc\.stadt\-berlin\.de\/FIS\_Broker\_Atom\/DGM1\/.*?\"/g).map(v => v.slice(1, -1)).join('\n');

    fs.writeFileSync(`${__dirname}/../data/berlin.txt`, links + '\n');
}

run();
