import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const Sidemenu = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <div className="container">
                    <a href='/' className='navbar-brand fw-bold'>Crmapp</a>

                </div>
                <hr />
                <div className="container">
                    <a href='/ticket' className='navbar-brand fw-bold'>Ticket</a>
                    <hr />
                </div>
                <hr />
                <div className="container">
                    <a href='/users' className='navbar-brand fw-bold'>user</a>
                    <hr />
                </div>
                <hr />
                


            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}

export default Sidemenu