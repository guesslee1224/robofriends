import React from "react";
import Card from "./Card";

// Filtering Component

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error("Noooooo!")
    // }
    return (
        <>
            {robots.map((user, i, id, username) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        username={robots[i].username}
                        email={robots[i].email}
                    />
                )
            })}
        </>
    )
}

export default CardList;