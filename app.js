// let a = 'Salom'

// for (i = 0; i > 10; i++) {
//     console.log(i)
// }

// // prettier settings added

// let myBtn = document.querySelector("myBtn");
// myBtn.addEventListener("click", function(){
//     myBtn.computedStyleMap.display === "none"
// })

// // train

// let cash = prompt("Valyutani kiriting");
// let usd = 12450
// let uzs = usd * cash;

// alert (cash + " CASH " + uzs + " UZS ")

// engkattasi (2,55,1)

// function engkattasi(a,b,c){
//     let maxval = []
//     let minimum = []
//     let medium = []
//     let max = a 
//     if(b<max && c<max) {
//         console.log(max);
//     }else if(max < b && c < b){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
//     return [...minimum, ...maxval, ...medium]
// }

// console.log([] + {});
// console.log({} + []);


// console.log(typeof null);

let movies = [
    {
        movie: "The Dark Knight",
    year: 1998
},

    {
        movie: "120 Friends Oushen",
        year: 2002
    },
    {
        movie: "Волк с Уол-Стрит",
        year: 2005
    },
    {
        movie: "American Psycho",
        year: 2001
    },
    {
        movie: "Fight Club",
        year: 2004
    },
];

let movie = movies.filter((item, index) => item.movie.length >= 8 && item.year == 2004)
console.log(movie);


console.log(girls.map({item} => {
    return item
}));

// bu yangi array qaytaradi va bu ichida return ishlaydi 
// javob esa original array boladi

// {item} => {
// return item   
// }bu funksiya xar bir elementni qaytaradi

// let kelin = girls.filter ({item} => {
//     if(item.age > 18 && item.name.length == 5){
//         return item 
//     }
// })

// filter ichida bir nechta shart yozsa bo'ladi 


// let input = document.querySelector('input');

// input.addEventListener("input", (e) => {
//     console.log(e.target.value);
//     let filter = girsl.filter{(item) = >{
//     return item.name.toLowerCase().icludes(e.target.value)
//     }}
// })
// console.log(filter);

// includes ichida kichik harf bilan yoziladi 
// includes ichida qidirlayotgan qiymat yoziladi