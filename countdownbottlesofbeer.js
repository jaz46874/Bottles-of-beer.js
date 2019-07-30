
var num = 99;


while (num > 0) {
bottle = " bottles";
if (num <=1) bottle = " bottle";

    var message1 = (num + bottle  + " of juice on the wall! " +
                  num + bottle + " of juice!");

       num -= 1
       if (num ===1) bottle = " bottle";
       else if (num === 0) bottle = " bottles"


    var message2 = (" Take one down, pass it around... " + (num) +
                  bottle + " of juice on the wall!");

console.log(message1 + message2)
}
