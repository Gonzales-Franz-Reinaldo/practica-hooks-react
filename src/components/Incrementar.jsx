
import PropTypes from 'prop-types'
import React from 'react';

export const Incrementar = React.memo(({ incrementar }) => {

    console.log("Me estoy redibujando");

    return (
        <button className='btn btn-primary' onClick={() => incrementar(10)}>+1</button>
    )
}
);



Incrementar.propTypes = {
    incrementar: PropTypes.func.isRequired,
}
