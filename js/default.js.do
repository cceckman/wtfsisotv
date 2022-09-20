redo-ifchange ../src/episode.ts ../data/data.json

esbuild ../src/episode.ts \
  --bundle \
  --minify \
  --sourcemap

