import React from 'react';

const ClassContainer = (WrappingComponent,classes) => {
    return (props)=>(
    <div className={classes}>
        <WrappingComponent {...props} />
    </div>
    )
};

export default ClassContainer;