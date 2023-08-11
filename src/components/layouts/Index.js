import React from 'react'
import PropTypes from 'prop-types';
import Tracks from '../tracks/Tracks.js';
import Search from '../tracks/Search.js';

const Index = (props) => {
  return (
    <div>
      <Search />
      <Tracks />
    </div>
  )
}

export default Index;
