const result = promiseFunction()

promiseFunction().then(function (result){
    console.log(`Промис ${typeof result === 'string' ? '' : 'НЕ'} работает ${typeof result === 'string' ? result : ''}`)
});