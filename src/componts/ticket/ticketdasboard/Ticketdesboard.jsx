import React from 'react'
import "./Ticketdesboard.css"

const Ticketdesboard = (props) => {
    return (
        <div className='dasboard'>

            <div className='row'>
                <div className='col-2'>
                    <div className='tile tile-all'>
                        <div className="tile-text">Total</div>
                        <div className="tile-number">{props.counts.total}</div>

                    </div>
                </div>
                <div className='col-2'>
                    <div className='tile tile-new'>
                        <div className="tile-text">New</div>
                        <div className="tile-number">{props.counts.new}</div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='tile tile-assigned'>
                        <div className="tile-text">Assigned</div>
                        <div className="tile-number">{props.counts.assigned}</div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='tile tile-inprogress '>

                        <div className="tile-text">In Progress</div>
                        <div className="tile-number">{props.counts.inprogress}</div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='tile tile-resolved '>

                        <div className="tile-text">Resolved</div>
                        <div className="tile-number">{props.counts.resolved}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticketdesboard