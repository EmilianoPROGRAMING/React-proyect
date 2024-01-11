import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    // console.log('render');

    const [ counter, setCounter ] = useState( value );

    const handBall = () => {

        setCounter( counter + 1 );
    }

    const notNumber = () => {

        setCounter( counter - 1 );
    }

    const resetNumber = () => {

        setCounter( value );
    }

    return (
    <>
        <h1>counterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ handBall }> +1 </button>
        <button onClick={ notNumber }> -1 </button>
        <button onClick={ resetNumber }> reset </button>


    </>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}