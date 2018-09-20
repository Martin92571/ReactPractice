import React from 'react';
function Table(props){
  const students=props.data.map((student,index)=>{
      console.log(student);
      return (<tr k={index}>
             <td>{student.student}</td>
             <td>{student.course}</td>
             <td>{student.grade}</td>
             </tr>);
  });
    return(
    <table className="table">
    <thead className="thead-inverse">
    <tr>
    <th>Name</th>
      <th>Course</th> 
      <th>Grade</th>
    </tr>
    </thead>
    <tbody>
      {students}
    </tbody>
    
  </table>);
}
export default Table;