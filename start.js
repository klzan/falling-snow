(() => {
  function setup() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfSnowBalls: 350,
    };
  }

  function random(max, min) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  function drawSnowBalls(canvasContext, snowBalls) {
    canvasContext.beginPath();
    canvasContext.arc(
      snowBalls.x,
      snowBalls.y,
      snowBalls.radius,
      snowBalls.opacity,
      Math.PI * 2
    );
    canvasContext.fillStyle = `rgba(255, 255, 255, ${snowBalls.opacity})`;
    canvasContext.fill();
  }

  function createSnowBalls(canvas, numberOfSnowBalls) {
    const snowBallPropety = [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(canvas.width, 0),
        y: random(canvas.height, 0),
        radius: random(1, 5),
        opacity: random(4, 2),
        speedX: random(5, -5),
        speedY: random(3, 1),
      };
    });
    return snowBallPropety;
  }

  function moveSnowBalls(canvas, snowBall) {
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedY;

    if (snowBall.x > canvas.width) {
      snowBall.x = 0;
    } else if (snowBall.x < 0) {
      snowBall.x = canvas.width;
    }
    if (snowBall.y > canvas.height) {
      snowBall.y = 0;
    } else if (snowBall.y < 0) {
      snowBall.y = canvas.height;
    }
  } 

  function run() {
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snowBalls.forEach((snowBall) => {
        drawSnowBalls(canvasContext, snowBall);
      });
      snowBalls.forEach((snowBall) => {
        moveSnowBalls(canvas, snowBall);
      });
    }, 50);
  }  
  run();
})();
  

(() => {  
   
  const SECOND = 1000; 
  const MINUTE = SECOND * 60; 
  const HOUR = MINUTE * 60; 
  const DAY = HOUR * 24; 
   
  function setElementInnerText(id, text) { 
     const element = document.getElementById(id); 
     element.innerText = Math.floor(text);
  }
    
  function countDown() { 
    const now = new Date().getTime(); 
    const newYear = new Date('December 31, 2021 23:59:59').getTime(); 
    const unixTimeLeft = newYear - now; 
     
    setElementInnerText('days', unixTimeLeft/ DAY);
    setElementInnerText('hours', unixTimeLeft % DAY / HOUR);
    setElementInnerText('minutes', unixTimeLeft % HOUR / MINUTE);
    setElementInnerText('seconds', unixTimeLeft % MINUTE / SECOND);
    
  
  }
  function run() { 
     countDown(); 
     setInterval(countDown, SECOND);
  } 
  run();
})();