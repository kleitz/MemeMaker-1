var data =  [
{id : 0,
timestamp: 1454859098227,
memeImage : "/images/0.png",
memeText: " Code is everywhere",
template: "tagged as being a template"},
{id : 1,
timestamp: 1454844502480,
memeImage : "/images/1.png",
memeText: " Code is everywhere",
template: "tagged as being a template"},
{id : 2,
timestamp: 1454844502480,
memeImage : "/images/2.png",
memeText: " Code is everywhere",
template: "tagged as being a template"},
{id : 3,
timestamp: 1454844502480,  
memeImage : "/images/3.png",
memeText: " Code is everywhere",
template: "tagged as being a template"},
{id : 4,
timestamp: 1454844502480,
memeImage : "/images/4.png",
memeText: " Code is everywhere",
template: "tagged as being a template"},
{id : 5,
timestamp: 1454844502480,
memeImage : "/images/5.png",
memeText: " Code is everywhere",
template: "tagged as being a template"},
{id : 6,
timestamp: 1454844502480,
memeImage : "/images/6.png",
memeText: " Code is everywhere",
template: "tagged as being a template"},
{id : 7,
timestamp: 1454844502480,
memeImage : "/images/7.png",
memeText: " Code is everywhere",
template: "tagged as being a template"},
{id : 8,
timestamp: 1454861354037,
memeImage : "/images/8.png",
memeText: " Code is everywhere",
gif : "Tagged as being a gif"}
];

    var output = []; // put objects into an array

    // copy items to an array so they can be sorted
    for (var key in data) {
        data[key].key = key;   // save key so you can access it from the array (will modify original data)
        output.push(data[key]);
    }
    output.sort(function(a,b) {
        return(b.timestamp - a.timestamp); // organise by timestamp
    });

console.log(output);
module.exports = output;
