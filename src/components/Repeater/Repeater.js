import React from 'react';
import './Repeater.sass';

const Repeater = ({ items, Item, onDelete, onDone }) => {
  let elements;
  if(items) {
    elements = items.map((item, index) => {
      return (
        <li key = {item.id}>
          <Item 
            task = {item}
            id = {index}
            onDelete = {() => onDelete(item.id)}
            onDone = {() => onDone(item.id)} />        
        </li>
      );
    });
  }  

  return(
    <ul className = 'repeater'>
      {elements}
    </ul>
  );
}

export default Repeater;