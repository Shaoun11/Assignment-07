import React from 'react';

const Card = ({showcart,selecthandle}) => {

   const {img,name,title,price,credit}=showcart;
 

    return (
        <div className=''>
            <div className="card w-[315px] h-[417px] m-3 bg-base-100 shadow-2xl">
            <img className='rounded-lg w-[320px] h-[170px]' src={img} />
                
                    <h2 className="text-xl mt-3 font-semibold ml-4">{name}</h2>
                    <p className='ml-4 mt-2  font-medium text-[#1C1B1B99]'>{title}</p>
                    <div className='flex mt-3 mb-3'>
                    <div className='flex ml-[12px]'>
                        <div >
                            <img src="./dollericon.svg" alt="" />
                        </div>
                        <div>
                           <h2> Price:{price}</h2>
                        </div>
                    </div>
                    <div className="flex ml-16">
                        <div>
                            <img src={'./book.svg'} alt="" />
                        </div>
                        <div>
                            <h1>Credit:{credit}hr</h1>
                        </div>
                    </div>
                    </div>
                   <div className='flex justify-center'>
                    
                   <button 
                   onClick={()=>selecthandle(showcart)}
                   className="btn bg-[#2F80ED] btn-outline w-[295px] text-white ">Select</button>
                   
                   </div>
               
            </div>
          
        </div>
    );
};

export default Card;