// // // let a = 'Salom'

// // // for (i = 0; i > 10; i++) {
// // //     console.log(i)
// // // }

// // // // prettier settings added

// // // let myBtn = document.querySelector("myBtn");
// // // myBtn.addEventListener("click", function(){
// // //     myBtn.computedStyleMap.display === "none"
// // // })

// // // // train

// // // let cash = prompt("Valyutani kiriting");
// // // let usd = 12450
// // // let uzs = usd * cash;

// // // alert (cash + " CASH " + uzs + " UZS ")

// // // engkattasi (2,55,1)

// // // function engkattasi(a,b,c){
// // //     let maxval = []
// // //     let minimum = []
// // //     let medium = []
// // //     let max = a
// // //     if(b<max && c<max) {
// // //         console.log(max);
// // //     }else if(max < b && c < b){
// // //         console.log(b);
// // //     }
// // //     else{
// // //         console.log(c);
// // //     }
// // //     return [...minimum, ...maxval, ...medium]
// // // }

// // // console.log([] + {});
// // // console.log({} + []);

// // // console.log(typeof null);

// // let movies = [
// //     {
// //         movie: "The Dark Knight",
// //     year: 1998
// // },

// //     {
// //         movie: "120 Friends Oushen",
// //         year: 2002
// //     },
// //     {
// //         movie: "Волк с Уол-Стрит",
// //         year: 2005
// //     },
// //     {
// //         movie: "American Psycho",
// //         year: 2001
// //     },
// //     {
// //         movie: "Fight Club",
// //         year: 2004
// //     },
// // ];

// // let movie = movies.filter((item, index) => item.movie.length >= 8 && item.year == 2004)
// // console.log(movie);

// // console.log(girls.map({item} => {
// //     return item
// // }));

// // // bu yangi array qaytaradi va bu ichida return ishlaydi
// // // javob esa original array boladi

// // // {item} => {
// // // return item
// // // }bu funksiya xar bir elementni qaytaradi

// // // let kelin = girls.filter ({item} => {
// // //     if(item.age > 18 && item.name.length == 5){
// // //         return item
// // //     }
// // // })

// // // filter ichida bir nechta shart yozsa bo'ladi

// // // let input = document.querySelector('input');

// // // input.addEventListener("input", (e) => {
// // //     console.log(e.target.value);
// // //     let filter = girsl.filter{(item) = >{
// // //     return item.name.toLowerCase().icludes(e.target.value)
// // //     }}
// // // })
// // // console.log(filter);

// // // includes ichida kichik harf bilan yoziladi
// // // includes ichida qidirlayotgan qiymat yoziladi

// // String Methods
// // .toLowerCase - Katta xarf
// // .toUpperCase - Kichik xarf
// // .includes - shartga mosini qidirish
// // .trim - bosh joyni olish
// // .replace - o'rnini almashtirish
// // .splice - qirqib olish

// // Math Methods

// // Math.max - eng katta son
// // Math.min - eng kichik son
// // Math.ceil - tepaga
// // Math.floor - pastga
// // Math.abs - - ni + ga o'tqazish
// // Math.round - butun songa birlashtirish
// // Math.random - 0-1 o'rtasida taxminiy son
// // .Math.pow - darajaga oshirish

// // Array methods
// // .push - oxiriga qo'shish
// // .pop - oxiridan ayirish
// // .unshift - boshiga qo'shish
// // .shift - boshidan ayirish
// // .indexOf - index bo'yicha qidirish
// // .concat - array qatorini buzmay massiv qo'shsih
// // .includes - bor yoqligini tekshirish
// // .splice - qoshish ayirish uzgartirish
// // .split - stringni arrayga o'tqazish
// // .join - stringa qaytarish
// // .find - massiv orasidan shart bo'yicha qidirish
// // .reverse - teskariga o'girish

// // let tchr = "Azam,jon";
// // let newname = tchr.split(",").find(tchr => tchr === "Azam").toUpperCase();
// // let newtchrs = tchr.split(",").find(tchr => tchr === "jon");
// // let result = newname + newtchrs;
// // console.log(result);

// function ismChecker (ism){
//     // (ism) -> parameter
//     let half1  = Math.ceil(ism.length/2)
//     let response = ""
//     ism.split("").map((item, index)=>index < half1 ? response+= item.toUpperCase() : response+= item.toLowerCase())
//     return response
// }
// console.log(ismChecker("Bekzod"));
// // ismChecker("Bekzod") -> argument

// let arr = [9,6,3,8,5,4,7,1]

// //  output [1,6,3,8,5,4,7,9]

// let str = {
//     name:"Bekzod",
//      slice: function (text, start, end) {
//         let result = ""
//         for (let i = start; i < (end || text.length); i++) {
//             result += text[i]
//         }
//         this.name
//         return result
//     }
// }

// console.log();

// let finishedState = 10
// let decrementState = 5

// for(let initialState = 0; initialState< finishedState;initialState++){
//     if(initialState != decrementState){
//         console.log(initialState);
//     }
// }

// let hello = document.querySelector(".hello");
// hello.style.width = "300px"
// hello.style.height = "300px"
// hello.style.background = "#ccc"

// hello.addEventListener("click", (event) =>{
//     console.log("x:", event.offsetX, "Y:", event.offsetY);
//     console.log(event.target.value);
// })

// function engKattasi(a, b, c){
//     if(b<a&&c<a)return "katta " + a
//     else if(a<b&&c<b) return "katta " + b
//     else return "katta " + c
// }
// console.log(engKattasi(12,45,65))

// let hello = document.querySelector(".hello")

// fetch("https://jsonplaceholder.typicode.com/comments").then((data)=>data.json()).then((res)=>{
//     console.log(res);
//     let data = res.slice(0,40)
//     data?
//     data.map((item, index)=>{
//         let div = document.createElement("div")
//         div.classList.add("product")

//         div.innerHTML=`
//             <h2>${Object.keys(item)}</h2>
//             <img src="https://picsum.photos/id/${index}/400/400" style="border-radius:20px"/>
//             <h3>${item.name}</h3>
//             <h3>${item.email}</h3>
//         `
//         hello.appendChild(div)
//     })
//     :console.log("data mavjud emas");

// }
// )

// let hello = document.querySelector(".hello")

// fetch("https://jsonplaceholder.typicode.com/comments").then((data)=>data.json()).then((res)=>{
//     console.log(res);
//     let data = res.slice(0,40)
//     data?
//     data.map((item, index) =>{
//         let div = document.createElement("div")
//         div.classList.add("product")

//         div.innerHTML = `
//         <h2>${Object.keys(item)}</h2>
//         <img src="https://picsum.photos/id/${index}/400/400" style="border-radius:20px"/>
//         <h3>${item.name}</h3>
//         <h3>${item.email}</h3>`
//         hello.appendChild(div)
//     })
//     :console.log("data mavjud emas")
// }
// )

// fetch("./data.json").then((data)=>data.json()).then((res)=>{console.log(res);
// })

//  function check(name, surname, email){
//  return name.trim().toLowerCase() + " " + surname.trim().toLowerCase() + " " + email.toLowerCase()
// }
// console.log(check("        ASLAN       ", "     IMINJANOV       ", "BEGGYPLAYY@GMAIL.COM"));

// function checkPassword(pswd){
// let newpsw = pswd.slice(0, 9).toUpperCase();
// if(newpsw.lenght == 9){
// return "Password correct!"
// }
// else{
// return "Incorect"
// }}
// console.log(checkPassword("aslanbegiiii"));

// // Event loop o'qish kerak

// function age(yosh){
// if (yosh == 22.6) {
//     return Math.round(yosh)
// }
// else{
//     return "22"
// }
// }
// console.log(age(22.6));

// function summ(usd){
//     return Math.round(usd)
// }
// console.log(summ(99.7));

// function score(ball){
//     return Math.round(ball)
// }
// console.log(score(88.4));

// function summ(usd){
//     return Math.round(usd)
// }
// console.log(summ(25000.6));

// function weather(ob){
//     return Math.round(ob)
// }
// console.log(weather(36.7));

// function summ(usd){
//     return Math.round(usd)
// }
// console.log(summ(451.562));

// function yosh(age){
//     return Math.floor(age)
// }
// console.log(yosh(37.9));

// function sum(usd){
//     return Math.floor(usd)
// }
// console.log(sum(19999.99));

// function sum(a, b, c){
//  if(a > b && a > c){
//     return "A Katta " + a
//  }else if(b > a && b > c){
//     return "B Katta " + b
//  }
//  else{
//     return "C Katta " + c
//  }
// }
// console.log(sum(14, 45, 66));

// function matn(soz, xarf){
//     let arr = soz.split("");
//     let newarr = arr.filter((item, index) => item.toLowerCase() == xarf.toLowerCase()).length
//     console.log(newarr);

//     return newarr
// }
// console.log(matn("adwadasdawd", "A"));

// function weight(age, height){
//   let userWeight = Math.round(height)
//   if(userWeight > 65 && age > 18){
//     console.log("Ruxsat berildi");
//   }
//   else{
//     console.log("Ruxsat yo'q");
//   }
// }
// console.log(weight(24, 85.6));


// let parentDiv = document.querySelector('.hello')
// let searchInput = document.querySelector('#search')
// let allProducts = []
// let isLoading = true

// // 📌 Функция для загрузки данных
// function getAllProducts() {
//   return fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(data => {
//       isLoading = false
//       allProducts = data
    //       renderProducts(allProducts) // ✅ сразу показываем все
    //     })
    // }

    // // 📌 Функция для рендера продуктов
    // function renderProducts(products) {
    //   parentDiv.innerHTML = '' // очистим div перед рендером
    //   if (products.length === 0) {
    //     parentDiv.innerHTML = '<p>Hech narsa topilmadi ❌</p>'
    //     return
    //   }

    //   products.forEach(item => {
    //     let card = document.createElement('div')
    //     card.style.border = "1px solid #ccc"
    //     card.style.margin = "10px"
    //     card.style.padding = "10px"
    //     card.style.width = "200px"

    //     card.innerHTML = `
    //       <img src="${item.image}" width="100" height="100" />
    //       <h3>${item.title}</h3>
    //       <p>$${item.price}</p>
    //     `
    //     parentDiv.appendChild(card)
    //   })
    // }

    // // 📌 Поиск / фильтр
    // searchInput.addEventListener('input', (e) => {
    //   let value = e.target.value.toLowerCase().trim()
    //   if (value === '') {
    //     renderProducts(allProducts) // agar input bo'sh bo'lsa → barcha mahsulot
    //   } else {
    //     let filtered = allProducts.filter(item =>
    //       item.title.toLowerCase().includes(value)
    //     )
    //     renderProducts(filtered) // faqat mos kelganlarini ko'rsatamiz
    //   }
    // })

    // // 🚀 Запускаем загрузку
    // getAllProducts()

    // console.log(isLoading);
    
// function weather(ob){
// return Math.floor(ob)
// }
// console.log(weather(27.8));

// function price(narx){
//   return Math.floor(narx)
// }
// console.log(price(12000.512));

// function students(count){
//   return Math.floor(count)
// }
// console.log(students(99.9));

// function age(yosh){
//   return Math.ceil(yosh)
// }
// console.log(age(27.6));

// function summ(price){
//   return Math.ceil(price)
// }
// console.log(summ(14515.788));
