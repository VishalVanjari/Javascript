//async function

async function demoFunction(){
    return "Hello from Vishal"
}

demoFunction().then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
})

//async and await


function fetchingData(){
    return new Promise((res,rej)=>{
        console.log("Getting Data...");
        setTimeout(()=>{
            res("Data recived !");
        },2000)
    })
}

async function getingData(){
    const msg = await fetchingData();
    console.log(msg);
}

getingData();

//async and await function

function delayFunction(ms){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(`Promise takes ${ms} ms to resolved`);
        },ms)
    })
}

async function execute(){
    let msg = await delayFunction(2000)
    console.log(msg);
}
execute();

//async and await function with try and catch

function getData(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            rej("Error : Data not Found")
        }, 2000);

    })
}

async function execute(){
    try{
        const data = await getData();
        console.log(data);

    }catch(error){
        console.log(error);
    }
}
execute();

function step1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Step 1 Completed");
            res("Data from Step 1");
        },2000)
    })
}

function step2(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(data, " Step 2 Completed ");
            res("Data from Step 2");
        },2000)
    })
}

function step3(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(data, " Step 3 Completed ");
            res("Data from Step 3");
        },2000)
    })
}

async function execute(){
    const data1 = await step1();
    const data2 = await step2(data1);
    const data3 = await step2(data2);
    console.log("All Resolveed");
}

execute();



