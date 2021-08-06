import React from 'react'

export default function InputBar() {
    return (
       
            <form className="row g-2  mt-4" 
            style={{ width:'50%'}}>
                <div className="col-9" >
                    <input  type="email" class="form-control py-2" id="EmailInput" placeholder="Email Adress" />
                </div>     

                 <div className="col-1 ms-2" >
                    <button className="btn btn-primary py-2">Sumbit</button>
                </div>      
            </form> 
      
    )
}
