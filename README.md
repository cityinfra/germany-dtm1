# germany-dtm1
digital terrain models of germany


## update link file
```bash
# update berlins dtm1
node src/berlin
```

## download dtm1 data
```bash
# download berlin dtm1 files
./download-dtm1.sh be
```

## DTM1 status of germany
german state | Status        | Downloaded Size
------------ | ------------- | ---------
Baden-Württemberg | no DTM1 available 
Bavaria | no DTM1 available
Berlin | DTM1 batch download https://fbinter.stadt-berlin.de/fb/berlin/service_intern.jsp?id=a_dgm@senstadt&type=FEED
Brandenburg | DTM1 available https://data.geobasis-bb.de/geobasis/daten/dgm/xyz/
Bremen | no DTM1 available
Hamburg | no DTM1 available
Hesse | no DTM1 available
Lower Saxony | no DTM1 available
Mecklenburg-Vorpommern | no DTM1 available
North Rhine-Westphalia | DTM1 batch download https://www.opengeodata.nrw.de/produkte/geobasis/hm/dgm1_xyz/dgm1_xyz/ | ~112 GB
Rhineland-Palatinate | no DTM1 available
Saarland | no DTM1 available
Saxony-Anhalt | DTM2 via download, DTM1 via WMS https://www.lvermgeo.sachsen-anhalt.de/de/kostenfreie_geobasisdaten_lvermgeo.html#dgm
Saxony | batch files from https://geoportal.sachsen.de/cps/feed-viewer.html?dataset=true&url=https://geodownload.sachsen.de/inspire/el_atom/Dataset_el_dgm1.xml
Schleswig-Holstein | no DTM1 available
Thuringia | DTM1 batch download https://geoportal.geoportal-th.de/gaialight-th/_apps/atomfeedexplorer/?#feed=https://geoportal.geoportal-th.de/dienste/atom_th_hoehendaten_dgm (click on 'Liste der Einzeldateien öffnen', will do a json request, which contains the data)
