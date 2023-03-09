const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const myEmitter1 = new EventEmitter();

myEmitter.on('test', () => {
    console.log('success1');
});

myEmitter.on('test', () => {
    console.log('success2');
});

myEmitter1.on('test', () => {
    console.log('success3');
});

myEmitter.emit('test')