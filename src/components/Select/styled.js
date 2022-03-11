import Select from 'react-select';
import styled from 'styled-components';

const RSelect = styled(Select)`
	flex: ${(props) => props.width};
	margin-left: ${(props) => props.mLeft};
	display: block;
	@media (max-width: 768px) {
		margin-left: 0;
		margin-bottom: 16px;
	}
`;

export default RSelect;
