import React from "react";

function studentCard({ name, level, career }) {
    return (
        <div>
            <h1>Student</h1>
            <div>
                <label>Name: </label>
                <label>{name}</label>
            </div>

            <div>
                <label>Level: </label>
                <label>{level}</label>
            </div>
            <div>
                <label>Career: </label>
                <label>{career}</label>
            </div>
        </div>
    );
}

export default studentCard;