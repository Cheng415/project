/*題目一： 函式 return 物件
// input 輸入
a().hi
a().sayYo
a().cry
// output 輸出
"hi"
"yo~"
"嗚嗚"
*/

function a() {
  return {
    hi: "hi",
    sayYo: "yo~",
    cry: "嗚嗚"
  };
}


/*題目二：陣列包函式
// input 輸入
b[0](3)
b[0](4)
// output 輸出
"你輸入的是3"
"你輸入的是4"
*/

function b() {
  return [
    function(x) {
      console.log("你輸入的是" + x);
    }
  ];
}


/*題目三：物件包函式
// input 輸入
obj.a()
obj.b()
// output 輸出
"你執行的是 a 函式"
"你執行的是 b 函式"
*/

function obj() {
  return {
    a: function() {
      console.log("你執行的是 a 函式");
    },
    b: function() {
      console.log("你執行的是 b 函式");
    }
  };
}

/*題目四：進階題，不適合新手：arguments return function
// input 輸入
sum(4,5)
sum(4)(5)
sum(7,9)
sum(7)(9)
// output 輸出
9
9
16
16
*/

function sum(a, b) {
  if (arguments.length === 2) {
    return a + b;
  } else {
    return function(b) {
      return a + b;
    };
  }
}


