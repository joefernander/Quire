// Boots the Tesseract worker and serves the English model from a file this page publishes.
const base = self.location.href.replace(/[^/]*$/, '');
const realFetch = self.fetch.bind(self);
self.fetch = (u, o) => realFetch(String(u).endsWith('/eng.traineddata.gz') ? base + 'lang/eng-traineddata-gz.wasm' : u, o);
importScripts(base + 'tesseract-worker.min.js');
