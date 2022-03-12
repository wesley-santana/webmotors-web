import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import styled from 'styled-components';

const RSelectIcon = styled(Select)`
	flex: ${(props) => props.width};
	margin-left: ${(props) => props.mLeft};
	display: block;
	@media (max-width: 768px) {
		margin-left: 0;
		margin-bottom: 16px;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	color: #f3123c;
`;

export { Icon, RSelectIcon };
