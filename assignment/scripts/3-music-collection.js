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

addToCollection('Shadows Collide with People', 'John Frusciante', 2004);
addToCollection('Niandra LaDes and Usually Just a T-Shirt', 'John Frusciante', 1994);
addToCollection('Is This It', 'The Strokes', 2001);
addToCollection('Grace', 'Jeff Buckley', 1994);
addToCollection('WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 'Billie Eilish', 2019);
addToCollection('EL ÚLTIMO TOUR DEL MUNDO', 'Bad Bunny', 2020);

console.log(collection);

console.table(collection) //dont forget about tables! Really good way to view information!

console.log(collection.length)

function showCollection() {
    for (let i = 0; i < collection.length; i++) {
        console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
    }
}

showCollection();

function findByArtist(artist) {
    let matchingArtist = [];
    for (let i = 0; i < collection.length; i++)
        if (artist === collection[i].artist) {
            matchingArtist.push(artist);
        }
    return console.log(matchingArtist)
}

findByArtist('Bad Bunny');
findByArtist('John Frusciante');
findByArtist('Red Hot Chili Peppers'); //this was just to check all the final parameters