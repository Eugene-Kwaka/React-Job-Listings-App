import React from 'react';

import { ClipLoader } from 'react-spinners';

// Destructuring the state by using the loading from JobListings component
const Spinner = ({loading}) => {

    const override = {
        display: 'black',
        margin: '100px auto'
    }
  return (
    <ClipLoader 
    
        color='#4338ca'
        loading = {loading}
        cssOverride={override}
        size = {150}
    />
  )
}

export default Spinner