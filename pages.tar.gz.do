
# Github Pages now supports custom build workflows.
# Build the artifact: https://github.com/actions/upload-pages-artifact

redo-ifchange index.html style.css app.js

TEMPDIR=$(mktemp -d)
cp index.html style.css app.js "$TEMPDIR"

OUT="$(realpath $3)"

tar >&2 -C "$TEMPDIR" -czvf "$OUT" .

rm -rf "$TEMPDIR"