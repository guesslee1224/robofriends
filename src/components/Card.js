import React from "react";

// Card Component

const Card = ({ name, email, id, username }) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <>
                <h2>{name}</h2>
                <h3>'{username}'</h3>
                <p>{email}</p>
            </>
        </div>
    );
}

export default Card;