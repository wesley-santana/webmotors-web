import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Select from 'react-select';

const Tab = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin-top: 32px;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: row;
`;

const Text = styled.div`
	color: #828383;
	font-size: 24px;
`;

const Paragraph = styled.div`
	color: #828383;
	font-size: 16px;
`;

const Icon = styled(FontAwesomeIcon)`
	color: #828383;
`;

const Button = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 18px;
	padding: 8px;
	border-bottom: solid 1px #d0d0d0;
	&:hover {
		border-bottom: solid 3px #f3123c;
	}
	&:hover ${Text} {
		color: #f3123c;
	}
	&:hover ${Icon} {
		color: #f3123c;
	}
`;

const ButtonWarning = styled.button`
	width: 200px;
	height: 50px;
	border: solid 2px #ff6d00;
	border-radius: 3px;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	color: #ff6d00;
	&:hover {
		opacity: 0.7;
	}
`;

const TabContent = styled.div`
	background: #ffffff;
	padding: 32px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	border-radius: 3px;
	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 16px;
	margin-bottom: 16px;
`;

const RSelect = styled(Select)`
	flex: ${(props) => props.width};
	display: block;
	border-radius: 1;
`;

const ButtonDropDown = styled.button`
	background: transparent;
	border: none;
	color: #f3123c;
	& ${Icon} {
		color: #f3123c;
		margin-right: 8px;
	}
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;

const TextButtom = styled.button`
	background: transparent;
	border: none;
	color: #828383;
	font-size: 16px;
	&:hover {
		opacity: 0.7;
	}
`;

const ButtonDefault = styled.button`
	width: 300px;
	height: 50px;
	border-radius: 3px;
	font-size: 16px;
	font-weight: bold;
	color: #ffffff;
	border: none;
	cursor: pointer;
	background: #f3123c;
	&:hover {
		opacity: 0.7;
	}
`;

export {
	Tab,
	Button,
	TextWrapper,
	ButtonGroup,
	Text,
	Paragraph,
	Icon,
	ButtonWarning,
	TabContent,
	Row,
	RSelect,
	ButtonDropDown,
	TextButtom,
	ButtonDefault,
};
