import React from "react";


const HeadingBlock = (props) => {
    return (
        <div className={`heading-block ${[props.classes]}`}>
            <h2 className="heading">{props.headingTitle}</h2>
        </div>
    )
}

export default HeadingBlock;