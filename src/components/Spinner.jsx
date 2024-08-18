import React from 'react';
import { ClipLoader } from 'react-spinners';


const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
};

const Spinner = ({loading}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#4338ca" size={150} loading={loading} cssOverride={override} />
    </div>
  );
}

export default Spinner