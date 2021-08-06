import React,{useEffect , useState } from 'react'
import axios from 'axios';
import './App.css';

export default function MyBooks() {

    const [ myData , setMyData]= useState([]);
   
    
    


    const getData = async()=>{
        try {
            let res = await axios.get('http://localhost:3003/myBooks'); 
            console.log(res.data);
            setMyData(res.data);
           
            
            

        } catch (error) {
            console.log(error);
        }
  }

  useEffect(()=>{
      getData();
  },[])
    return (
        
             <div>
                 <h1 className="title">My Books</h1>
                 <div className="container">
                 <div className="row">
                 { myData.map((myData,index) =>  
                 {
                 
                    
                return ( ((index+1)%3)!=0? <div className=" col-4">
                     <div className="bookContainer d-flex">
                         <div className="left-side justify-content-start"><img src={myData.Image} alt="xx"/> </div>
                         <div className="right-side justify-content-end ">
                             <span className="bookTitle">{myData.Title}</span>
                             <span className="bookContent">{myData.Author}</span>
                              { myData.OldPrice? 
                             <span className="bookOldPrice">{myData.OldPrice}</span> :""}<span className="bookPrice">{myData.Price}</span>
                         </div>
                         
                         


                     </div>
                     
                 </div> : 
                 
                 
                 (
                    <React.Fragment>
                       
                        <div className=" col-4">
                    <div className="bookContainer d-flex">
                        <div className="left-side justify-content-start"><img src={myData.Image} alt="xx"/> </div>
                        <div className="right-side justify-content-end ">
                            <span className="bookTitle">{myData.Title}</span>
                            <span className="bookContent">{myData.Author}</span>
                             { myData.OldPrice? 
                            <span className="bookOldPrice">{myData.OldPrice}</span> :""}<span className="bookPrice">{myData.Price}</span>
                        </div>
                        
                    </div>
                    
                </div>
                <hr className="gray-line"></hr>
                </React.Fragment>
                    
                    
                
                
                
                )
               

                )
                    
                          
                              } 




                 )}

        
                     </div>
                 </div>
                 





                      </div> 



 
           
    )
}
