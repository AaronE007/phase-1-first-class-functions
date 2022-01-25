function callback(yolo){
    return yolo
}

function receivesAFunction(callback){
    callback()
}

function returnsAnAnonymousFunction(){
    return function (){

    }
}

function returnsANamedFunction(){
    return returnsAnAnonymousFunction
}