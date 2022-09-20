
redo-ifchange src/*.ts data/data.json

rm -rf js/

esbuild \
  --outdir=js \
  --bundle \
  --minify \
  --sourcemap \
  src/app.ts

sha256sum js/* >"$3"