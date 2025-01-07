import React from 'react';

// ex: const props = {
//     value: 'X', 
//     onClick:() => value
// }
  //ob destructuring 
//   const student = {
//     name:'doffy',
//     age:'23'
// };
// const name = student.name;
// const age = student.age;
// const {name, age} = student;
const Cell = (props) => {
  
    return (
        <div className="game-cell" 
            onClick={props.onClick}>
            {props.value} 
        </div>
    );
};

export default Cell;