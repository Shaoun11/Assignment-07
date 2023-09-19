import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Credit from './assets/component/Credit'
import Card from './assets/component/Card'
import Courses from './assets/component/show-course-name/courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [card,setcard]=useState([]);
    const [select, setselected]=useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    

    const selecthandle=selectbtn=>{
     
      const exist=select.find((item)=>item.id==selectbtn.id )


      let credit = selectbtn.credit;

      if(exist){
        return toast.warning ("Sorry, You're Already Selected")
      }
      else{
        select.forEach((item) => {
          credit = credit + item.credit;
        });

        const totalremaining=20-credit;
        if(credit>20){
          return toast.error("You have no Credit")
        }
        else{
          setTotalCredit(credit);
          setRemaining(totalremaining);
  
          setselected([...select,selectbtn]);
        }
        
      }

      

    };

  useEffect(()=>{
      fetch('./Coursedata.json')
      .then(res=>res.json())
      .then(data=>setcard(data))
      
  },[]);

  return (
    <>
     <h1 className='text-3xl font-bold ml-[450px] mt-7'>Course Registration</h1>
  <div className='flex  mx-10'>
    
  <div className='md:w-4/5 grid grid-cols-3 p-12'>
        {

           card.map((cart)=><Card 
           selecthandle={selecthandle}
           showcart={cart}></Card>)
           
         }
  
     
        
         </div>
       
    <div>
     
    <Credit remaining={remaining}></Credit>
   
    <Courses select={select}  totalCredit={totalCredit}></Courses>
    </div>
  </div>
  <ToastContainer ></ToastContainer>
  
    </>
  )
}

export default App