import React from 'react'
import '../card.css'

export default function Card(props) {
    return (
        <div className="col-md-4 col-sm-6 d-flex align-items-center justify-content-between mb-1 p-2">
            <div className="" style={{backgroundColor:"#FFF", alignSelf:"normal",padding:"35px 15px 35px 15px",borderRadius:"20px"}} id="oneCard">
                
                <div className="card-body" style={{}}>
                    <h3><b>{props.title}</b> </h3>
                    <h5 style={{color:"gray"}}>{props.body}</h5>
                </div>
            </div>
        </div>

    )
}
