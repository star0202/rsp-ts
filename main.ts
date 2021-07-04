declare function require(name:string);
var scanf = require('scanf');
var check:number = 1;
var rsp = [
    "가위",
    "바위",
    "보"
];

while(check) {
    console.log('도전자1 :');
    var challenger1:string = scanf('%s');
    console.log(challenger1)
    console.log('도전자2 :');
    var randomindex:number = Math.floor(Math.random() * 3);
    var challenger2:string = rsp[randomindex];
    console.log(challenger2)
    if(challenger1 == challenger2) {
        console.log('무승부');
        console.log('다시 할거면 1, 안할거면 0');
        check = scanf('%d');
        continue;
    }
    else if(challenger1 == '가위') {
        if(challenger2 == '바위') {
            console.log('도전자2 승');
            console.log('다시 할거면 1, 안할거면 0');
            check = scanf('%d');
            continue;
        }
        else if(challenger2 == '보') {
            console.log('도전자1 승');
            console.log('다시 할거면 1, 안할거면 0');
            check = scanf('%d');
            continue;
        }
    }
    else if(challenger1 == '바위') {
        if(challenger2 == '가위') {
            console.log('도전자1 승');
            console.log('다시 할거면 1, 안할거면 0');
            check = scanf('%d');
            continue;
        }
        else if(challenger2 == '보') {
            console.log('도전자2 승');
            console.log('다시 할거면 1, 안할거면 0');
            check = scanf('%d');
            continue;
        }
    }
    else if(challenger1 == '보') {
        if(challenger2 == '가위') {
            console.log('도전자2 승');
            console.log('다시 할거면 1, 안할거면 0');
            check = scanf('%d');
            continue;
        }
        else if(challenger2 == '바위') {
            console.log('도전자1 승');
            console.log('다시 할거면 1, 안할거면 0');
            check = scanf('%d');
            continue;
        }
    }
}