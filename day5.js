/*題目一：成年計算機 ( 備註：18 歲為成年年紀 )
// input 輸入
checkAdult(20)
checkAdult(12)
checkAdult(33)
checkAdult(18)
// output 輸出
"成年"
"未成年"
"成年"
"成年"
*/

function checkAdult (age){
    if (age>=18){
        console.log("成年");
    } else {
        console.log("未成年");       
    }
}
checkAdult(20)
checkAdult(12)
checkAdult(33)
checkAdult(18)

/*題目二：法定性行為年紀計算機( 16歲 )
// input 輸入
canSex(16,"male")
canSex(14,"female")
canSex(20,"female")
// output 輸出
"可以色色"
"你還不行哦~"
"可以色色"
*/

function canSex (age, sex){
    if (age >= 16) {
        console.log("可以色色");
    } else {
        console.log("你還不行哦~");
    }
}

canSex(16,"male")
canSex(14,"female")
canSex(20,"female")

/*題目三：滿 300 即可符合優惠條件，能使用 50 元折價券
// input 輸入
buy(450)
buy(299)
buy(0)
buy(-30)
buy(300)
buy(1000)

// output 輸出
"符合優惠券資格，費用是 400"
"不優惠券資格，費用是 299"
"...你來亂的嗎？"
"再鬧我就生氣了哦~"
"剛好符合資格，費用是 250"
"符合優惠券資格，費用是 950"
*/

function buy (price){
    if (price < 0 ){
        console.log("再鬧我就生氣了哦~");
    } else if (price == 0){
        console.log("...你來亂的嗎？");
    } else if (price < 300){
        console.log("不優惠券資格，費用是" + price);
    } else {
        console.log("符合優惠券資格，費用是" + (price - 50));
    }
}   

buy(450)
buy(299)
buy(0)
buy(-30)
buy(300)
buy(1000)


/*是否為質數
// input 輸入
isPrime(29)
isPrime(17)
isPrime(-3)
isPrime(288)
isPrime(97)
isPrime(6)
// output 輸出
"是質數"
"是質數"
"無法判別"
"我只能算 100 以內的質數計算，原諒我QQ"
"是質數"
"不是質數"
*/

function isPrime(number){
    if (number <= 1){
        console.log("無法判別");
        return;
    }
    if (number > 100){
        console.log("我只能算 100 以內的質數計算，原諒我QQ");
        return;
    }
    for (let i = 2; i < number; i++){
        if (number % i == 0){   
            console.log("不是質數");
            return;
        }
    }
    console.log("是質數");
}

isPrime(29)
isPrime(17)
isPrime(-3)
isPrime(288)
isPrime(97)
isPrime(6)