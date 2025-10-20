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

// function weather(ob){
//   return Math.ceil(ob)
// }
// console.log(weather(33.4));

// function dollar(usd){
//   return Math.ceil(usd)
// }
// console.log(dollar(100.2));

// function rooms(count){
//   return Math.ceil(count / 25)
// }
// console.log(rooms(101));

// function car(seat){
//   return Math.ceil(seat / 4)
// }
// console.log(car(19));

// function fabric(choco){
//   return Math.ceil(choco / 18)
// }
// console.log(fabric(73));

// 2) function univer(stud){
//   return Math.ceil(stud / 28)
// }
// console.log(univer(255));

// 3) function cafe(seat){
//   return Math.ceil(seat / 6)
// }
// console.log(cafe(47));

// function shop(base){
//   return Math.ceil(base / 24)
// }
// console.log(shop(230));

// 5) function taxi(seat){
//   return Math.ceil(seat / 3)
// }
// console.log(taxi(29));

// function shop(non1, non2, non3){
//   return Math.min(non1, non2, non3)
// }
// console.log(shop(4500, 4600,8400));

// function shop(phone1, phone2, phone3){
//   return Math.min(phone1, phone2, phone3)
// }
// console.log(shop(550, 700, 620));
// function shop(student1, student2, student3){
//   return Math.min(student1, student2, student3)
// }
// console.log(shop(19, 21, 18));

// function shop(tv1, tv2, tv3){
//   return Math.min(tv1, tv2, tv3)
// }
// console.log(shop(1955, 2100, 1815));

// function shop(tf1, tf2, tf3){
//   return Math.min(tf1, tf2, tf3)
// }
// console.log(shop(200, 400, 201));

// function score(bal1, bal2, bal3){
//   return Math.max(bal1, bal2, bal3)
// }
// console.log(score(44, 66, 98));

// function phone(tell1, tell2, tell3){
//   return Math.max(tell1, tell2, tell3)
// }
// console.log(phone(700, 1400, 99999));

// function phone(fot, fot2, fot3){
//   return Math.max(fot, fot2, fot3)
// }
// console.log(phone(54, 45, 14));

// function cars(speed1, speed2, speed3){
//   return Math.max(speed1, speed2, speed3)
// }
// console.log(cars(180, 220, 340));


// function shop(student1, student2, student3){
// return Math.max(student1, student2, student3)
// }
// console.log(shop(1400,250,544));

// function student(ball){
//   return Math.random().Math.ceil()
// }
// console.log(student());

// function son(){
//   return Math.ceil(Math.random() * 12 + " " + "Dushanba")
// }
// console.log(son());

// function haftaKuni(){
//   let son = Math.ceil(Math.random() * 7); // 1 dan 7 gacha son chiqadi
//   return son;
// }
// console.log(haftaKuni());

// function haftaKuni(){
//   let kunlar = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
//   let son = Math.ceil(Math.random() * 7); 
//   return kunlar[son - 1]; // indeks 0 dan boshlanadi
// }
// console.log(haftaKuni());

// function user(user1){
//   let oy = 12
//   return user1 * Math.pow(1.1, oy)
// }
// console.log(user(4800));

// function nom(ism){
//   ism.pop("Jaxon");
//   return ism
// }
// console.log(nom(["Axror", "Bosit", "Jaxon"]));


// function nom(ism){
//   ism.pop()
//   return ism
// }
// console.log(nom(["Baxor", "Qosim", "Shaxzod","Aziz", "Aslan"]));

// 1) function ism(nom){
//   nom.pop()
//   return nom
// }
// console.log(ism(["Milk", "Bread", "Eggs"]));

// 2) function car(cars){
//   cars.pop()
//   return cars
// }
// console.log(car(["Cobalt", "Nexia", "Malibu"]));

// 3)function item(item1){
//   item1.pop()
//   return item1
// }
// console.log(item(["Samsung", "Apple", "Xiaomi", "Realme"]));

// 4) function phon(tel){
//   tel.pop()
//   return phon
// }
// console.log(phon(["Rock", "Pop", "Jazz", "Rap"]));

// 5) function gor(city){
//   city.pop()
//   return city
// }
// console.log(gor(["Tashkent", "Andijan", "Namangan", "Bukhara"]));

// 1) function fruit(meva){
//   meva.shift()
//   return meva
// }
// console.log(meva(["Anor", "Banana", "Olma"]));

// 2) function mash(car){
//   car.shift()
//   return car
// }
// console.log(mash(["bmw", "tesla", "audi"]));

// 3) function ph(tel){
//   tel.shift()
//   return tel
// }
// console.log(ph(["redmi", "samsung", "iphone"]));

// 4) function gor(city){
//   city.shift()
//   return city
// }
// console.log(gor(["andijan", "namangan", "quqon"]));

// 5) function music(song){
//   song.shift()
//   return song
// }
// console.log(music(["rock", "pop", "jazz"]));

// 1) function fruit(meva){
//   meva.unshift("Olma")
//   return meva
// }
// console.log(fruit(["Banana", "Ananas"]));

// 2) function mash(car){
//   car.unshift("Tesla")
//   return car
// }
// console.log(mash(["BMW", "Audi"]));

// 3) function lang(yaz){
//   yaz.unshift("JavaScript")
//   return yaz
// }
// console.log(lang(["Python", "C#"]));

// 4) function sport(type){
//   type.unshift("Football")
//   return type
// }
// console.log(sport(["Tennis", "Basketball"]));

// 5) function gor(city){
//   city.unshift("Tashkent")
//   return city
// }
// console.log(gor(["Andijan", "Namangan"]));

// function base(item1, item2){
//   return item1.concat(item2);
// }
// console.log(base(["Bexi", "Olma"], ["Cola", "Pepsi"]));

// function base(item, item2){
//   return item.concat(item2)
// }
// console.log(base(["Phone", "Usb"], ["water"]));

// function number(son, son1){
//   return son.concat(son1)
// }
// console.log(number([77, 44, 55,], [66, 88, 99]));

// function fruit(meva1, meva2){
//   return meva1.concat(meva2)
// }
// console.log(fruit(["Bexi", "Olma"], ["Nok", "Anor"]));

// function auto(car1, car2){
//   return car1.concat(car2)
// }
// console.log(auto(["bmw", "mers"], ["audi", "tesla"]));

// function fruit(meva){
//     return meva.includes("Olma")
// }
// console.log(fruit(["Olma", "Banan", "Apelsin"]));

// function meva(fruit){
//     return fruit.includes("Banan")
// }
// console.log(meva(["Banan", "Anor", "Apelsin"]));

// function car(cars){
//     return cars.includes("Tesla")
// }
// console.log(car(["Tesla", "Audi", "BMW"]));

// function tel(pon){
//     return pon.includes("iPhone")
// }
// console.log(tel(["iPhone", "Galaxy", "Xiomi"]));

// function city(shar){
//     return shar.includes("Tashkent")
// }
// console.log(city(["Tashkent", "Buxoro", "Samarqand"]));

// function song(type){
//     return type.includes("Jazz")
// }
// console.log(song(["Jazz", "Rock", "Pop"]));

// function meva(fruit){
//     return fruit.indexOf("Banan")
// }
// console.log(meva(["Anor", "Banan", "Olma"]));

// function mash(car){
//     return car.indexOf("Malibu")
// }
// console.log(mash(["Malibu", "Tesla", "Aud"]));

// function tel(pon){
//     return pon.indexOf("iPhone")
// }
// console.log(tel(["iPhone", "Xioami", "redmi"]));

// function shar(city){
//     return city.indexOf("Bukhara")
// }
// console.log(shar(["Bukhara", "tashkent"]));

// function mus(song){
//     return song.indexOf("Rock")
// }
// console.log(mus(["Rock", "Jazz"]));

// function meva(fruit){
//     return fruit.find(olma => olma === "Banana")
// }
//  console.log(meva(["Apple", "Orange", "Banana"]));

// function son(num){
//     return num.find(number => number > 40)
// }
// console.log(son([15, 25, 35, 45, 55]));

// function car(mash){
//     return mash.find(mashina => mashina === "Tesla")
// }
// console.log(car(["BMW", "Audi", "Tesla", "Chevrolet"]));

// function song(type){
//     return type.find(mus => mus === "jazz")
// }
// console.log(song(["rock", "pop", "jazz", "rap"]));

// function price(big){
//     return big.find(usd => usd > 1000)
// }
// console.log(price([1200, 800, 1500, 600]));

// function son(num){
//     return num.filter(sonlar => sonlar > 40)
// }
// console.log(son([45, 40, 56, 78, 98]));

// function gor(shar){
//     return shar.filter(shar => shar.length > 7)
// }
// console.log(gor(["Tashkent", "Namangan", "Andijon", "Buxoro"]));

// function car(mash){
//     return mash.filter(nom => nom === "Tesla")
// }
// console.log(car(["BMW", "Audi", "Tesla", "Chevrolet"]));

// function price(sum){
//     return sum.filter(sum => sum < 1000)
// }
// console.log(price([200, 1000, 400, 700, 600]));

// function stud(ball){
//     return ball.filter(ball => ball > 90)
// }
// console.log(stud([100, 80, 101, 75, 95, 99]));

// function son(num){
//     return num.map(num => num * 3)
// }
// console.log(son([5, 10, 15, 20]));

// function ism(nom){
//     return nom.map(nomlar => nomlar.charAt(0).toUpperCase() + nomlar.slice(1));
// }
// console.log(ism(["html", "css", "js"]));

// function item(no){
//     return no.map(maxs => maxs.indexOf())
// }
// console.log(item([2, 4, 6, 8]));

// function son(num){
//     return num.map(num => num * 2)
// }
// console.log(son([2, 4, 6]));

// function nom(item) {
//     return `Men yahshi ko'raman ${item.map(olma => olma).join(", ")}`;
// }
// console.log(nom(["olma", "banan", "anor"]));

// function raq(so){
//     return so.map(son => son + 5)
// }
// console.log(raq([10, 20, 30, 40]));

// function kot(mush){
//     return mush.map(kot => kot.toUpperCase())
// }
// console.log(kot(["bekzod", "faris"]));

// function bol(sonni){
//     return sonni.map(son => son / 2)
// }
// console.log(bol([1000, 2000, 3000]));

// function ismlar(ism){
//     ism.forEach(ism => console.log(ism))
// }
// console.log(ismlar(["Baxor", "Nozi", "Axmad"]));

// function son(num){
//  num.forEach(num => console.log(num + num))
// }
// console.log(son([5, 5, 5]));

// function meva(fruit){
// fruit.forEach(fruit => console.log(`Men yahshi ko'raman ${fruit}`)
// )
// }
// console.log(meva(["olam", "banan", "anor"]));

// function raq(num){
//  num.forEach(num => console.log(num + 10))
// }
// console.log(raq([5, 5, 5]));

// function nom(ism){
//  ism.forEach(ism => console.log(ism.charAt(0).toUpperCase() + ism.slice(1))) 
// }
// console.log(nom(["aslan", "bekzod"]));

// function meva(fruit){
// fruit.forEach(fruit => console.log(`men sevaman ${fruit}`)
// )
// }
// console.log(meva(["anor", "banan"]));

// function son(rap){
// rap.forEach(rap => console.log(rap * 2))
// }
// console.log(son([44, 88, 77]));

// function gor(shar){
// shar.forEach(shar => console.log(shar.length)
// )
// }
// console.log(gor(["tash", "nam", "and", "buxo"]));

// function meva(fruit){
// return fruit.slice(1, 3)
// }
// console.log(meva(["BMW", "Audi", "Tesla", "BYD"]));

// function meva(fruit){
//     return fruit.slice(0, 2)
// }
// console.log(meva(["Olma", "Anor", "Uzum", "Nok"]));

// function son(raq){
//     return raq.slice(3)
// }
// console.log(son([10, 20, 30, 40, 50]));

// function gor(shar){
//     return shar.slice(1, 3)
// }
// console.log(gor(["Namangan", "Andijon", "Toshkent", "Farg‘ona"]));

// function mus(son){
//     return son.slice(1, 3)
// }
// console.log(mus(["Rock", "Pop", "Jazz", "Rap"]));

// function meva(fruit){
//     fruit.splice(1, 2, "Nok")
//     return fruit
// }
// console.log(meva(["Olma", "Banana", "Anor", "Uzum"]));

// function car(aut){
// aut.splice(1, 1, "Mercedes")
// return aut
// }
// console.log(car(["BMW", "Audi", "Tesla", "BYD"]));

// function col(ran){
//     ran.splice(0, 2, "Black")
//     return ran
// }
// console.log(col(["Red", "Green", "Blue", "Yellow"]));

// function son(raq){
//     raq.splice(2, 1, "OnePlus")
//     return raq
// }
// console.log(son(["iPhone", "Samsung", "Xiaomi"]));

// function gor(shar){
// shar.splice(2, 1)
//     return shar
// }
// console.log(gor(["Namangan", "Andijon", "Toshkent", "Farg‘ona"]));

// function shop(narx){
//     return narx.reduce((price, sum) => price + sum, 0)
// }
// console.log(shop([2500, 1800, 3200, 4000]));

// function team(goal){
//     return goal.reduce((son, jami) => son + jami, 0)
// }
// console.log(team([2, 1, 3, 0, 4]));

// function work(salary){
//     return salary.reduce((price, sum) => price + sum, 0)
// }
// console.log(work([4500, 5200, 4800, 6000]));

// function som(pul){
//     return pul.reduce((item, index) => item + index, 0)
// }
// console.log(som([78, 85, 92, 66, 74]));

// function base(pol){
//     return pol.reduce((price, sum) => price + sum, 0)
// }
// console.log(base([3, 5, 2, 6, 4]));

// function stud(score){
//     return score.every(score => score > 1000)
// }
// console.log(stud([1002, 1004, 1005, 1100]));

// function shop(sum){
//     return sum.every(item => item > 80)
// }
// console.log(shop([84, 85, 89, 100]));

// function bat(foiz){
//     return foiz.every(item => item > 20)
// }
// console.log(bat([21, 45, 68, 100]));

// function gor(shar){
//     return shar.every(item => item.length > 5)
// }
// console.log(gor(["tashaaa", "namaaaa", "baxaaaa"]));

// function car(speed){
//     return speed.every(item => item < 100)
// }
// console.log(car([95, 45, 80, 99]));

// function shop(price){
//     return price.some(item => item > 5000)
// }
// console.log(shop([5001, 4500, 3200, 12000]));

// function stud(ball){
//     return ball.some(item => item > 100)
// }
// console.log(stud([45, 101, 55, 68]));

// function tel(bat){
//     return bat.some(item => item > 50)
// }
// console.log(tel([51, 62, 45, 12]));

// function gor(shar){
//     return shar.some(item => item.length > 8)
// }
// console.log(gor(["aaaaaaaaad", "awdad", "adwawddawd"]));

// function car(speed){
//     return speed.some(item => item > 120)
// }
// console.log(car([44, 122, 101, 55]));

// function stud(score){
//     return score.reduce(item => item > 4000)
// }
// console.log(stud([4000, 5400, 6200]));

// function aslan(ism) {
//     return ism.every(item => item.length = 4)
// }
// console.log(aslan(["baxrom", "aziz", "botir"]));

// function ism(nom){
//     return 
// }
// console.log(ism("Baxrom"));

// function katt(bi){
//     return bi.toUpperCase()
// }
// console.log(katt("aslan"));


// function ism(nom){
//     return nom.toLowerCase();
// }
// console.log(ism("ASLAN"));

// function pswd(ps){
//     return ps.includes("123")
// }
// console.log(pswd("Aslan123"));

// function uz(oz){
//     return oz.replace("Salom", "Assalomu aleykum")
// }
// console.log(uz("Salom"));

// function im(nm){
//     return nm.slice(0, 3)
// }
// console.log(im("Karimov"));

// function arr(mev){
//     return mev.split()
// }
// console.log(arr("olma, banan, anor"));

// function bosh(joy){
//     return joy.trim()
// }
// console.log(bosh("         Bekzod      "));

// function sum(usd){
//     return Math.round(usd)
// }
// console.log(sum(45.6));

// function pul(narx){
//     return Math.floor(narx)
// }
// console.log(pul(45.9));

// function tep(aga){
//     return Math.ceil(aga)
// }
// console.log(tep(45.1));

// function ran(num){
//     return Math.random(num)
// }
// console.log(ran());

// function bigg(numm){
//     return Math.max(...numm)
// }
// console.log(bigg([4500, 4600, 4700]));

// function ismlar(nomlar){
//     return nomlar.forEach(nomlar => console.log(`Hurmatli ${nomlar} sizning buyurtmangiz tayyor!`))
// }
// console.log(ismlar(["Aziz", "Bekzod", "Jasur"]));

// function eng(kattasi){
//     return kattasi.map(item => item * 1.2)
// }
// console.log(eng([10, 200, 300]));

// function raq(sonla){
//     return sonla.filter(item => item > 500)
// }
// console.log(raq([120, 560, 700, 450, 980]));

// function ismm(nomm){
//     return nomm.find(object => object.id === 2)
// }
// console.log(ismm([{id:1, name: "Ali"}, {id: 2, name: "Bekzod"}]));

// function ind(ex){
//     return ex.findIndex(item => item === "Malibu")
// }
// console.log(ind(["Nexia", "Cobalt", "Malibu"]));

// function tel(pox){
//     return pox.includes("iPhone")
// }
// console.log(tel(["Samsung", "iPhone", "Redmi"]));

// function sonlarr(numlar){
//     return numlar.some(item => item > 80)
// }
// console.log(sonlarr([45, 55, 78, 90]));

// function maosh(oylik){
//     return oylik.every(item => item > 3000000)
// }
// console.log(maosh([3500000, 4500000, 5500000]));

// function pull(balanc){
//     return balanc.reduce((sum, item) => sum + item, 0)
// }
// console.log(pull([1200, 3400, 5600, 800]));

// function data(){

// }
// console.log(data("salom"))

// function xarf(nom){
//     return nom.indexOf("s")
// }
// console.log(xarf("aslan"));

// let menBerganQiymat = prompt("qiymat kiriting")

// function checkCharacter(xarf, soz){
//  if(xarf.length == 1){
//    if(soz.includes(xarf)){
//      return soz.indexOf(xarf)
//    }
//    else{
//     return "Siz bergan xarf so'z ichida mavjud emas"
//    }
//  }
//  else{
//     return "Siz bergan qiymat 1 xarflik emas"
//  }
// }
// console.log(checkCharacter(menBerganQiymat, "salom"));

// let button = document.querySelector('.btn');
// let count = 0
// button.addEventListener('click', function () {
//     count++
//    console.log(`Tugma bosildi! ${count} bosildi`);
   
// })

// let button = document.querySelector('.btn');
// const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
// button.addEventListener('mouseover', function () {
//     button.style.color = randomColor
// })

// button.addEventListener("mouseout", function () {
//     button.style.backgroundcolor = "grey"
// })

// let button = document.querySelector('.btn');

// // Tugma ustiga kursor borganda
// button.addEventListener('mouseover', function () {
//   const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
//   button.style.backgroundColor = randomColor;
// });

// // Tugma ustidan kursor chiqqanda
// button.addEventListener('mouseout', function () {
//   button.style.backgroundColor = "randomColor"; // eski rang
// });

// const myPromise = new Promise((resolve, reject) => {
//     let qarz = true
//     if(qarz){
//         resolve("Qarz qabul qilindi")
//     }
//     else{
//         reject("Qarz olinmadi")
//     }
// })

// myPromise.then((data) => {
//     console.log(data);
    
// })

// let but = document.querySelector('.add');
// let lis = document.querySelector('.list')
// but.addEventListener('click', function () {
//     let div = document.createElement('ul');
//     div.appendChild(li)
// })

// lis.appendChild(div)
// let but = document.querySelector('.add');
// let lis = document.querySelector('.list');
// let count = 0;

// but.addEventListener('click', function () {
//     if(but){
//         count++;
//     let li = document.createElement('li' + "button")
//     li.textContent = `Element ${count}`;
//     lis.appendChild(li);
//     }
//     else{
        
//     }
// });

// let but = document.querySelector('.btn')
// let tex = document.querySelector('.text')
// let holat = true

// but.addEventListener('click', function() {
//     if(holat === true){
//         holat = !holat
//         tex.textContent = "Salom, Bekzod"
//     }
//     else if(holat === false){
//         holat = !holat
//         tex.textContent = "Yaxshi kayfiyat!"
//     }
//     else{
//         return tex
//     }
// })