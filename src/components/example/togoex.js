import React,{useState} from 'react';

// const Toggle = () => {
//     return (
//         <div className='toggle'>
            
        

//         </div>
//     );
// };



//stateLess f component : component nhưng ko sử dụng state 
   
//stateFul f component : component nhưng có sử dụng state 

function Toggle () {
    //1.enabling state: useState (initial value) 
    //2.initialize state: useState (false) 
    //3.reading state: 
    //4. update state:

    const array = useState(false);
    console.log(array);
    return <div class="toggle"></div>;
}
export default Toggle; 


/////////////////////////////////////////////////////////
// import React,{useState} from 'react';
// function Toggle () {
//     // const array = useState(false);
//     // console.log(array);
//     // console.log(array[0]);
//     // console.log(array[1]);
//     // const arr = [1,2];
//     // console.log(arr[0], arr[1]);
//     // const [a, b] = [1, 2];
//     // console.log(a, b); 
//     const [on, setOn] = useState(false);
//     console.log(on, setOn);
//     return <div class="toggle"></div>;
// }
// export default Toggle;
//////////////////////////////////////////