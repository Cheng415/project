/*題目一：日幣計算機 (1:0.2)
// input 輸入
TWDtoJPY(-1)
TWDtoJPY("hi~")
TWDtoJPY(2000)
TWDtoJPY(320)
// output 輸出
"...沒錢別來亂"
"當我看不懂字串？？"
"你換到的日幣有：10000"
"你換到的日幣有：1600"
*/

function TWDtoJPY(twd){
    if (twd < 0) {
        console.log("...沒錢別來亂");
    } else if (typeof twd !== 'number') {
        console.log("當我看不懂字串？？");
    } else {
        console.log("你換到的日幣有：" + twd * 5);
    }
}
TWDtoJPY(-1)
TWDtoJPY("hi~")
TWDtoJPY(2000)
TWDtoJPY(320)

/*題目二：匯率計算機
// input 輸入
TWDtoAnother(100,"USD")
TWDtoAnother(100,"Sword Art Online")
TWDtoAnother(100,"HKD")
TWDtoAnother(100,"GBP")

// output 輸出
"3100"
"..."
"400"
"4200"
*/

function TWDtoAnother(twd, currency){
    const rate = {
        USD: 31,
        HKD: 4,
        GBP: 42
    };
    if (!rate[currency]) {
        console.log("...");
    } else {
        console.log(twd * rate[currency]);
    }
}

TWDtoAnother(100,"USD")
TWDtoAnother(100,"Sword Art Online")
TWDtoAnother(100,"HKD")
TWDtoAnother(100,"GBP")

/*題目三：BMI 計算機
// input 輸入 
// BMI(身高,體重)

// output 輸出
"正常"
"重度肥胖"
"中度肥胖"
"輕度肥胖"
"過重"
"過輕"
*/

function BMI(h,w){
    if (w/(h/100*h/100) < 18.5) {
        console.log("過輕");
    } else if (w/(h/100*h/100) < 24) {
        console.log("正常");
    } else if (w/(h/100*h/100) < 27) {
        console.log("過重");
    } else if (w/(h/100*h/100) < 30) {
        console.log("輕度肥胖");
    } else if (w/(h/100*h/100) < 35) {
        console.log("中度肥胖");
    } else {
        console.log("重度肥胖");
    }
}

BMI(170,60)
BMI(170,70)
BMI(170,80)
BMI(170,90)
BMI(170,100)
BMI(170,110)

/*字串切割+if
如果第一個數字是質數，請將第二、三個數字加總
如果第一個數字是偶數，請將第二、三個數字相減
如果第一個數字不是質數也不是偶數，請將第二、三個數字相乘
// input 輸入
sum("13,20,10")
sum("10,2,3")
sum("9,5,7")
// output 輸出
30
-1
35
*/


function isPrime(number){
    if (number <= 1){
        return false;
    }
    for (let i = 2; i < number; i++){
        if (number % i == 0){   
            return false;
        }
    }
    return true;
}
function sum(str){
    const [a, b, c] = str.split(",");
    if (a % 2 === 0) {
        console.log(Number(b) - Number(c));
    } 
    if (isPrime(a)) {
        console.log(Number(b) + Number(c));
    }
    if (!isPrime(a) && a % 2 !== 0) {
        console.log(Number(b) * Number(c));
    }
}

sum("13,20,10")
sum("10,2,3")
sum("9,5,7")
