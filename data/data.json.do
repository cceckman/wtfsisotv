
redo-ifchange data.tsv data.json.do

echo '['

FIRST=true
SECOND=true

cat data.tsv | while read LINE
do
  if $FIRST
  then
    FIRST=false
    continue
  elif $SECOND
  then
    SECOND=false
  else
    echo ','
  fi
  echo '{'
  echo "  \"series\": \"$(echo "$LINE" | cut -f1)\","
  echo "  \"season\": $(echo "$LINE" | cut -f2),"
  echo "  \"episode\": $(echo "$LINE" | cut -f3),"
  echo "  \"title\": \"$(echo "$LINE" | cut -f4)\","
  echo "  \"airdate\": \"$(echo "$LINE" | cut -f6)\""
  echo -n '}'
done

echo ']'
