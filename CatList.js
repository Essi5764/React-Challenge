//This is a function component

import React from 'react';
 
const CatList = (props) => {
  console.log(props.cats)
  
 return (
   <div>
     {props.cats.map(cat => <li>{cat}</li> )}
   </div>
 )
}
 
export default CatList;