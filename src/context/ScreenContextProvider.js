import React, { createContext, useState } from 'react';

export const ScreenContext = createContext();

const ScreenContextProvider = (props) => {
	const [screen, setScreen] = useState("+");
	const [sign, setSign] = useState('+');
	const [answer, setAnswer] = useState(0);

	const updateAnswer = (sign) => {
		if(!isNaN(parseInt(screen.substring(1))))
		if(sign === '+')
				setAnswer(answer + parseInt(screen.substring(1)));
			else if(sign === '-')
				setAnswer(answer - parseInt(screen.substring(1)));
			else if(sign === '*')
				setAnswer(answer * parseInt(screen.substring(1)));
			else if(sign === '/')
				setAnswer(answer / parseInt(screen.substring(1)));
			else if(sign === '%')
				setAnswer(answer % parseInt(screen.substring(1)));
		};

	const updateScreen = (input) => {
		if(!isNaN(parseInt(input)))
		{
			setScreen(screen + input);
		}
		else if(input === '+')
		{
			updateAnswer(sign);
			setSign('+');
			setScreen('+');
		}
		else if(input === '-')
		{
			updateAnswer(sign);
			setSign('-');	
			setScreen('-');
		}
		else if(input === '*')
		{
			updateAnswer(sign);
			setSign('*');
			setScreen('*');
		}
		else if(input === '/')
		{
			updateAnswer(sign);
			setSign('/');
			setScreen('/');
		}
		else if(input === '%')
		{
			updateAnswer(sign);
			setSign('%');
			setScreen('%');
		}
		else if(input === '=')
		{
			updateAnswer(sign);
			setSign('+');
			setScreen('+');
		}
	};

return(
	<ScreenContext.Provider value={{screen:screen, updateScreen:updateScreen, answer: answer}}>
	{props.children}
	</ScreenContext.Provider>
	); 
};

export default ScreenContextProvider;