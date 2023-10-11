import React from 'react';

function Card({ id, content }) {
    return (
        <div className="card">
            {content}
        </div>
    );
}

export default Card;
