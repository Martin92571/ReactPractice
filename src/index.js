import React from 'react';
import ReactDOM from 'react-dom';
function luckyNumber(){
    return Math.floor(Math.random() * 1000)+1;
}
function greeting(param){
    
    return <div className="container">
             <h1>Hello {param.user}</h1>
             <h2 className="text-muted">Your lucky number is {param.luckyNumber}</h2>
            </div>
}const user={
    user:"Martin",
    luckyNumber:luckyNumber(),
};
ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
