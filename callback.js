//Basic callback 1

function greeting(name,goodBye){
    console.log("Hello", name, "!");
    goodBye();
}

function goodBye(){
    console.log("Goodbye !!!");
}

greeting("Vishal",goodBye);

//Callback 2

function sum(a,b,add){
    add(a,b);
}
function add(a,b){
    return a+b;
}
console.log(sum(5,5,add));


//Callback with Delay 2

function fetchData(callback){
    setTimeout(()=>{
        callback("Data Recived")
    },2000);
}

fetchData((res)=>{
    console.log(res);
})


setTimeout(() => {
    console.log("Hello From BL from self");
}, 2000);

function hello(){
    console.log("Hello From BL from callback");
}
setTimeout(hello,5000);


//Callback Hell 

function getData(dataid,getNextData){
    setTimeout(()=>{
        console.log("Recived Data from",dataid);
        if(getNextData){
            getNextData();
        }
    },2000)
}

console.log("Getting Data 1");
getData(1,()=>{
    console.log("Getting Data 2");
    getData(2,()=>{
        console.log("Getting Data 3");
        getData(3,()=>{
            console.log("Getting Data 4");
            getData(4)
        })
    })
})


