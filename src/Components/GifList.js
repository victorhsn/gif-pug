import React from 'react';
import Gif from './Gif';
import GifNotFound from './GifNotFound';

const GifList = props => {

  const result = props.data;
  let gifs;
  
  if(result.length > 0) {
    gifs = result.map(gif => 
      <Gif 
        key={gif.id}
        url={gif.images.fixed_height.url}
        title={gif.title}
      />
    );
  } else {
    gifs = <GifNotFound/>
  }
  
  return(
    <ul className="gif-list">
      {gifs}
    </ul>
  );
};

export default GifList;