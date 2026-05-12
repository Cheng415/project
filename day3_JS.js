/*題目一：字串長度計算
// input 輸入
checkStringLength("Hello")
checkStringLength("my name is Tom！")

// output 輸出
5
15
*/

function checkStringLength(str) {
    console.log(str.length);
}

checkStringLength("Hello")
checkStringLength("my name is Tom！")


/*題目二：英文強制小寫
// input 輸入
lowerCase("FOKFF@gmail.com")
lowerCase("gonSakpm@gmail.com")

// output 輸出
"fokff@gmail.com"
"gonsakpm@gmail.com"
*/

function lowerCase(str) {
    console.log(str.toLowerCase());
}

lowerCase("FOKFF@gmail.com")
lowerCase("gonSakpm@gmail.com")

/*題目三：去除掉段落的左右空白
// input 輸入
trimString("    hi, mom!  ")
trimString(" aa@gmail.com  ")

// output 輸出
"hi, mom!"
"aa@gmail.com"
*/

function trimString(str) {
    console.log(str.trim());
}

trimString("    hi, mom!  ")
trimString(" aa@gmail.com  ")


/*題目四：字串依照條件轉陣列
// input 輸入
splitString("black,red,white")
splitString("coffee,tea")

// output 輸出
// ["black","red","white"]
// ["coffee","tea"]
*/

function splitString(str) {
    console.log(str.split(","));
}

splitString("black,red,white")
splitString("coffee,tea")

/*題目五：切割市區字串
// input 輸入
getArea("高雄市前鎮區一心二路33號");
getArea("高雄市新興區新興路66號");

// output 輸出
"前鎮區"
"新興區"
*/
function getArea(str) {
    console.log(str.split("市")[1].split("區")[0] + "區");
}

getArea("高雄市前鎮區一心二路33號");
getArea("高雄市新興區新興路66號");




