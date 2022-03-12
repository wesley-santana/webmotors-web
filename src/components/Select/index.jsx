import React from 'react';
import RSelect from './styled';

function Select({ className, options, iconVisible, ...props }) {
	return (
		<RSelect
			{...props}
			options={options}
			noOptionsMessage={() => 'Local não encontrado!'}
			theme={(theme) => ({
				...theme,
				borderRadius: 0,
				colors: {
					...theme.colors,
					primary25: '#ffffff',
					primary: '#444444',
				},
			})}
		/>
	);
}

export default Select;
