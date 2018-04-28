import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} 
         alt={props.title}/>
  </li>
);

export default Gif;