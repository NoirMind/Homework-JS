// // let a = 'Salom'

// // for (i = 0; i > 10; i++) {
// //     console.log(i)
// // }

// // // prettier settings added

// // let myBtn = document.querySelector("myBtn");
// // myBtn.addEventListener("click", function(){
// //     myBtn.computedStyleMap.display === "none"
// // })

// // // train

// // let cash = prompt("Valyutani kiriting");
// // let usd = 12450
// // let uzs = usd * cash;

// // alert (cash + " CASH " + uzs + " UZS ")

// // engkattasi (2,55,1)

// // function engkattasi(a,b,c){
// //     let maxval = []
// //     let minimum = []
// //     let medium = []
// //     let max = a 
// //     if(b<max && c<max) {
// //         console.log(max);
// //     }else if(max < b && c < b){
// //         console.log(b);
// //     }
// //     else{
// //         console.log(c);
// //     }
// //     return [...minimum, ...maxval, ...medium]
// // }

// // console.log([] + {});
// // console.log({} + []);


// // console.log(typeof null);

// let movies = [
//     {
//         movie: "The Dark Knight",
//     year: 1998
// },

//     {
//         movie: "120 Friends Oushen",
//         year: 2002
//     },
//     {
//         movie: "Волк с Уол-Стрит",
//         year: 2005
//     },
//     {
//         movie: "American Psycho",
//         year: 2001
//     },
//     {
//         movie: "Fight Club",
//         year: 2004
//     },
// ];

// let movie = movies.filter((item, index) => item.movie.length >= 8 && item.year == 2004)
// console.log(movie);


// console.log(girls.map({item} => {
//     return item
// }));

// // bu yangi array qaytaradi va bu ichida return ishlaydi 
// // javob esa original array boladi

// // {item} => {
// // return item   
// // }bu funksiya xar bir elementni qaytaradi

// // let kelin = girls.filter ({item} => {
// //     if(item.age > 18 && item.name.length == 5){
// //         return item 
// //     }
// // })

// // filter ichida bir nechta shart yozsa bo'ladi 


// // let input = document.querySelector('input');

// // input.addEventListener("input", (e) => {
// //     console.log(e.target.value);
// //     let filter = girsl.filter{(item) = >{
// //     return item.name.toLowerCase().icludes(e.target.value)
// //     }}
// // })
// // console.log(filter);

// // includes ichida kichik harf bilan yoziladi 
// // includes ichida qidirlayotgan qiymat yoziladi


// String Methods
// .toLowerCase - Katta xarf 
// .toUpperCase - Kichik xarf
// .includes - shartga mosini qidirish
// .trim - bosh joyni olish
// .replace - o'rnini almashtirish
// .splice - qirqib olish

// Math Methods 

// Math.max - eng katta son 
// Math.min - eng kichik son
// Math.ceil - tepaga 
// Math.floor - pastga 
// Math.abs - - ni + ga o'tqazish 
// Math.round - butun songa birlashtirish 
// Math.random - 0-1 o'rtasida taxminiy son
// .Math.pow - darajaga oshirish

// Array methods 
// .push - oxiriga qo'shish 
// .pop - oxiridan ayirish 
// .unshift - boshiga qo'shish 
// .shift - boshidan ayirish 
// .indexOf - index bo'yicha qidirish 
// .concat - array qatorini buzmay massiv qo'shsih 
// .includes - bor yoqligini tekshirish 
// .splice - qoshish ayirish uzgartirish 
// .split - stringni arrayga o'tqazish 
// .join - stringa qaytarish 
// .find - massiv orasidan shart bo'yicha qidirish 
// .reverse - teskariga o'girish


// let tchr = "Azam,jon";
// let newname = tchr.split(",").find(tchr => tchr === "Azam").toUpperCase();
// let newtchrs = tchr.split(",").find(tchr => tchr === "jon");
// let result = newname + newtchrs;
// console.log(result);


function ismChecker (ism){
    // (ism) -> parameter
    let half1  = Math.ceil(ism.length/2)
    let response = ""
    ism.split("").map((item, index)=>index < half1 ? response+= item.toUpperCase() : response+= item.toLowerCase())
    return response
}
console.log(ismChecker("Bekzod"));
// ismChecker("Bekzod") -> argument

let arr = [9,6,3,8,5,4,7,1]

//  output [1,6,3,8,5,4,7,9]


let str = {
    name:"Bekzod",
     slice: function (text, start, end) {
        let result = ""
        for (let i = start; i < (end || text.length); i++) {
            result += text[i]
        }
        this.name
        return result
    }
}

console.log();

let finishedState = 10
let decrementState = 5

for(let initialState = 0; initialState< finishedState;initialState++){
    if(initialState != decrementState){
        console.log(initialState);
    }
}