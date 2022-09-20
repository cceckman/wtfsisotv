
# Build and artifact per https://github.com/actions/upload-pages-artifact

redo-ifchange pages.dir

OUT="$(realpath $3)"
tar >&2 -C pages -czvf "$OUT" .