import React from 'react';

const Course = ({ title, description, instructor, price, imageSrc }) => {
    return (
        <div className="dls">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Instructor: {instructor}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Course;