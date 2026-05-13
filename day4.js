/*題目一：比大小
// input 輸入
higher(3,2)
higher(100,299)
higher(8,2.5)
// output 輸出
true
false
true
*/
function higrher(a,b) {
    if (a>b){
        console.log(true);
    } else {
        console.log(false);
    }
}

higrher(3,2)
higrher(100,299)
higrher(8,2.5)


/*題目二：布林反轉
// input 輸入
booleanToggle(true)
booleanToggle(false)
// output 輸出
false
true
*/


function booleanToggle(value) {
   if (value !== true) {
    console.log(true);
   } else {
    console.log(false);
   }
}

booleanToggle(true)
booleanToggle(false)

/*題目三：型別判斷
// input 輸入
checkType(3.33)
checkType("Hello")
checkType(true)
checkType([1,2,3])
// output 輸出
"number"
"string"
"boolean"
"object"
*/

function checkType(value) {
    console.log(typeof value);
}

checkType(3.33)
checkType("Hello")
checkType(true)
checkType([1,2,3])

/*題目四：打八折後，是否總價大於 100 元
// input 輸入
onSale(200)
onSale(150)
onSale(125)
onSale(100)
// output 輸出
true
true
false
false
*/ 

function onSale(price) {
    if (price * 0.8 > 100){
        console.log(true);
    } else {
        console.log(false);
    }
}
onSale(200)
onSale(150)
onSale(125)
onSale(100)

/*題目五：是否大於 200，且符合會員條件
// input 輸入
checkVIP(300,true)
checkVIP(0,true)
checkVIP(30000,false)
checkVIP(888,true)
// output 輸出
true
false
false
true
*/

function checkVIP(price, isMember) {
    if(price > 200 && isMember) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checkVIP(300,true)
checkVIP(0,true)
checkVIP(30000,false)
checkVIP(888,true)