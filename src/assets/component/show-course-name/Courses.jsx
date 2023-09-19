import React from 'react';
import Coursename from './Coursename';

const Courses = ({select,totalCredit}) => {
    

    return (
        <div className=' '>
            {
                select.map(selectname=><Coursename key={selectname} coursename={selectname}></Coursename>)
            }
            <div className='border-t-2'>
            <h1 className='font-bold text-base mt-4  '>Total-Credit={totalCredit}</h1>
        
            </div>
                <h1 className='font-bold text-base mt-6 border-t-2'>Total-Price=$45000</h1>
         
           </div>
    );
};


export default Courses;