import React from 'react';
import { components } from 'react-select';
import { RSelectIcon, Icon } from './styled';

function ValueContainer({ children, ...props }) {
	return (
		components.ValueContainer && (
			<components.ValueContainer {...props}>
				{!!children && (
					<Icon
						style={{ position: 'absolute', left: 6 }}
						icon={['fas', 'location-dot']}
					/>
				)}
				{children}
			</components.ValueContainer>
		)
	);
}

function SelectIcon({ className, options, iconVisible, ...props }) {
	const styles = {
		valueContainer: (base) => ({
			...base,
			paddingLeft: 24,
		}),
	};

	return (
		<RSelectIcon
			{...props}
			components={{ ValueContainer }}
			styles={styles}
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

export default SelectIcon;
