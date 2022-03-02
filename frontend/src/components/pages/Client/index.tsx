// External libraries
import React, {
	useEffect, useState 
} from 'react'

// Components
import Sidebar from '../../common/Sidebar'
import ClientModal from './components/ClientModal'

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
	const [ isOpenClientModal, setIsOpenClientModal ] = useState(false)

	const handleCloseClientModal = () => {
		setIsOpenClientModal(false)
	}

	const [ clients, setClients ] = useState([])

	useEffect(() => {
		api
			.get('/clients')
			.then((response) => setClients(response.data))
			.catch((err) => {
				console.log('Opa! Parece que houve um erro em ', err)
			})
	}, [])

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
			<FloatButton 
				onClick={() => setIsOpenClientModal(true)}
			>
				+
			</FloatButton>
			<ClientModal
				isOpen={isOpenClientModal}
				onRequestClose={handleCloseClientModal}
			/>
		</Container>
	)
}

export default Client
