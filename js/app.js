'use strict';
let myName='hanan';
let myAge='24';
let myBirthday='may/6';
let favcolor='pink';
let favTypeRose='tulib';
let myTalent='writing';
let userScore=0;

function input(){
    let welcome=('Hello ' + userName + " Answer with yes or no");
   return welcome;
}
let userName=prompt('welcom on my website, what is your name?');
alert(input());

function mynm(name){
    if(name.toLowerCase() ==='no' || name.toLowerCase() ==='n'){
        let msg =('that is true, my name is hanan');
         userScore+=1;
         return msg;
    
    } else{
       let msg1 =('that is false, my name is hanan');
       return msg1;
    }
}
let name=prompt('my name is huda?');
alert(mynm(name));

function myBir(birthday){
    if(birthday.toLowerCase()==='yes' || birthday.toLowerCase()==='y') {
       let g=('that is true');
       userScore+=1;
       return g;
    } else{
        let g1=('that is false, my Birthday is may/6');
        return g1;
    }
}
let birthday=prompt('my Birthday is may/6?');
alert(myBir(birthday));

function myColor(color){
    if(color.toLowerCase()==='no' || color.toLowerCase()==='n') {
        let ms=('that is true; my favcolor is pink');
        userScore+=1;
        return ms;
    } else{
        let ms1=('that is false, my favcolor is pink');
        return ms1;
    }
}
let color=prompt('my fav Color is red?');
alert(myColor(color));

function myRose(typerose){
    if(typerose.toLowerCase()==='no' || typerose.toLowerCase()==='n') {
        let s=('that is true, my favrose is tulip');
        userScore+=1;
        return s;
    } else{
        let s1=('that is false, my favrose is tulip');
        return s1;
    }
}
let typerose=prompt('my TypeRose is jasmine?');
alert(myRose(typerose));

function mTal(talent){
    if(talent.toLowerCase()==='yes' || talent.toLowerCase()==='y') {
        let et=('that is true');
        userScore+=1;
        return et;
    } else{
        let et1=('that is false, my Talent is writing');
        return et1;
    }
}
let talent=prompt('my Talent is writing?');
alert(mTal(talent));

let age;
function mage(){
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
       let m=('correct answer is 24');
       return m;
}
alert(mage());

let fruits=['orange','strawberry','plum','watermelon','apple'];
let guesses=0;
let fru=prompt('What kind of fruits do you think I like the most?');
let userCorrect=false;

function gus(){
    
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
   let mn=('correct answer are: Orange, Strawberry, Plum, Watermelon, Apple')
   return mn;
}
alert(gus());

    console.log('the user is answer:',name,birthday,color,typerose,talent,age);

alert('your Score: ' + userScore + '/7, We hope you had a great time with us ' + userName + " Come back soon");

