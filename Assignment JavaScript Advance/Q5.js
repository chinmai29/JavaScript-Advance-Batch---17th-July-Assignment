var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
    return num / 2;
});
console.log(new_arr);

//It will give an error as -> print is not defined
//console.log(new_arr) will give the output -> [1, 28, 39, 17, 32.5]