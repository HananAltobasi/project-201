'use strict';
let myName='hanan';
let myBirthday='may/6';
let favcolor='pink';
let favTypeRose='tulib';
let myTalent='writing';


let userName=prompt('welcom on my website, what is your name?');
alert('Hello ' + userName + " Answer with yes or no");

let name=prompt('my name is huda?');
if(name.toLowerCase() ==='no' || name.toLowerCase() ==='n'){
    alert('that is true, my name is hanan');
} else{
    alert('that is false, my name is hanan');
}

let birthday=prompt('my Birthday is may/6?');
if(birthday.toLowerCase()==='yes' || birthday.toLowerCase()==='y') {
    alert('that is true');
} else{
    alert('that is false, my Birthday is may/6');
}

let color=prompt('my fav Color is red?');
if(color.toLowerCase()==='no' || color.toLowerCase()==='n') {
    alert('that is true; my favcolor is pink');
} else{
    alert('that is false, my favcolor is pink');
}

let typerose=prompt('my TypeRose is jasmine?');
if(typerose.toLowerCase()==='no' || typerose.toLowerCase()==='n') {
    alert('that is true, my favrose is tulip');
} else{
    alert('that is false, my favrose is tulip');
}

let talent=prompt('my Talent is writing?');
if(talent.toLowerCase()==='yes' || talent.toLowerCase()==='y') {
    alert('that is true');
} else{
    alert('that is false, my Talent is writing');
}


for(let i=0;i<=3;i++){
    let age=prompt('How old do you think I am? You have 4 attempts, guess number please');
    console.log(age);
    
    if(age===24){
     alert('congrates, is correct');
     break;

    }else if(age<24){
        alert('Wow, Too low');
    }else{
            alert('Oh, Too high');
        }
    }

alert('correct answer is 24');


let fruits=['Orange','Strawberry','Plum','Watermelon','Apple'];
for(let i=0;i<=5;i++){
    let fru=prompt('What kind of fruits do you think I like the most?');
    console.log(fru);
    fruits.push(fru);
if(fru===fruits){
    alert('congrates, is correct');
    break;
}else{
    console.log(fru);
}
}
document.write('<h1>'+fruits+'</h1>');

console.log(name,birthday,color,typerose,talent,age);


alert('We hope you had a great time with us ' + userName + " Come back soon");

