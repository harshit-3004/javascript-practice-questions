let arr = [15, 20, 55, 1 ,23 ,85];
console.log(maxi(arr));
console.log(mini(arr));
// To find the min and max element of the array 
function maxi(arr){
    var maximum = 0;
    maximum = Math.max(...arr);
    return maximum;
}

function mini(arr){
    var minimum = 0;
    minimum = Math.min(...arr);
    return minimum;
}
