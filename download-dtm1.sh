#!/bin/bash
data=$1
file=""

if [ -z "$data" ]
then
  echo "usage:"
  echo "./download-dtm1.sh be|nw|sn|th|bb"
  exit 1

fi


case $data
in
nw)
  file="data/north_rhine-westphalia.txt";;
be)
  file="data/berlin.txt";;
sn)
  file="data/saxony.txt";;
th)
  file="data/thuringia.txt";;
bb)
  file="data/brandenburg.txt";;
esac



for link in $(cat $file)
do
  wget -P downloads --content-disposition -N "$link"
done
