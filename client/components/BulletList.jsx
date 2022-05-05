import React from 'react';

function BulletList({items}) {
return (
  <ul className="bullet-list">
    {items.map((item) => <li>{item}</li>)}
  </ul>
  );
}

export default BulletList;