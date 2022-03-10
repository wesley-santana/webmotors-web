import Select from 'react-select';
import styled from 'styled-components';

const RSelect = styled(Select)`
	flex: ${(props) => props.width};
	margin-left: ${(props) => props.mLeft};
	display: block;
`;

export default RSelect;
