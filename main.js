let hello01 = require('./Hello01');
let hello02 = require('./Hello02').Hello02;
let hello03 = require('./Hello03');
let hello04 = require('./Hello04');
let hello05 = require('./Hello05');

hello01();
hello02();
hello03.sayHello();

hello03.message = "Changed message !!!";

let hello31 = require('./Hello03.js');
hello31.sayHello();

let hello4 = new hello04();
hello4.sayHello();

hello05 = require('./Hello05.js').sayHello;
hello05();