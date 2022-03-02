// External libraries
import React, {
	useEffect, useState 
} from 'react'

// Components
import Sidebar from '../../common/Sidebar'

// Services
import api from '../../../services/api'

// Styled
import {
	SidebarContent,
	Container,
	Content,
	FloatButton,
	Grid,
	Card
} from './styles'

const Client: React.FC = () => {
	const [ clients, setClients ] = useState([])

	useEffect(() => {
		api
			.get('/clients')
			.then((response) => setClients(response.data))
			.catch((err) => {
				console.log('Opa! Parece que houve um erro em ', err)
			})
	}, [])

	console.log('clients: ', clients)

	return (
		<Container>
			<SidebarContent>
				<Sidebar client={true} />
			</SidebarContent>
			<Content>
				<Grid>
					{clients.map((client) => {
						return (
							<Card key={client.id}>
								<h5>{client.name}</h5>
								<h6><span>CPF: </span>{client.cpf}</h6>
								<h6><span>CEP: </span>{client.cep}</h6>
								<h6><span>Logradouro: </span>{client.log}</h6>
								<h6><span>Bairro: </span>{client.district}</h6>
								<h6><span>Cidade: </span>{client.city} - {client.uf}</h6>
								{client.complement !== '' && client.complement !== null &&
									<h6><span>Complemento: </span>{client.complement}</h6>
								}
							</Card>
						)
					})}
				</Grid>
			</Content>
			<FloatButton onClick={() => null}>+</FloatButton>
		</Container>
	)
}

export default Client
