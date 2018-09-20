import React from 'react';
import Table from './table';
const student=[{student:"John",course:"Anatomy",grade:90},{student:"toby",course:"Anatomy",grade:40}
,{student:"MAthew",course:"Anatomy",grade:70}];
function App(){
   return(<div className="container">
       <h1>
       Student Grade Table
       </h1>
       <Table data={student}/>
       </div>);
}
export default App;

