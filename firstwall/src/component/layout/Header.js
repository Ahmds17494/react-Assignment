import React from 'react'
import InputBar from './InputBar'
export default function Header({height , text}) {
    return (
        <div className="header d-flex justify-content-center
            align-items-center"
            style={{height:height}}>

            {/* background from Css */}
            
                <div className="d-flex justify-content-center
            align-items-center flex-column"
            style={{ width:'50%'}}>
                    {text}

                <InputBar />
                </div>
        </div>
    )
}
