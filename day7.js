/*題目一：有沒有打折
某廠商大拍賣，折扣表如下：

未滿 2000 無折扣
2000~2999 9折
3000~3999 8折
高於 4000 7折
// input 輸入
sale(5000)
sale(2500)
sale(3300)
sale(200)
// output 輸出
3500
2250
2640
200
*/

function sale(price) {
    if (price < 2000){
        console.log(price);
    }
    else if (price >= 2000 && price < 3000){
        console.log(price * 0.9);
    }
    else if (price >= 3000 && price < 4000){
        console.log(price * 0.8);
    }
    else {
        console.log(price * 0.7);
    }
}

sale(5000)
sale(2500)
sale(3300)
sale(200)


/*題目二：水果顏色查詢機
輸入一個水果名稱，它就回傳對應的顏色
若不是已知的水果，就回覆「查無此水果」

參考對照表

香蕉: "黃色",
蘋果: "紅色",
葡萄: "紫色",
奇異果: "綠色",
橘子: "橘色",
藍莓: "藍色",

// input 輸入
fruitColor("香蕉")
fruitColor("奇異果")
fruitColor("小當家")

// output 輸出
"黃色"
"綠色"
"查無此水果"

*/

function fruitColor(fruit) {
    const fruitColor = {
        "香蕉": "黃色",
        "蘋果": "紅色",
        "葡萄": "紫色",
        "奇異果": "綠色",
        "橘子": "橘色",
        "藍莓": "藍色"
    };
    if (fruitColor[fruit]) {
        console.log(fruitColor[fruit]);
    }
    else {
        console.log("查無此水果");
    }
}

fruitColor("香蕉")
fruitColor("奇異果")
fruitColor("小當家")

/*題目三：年薪計算機
以下是梅添良軟體公司的計薪方式

每個月固定支薪，不幫員工保勞健保
三節沒禮金，也沒任何獎金
只有月薪、年終
年終計算
未滿一年，不會有年終
待超過一年的員工，年終會有 1 個月
待超過五年的員工，年終會有 1.3 個月

// input 輸入 
// annualSalary(月薪,年資)
annualSalary(10000,0.8)
annualSalary(12000,1.5)
annualSalary(20000,10)
// output 輸出
"120000"
"156000"
"266000"

*/

function annualSalary(salary, years) {
    if (years < 1) {
        console.log(salary * 12);
    }
    else if (years >= 1 && years < 5) {
        console.log(salary * 13);
    }
    else {
        console.log(salary * 16);
    }
}

annualSalary(10000,0.8)
annualSalary(12000,1.5)
annualSalary(20000,10)

/*魔王題，請不要輕易接觸，會花上 8hr 時間
梅添良薪水數字大小寫轉換
老闆開發票時，很不擅長數字小寫轉大寫，請幫助他這個金魚腦
// input 輸入
changeCapital(35000)
changeCapital(9876543210)
changeCapital(-33)
changeCapital("安安")
changeCapital("033")
// output 輸出
"參萬伍仟元整"
"玖拾捌億柒仟陸佰伍拾肆萬參仟貳佰壹拾元整"
"格式錯誤"
"格式錯誤"
"參拾參元整"
*/

function changeCapital(num) {
    const numMap = {
        "0": "零",
        "1": "壹",
        "2": "貳",
        "3": "參",
        "4": "肆",
        "5": "伍",
        "6": "陸",
        "7": "柒",
        "8": "捌",
        "9": "玖"
    };
    const unitMap = {
        "0": "",
        "1": "拾",
        "2": "佰",
        "3": "仟",
        "4": "萬",
        "5": "億",
        "6": "兆"
    };
    if (num < 0 || num > 999999999999999) {
        console.log("格式錯誤");
        return;
    }
    if (num === 0) {
        console.log("零元整");
        return;
    }
    let numStr = num.toString();
    let result = "";
    for (let i = 0; i < numStr.length; i++) {
        result += numMap[numStr[i]];
        if (i < numStr.length - 1) {
            result += unitMap[numStr.length - 1 - i];
        }
    }
    console.log(result + "元整");
}

changeCapital(35000)
changeCapital(9876543210)
changeCapital(-33)
changeCapital("安安")
changeCapital("033")
