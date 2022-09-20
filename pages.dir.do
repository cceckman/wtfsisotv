
# Github Pages now supports custom build workflows.
# Build the directory, then the artifact.

redo-ifchange index.html style.css js.dir

rm -rf pages
mkdir pages
cp index.html style.css js/* pages

sha256sum pages/* >"$3"
