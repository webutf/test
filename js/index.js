if (!pdfjsLib.getDocument || !pdfjsViewer.PDFViewer) {
  alert("Please build the pdfjs-dist library using\n  `gulp dist-install`");
}

// The workerSrc property shall be specified.
//
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "../../node_modules/pdfjs-dist/build/pdf.worker.js";

// Some PDFs need external cmaps.
//
var CMAP_URL = "../../node_modules/pdfjs-dist/cmaps/";
var CMAP_PACKED = true;

var DEFAULT_URL = "./test.pdf";

var container = document.getElementById("viewerContainer");

// (Optionally) enable hyperlinks within PDF files.
var pdfLinkService = new pdfjsViewer.PDFLinkService();

var pdfViewer = new pdfjsViewer.PDFViewer({
  container: container,
  linkService: pdfLinkService,
  renderer: "svg",
  textLayerMode: 0,
});
pdfLinkService.setViewer(pdfViewer);

document.addEventListener("pagesinit", function () {
  // We can use pdfViewer now, e.g. let's change default scale.
  pdfViewer.currentScaleValue = "page-width";
});

// Loading document.
var loadingTask = pdfjsLib.getDocument({
  url: DEFAULT_URL,
  cMapUrl: CMAP_URL,
  cMapPacked: CMAP_PACKED,
});
loadingTask.promise.then(function (pdfDocument) {
  // Document loaded, specifying document for the viewer and
  // the (optional) linkService.
  pdfViewer.setDocument(pdfDocument);

  pdfLinkService.setDocument(pdfDocument, null);
});
