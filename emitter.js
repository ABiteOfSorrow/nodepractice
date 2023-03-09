const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const myEmitter1 = new EventEmitter();
const myEmitter2 = new EventEmitter();
const myEmitter3 = new EventEmitter();

const obj = {type: 'text', data: 'Hello developper', date: '2020-09-01'};

myEmitter.on('test', () => {
    console.log('success1');
    console.log("-----");
});

myEmitter.on('test', () => {
    console.log('success2');
    console.log("-----");
});

myEmitter1.on('test', () => {
    console.log('success3');
    console.log("-----");
});

myEmitter2.on('test', (arg1, arg2, arg3) => {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log("-----");
})

myEmitter2.on('test', (arg1, arg2) => {
    console.log(arg1);
    console.log(arg2);
    console.log("-----");
})

myEmitter2.on('test', (arg1, arg2, arg3, arg4) => {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log(arg4);
    console.log("-----");
})

myEmitter3.on('test', (info) => {
    console.log(info);
});

myEmitter.emit('test');
myEmitter2.emit('test', 'apple', 'orange', 'kiwi');
myEmitter3.emit('test', obj);