import React from 'react';
import * as S from './styled';
import logo from '../../assets/logo.png';

function Header() {
	return (
		<S.Header>
			<S.Logo src={logo} />
		</S.Header>
	);
}

export default Header;
