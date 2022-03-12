import React from 'react';
import RSelect from './styled';

function Select({ className, options, borderRadius, message, ...props }) {
	return (
		<RSelect
			{...props}
			options={options}
			noOptionsMessage={() =>
				message ? `Ops, não encontramos ${message}` : ''
			}
			theme={(theme) => ({
				...theme,
				borderRadius: borderRadius || 3,
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
