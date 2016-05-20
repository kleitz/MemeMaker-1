var memes = require("../data/memes");


////// CODE SEPERATES ALL THE GIF MEMES into A SEPERATE OBJECT from MEMES data
var gifIDs = [];
  i = 0;
  while ( i < memes.length) {
  if (memes[i].hasOwnProperty('gif')) { 
  
  var id = memes[i].id;
  var timestamp = memes[i].timestamp;
  var image = memes[i].memeImage;
  var text = memes[i].memeText;
  var gifObj = 
         {id : id,
    timestamp : timestamp,
        image : image,
        text  : text};

    gifIDs.push(gifObj);
  }
i = i + 1;}

console.log("meme.ids that are gifs" + gifIDs);
////////////////// 

////// CODE SEPERATES ALL THE TEMPLATE MEMES into A SEPERATE OBJECT from MEMES data
var memeTemplates = [];
  i = 0;
  while ( i < memes.length) {
  if (memes[i].hasOwnProperty('template')) { 
  var id = memes[i].id;
  var timestamp = memes[i].timestamp;
  var image = memes[i].memeImage;
  var text = memes[i].memeText;
  var templateObj = 
         {id : id,
    timestamp : timestamp,
        image : image,
        text  : text};

    memeTemplates.push(gifObj);
  }
i = i + 1; }
console.log("meme.ids that are templates" + memeTemplates);
////////////////// 

function memesIndex(req, res){
  res.render('memes', { memes: memes });
}

function memeNew(req, res){
  res.render('memes/newmeme', { memes: memes });console.log(memes);
}

function memesNew(req, res) {
  res.render('memes/new');
}

function memesCreate(req, res){
  memes.push({}); // push empty object to end of array 
  var id = parseInt(memes.length) -1; // go to last item in array
  memes[id].id = id;
  memes[id].memeText = req.body.memes.memeText;
  memes[id].memeImage = req.body.memes.memeImage;
  memes[id].timestamp = Date.now();
  console.log(memes[id]);
  res.redirect(302, "/memes");
}

function memesShow(req, res) {
  var id = parseInt(req.params.id);
  var meme = memes[id];
  res.render("memes/show", { meme: meme });
}

function memesShowTag(req, res) { // I dont think this will work, google how TAGS JS Node works.
  var tag = req.params.id;
  console.log(tag);

  
res.render("memes/bytag", { memes: memeTemplates });}



function memesEdit(req, res) {
  var id = parseInt(req.params.id);
  res.render("memes/edit", { memes: memes[id] });
}

function memesUpdate(req, res) {
 // var id = parseInt(req.params.id); // old
 memes.push({}); // push empty object to end of array 
var id = parseInt(memes.length) -1; // go to last item in array
memes[id].id = id;
memes[id].timestamp = Date.now();
memes[id].memeText = req.body.memes.memeText;
memes[id].memeImage = req.body.memes.memeImage;
console.log(memes[id]);
  res.redirect(302, "/memes/"+ id);
}

function memesDelete(req, res){
  var id = req.params.id;
  memes.splice(id, 1);
  memes = memes.map(function(meme) {
    meme.id--;
    return meme;
  });
  res.redirect(302, "/");
}

module.exports = {
  memesIndex:  memesIndex,
  memeNew: memeNew,
  memesNew:    memesNew,
  memesCreate: memesCreate,
  memesShow:   memesShow,
  memesShowTag:   memesShowTag,
  memesEdit:   memesEdit,
  memesUpdate: memesUpdate,
  memesDelete: memesDelete
};
