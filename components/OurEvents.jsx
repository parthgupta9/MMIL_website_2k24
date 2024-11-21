import React from 'react';
import './OurEvents.css'

export const OurEvents=()=>{
    return(
        <div className="our-events-container">
            <h1 className="title">Our Events</h1>
            <div className="event-grid">
                <div className="event-card deencode-card">
                    <a href="https://www.youtube.com" className="event-link">
                    <img src="public/Frame 427318180.png" className="event-image"></img>
                    </a>
                </div>
                <div className="event-card logocon-card">
                    <a href="https://www.youtube.com" className="event-link">
                    <img src="public/logocon post 1.png" className="event-image"></img>
                    </a>
                </div>
                <div className="event-card hackocode-card">
                    <a href="https://www.youtube.com" className="event-link">
                    <img src="public/final pls 1.png" className="event-image"></img>
                    </a>
                </div>
                <div className="event-card valorant-card">
                    <a href="https://www.youtube.com" className="event-link">
                    <img src="public/Valorent flex 1.png" className="event-image"></img>
                    </a>
                </div>
                <div className="circles-left">
                    <img src="public/Frame 427318247.png" className="circle-left-image"></img>
                </div>
                <div className="circles-right">
                    <img src="public/Frame 427318248.png" className="circle-right-image"></img>
                </div>
                <div className="line-1">
                    <img src="public/Line 2.png" className="line-1-image"></img>
                </div>
            </div>
        </div>
    )
}