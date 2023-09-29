const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message);

let array = [1, 2, 3, 4,8,9, 12];
let newAr = array.map(function(elm,indx) {
    return elm*4;
});
console.log("newAr:" , newAr);

let newFilter = array.filter(elm => elm>4)
    

console.log("filtered ar:" , newFilter);

//Reduce function

const total = [7, 2, 3, 4, 5].reduce( (previous, current) => {

 return previous+current}, 0);
      
console.log("reduce method:",total); // 15
//Another example of reduce
const items = [
   { name:"Auto", price:100},
   {name:"Bikes", price:300},
   {name:"Books", price:50},
   {name:"Cell", price:20}
]
    console.log(items.filter( (item) =>  item.price<1000));
    console.log(items.map(item =>item.price));
    console.log(items.find(item =>item.price==50));
    
   /* items.forEach(item=> {
       console.log(item.price);
    })*/
    
    const total = items.reduce( (currentTotal, item)=>{
    	return  item.price + currentTotal
    }, 0)
    
console.log(total);
