
redo-ifchange src/*.ts data/data.json

esbuild \
  --outfile="$3" \
  --bundle \
  --minify \
  src/app.ts
