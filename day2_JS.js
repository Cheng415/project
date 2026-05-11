/*// 題目一：平方計算

// input 輸入
square(3)
square(9)
square(20)
// output 輸出
9
81
400
*/
function square(num) {
    console.log(num * num);
}

square(3)
square(9)
square(20)


/*// 題目二：數學邏輯題
/*
// input 輸入
calculate(5,7,3)
calculate(9,8,7)
calculate(5,2,0)
calculate(9,9,33)

// output 輸出
9
10
7
-15
*/

function calculate(a, b, c) {
    console.log(a + b - c);
}

calculate(5,7,3)
calculate(9,8,7)
calculate(5,2,0)
calculate(9,9,33)


/*// 題目三：四捨五入題
/*
// input 輸入
rounding(3.9988)
rounding(3984.222)
rounding(77.777)

// output 輸出
4.00
3984.22
77.78
*/

function rounnding(num) {
    console.log(num.toFixed(2));
}

rounnding(3.9988)
rounnding(3984.222)
rounnding(77.777)


/*// 題目四：字串處理題
/*
// input 輸入
parseNumber("2.33")
parseNumber("Hello!!")
parseNumber("30000")

// output 輸出
2.33
NaN
30000
*/

function parseNumber(str) {
    console.log(Number(str));
}

parseNumber("2.33")
parseNumber("Hello!!")
parseNumber("30000")

/*題目五：被二整除

// input 輸入
divisible(2)
divisible(3)
divisible(77)
divisible(88)

// output 輸出
0
1
1
0
*/

function divisible(num) {
    console.log(num % 2);
}

divisible(2)
divisible(3)
divisible(77)
divisible(88)
