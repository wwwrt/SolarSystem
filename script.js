function setup(){
    createCanvas(1500,1000);
}

function draw(){
    
    drawEllipse();
    drawSun();
    drawPlanets();
}

function drawSun(){
    fill(random(225), random(235), random (220));
    circle(650,325, 150)
}