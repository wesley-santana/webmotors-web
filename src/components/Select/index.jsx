import React from 'react';
import RSelect from './styled';

function Select({ className, options, ...props }) {
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
					primary: '#f3123c',
				},
			})}
		/>
	);
}

export default Select;
