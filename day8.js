/*題目一：字串輸出
// input 輸入
callString("apple")
callString("banana")
callString("qqq")

// output 輸出
"a-p-p-l-e"
"b-a-n-a-n-a"
"q-q-q"
*/

function callString(str) {
    console.log(str.split("").join("-"));
}
callString("apple")
callString("banana")
callString("qqq")


/*題目二：字串數量
// input 輸入
checkFiveWord("hello")
checkFiveWord("hi~")
checkFiveWord("Jackson")

// output 輸出
"he"
"hi~"
"Ja"
*/

function checkFiveWord(str) {
    console.log(str.length >= 5 ? str.substring(0, 2) : str);
}
checkFiveWord("hello")
checkFiveWord("hi~")
checkFiveWord("Jackson")


/*題目三：函式強制正整數相乘
// input 輸入 
multiply(2,3)
multiply(1,3,5)
multiply(7,7,7,7,7)
multiply(5,3,-2)
multiply(4)
// output 輸出
6
15
16807
30
4

*/

function multiply(...nums) {
    if (!nums.length) {
        console.log(0);
    }

    console.log(nums.reduce((acc, val) => Math.abs(val) * acc, 1));
    
}
multiply(2,3)
multiply(1,3,5)
multiply(7,7,7,7,7)
multiply(5,3,-2)
multiply(4)
