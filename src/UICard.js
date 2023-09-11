import React from 'react';
import './UICard.css';

const UICard = ({ title, avatar, tags, status, priority, date, statusBackgroundColor, priorityBackgroundColor, information, key }) => {
    return (
        <div key={key} className="ui-card" style={{height :information ? '280px' : '150px'}}>
            <div className="header">
                <h4 style={{fontFamily : 'Poppins'}}>{title}</h4>
                <img src={avatar} alt="User Avatar" />
            </div>
            {information && <div>
                need a frontend page for the invited user to set his basic details
                <br />
                -name
                <br />
                -username
                <br />
                -password and add plus icon after all the tags
            </div>}
            <div className="tags-container">
                {tags && tags.length > 0
                    && tags.map((item, index) => (
                        <div key={index} className="tags" style={{ borderColor: item.color, color: item.color }}>
                            {item.name}
                        </div>
                        
                    ))
                }
            </div>
            <div className="info">
                <div className="status" style={{ backgroundColor: statusBackgroundColor }}>{status}</div>
                <div className="priority" style={{ backgroundColor: priorityBackgroundColor }}>{priority}</div>
                <div className="date">{date}</div>
            </div>
        </div>
    );
};

export default UICard;
