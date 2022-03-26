let arr = [1,0,5,2,6,3,7,4,8];
let leng = arr.length;

let even = 0;
let odd = 0;
let zeros = 0;
for(let i=0; i<leng;i++){
    if(arr[i]==0)
        zeros++;
    else if(arr[i]%2==0)
        odd++;
    else
        even++;
}
console.log(odd);
console.log(even);
console.log(zeros);
