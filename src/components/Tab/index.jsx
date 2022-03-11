import React from 'react';
import Checkbox from '../CheckBox';
import Select from '../Select';

import * as S from './styled';

function Tab() {
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
		{ label: 'Pará PA', value: '' },
		{ label: '', value: '' },
	];

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
							<Select placeholder="Onde" width="3" options={locationsOptions} />
							<Select placeholder="Raio" width="1" />
						</S.Row>
						<S.Row>
							<Select placeholder="Ano desejado" width="2" />
							<Select placeholder="Faixa de preço" width="2" mLeft="16px" />
						</S.Row>
					</S.Column>
					<S.Column>
						<S.Row>
							<Select placeholder="Marca" width="1" mLeft="16px" />
							<Select placeholder="Modelo" width="1" mLeft="16px" />
						</S.Row>
						<S.Row>
							<Select placeholder="Versão" width="1" mLeft="16px" />
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
