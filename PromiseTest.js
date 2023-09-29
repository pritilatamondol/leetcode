//How to use promise
function createRequest(location) {
	return new Promise( (resolve, reject) => {
    if(location =="google") {
      resolve("Request url:" +  location);
    }else{
      reject("Request url is not google");
    }
  })
 
}

function processRequest(response) {
   return new Promise( (resolve,reject)=> {
   			console.log("I am from process request.");
   			resolve(`Extra param ${response}`);
   })
}

createRequest("google").then( (response)=> {
    console.log("I am from make request");
    return processRequest(response);
 }).then((processResponse)=>{
    		console.log("I am from processResponse" + processResponse);
}).catch((result) =>{
		console.log(result);
})

let prom = new Promise((resolve,reject) => {
	const a = 19;
  if(a==9){
     resolve("I am. Success")
  }else{
  	reject("I am failure");
  }
})

const video1Promise = new Promise((resolve,reject) =>{
     resolve("Video1")
})
const video2Promise = new Promise((resolve,reject) =>{
     resolve("Video2")
})
const video3Promise = new Promise((resolve,reject) =>{
     resolve("Video3")
})

Promise.all([
	video1Promise,
  video2Promise,
  video3Promise
]).then((messages) =>{
		//console.log(messages)
})



