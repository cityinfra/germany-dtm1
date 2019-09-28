'use strict';

const fs = require('fs');

const req = new (require('request-easy').https)({
  hostname: 'geoportal.geoportal-th.de',
  path: '/gaialight-th/_ajax/atomfeed.js?ssr=%7B%22fields%22%3A%5B%22title%22%2C%22summary%22%2C%22crs%22%2C%22spatialDatasetIdentifierCode%22%2C%22spatialDatasetIdentifierNamespace%22%2C%22source%22%2C%22published%22%2C%22updated%22%2C%22rights%22%2C%22author%22%2C%22metadata%22%2C%22datasetFeedUrl%22%2C%22downloadUrl%22%5D%2C%22labels%22%3A%7B%22crs%22%3A%22Koordinatenreferenzsystem%22%2C%22author%22%3A%22Kontakt%22%2C%22bounds%22%3A%22R%C3%A4umliche+Ausdehnung%22%2C%22metadata%22%3A%22Beschreibung%22%2C%22datasetFeedUrl%22%3A%22INSPIRE+Atom+Dataset-Feed%22%2C%22downloadUrlSingle%22%3A%22Link+zur+Datei%22%2C%22downloadUrlMultiple%22%3A%22Links+zu+Dateien%22%2C%22title%22%3A%22Titel%22%2C%22summary%22%3A%22Beschreibung%22%2C%22spatialDatasetIdentifierCode%22%3A%22Datensatz-ID%22%2C%22spatialDatasetIdentifierNamespace%22%3A%22ID-Namensraum%22%2C%22source%22%3A%22Quelle%22%2C%22published%22%3A%22Ver%C3%B6ffentlicht%22%2C%22updated%22%3A%22Letzte+Aktualisierung%22%2C%22rights%22%3A%22Rechte%22%7D%2C%22content%22%3A%7B%22metadata%22%3A%22Metadaten+%C3%B6ffnen%22%2C%22datasetFeedUrl%22%3A%22Liste+der+Einzeldateien+%C3%B6ffnen%22%2C%22downloadUrl%22%3A%22Datei+herunterladen%22%7D%2C%22sectionDetails%22%3A%5B%22title%22%2C%22url%22%5D%2C%22downloadLinks%22%3A%7B%22additionalQueryParameters%22%3A%7B%7D%7D%7D&url=https%3A%2F%2Fgeoportal.geoportal-th.de%2Fdienste%2Fatom_th_hoehendaten_dgm%3Ftype%3Ddataset%26id%3D14418d25-fcd7-4a3f-99a9-e3059a2772af&crs=EPSG%3A3857'
});

async function run() {
  const [status, headers, body] = await req.asyncGet();

  if (200 !== status) {
    console.log('cant fetch links. try again.');
    return;
  }

  const data = JSON.parse(body);
  const links = data.entries[1].links.section.join('\n');

  fs.writeFileSync(`${__dirname}/../data/thuringia.txt`, links + '\n');
}

run();
