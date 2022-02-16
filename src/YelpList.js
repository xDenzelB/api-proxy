import React from 'react';

export default function YelpList({ business }) {
  return (
    <div className='business-img'>
      {
        business.map((company, i) => <div className='business-item' key={company.name + i}>
          <p>{company.name}</p>
          <img src={company.image_url} />
        </div>)
      }
    </div>
  );
}
