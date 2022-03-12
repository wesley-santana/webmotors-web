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

function SelectIcon({
	className,
	options,
	borderRadius,
	iconVisible,
	...props
}) {
	const styles = {
		valueContainer: (base) => ({
			...base,
			paddingLeft: 24,
		}),
		control: (base) => ({
			...base,
			borderRight: 0,
			boxShadow: 'none',
		}),
	};

	return (
		<RSelectIcon
			{...props}
			components={{ ValueContainer }}
			styles={styles}
			options={options}
			noOptionsMessage={() => `Ops, não encontramos`}
			theme={(theme) => ({
				...theme,
				borderRadius: borderRadius || 0,
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
