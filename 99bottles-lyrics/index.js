console.log('Hello World !');

var i;
var x = '';

//for (i = 99; i > 0; i--){
//    a=i-1
//    console.log(i + ' bottles of beer on the wall, '+ i + ' bottles of beer.' + '<br>' + 'Take one down and pass it around, ' + a + ' bottles of beer on the wall.<br>');
//    var yy = i + ' bottles of beer on the wall, '+ i + ' bottles of beer.' + '<br>' + 'Take one down and pass it around, ' + a + ' bottles of beer on the wall.<br><br>' 
//
//    x  = x + yy;
//}

//console.log('No more bottles of beer on the wall, no more bottles of beer.' + '<br>' + 'Go to the store and buy some more, 99 bottles of beer on the wall.')

//var z = 'No more bottles of beer on the wall, no more bottles of beer.' + '<br>' + 'Go to the store and buy some more, 99 bottles of beer on the wall.<br>'

//var final = x + z 

//document.getElementById('mylyrics').innerHTML = final;

//var str1 = ' bottles of beer on the wall, '
//var str2 = ' bottles of beer.' + '<br>' + 'Take one down and pass it around, '
//var str3 = ' bottles of beer on the wall.<br><br>'
//var str4 = 'No more bottles of beer on the wall, no more bottles of beer.' + '<br>' + 'Go to the store and buy some more, 99 bottles of beer on the wall.<br>'

//for (i=99; i> 0; i--){
//   a=i-1
//    console.log(i + str1 + i + str2 + a + str3)
//    var yy = i + str1 + i + str2 + a + str3
//    var x = x + yy;
//}

//var final = x + str4

//document.getElementById('mylyrics').innerHTML = final;

var str1 = ' bottles of beer on the wall, '
var str2 = ' bottles of beer.' + '<br>' + 'Take one down and pass it around, '
var str3 = ' bottles of beer on the wall.<br><br>'
var str4 = 'No more bottles of beer on the wall, no more bottles of beer.' + '<br>' + 'Go to the store and buy some more, 99 bottles of beer on the wall.<br>'
var noBeer = 'no more'

var i = 99;

while (i>1) {
    a=i-1
    var yy = i + str1 + i + str2 + a + str3
    var x = x + yy
    console.log(yy)
    i--;
    if (i == 1) {
        a = noBeer
        var yy = i + str1 + i + str2 + a + str3
        var x = x + yy
        console.log(yy)
    }
}
var final = x + str4

document.getElementById('mylyrics').innerHTML = final;