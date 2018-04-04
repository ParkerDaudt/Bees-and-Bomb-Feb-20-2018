
function setup(){
        frameRate(30);
    createCanvas(2000,2000, WEBGL);
}

function draw(){
    background(0);
    rotateX(-1*atan(cos(QUARTER_PI)));
  rotateY(-QUARTER_PI); 
    //let i = frameCount;
        //if(i < 10 * 40 ){
            //rotateX(0.025 * i);
        //}
        /*if(i > 440 && i < 520){
            rotateY(0.025 * i);
        }*/
    rotateX(0.025 * frameCount);
    rotateZ(0.025 * frameCount);
        

//Adding Vertex Dots
  translate(100,-300,100);
  strokeWeight(8);
  stroke(255, 255, 255);
  box(10,10,10);
  translate(-100,300,-100);
  


translate(-300, -300, -300);
box(10,10,10);
translate(300, 300, 300);

translate(-300, -300, -100);
box(10,10,10);
translate(300,300,100);

translate(-300, -300, 100);
box(10,10,10);
translate(300, 300, -100);

translate(-300, -300, 300,);
box(10,10,10);
translate(300,300,-300);

//

translate(-300, -100, -300);
box(10,10,10);
translate(300, 100, 300);

translate(-300, -100, -100);
box(10,10,10);
translate(300, 100, 100);

translate(-300, -100, 100);
box(10,10,10);
translate(300, 100, -100);

translate(-300, -100, 300);
box(10,10,10);
translate(300, 100, -300);

//

translate(-300, 100, -300);
box(10,10,10);
translate(300, -100, 300);

translate(-300, 100, -100);
box(10,10,10);
translate(300, -100, 100);

translate(-300, 100, 100);
box(10,10,10);
translate(300, -100, -100);

translate(-300, 100, 300);
box(10,10,10);
translate(300, -100, -300);

//

translate(-300, 300, -300);
box(10,10,10);
translate(300, -300, 300);

translate(-300, 300, -100);
box(10,10,10);
translate(300, -300, 100);

translate(-300, 300, 100);
box(10,10,10);
translate(300, -300, -100);

translate(-300, 300, 300);
box(10,10,10);
translate(300, -300, -300);

//


translate(-100, -300, -300);
box(10,10,10);
translate(100, 300, 300);

translate(-100, -300, -100);
box(10,10,10);
translate(100,300,100);

translate(-100, -300, 100);
box(10,10,10);
translate(100, 300, -100);

translate(-100, -300, 300,);
box(10,10,10);
translate(100,300,-300);

//

translate(-100, -100, -300);
box(10,10,10);
translate(100, 100, 300);

translate(-100, -100, -100);
box(10,10,10);
translate(100, 100, 100);

translate(-100, -100, 100);
box(10,10,10);
translate(100, 100, -100);

translate(-100, -100, 300);
box(10,10,10);
translate(100, 100, -300);

//

translate(-100, 100, -300);
box(10,10,10);
translate(100, -100, 300);

translate(-100, 100, -100);
box(10,10,10);
translate(100, -100, 100);

translate(-100, 100, 100);
box(10,10,10);
translate(100, -100, -100);

translate(-100, 100, 300);
box(10,10,10);
translate(100, -100, -300);

//

translate(-100, 300, -300);
box(10,10,10);
translate(100, -300, 300);

translate(-100, 300, -100);
box(10,10,10);
translate(100, -300, 100);

translate(-100, 300, 100);
box(10,10,10);
translate(100, -300, -100);

translate(-100, 300, 300);
box(10,10,10);
translate(100, -300, -300);

//


translate(100, -300, -300);
box(10,10,10);
translate(-100, 300, 300);

translate(100, -300, -100);
box(10,10,10);
translate(-100,300,100);

translate(100, -300, 100);
box(10,10,10);
translate(-100, 300, -100);

translate(100, -300, 300,);
box(10,10,10);
translate(-100,300,-300);

//

translate(100, -100, -300);
box(10,10,10);
translate(-100, 100, 300);

translate(100, -100, -100);
box(10,10,10);
translate(-100, 100, 100);

translate(100, -100, 100);
box(10,10,10);
translate(-100, 100, -100);

translate(100, -100, 300);
box(10,10,10);
translate(-100, 100, -300);

//

translate(100, 100, -300);
box(10,10,10);
translate(-100, -100, 300);

translate(100, 100, -100);
box(10,10,10);
translate(-100, -100, 100);

translate(100, 100, 100);
box(10,10,10);
translate(-100, -100, -100);

translate(100, 100, 300);
box(10,10,10);
translate(-100, -100, -300);

//

translate(100, 300, -300);
box(10,10,10);
translate(-100, -300, 300);

translate(100, 300, -100);
box(10,10,10);
translate(-100, -300, 100);

translate(100, 300, 100);
box(10,10,10);
translate(-100, -300, -100);

translate(100, 300, 300);
box(10,10,10);
translate(-100, -300, -300);

//


translate(300, -300, -300);
box(10,10,10);
translate(-300, 300, 300);

translate(300, -300, -100);
box(10,10,10);
translate(-300,300,100);

translate(300, -300, 100);
box(10,10,10);
translate(-300, 300, -100);

translate(300, -300, 300,);
box(10,10,10);
translate(-300,300,-300);

//

translate(300, -100, -300);
box(10,10,10);
translate(-300, 100, 300);

translate(300, -100, -100);
box(10,10,10);
translate(-300, 100, 100);

translate(300, -100, 100);
box(10,10,10);
translate(-300, 100, -100);

translate(300, -100, 300);
box(10,10,10);
translate(-300, 100, -300);

//

translate(300, 100, -300);
box(10,10,10);
translate(-300, -100, 300);

translate(300, 100, -100);
box(10,10,10);
translate(-300, -100, 100);

translate(300, 100, 100);
box(10,10,10);
translate(-300, -100, -100);

translate(300, 100, 300);
box(10,10,10);
translate(-300, -100, -300);

//

translate(300, 300, -300);
box(10,10,10);
translate(-300, -300, 300);

translate(300, 300, -100);
box(10,10,10);
translate(-300, -300, 100);

translate(300, 300, 100);
box(10,10,10);
translate(-300, -300, -100);

translate(300, 300, 300);
box(10,10,10);
translate(-300, -300, -300);


// Adding Cubes
  noFill();
  strokeWeight(4);
  translate(-200,0,0);
    stroke(0, 40, 104);
    box(200,200,200);
    stroke(0, 255, 255);
    rotateY(QUARTER_PI);rotateX(22.5);
    strokeWeight(5);
    stroke(191,10,48);
    fill(191,10,48, 255);sphere(75);noFill();
     stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,-400,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(200,0,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(200,-400,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

   translate(-400,-200,200);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,-400,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(200,0,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(200,-400,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

translate(-400,-200,-400);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,-400,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(200,0,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(200,-400,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    translate(0,200,0);
    box(200,200,200);stroke(191,10,48);
    rotateY(QUARTER_PI);rotateX(22.5);
    fill(191,10,48, 255);sphere(75);noFill();stroke(0, 40, 104);
    rotateX(-22.5);rotateY(-QUARTER_PI);

    rotateX(1*atan(cos(QUARTER_PI)));
    rotateY(QUARTER_PI);

}
