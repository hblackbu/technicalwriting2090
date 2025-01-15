var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-intro.warmup",
  "level": "1",
  "url": "sec-intro.warmup.html",
  "type": "Section",
  "number": "1.1",
  "title": "Warm Up",
  "body": " Warm Up  Typing the text and such     A document is a...    Look at   This will be a drop down.   Test exercise  "
},
{
  "id": "def-document",
  "level": "2",
  "url": "sec-intro.warmup.html#def-document",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A document is a...   "
},
{
  "id": "sec-intro.warmup-6",
  "level": "2",
  "url": "sec-intro.warmup.html#sec-intro.warmup-6",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " This will be a drop down.  "
},
{
  "id": "sec-intro.warmup-7",
  "level": "2",
  "url": "sec-intro.warmup.html#sec-intro.warmup-7",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": "Test exercise "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
