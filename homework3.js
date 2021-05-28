"use strict"
//ЗАДАНИЕ 1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
// включительно, чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// 10 – четное число

/**
 * Функция isEven проверяет число на четность, возвращает: либо "это ноль", либо "четное число", либо "нечетное число"
 * @param number число, которое проверяем
 * @returns {string}
 */
function isEven(number){
    if(number == 0){
        return ("это ноль");
    } else
    if(number % 2 == 0){
        return ("четное число")
    } else {
        return ("нечетное число")
    }
}

for (let i = 0; i <= 10; i++){
    console.log(i + " - " + isEven(i));
}

//ЗАДАНИЕ 2. Выведите в консоль значения, указанные рядом с комментариями

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//ЗАДАНИЕ 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function(product){
    product.price =  product.price*0.85;
    return product.price;
})
console.log(products);

//ЗАДАНИЕ 4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
// 2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
// https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
// дополнительных видео в материалах урока.

    const products3 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

//Решение подзадачи 4.1 - Получить все товары, у которых есть фотографии, можете использовать метод filter

let productsWithPhotos = products3.filter(function (product) {
    return "photos" in product && product.photos.length>0;
})
console.log(productsWithPhotos)

//Решение подзадачи 4.2 - Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
// // https://mzl.la/2Y79hbZ

const productsSorted = products3.sort(function(product1, product2){
    if(product1.price < product2.price){
        return -1;
    }
    if(product1.price > product2.price){
        return 1;
    }
    return 0;
})

console.log(productsSorted);

//ЗАДАНИЕ 5. Вывести с помощью цикла for числа от 0 до 9,
// Помните, что в первом, втором и третьем разделе цикла можно не только писать условия, или увеличивать счетчик
// например на 1, допустимы любые выражения, например вызовы функций.

for (let i = 0; i<=9; console.log(i++)){
}

//ЗАДАНИЕ 6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let str = ""
for (let i = 0; i<20; i++){
    str = str + 'x';
    console.log(str);
}