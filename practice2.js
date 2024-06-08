print = a => {console.log(a)}


numbers = [2,5,8,3,5,7,5,7,8,6,5,54,4,4,3,5,6,6,7,7,7,2,8]
larg = numbers.reduce((a,b) => {
    if(a>b){
        return a
    }
    else{
        return b
    }
}, 0) 
x = 1
print(larg) 