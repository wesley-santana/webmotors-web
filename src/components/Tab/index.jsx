import React, { useEffect, useState } from 'react';
import Checkbox from '../CheckBox';
import Select from '../Select';
import api from '../../services/api';
import * as S from './styled';
import SelectIcon from '../SelectIcon';

function Tab() {
	const [makesOptions, setMakesOptions] = useState([]);
	const [modelsOptions, setModelsOptions] = useState([]);
	const [versionsOptions, setVersionOptions] = useState([]);
	const [selectedMake, setSelectedMake] = useState('');
	const [selectedModel, setSelectedMoldel] = useState('');
	const [selectedVersion, setSelectedVersion] = useState('');
	const [selectdLocation, setSelectedLocation] = useState('');

	const locationsOptions = [
		{ label: 'Acre', value: 'AC' },
		{ label: 'Alagoas', value: 'AL' },
		{ label: 'Amapá', value: 'AP' },
		{ label: 'Amazonas', value: 'AM' },
		{ label: 'Bahia', value: 'BA' },
		{ label: 'Ceará', value: 'CE' },
		{ label: 'Distrito Federal', value: 'DF' },
		{ label: 'Espírito Santo', value: 'ES' },
		{ label: 'Goiás', value: 'GO' },
		{ label: 'Maranhão', value: 'MA' },
		{ label: 'Mato Grosso', value: 'MT' },
		{ label: 'Mato Grosso do Sul', value: 'MS' },
		{ label: 'Minas Gerais', value: 'MG' },
		{ label: 'Pará', value: 'PA' },
		{ label: 'Paraíba', value: 'PB' },
		{ label: 'Paraná', value: 'PR' },
		{ label: 'Pernambuco', value: 'PE' },
		{ label: 'Piauí', value: 'PI' },
		{ label: 'Rio de Janeiro', value: 'RJ' },
		{ label: 'Rio Grande do Norte', value: 'RN' },
		{ label: 'Rio Grande do Sul', value: 'RS' },
		{ label: 'Rondônia', value: 'RO' },
		{ label: 'Roraima', value: 'RR' },
		{ label: 'Santa Catarina', value: 'SC' },
		{ label: ' São Paulo', value: 'SP' },
		{ label: 'Sergipe', value: 'SE' },
		{ label: 'Tocantins', value: 'TO' },
	];

	const radiusOptions = [
		{ label: '25km', value: 25 },
		{ label: '50km', value: 50 },
		{ label: '75km', value: 75 },
		{ label: '100km', value: 100 },
	];

	const yearOptions = [
		{ label: '2015', value: 2015 },
		{ label: '2016', value: 2016 },
		{ label: '2017', value: 2017 },
		{ label: '2018', value: 2018 },
	];

	const priceOptions = [
		{ label: '0 - 5.000', value: { min: 0, max: 5000 } },
		{ label: '5.000 - 10.000', value: { min: 5000, max: 10000 } },
		{ label: '10.000 - 15.000', value: { min: 10000, max: 15000 } },
		{ label: '15.000 - 20.000', value: { min: 15000, max: 2000 } },
	];

	const parseMake = (makes) =>
		makes.map(({ Name, ID }) => ({ label: Name, value: ID }));

	const getModels = (id) => {
		api
			.get(`/Model?MakeID=${id}`)
			.then((response) => setModelsOptions(response.data));
	};

	const getVersions = (id) => {
		api
			.get(`/Version?ModelID=${id}`)
			.then((response) => setVersionOptions(response.data));
	};
	const handleChangeMakes = (make) => {
		setModelsOptions([]);
		setSelectedMoldel('');
		setVersionOptions([]);
		setSelectedVersion('');
		setSelectedMake(make);
		getModels(make.value);
	};

	const handleChangeModels = (model) => {
		setVersionOptions([]);
		setSelectedVersion('');
		setSelectedMoldel(model);
		getVersions(model.value);
	};

	const handleChangeVersions = (version) => {
		setSelectedVersion(version);
	};

	const handleChangeLocations = (location) => {
		setSelectedLocation(location);
	};

	useEffect(() => {
		api.get('/Make').then((response) => setMakesOptions(response.data));
	}, []);

	return (
		<>
			<S.Tab style={{ justifyContent: 'space-between', alignItems: 'center' }}>
				<S.ButtonGroup>
					<S.Button>
						<S.Icon icon={['fas', 'car']} size="xl" />
						<S.TextWrapper>
							<S.Paragraph>COMPRAR</S.Paragraph>
							<S.Text>CARRO</S.Text>
						</S.TextWrapper>
					</S.Button>
					<S.Button>
						<S.Icon icon={['fas', 'motorcycle']} size="xl" />
						<S.TextWrapper>
							<S.Paragraph>COMPRAR</S.Paragraph>
							<S.Text>MOTO</S.Text>
						</S.TextWrapper>
					</S.Button>
				</S.ButtonGroup>
				<S.ButtonWarning>Vender meu carro</S.ButtonWarning>
			</S.Tab>
			<S.TabContent>
				<S.Row style={{ padding: '8px' }}>
					<Checkbox label="Novos" value checked />
					<Checkbox label="Usados" value checked />
				</S.Row>
				<S.Row>
					<S.Column>
						<S.Row>
							<SelectIcon
								placeholder="Onde"
								width="3"
								iconVisible
								options={locationsOptions}
								value={selectdLocation}
								onChange={handleChangeLocations}
							/>
							<Select placeholder="Raio" width="1" options={radiusOptions} />
						</S.Row>
						<S.Row>
							<Select
								placeholder="Ano desejado"
								width="2"
								options={yearOptions}
							/>
							<Select
								placeholder="Faixa de preço"
								options={priceOptions}
								width="2"
								mLeft="16px"
							/>
						</S.Row>
					</S.Column>
					<S.Column>
						<S.Row>
							<Select
								placeholder="Marca"
								width="1"
								mLeft="16px"
								value={selectedMake}
								onChange={handleChangeMakes}
								options={parseMake(makesOptions)}
							/>
							<Select
								placeholder="Modelo"
								value={selectedModel}
								onChange={handleChangeModels}
								options={parseMake(modelsOptions)}
								width="1"
								mLeft="16px"
							/>
						</S.Row>
						<S.Row>
							<Select
								placeholder="Versão"
								options={parseMake(versionsOptions)}
								value={selectedVersion}
								onChange={handleChangeVersions}
								width="1"
								mLeft="16px"
							/>
						</S.Row>
					</S.Column>
				</S.Row>
				<S.Row
					style={{ justifyContent: 'space-between', alignItems: 'center' }}
				>
					<S.ButtonDropDown>
						<S.Icon icon={['fas', 'angle-right']} />
						Busca Avançada
					</S.ButtonDropDown>
					<S.ButtonsWrapper>
						<S.TextButtom>Limpar filtros</S.TextButtom>
						<S.ButtonDefault>VER OFERTAS</S.ButtonDefault>
					</S.ButtonsWrapper>
				</S.Row>
			</S.TabContent>
		</>
	);
}

export default Tab;
