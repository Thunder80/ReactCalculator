import React, { createContext, useState } from 'react';

export const ScreenContext = createContext();

const ScreenContextProvider = (props) => {
	const [screen, setScreen] = useState("+");
	let start = false;
	let n = 0;
	const [sign, setSign] = useState('+');
	const [answer, setAnswer] = useState(0);
	const [pressSign, setPressSign] = useState(false);

	const updateScreen = (input) => {
		if(!isNaN(parseInt(input)))
			start = true;
		if(!start)
		{
			if(input === '+')
			{
				setSign('+');
				setScreen('+');
			}
			else if(input === '-')
			{
				setSign('-');	
				setScreen('-');
			}
			else if(input === '*')
			{
				setSign('*');
				setScreen('*');
			}
			else if(input === '/')
			{
				setSign('/');
				setScreen('/');
			}
			else if(input === '%')
			{
				setSign('%');
				setScreen('%');
			}
		}
		else
		{
			if(!isNaN(parseInt(input)))
			{
				setScreen(screen + input);
				setPressSign(true);
			}
			else if(input === '+')
			{
				setSign('+');
				setScreen('+');
			}
			else if(input === '-')
			{
				setSign('-');	
				setScreen('-');
			}
			else if(input === '*')
			{
				setSign('*');
				setScreen('*');
			}
			else if(input === '/')
			{
				setSign('/');
				setScreen('/');
			}
			else if(input === '%')
			{
				setSign('%');
				setScreen('%');
			}
		}
	};

	return(
		<ScreenContext.Provider value={{screen:screen, updateScreen:updateScreen, answer: answer}}>
			{props.children}
		</ScreenContext.Provider>
	); 
};

export default ScreenContextProvider;