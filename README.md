# Quire

A PDF workbench that runs entirely in the browser: delete, add, reorder and rotate pages, split scanned book spreads down the gutter, OCR text with Tesseract, and save a searchable PDF.

## LLM Generated

Frustrated by the fact that I have to either endure countless ads or pay for a subscription to make simple edits to a PDF, this app was developed entirely by Claude (with human direction).

## Run it

Browsers block the page's web workers when it is opened straight from disk, so serve the folder over HTTP:

    cd quire
    python3 -m http.server 8000

Then open http://localhost:8000.

## Files

- `index.html`: the whole app (markup, styles, script).
- `vendor/pdf.worker.min.js`: pdf.js worker (pdfjs-dist 3.11.174).
- `vendor/tess-boot.js`: starts the Tesseract worker and points it at the bundled English model.
- `vendor/tesseract-worker.min.js`: Tesseract.js 5.1.1 worker.
- `vendor/core/`: Tesseract OCR engine (tesseract.js-core 5.1.1).
- `vendor/lang/eng-traineddata-gz.wasm`: English model (4.0.0_best_int, gzipped; the .wasm name is only so artifact hosting would serve it).

pdf.js, pdf-lib 1.17.1 and Tesseract.js load from cdnjs and jsDelivr, so the first load needs an internet connection.
