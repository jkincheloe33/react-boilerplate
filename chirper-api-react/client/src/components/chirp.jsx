import React from 'react';

const Chirp = (props) => {
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <p className="card-text">
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default Chirp;
