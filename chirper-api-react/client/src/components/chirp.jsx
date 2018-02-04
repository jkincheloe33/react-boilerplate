import React from 'react';
import { Link} from 'react-router-dom';

const Chirp = (props) => {
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <p className="card-text">
                    {props.chirp.text}
                </p>

                <Link to={`/chirps/${props.chirp.id}`} className="SubmitBtn d-block mt-3 mb-3 w-100 btn btn-outline-secondary">See Details</Link>

            </div>
        </div>
    ); 
};

export default Chirp;
