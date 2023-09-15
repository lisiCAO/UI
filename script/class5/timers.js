/**
 * Create a new timer that will change the background every 2 seconds and alternate between black and red
 * Create a time that will alternate all the H1 text between black and orange every 2.5 seconds.
 * Make sure that your colors will never be black at the same time
 * Instead of alerting "I'am so dizzy" to your user, change the html of body to show the follwing code:
 * <h1> I'm so dizzy </h1>
 */

function bgtimer() {
    let rightLeftFlag = true;
    let upDownFlag = true;
    let rightLeftInterval, upDownInterval, dizzyTimeout;

    // 每2.6秒输出“right”或“left”
    rightLeftInterval = setInterval(() => {
        console.log(rightLeftFlag ? 'right' : 'left');
        rightLeftFlag = !rightLeftFlag;
    }, 2600);

    // 每3.9秒输出“up”或“down”
    upDownInterval = setInterval(() => {
        console.log(upDownFlag ? 'up' : 'down');
        upDownFlag = !upDownFlag;
    }, 3900);

    // 15秒后输出“I am so dizzy”并停止定时器
    dizzyTimeout = setTimeout(() => {
        alert("I am so dizzy");
        clearInterval(rightLeftInterval);
        clearInterval(upDownInterval);
    }, 15000);
}


let bodyColorState = true;
function changeBodyBgColor(){
    const h1s = document.querySelectorAll("h1");
    if(bodyColorState){
        document.body.style.backgroundColor = "black";
        for(let h1 of h1s){
                h1.style.color = "orange";
            }
    }else{
        document.body.style.backgroundColor = "white";
        for(let h1 of h1s){
            h1.style.color = "black"; 
        }
    }
    bodyColorState = !bodyColorState;
}

function setupDomtimers(){
    return setInterval(changeBodyBgColor, 2000);
}
let bodyInterval =  setupDomtimers()
setTimeout(() => {
    clearInterval(bodyInterval);
    console.log("Timeout triggered!"); // Add this
    document.body.innerHTML = "<h1 style='color: white;'> I am so dizzy.</h1>";
}, 15000);

