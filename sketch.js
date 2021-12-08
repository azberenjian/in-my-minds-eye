//In my Mind’s Eye - Azar Berenjian

//value declarations
let scene = '0';
let w = 500;
let h = 300;
let cnv;
let x = 0;
let gym1;
let gym2;
let alarm;
let swap = false;

//img declarations
let untitled;
let car;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let ten;
let eleven;
let twelve;
let thirteen;
let fourteen;
let fifteen;
let sixteen;
let seventeen;
let twenty;
let twentyone;
let twentytwo;
let twentythree;
let twentyfive;
let twentysix;
let twentyeight;


function preload(){
soundFormats("mp3");
untitled = loadImage('untitledsprite.gif');
car= loadImage('carsprite.png');
one= loadImage('one.png');
two= loadImage('two.png');
three= loadImage('three.png');
four= loadImage('four.png');
five= loadImage('five.png');
six= loadImage('six.png');
seven= loadImage('seven.png');
eight= loadImage('eight.png');
nine= loadImage('nine.png');
ten= loadImage('ten.png');
eleven= loadImage('eleven.gif');
twelve= loadImage('twelve.png');
thirteen= loadImage('thirteen.png');
fourteen= loadImage('fourteen.png');
fifteen= loadImage('fifteen.png');
sixteen= loadImage('sixteen.png');
seventeen= loadImage('seventeen.png');
twenty= loadImage('twenty.png');
twentyone= loadImage('twentyone.png');
twentytwo= loadImage('twentytwo.png');
twentythree= loadImage('twentythree.png');
twentyfive= loadImage('twentyfive.png');
twentysix= loadImage('twentysix.gif');
twentyeight= loadImage('twentyeight.png');
gym1 = loadSound("gym1.mp3");
alarm = loadSound("alarm.mp3");

}

function setup() {
cnv = createCanvas(w, h);
textAlign(CENTER);
textFont('consolas');
textSize(30);
fill(255);
gym1.loop();
alarm.play(.5);

}

function draw() {
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 2;
  } else if (keyIsDown(LEFT_ARROW)){
    x = x - 2;
  }

  switch(scene){
    case '0':
    background(0);
    text("5:59am", w/2, h/2);
  cnv.mouseClicked(oneMouseClicked);

      break;

    case '1':
    background(one);
  cnv.mouseClicked(twoMouseClicked);
      break;

    case '2':
    background(two);
    cnv.mouseClicked(threeMouseClicked);
      break;

    case '3':
    background(three);
    image(untitled, x, h-140);

    if (x == 510){
      scene = '4';
      x = 0;
    }
      break;

    case '4':
    background(four);
    cnv.mouseClicked(fiveMouseClicked);
      break;

    case '5':
    background(five);
    image(untitled, x, h-140);
    if (x > 410){
      scene = '6';
      x = 0;
    }
      break;

    case '6':
    background(six);
    cnv.mouseClicked(sevenMouseClicked);
      break;

    case '7':
    background(seven);
    image(untitled, x, h-140);
    if (x > 410){
      scene = '8';
      x = 0;
    }
      break;

    case '8':
    background(eight);
    cnv.mouseClicked(nineMouseClicked);
      break;

    case '9':
    background(nine);
    cnv.mouseClicked(tenMouseClicked);
      break;

    case '10':
    background(ten);
    image(untitled, x, h-170);
    if (x == 510){
      scene = '11';
      x = 0;
    }
      break;

    case '11':
    background(eleven);
    cnv.mouseClicked(twelveMouseClicked);
      break;

    case '12':
    background(twelve);
    image(car, x, h-140);
    if (x == 510){
      scene = '13';
      x = 0;
    }
      break;

    case '13':
    background(thirteen);
    cnv.mouseClicked(fourteenMouseClicked);
      break;

    case '14':
    background(fourteen);
    image(untitled, x, h-140);
    if (x > 350){
      scene = '15';
      x = 0;
    }
      break;

    case '15':
    background(fifteen);
    cnv.mouseClicked(sixteenMouseClicked);
      break;

    case '16':
    background(sixteen);
    image(untitled, x, h-190);
    if (x > 400){
      scene = '17';
      x = 0;
    }
      break;

    case '17':
    background(seventeen);
    cnv.mouseClicked(eighteenMouseClicked);

      break;

    case '18':
    background(0);
    text(". . .", w/2, h/2);
    cnv.mouseClicked(nineteenMouseClicked);
    gym1.stop();

      break;

    case '19':
    background(0);
    text("later that evening.", w/2, h/2);
  cnv.mouseClicked(twentyMouseClicked);


      break;

    case '20':
    background(twenty);
    image(untitled, x, h-140);
    if (x > 490){
      scene = '21';
    }
      break;

    case '21':
    background(twentyone);
    cnv.mouseClicked(twentytwoMouseClicked);
      break;

    case '22':
    background(twentytwo);
      cnv.mouseClicked(twentythreeMouseClicked);
      break;

    case '23':
    background(twentythree);
      cnv.mouseClicked(twentyfourMouseClicked);
    //music stop
      break;

    case '24':
      background(0);
      text(". . .", w/2, h/2);
      cnv.mouseClicked(twentyfiveMouseClicked);
      break;

    case '25':
    background(twentyfive);
    cnv.mouseClicked(twentysixMouseClicked);
      break;

    case '26':
    background(twentysix);
    cnv.mouseClicked(twentysevenMouseClicked);
      break;

    case '27':
      background(0);
      text(". . .", w/2, h/2);
    cnv.mouseClicked(twentyeightMouseClicked);
      break;

    case '28':
      background(twentyeight);
    //cnv.mouseClicked(zeroMouseClicked);
      break;
    default:
      break;

  }

}

function zeroMouseClicked(){
    console.log('restart');
    scene = '0';
}

function oneMouseClicked(){
    console.log('clicked 1');
    scene = '1';
}

function twoMouseClicked(){
    console.log('clicked 2');
    scene = '2';
}

function threeMouseClicked(){
    console.log('clicked 3');
    scene = '3';
}

function fiveMouseClicked(){
  console.log('clicked 3');
  scene = '5';
}

function sevenMouseClicked(){
  console.log('clicked 7');
  scene = '7';
}

function nineMouseClicked(){
  console.log('clicked 9');
  scene = '9';
}

function tenMouseClicked(){
  console.log('clicked 10');
  scene = '10';
}

function twelveMouseClicked(){
  console.log('clicked 12');
  scene = '12';
}

function fourteenMouseClicked(){
  console.log('clicked 14');
  scene = '14';
}

function sixteenMouseClicked(){
  console.log('clicked 16');
  scene = '16';
}

function eighteenMouseClicked(){
  console.log('clicked 18');
  scene = '18';
}

function nineteenMouseClicked(){
  console.log('clicked 19');
  scene = '19';
}

function twentyMouseClicked(){
  console.log('clicked 20');
  scene = '20';
}

function twentytwoMouseClicked(){
  console.log('clicked 22');
  scene = '22';
}

function twentythreeMouseClicked(){
  console.log('clicked 23');
  scene = '23';
}

function twentyfourMouseClicked(){
  console.log('clicked 24');
  scene = '24';
}

function twentyfiveMouseClicked(){
  console.log('clicked 25');
  scene = '25';
}

function twentysixMouseClicked(){
  console.log('clicked 26');
  scene = '26';
}

function twentysevenMouseClicked(){
  console.log('clicked 27');
  scene = '27';
}

function twentyeightMouseClicked(){
  console.log('clicked 28');
  scene = '28';
}

function zeroMouseClicked(){
  console.log('restarting');
  scene = '0';
}

function mousePressed() {
  userStartAudio();
}
