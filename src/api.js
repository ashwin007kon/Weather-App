const axios=require("axios");

var data=axios("https://jsonplaceholder.typicode.com/todos/1");

data.then(function(a){
    console.log(a.data.title);
}).catch(function(a){
    console.log(a.data.title);
})