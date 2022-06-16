function preload() {

}
function setup() {
    canvas=createCanvas(400, 400);
    canvas.position(100, 250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw() {
    image(video, 0, 0, 400, 400);
    circle(15, 15, 80);
    circle(390, 18, 80);
    circle(18, 390, 80);
    circle(385, 390, 80);
}
function take_snapshot()
{ 
    save('student_name.png'); 
}