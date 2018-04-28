import React from 'react';
import Gif from './Gif';
import GifNotFound from './GifNotFound';
import { withPugData } from './withPugData'

const GifList = ({ pugsData }) => {
  if (pugsData && pugsData.loading) return <p>Loading...</p>;

  return (
    <div>
      {pugsData.loading && <p>Loading...</p>}
      {pugsData.pugs.data === 0 && <GifNotFound />}
      <ul className="gif-list">
        {pugsData.pugs.data.map(gif => (
          <Gif
            key={gif.id}
            url={gif.images.fixed_height.url}
            title={gif.title}
          />
        )
        )}
      </ul>
    </div>
  );
};

export default withPugData(GifList, 'pug');