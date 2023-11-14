import {books} from "./books.js"

//1//

// console.log(books.length)

// //2//
// for (let i = 0; i < books.length; i++){
//     let titlelist = books[i].title
//     console.log(titlelist)
// }


// for (let i = 0; i < books.length; i++) {
//     const titlelist = books[i];
//     console.log(titlelist.price);
//   }

// for (let i = 0; i < books.length; i++) {
//     // const titlelist = books[i];
//     console.log(books[i].title);
//   }

//3//
// for (let i = 0; i < books.length; i++){
// if (books[i].genre === 'Fantasy'){
//         console.log(books[i].title, books[i].price)
//     }
// }

//4//

// for (let i = 0; i < books.length; i++){
//     let genre = books[i].genre
//     if (genre === 'Classic' || genre === 'Dystopian' || genre === 'Mystery'){
//             console.log(books[i].title, books[i].genre)
//         }
//         console.log(genre.length)
//     }

    
// //for (let i = 0; i < books.length; i++){
//     if (books[i].genre === 'Classic' || books[i].genre === 'Dystopian' || books[i].genre === 'Mystery'){
//             console.log(books[i].title, books[i].genre)
//         }
//     }//

//5//

// for (let i = 0; i < books.length; i++){
//     if (books[i].price > 10){
//             console.log(books[i].title, books[i].price)
//         }
//     }

//6//
// let totalvalue = 0

// for (let i = 0; i < books.length; i++){
//     totalvalue += books[i].price
// }
// let roundedvalue = Math.round(totalvalue)
// console.log('Avrundat pris: ', roundedvalue, ' Totalt pris: ', totalvalue)

// Annat sätt att göra det, med forEach

//let sum = 0

// books.forEach((book) => sum += book.price)
// let roundedsum = Math.round(sum)
// console.log(sum)

//7//

// let dystopianvalue = 0
// let mysteryvalue = 0

// for (let i = 0; i < books.length; i++){
//     if (books[i].genre === 'Dystopian'){
//         dystopianvalue += books[i].price
//     }
//     else if (books[i].genre === 'Mystery'){
//         mysteryvalue += books[i].price
//     }
// }
// if (mysteryvalue > dystopianvalue){
//     console.log('Mystery är värt mer.')
// }
// else if(mysteryvalue < dystopianvalue){
//     console.log('Dystopian är värt mer.')
// }
// else{
//     console.log('Båda är värda lika mycket.')
// }

//8//

// let booktitles = []

// for (let i = 0; i < books.length; i++){
//     booktitles[i] = books[i].title
// }

// console.log(booktitles)

// booktitles.sort();
// for (let i = 0; i < booktitles.length; i++){
//     console.log(booktitles[i])
// }

// (Gammal kod:)

// let booktitles = []
// books.forEach((i) => booktitles += i.title)
// // let sortedbooks = booktitles.toSorted();
// console.log(booktitles.length)

// books.sort((a, b) => a.title.localeCompare(b.title));

// console.log('Namnen på alla böcker i bokstavsordning:');
// books.forEach((book) => {
//   console.log(book.title);
// });

//9//

// for (let i = 0; i < books.length; i++){
//     let x = books[i].title
//         for (let o = 0; o < books.length; o++){
//             if (o == (books.length - 1)){
//                 if (x == books[o].title){
//                 console.log(x)
//                 }
//             }
//             else{
//                 if (x == books[(o+1)].title){
//                 console.log(x)
//             }
//         }
//     }
// }


// let duplicate = ''
// let titlelist = []

// for (let i = 0; i < books.length; i++){
//     const title = books[i].title
//     if (titlelist.includes(title)){
//         duplicate = title
//         break;
//         }
//         titlelist[i] = books[i].title
// }

// console.log("Vi har två av:", duplicate)

// const bookTitles = [];

// let duplicateBook = null;

// for (let i = 0; i < books.length; i++) {
//   const title = books[i].title;

//   if (bookTitles.includes(title)) {
//     duplicateBook = title;
//     break; 
//   }

// bookTitles[i] = books[i].title
// }

// if (duplicateBook) {
//   console.log('Det finns en dubblett av boken med titeln:', duplicateBook);
// } else {
//   console.log('Det finns inga dubbletter i boklistan.');
// }

//10//

//Ofunktionell; försökte hitta ett sätt att se 'om mängden substring-inkluderingar är mer än 1...' men hittade inte syntaxen
//innan jag hittade andra vägar.

// let c = 0

// for (let i = 0; i < books.length; i++){
//     let name = books[i].author
//     let substring = ' '
//     if ((name.includes(substring)) > 1){
//         c++
//     }
// }
// console.log(c)

// let a = 0
// let name = []
// let longname = []

// for (let i = 0; i < books.length; i++){
//     name = books[i].author.split(' ')
//     if (name.length > 2){
//     let name1 = name[0]
//     let name2 = name[1]
//     let name3 = name[2]
//         if (name1.length == 2 || name2.length == 2 || name3.length == 2){
//         }
//         else {
//             longname[a] = books[i].author
//         a++
//         }
//     }
// }

//console.log(a)
//console.log(longname)

// let a = 0
// let name = []
// let longname = []

// for (let i = 0; i < books.length; i++){
//     name = books[i].author.split(' ')
//     if (name.length > 2){
//         if (name[0].includes('.') || name[1].includes('.') || name[2].includes('.')){
//         }
//         else {
//             longname[a] = books[i].author
//         a++
//         }
//     }
// }

// console.log(longname)

//11//

// let a = 0
// let namestosort = []
// let surnames = []
// let firstnames = []
// let fullnames = []

// for (let i = 0; i < books.length; i++){
//     namestosort = books[i].author.split(' ')
//     surnames[i] = namestosort[namestosort.length - 1]
//     for (let a = 0; a < (namestosort.length - 1); a++){
//         firstnames[i] = namestosort[a]
//         if (namestosort.length > 2){
//             firstnames[i] = namestosort[0]
//             firstnames[i] += ' ' + namestosort[a]
//         }
//     }
//     fullnames[i] = surnames[i] + ', ' + firstnames[i]
// }

// fullnames.sort()

// console.log(fullnames)

// for (let b = 0; b < (namestosort.length - 1); b++){
//     firstnames[i] = namestosort[0]
//     firstnames[i] += ' ' + namestosort[b]
// }

//12//

// let bookswithoutthe = []
// let thecounter = 0

// for (let i = 0; i < books.length; i++){
//     let name = books[i].title
//     let substring = 'The'
//     if (!name.includes(substring)){
//         bookswithoutthe[thecounter] = name
//         thecounter++
//     }
// }

// console.log(bookswithoutthe)

// let bookswithoutthe = []
// let thecounter = 0

// for (let i = 0; i < books.length; i++){
//     let name = books[i].title
//     if (name.substring(0,3) !== 'The'){
//         bookswithoutthe[thecounter] = name
//         thecounter++
//     }
// }

// console.log(bookswithoutthe)

//13//

// let titles = []
// let numlist = []

// for (let i = 0; i < books.length; i++){
//     titles[i] = books[i].title
//     numlist[i] = titles[i].length
// }

// numlist.sort((a, b) => a - b)
// console.log(numlist)

// let lettersort = []

// for (let i = 0; i < books.length; i++){
//     lettersort[i] = books[i].title
// }

// lettersort.sort((a, b) => a.length - b.length);

// // Skriv ut böckerna med sorterade titlar med en for-loop
// console.log('Böckerna sorterade efter titelns längd i stigande ordning:');
// for (let i = 0; i < books.length; i++) {
//   console.log(lettersort[i]);
// }

// 14 //

function addBook(title, author, genre, price) {
    const newBook = {
        id: books.length + 2,
        title: title,
        author: author,
        genre: genre,
        price: price,
    }
    books.push(newBook)
    return books
}

addBook('A Long Way To A Small Lonely Planet', 'Becky Chambers', 'Sci-Fi', 9.99)

console.log(books)

// function addBook(usertitle, userauthor, usergenre, userprice) {
//     const newBook = {
//         id: books.length + 2,
//         title: usertitle,
//         author: userauthor,
//         genre: usergenre,
//         price: userprice,
//     }
//     books.push(newBook)
//     return books
// }

// addBook()

// console.log(books)