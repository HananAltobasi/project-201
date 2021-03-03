'use strict';
let myName='hanan';
let myAge='24';
let myBirthday='may/6';
let favcolor='pink';
let favTypeRose='tulib';
let myTalent='writing';
let userScore=0;


let userName=prompt('welcom on my website, what is your name?');
alert('Hello ' + userName + " Answer with yes or no");

let name=prompt('my name is huda?');
if(name.toLowerCase() ==='no' || name.toLowerCase() ==='n'){
    alert('that is true, my name is hanan');
     userScore+=1;

} else{
    alert('that is false, my name is hanan');
}

let birthday=prompt('my Birthday is may/6?');
if(birthday.toLowerCase()==='yes' || birthday.toLowerCase()==='y') {
    alert('that is true');
    userScore+=1;
} else{
    alert('that is false, my Birthday is may/6');
}

let color=prompt('my fav Color is red?');
if(color.toLowerCase()==='no' || color.toLowerCase()==='n') {
    alert('that is true; my favcolor is pink');
    userScore+=1;
} else{
    alert('that is false, my favcolor is pink');
}

let typerose=prompt('my TypeRose is jasmine?');
if(typerose.toLowerCase()==='no' || typerose.toLowerCase()==='n') {
    alert('that is true, my favrose is tulip');
    userScore+=1;
} else{
    alert('that is false, my favrose is tulip');
}

let talent=prompt('my Talent is writing?');
if(talent.toLowerCase()==='yes' || talent.toLowerCase()==='y') {
    alert('that is true');
    userScore+=1;
} else{
    alert('that is false, my Talent is writing');
}

let age;
for(let i=0;i<4;i++){
     age=parseInt(prompt('How old do you think I am? You have 4 attempts, guess number between (20 to 30) please'));
    console.log(age);
    
    if(age===24){
     alert('congrates, is correct');
     userScore+=1;
     break;

    }else if(age<24){
        alert('Wow, Too low');
    }else{
            alert('Oh, Too high');
        }
    }

alert('correct answer is 24');


let fruits=['orange','strawberry','plum','watermelon','apple'];
let guesses=0;
let fru=prompt('What kind of fruits do you think I like the most?');
let userCorrect=false;


while(guesses<6){
    
     for(let i=0;i<fruits.length;i++){ 

             if(fru.toLowerCase()===fruits[i]){
             alert('congrates, is correct');
             guesses=6;
             userCorrect=true;
             userScore+=1;
             break;
             } 
          }
             guesses++;
             if(guesses<6 && userCorrect===false){
             fru=prompt('its wrong, try again please!');
             } 

             if(guesses>6 && userCorrect===false){
             alert('opssss, your attempts have ended!')
             
             } 
}  

   alert('correct answer are: Orange, Strawberry, Plum, Watermelon, Apple')
    console.log('the user is answer:',name,birthday,color,typerose,talent,age);

alert('your Score: ' + userScore + '/7, We hope you had a great time with us ' + userName + " Come back soon");

