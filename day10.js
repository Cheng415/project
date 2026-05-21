/*題目一：依照文字描述物件
請宣告一個 family 的變數，賦予物件型別，並嘗試在裡頭加上以下資訊

母親叫做Mary
父親叫做 Bob
有三個孩子，分別叫做 John、Tom、Kate
養了五隻貓、七隻狗、八頭牛、九隻蜘蛛
房貸是否繳清：否
*/
const family = {
    mother: "Mary",
    father: "Bob",
    children: ["John", "Tom", "Kate"],
    pets: {
        cats: 5,
        dogs: 7,
        cows: 8,
        spiders: 9
    },
    mortgagePaid: false
};
console.log(family);


/*題目二：看圖設計物件
請宣告一個 room 的變數，賦予物件型別，盡量描述下方圖片內容，例：有多少人開會，男女比例、文具數量等等。
*/
const room = {
    people: 5,
    gender: {
        male: 2,
        female: 3
    },
    stationery: {
        notebook: 5,
    }       
};
console.log(room);


/*題目三：擴充物件內容
請透過 addKeyValue 函式，來增減 obj 物件內容。
const obj = {
    name: "",       
    people:3
};
// input 輸入
addKeyValue("name","Mike")
addKeyValue("people",2)
addKeyValue("people",4)

// output 輸出
//1
{
    name:"Mike",
    people:3
}
//2
{
    name:"Mike",
    people:5
}
//3
{
    name:"Mike",
    people:9
}
*/

function addKeyValue(key, value) {
    if (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] += value;
        }
    } else {
        obj[key] = value;
    }
    console.log(obj);
}

const obj = {
    name: "",       
    people:3
};
// input 輸入
addKeyValue("name","Mike")
addKeyValue("people",2)
addKeyValue("people",4)

