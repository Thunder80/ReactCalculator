import React, { useContext } from 'react';
import './css/iofield.css';
import {ScreenContext} from './context/ScreenContextProvider';

const Iofield = () =>{
	const context = useContext(ScreenContext);
	return (
		<div className="screen">
			<input value={context.answer} type="text" className="answer" readOnly/><br/>
			<input value={context.screen} className="iofield" type="text" readOnly/>
		</div>
	);
}

export default Iofield;