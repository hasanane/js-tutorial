function factorial(a){
    b = 1
    for (i = 1; a >= i; i++) {
        b = i*b
    }
    return b
}
b = [1,2,3,4,5,7,6]
console.log(largest2(b))

function factorial2(a){
    b = 1
    for(i=a ; i>1 ; i--)
    {
        b=b*i
    }
    return b
}
// 5! = 5*(5-1)!
// 4! = 4*(4-1)!
// 3! = 3*(3-1)!
// x! = x*(x-1)!
// 2! = 2*(2-1)!
// 1! = 1
// 0! = 1
function largest(a){
    b=0
    for(i=0 ;i <a.length ;i++){
        if(a[i]>b){
            b=a[i]
        }
    }
    return b 
}
function largest2(a){
    b = 0
    a.forEach((e) => {
        if(e>b){
            b=e
        }
    })
    return b
}