const MyArray=[1,2,3,4,,5,6,7,8]
//filter
let X=MyArray.filter((num)=> num>=5)
console.log(X)


const arrayOfObjects = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];



X=arrayOfObjects.filter((ele)=> ele.age > 30  )


console.log(X)


//map


const Numbes=[1,2,3]
let Z=Numbes.map((num)=> num +10)
let M=Numbes.map((num)=> num %10)
console.log(Z)
console.log(M)
//chaning
let C=Numbes.map((num)=> num+10).map((num)=> num-5).filter((num)=>num<10)
console.log(C)




//RREDUCE

acc=0
let R=Numbes.reduce((acc,curr)=>acc+curr)
console.log("SUM :",R)