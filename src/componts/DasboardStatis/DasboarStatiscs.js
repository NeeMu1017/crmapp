import React from 'react'
import "./DasboarStatisc.css"

const DasboarStatiscs = (props) => {
    return (
        <div className='dasboard'>
            
            <div className='row'>
                <div className='col-3'>
                    <div className='tile tile-all'>
                        <div className="tile-text">Total</div>
                        <div className="tile-number">{props.counts.total}</div>

                    </div>
                </div>
                <div className='col-3'>
                    <div className='tile tile-new'>
                        <div className="tile-text">New</div>
                        <div className="tile-number">{props.counts.new}</div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='tile tile-accepted'>
                        <div className="tile-text">Accepted</div>
                        <div className="tile-number">{props.counts.accepted}</div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='tile tile-rejected '>
                        
                        <div className="tile-text">Rejected</div>
                        <div className="tile-number">{props.counts.rejected}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DasboarStatiscs