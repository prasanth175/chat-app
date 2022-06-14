import React from 'react';
import Navs from './Navs';
import Title from './Title';

function MainProjectLayout({ Children }) {
  return (
    <div>
        <Title 
        title="Box Office" 
        subtitle="Are you looking for a movie or an actor" />
    <Navs />

    {Children}
  </div>
  )
}


export default MainProjectLayout;