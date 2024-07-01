// Code your solutions in this file
function writeCards (arr,event){
    let newArr = [];
    for(let i= 0; i<arr.length;i++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newArr

}                                                                                              

writeCards(["Guadalupe", "Ollie", "Aki"],'suprise gift!')

function countDown(num){
    let count = 0;
    while(num >= count){
        console.log(num)
        num--
    }

}
countDown(10)