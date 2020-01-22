const $ = require('jquery');
const niceMessage = require('./say-hello');
const sayHello = () => console.log(`hello`);
sayHello();

$('body').css('background-color', 'pink');
niceMessage();



