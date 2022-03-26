var num = 54321;
console.log(finding_reverse(num));

function finding_reverse(num)
{
    var final = 0;
    var b = 0;
    while(num >0){
        b = num%10;
        final = final*10 +b;
        num = parseInt(num/10);
    }
    return final;
}
