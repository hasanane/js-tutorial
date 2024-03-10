b = 1
function factorial(a){
    for (i = 1; a >= i; i++) {
        b = i*b
    }
    return b
}

const print = function print(){
console.log('hello')
}
print 