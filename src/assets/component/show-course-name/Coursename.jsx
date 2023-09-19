import React from 'react';

const Coursename = ({coursename}) => {
    console.log(coursename);
    const{name}=coursename;
    return (
        <div>
            
            <h1 className='text-[#1C1B1B99] font-medium text-lg mt-3 mb-4'>{name}</h1>
            
        </div>
    );
};

export default Coursename;