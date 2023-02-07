console.log('***** Music Collection *****')
let collectionGlobal = '' // put global variable up here possibly?
let collection = [];


function addToCollection(title, artist, yearPublished) {
    let albumData = {
        title: title,
        artist, //shorthand notation of the other examples
        yearPublished: yearPublished,
    }
    collection.push(albumData);
    return collection;
}

addToCollection('Shadows Collide with People', 'John Frusciante',2004);
addToCollection('Niandra LaDes and Usually Just a T-Shirt', 'John Frusciante', 1994);
addToCollection('Is This It', 'The Strokes', 2001);
addToCollection('Grace', 'Jeff Buckley', 1994);
addToCollection('WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 'Billie Eilish', 2019);
addToCollection('EL ÚLTIMO TOUR DEL MUNDO', 'Bad Bunny', 2020);

// console.log(collection);
// console.table(collection);
function showCollection() {
    console.table(collection)
}

showCollection();
// console.log(collection);
