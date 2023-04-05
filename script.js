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
    triangle(620, 245, 650, 170, 675, 245)  
    triangle(685, 250, 740, 240, 725, 287)
    triangle(730, 360, 820, 325, 730, 300)
    triangle(740, 430, 725, 367, 675, 410)
    triangle(620, 490, 663, 410, 600, 398)
    triangle(530, 415, 570, 360, 595, 395)
    triangle(570, 350, 480, 315, 570, 290)
    triangle(610, 250, 555, 230, 570, 285)
}

function drawEllipse(){
    ellipse(600, 325, 1600, 700)
    ellipse(620, 325, 1400, 600)
    ellipse(620, 325, 1200, 500)
    ellipse(635, 325, 1000, 400)
    ellipse(650, 325, 800, 310)
    
}

function drawPlanets(){
    fill('#CDDC39')
    circle(480,187, 45)
    fill('#F44336');
    circle(340, 545, 90)
    fill('purple')
    circle(110, 120, 70)
    fill('rgb(168, 168, 120)')
    circle(1000, 190, 80)
    fill('rgb(95, 194, 111)')
    circle(1360, 220, 110)
    fill('white');
}