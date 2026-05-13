/*第一題
// input 輸入
hello()
hello()

// output 輸出
"Hello world！"
"Hello world！"
*/

function hello() {
    console.log("Hello world！");
}

hello();
hello();


/*第二題
// input 輸入
sayHi("Tom")
sayHi("John")

// output 輸出
"Tom，Hello world！"
"John，Hello world！"
*/
function sayHi(name) {
    console.log(`${name}，Hello world！`);
}
sayHi("Tom");
sayHi("John");

/*第三題
/// input 輸入
add(2)
add(4)
add(8)

// output 輸出
2
6
14
*/
let sum = 0;

function add(num) {
    sum += num;
    console.log(sum);
}
add(2)
add(4)
add(8)

/*第四題
// input 輸入
addTwo(5,10)
addTwo(4,20)
addTwo(9,100)

// output 輸出
15
24
109
*/
function addTwo(a, b) {
    console.log(a + b);
}
addTwo(5, 10)
addTwo(4, 20)
addTwo(9, 100)

/*第五題        
// input 輸入
addNumberAndString(5,10,30)
addNumberAndString(4,20,22)
addNumberAndString(9,100,44)

// output 輸出
"第一加第二個參數加總為 15，第三個參數為 30"
"第一加第二個參數加總為 24，第三個參數為 22"
"第一加第二個參數加總為 109，第三個參數為 44"
*/
function addNumberAndString(a, b, c) {
    console.log(`第一加第二個參數加總為 ${a + b}，第三個參數為 ${c}`);
}
addNumberAndString(5, 10, 30)
addNumberAndString(4, 20, 22)
addNumberAndString(9, 100, 44)
