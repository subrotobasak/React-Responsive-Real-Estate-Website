import React from 'react';
import './GetStarted.css'

const GetStarted = () => {
    return (
        <section className="g-wrapper">
            <div className="g-container paddings innerWidth">
                <div className='flexColCenter inner-container'>
                    <span className='primaryText'>Get started with Homyz</span>
                    <span className='secondryText'>Subscribe and find super attractive price quotes from us. <br />
                    Find your residence soon</span>
                    <button className='button'>
                        <a href="mailto:basaksubroto@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;