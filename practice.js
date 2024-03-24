function factorial(a){
    b = 1
    for (i = 1; a >= i; i++) {
        b = i*b
    }
    return b
}
b = [1,2,3,4,5,7,6]


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
numbers = [2,5,8,3,5,7,5,7,8,6,5,54,4,4,3,5,6,6,7,7,7,2,8]
// all = numbers.reduce((accu,curr) =>{
//     return accu+curr*2
// } ,0)
// all*2 = 348
// all=348/2
// all=174
// [2,5,8,3,5,7,5,7,8,6,5,54,4,4,3,5,6,6,7,7,7,2,8] = 174
// [2,5,8,3,5,7,5,7,8,6,5,54,4,4,3,5,6,6,7,7,7,2,8]*2 = 174*2
// [2,5,8,3,5,7,5,7,8,6,5,54,4,4,3,5,6,6,7,7,7,2,8]*2 = 348
all = numbers.filter(curr => {
  return (curr % 2 != 0)
}).map(curr => curr*2).reduce((accu,curr)=> accu*curr)

alll = numbers.map(curr => {
    if(curr % 2 != 0){
        return curr*2
    }
    else {
        return 1
    }
}).reduce((accu,curr) => accu*curr)
console.log(alll)