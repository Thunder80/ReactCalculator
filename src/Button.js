import React, { useContext } from 'react';
import './css/button.css';
import {ScreenContext} from './context/ScreenContextProvider';

const Button = ({value}) =>{
	const context = useContext(ScreenContext);
	return (
		<button className="button" onClick={() => context.updateScreen(value)}>
		{value}
		</button>
	);
};

export default Button;