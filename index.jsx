// npm init

// node index.js

// node index

// npm start

// *** 1-topla fonksiyonunu çalıştırma 

// import topla from "./my-module.js" 

// *** 2-topla fonksiyonunu çalıştırma 

// import { topla, hello } from "./my-module.js"


// console.log(topla(20, 2));
// hello();

// console.log("Hello Node");

// var slugify = require('slugify'); // bunu yerrine aşağıdakini yazarız

// import slugify from "slugify";   ///önemli

// const title = slugify('some string what can ı do', '*');

import merhaba, { topla, cikar, text, user, users } from "./my-module.js";

console.log(topla(5, 4));
console.log(cikar(9, 4));
console.log(text);
console.log(user);
console.log(users);
merhaba("Mehmet");