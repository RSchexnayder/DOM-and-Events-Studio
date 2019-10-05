function init () {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus")
    let shuttleBackground = document.getElementById("shuttleBackground")
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let land = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");
    let upButton = document.getElementById("upButton");
    let downButton = document.getElementById("downButton");
    let rightButton = document.getElementById("rightButton");
    let leftButton = document.getElementById("leftButton");

    let shuttleHeightAscend = function(){
        height = Number(shuttleHeight.innerHTML)
        let newHeight = height + 10000
        shuttleHeight.innerHTML = newHeight;
    }

    takeOff.addEventListener("click", function(event){
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (answer === true){
            flightStatus.innerText = "Shuttle in flight"
            shuttleBackground.style.background = "blue";
            shuttleHeightAscend()
        }
    })

    let returnToPosition = function(){
        rocket.style.bottom = "0px"
        rocket.style.top = "0px"
        rocket.style.left = "0px"
        rocket.style.right = "0px"
    }

    land.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerHTML = 0; 
        returnToPosition()
    })

    missionAbort.addEventListener("click", function(event){
        window.alert("Confirm that you want to abort the mission.");
        flightStatus.innerText = "Mission aborted.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerHTML = 0;
        returnToPosition()
    })
    let movementUp = 0;
    let movementDown = 0;
    upButton.addEventListener("click", function(event){
        let bottomMargin = rocket.style.bottom;
        let bottomMarginNoPx = Number(bottomMargin.slice(0, bottomMargin.length - 2))
        if (bottomMarginNoPx !== 10){
        movementUp = 10;
        let newBottomMargin = (bottomMarginNoPx += Number(movementUp)) + "px";
        rocket.style.bottom = newBottomMargin

        let topMargin = rocket.style.top;
        let topMarginNoPx = Number(topMargin.slice(0, topMargin.length - 2))
        movementDown = -10;
        let newTopMargin = (topMarginNoPx += Number(movementDown)) + "px";
        rocket.style.top = newTopMargin

        shuttleHeightAscend()
        } else {
            window.alert("You cant move this direction")
        }
    })
    
    downButton.addEventListener("click", function(event){
        let topMargin = rocket.style.top;
        let topMarginNoPx = Number(topMargin.slice(0, topMargin.length - 2))
        if (topMarginNoPx !== 250){
        movementDown = 10;
        let newTopMargin = (topMarginNoPx += Number(movementDown)) + "px";
        rocket.style.top = newTopMargin

        let bottomMargin = rocket.style.bottom;
        let bottomMarginNoPx = Number(bottomMargin.slice(0, bottomMargin.length - 2))
        movementUp = -10;
        let newBottomMargin = (bottomMarginNoPx += Number(movementUp)) + "px";
        rocket.style.bottom = newBottomMargin

        height = Number(shuttleHeight.innerHTML)
        let newHeight = height - 10000
        shuttleHeight.innerHTML = newHeight;
        } else {
            window.alert("You cant move this direction")
        }
    })
    let movementLeft = 0;
    let movementRight = 0;
    leftButton.addEventListener("click", function(event){
        let rightMargin = rocket.style.right;
        let rightMarginNoPx = Number(rightMargin.slice(0, rightMargin.length - 2))
        if(rightMarginNoPx !== 270){
        movementLeft = 10;
        let newRightMargin = (rightMarginNoPx += Number(movementLeft)) + "px";
        rocket.style.right = newRightMargin

        let leftMargin = rocket.style.left;
        let leftMarginNoPx = Number(leftMargin.slice(0, leftMargin.length - 2))
        movementRight = -10;
        let newLeftMargin = (leftMarginNoPx += Number(movementRight)) + "px";
        rocket.style.left = newLeftMargin
        } else {
            window.alert("you cannot move this direction")
        }
    })

    rightButton.addEventListener("click", function(event){
        
        let rightMargin = rocket.style.right;
        let rightMarginNoPx = Number(rightMargin.slice(0, rightMargin.length - 2))
        if(rightMarginNoPx !== -270){
        movementLeft = -10;
        let newRightMargin = (rightMarginNoPx += Number(movementLeft)) + "px";
        rocket.style.right = newRightMargin

        let leftMargin = rocket.style.left;
        let leftMarginNoPx = Number(leftMargin.slice(0, leftMargin.length - 2))
        movementRight = 10;
        let newLeftMargin = (leftMarginNoPx += Number(movementRight)) + "px";
        rocket.style.left = newLeftMargin
        }else{
            window.alert("you cannot move this direction")
        }
    })
}
window.onload = init;