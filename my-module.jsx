// function topla(a, b) {
//     return a + b
// } 

//*** Or

// const topla = function topla(a, b) {
//     return a + b;
// }

//*** Or

// const topla = (a, b) => {
//     return a + b;
// }

//*** Or

// export const topla = (a, b) => a + b;


// export{topla}; 


// *** fonksiyonu dışa aktarma
// export default topla;

// const hello = () => {
//     console.log('hello');
// }


const hello = (name) => {
    console.log(`hello ${name}`);
}


export const topla = (a, b) => a + b;

export const cikar = (a, b) => a - b;

export const text = "text";

export const user = "sumer";

const users = [{
        name: "ahmet",
        surname: "tarık",
    },
    {
        name: "ferdi",
        surname: "tayfur",
    },
];

export default hello;