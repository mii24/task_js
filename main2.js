

//ボタンがクリックされるとget_calc関数が呼び出され、ボタンの値（）が処理される
function get_calc(btn) {
    //＝を押したとき
    if(btn.value == "=") {
        //「=」が押された際、evalメソッドで式を評価し演算を行うということを意味する。
      document.calculator.display.value = eval(document.calculator.display.value);
    } 
    //Cを押したとき
    else if (btn.value == "C") {
        //空文字列を代入することで、液晶に表示されている文字列を消去することができる
      document.calculator.display.value = "";
    } 
    //×を押したとき
    else {
      if (btn.value == "*") {
        btn.value = "*";
      } 
      //÷を押したとき
      else if (btn.value == "/") {
        btn.value = "/";
      }
      document.calculator.display.value += btn.value;
      document.calculator.multi_btn.value = "*";
      document.calculator.div_btn.value = "/";
    }
  }
  
  