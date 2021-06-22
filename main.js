window.addEventListener("load",()=>{
    const sounds =document.querySelectorAll(".sound");
    const pads =document.querySelectorAll(".audio-container div");
    const visual = document.querySelector(".visual");
    const colors = ["hsl(192, 73%, 60%)",
        "hsl(282, 66%, 60%)",
        "hsl(60, 100%, 60%)",
        "hsl(102, 66%, 60%)",
        "hsl(233, 64%, 69%)",
        "hsl(0, 93%, 69%)"]
    
    pads.forEach((pad,index)=>{
        pad.addEventListener("click",() => {
            sounds[index].currentTime=0;
            sounds[index].play();
            const posTop = pad.offsetTop;
            const posLeft = pad.offsetLeft;
            console.log(posTop,posLeft)
            createBall(index,colors,posTop,posLeft);
            // const addPX = (window.screen.width)/12;
        })
    })

    const createBall = (index,colors,posTop,posLeft) =>{
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.top=`${posTop}px`;
        ball.style.left=`${posLeft + (window.screen.width)/12}px`;
        ball.style.animation = `jump 1.75s cubic-bezier(0.310, 0.440, 0.445, 1.650)`;
        ball.addEventListener("animationend",()=>{
           visual.removeChild(this);
        })
        
    }
})