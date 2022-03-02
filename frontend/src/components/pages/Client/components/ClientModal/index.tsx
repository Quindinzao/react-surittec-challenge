// External libraries
import React, {
	useEffect,
	useState
} from 'react'
import ReactModal from 'react-modal'

// Components
import Button from '../../../../common/Button'
import Input from '../../../../common/Input'
import Questions from '../Questions'

// Utils
import clientchatbot from '../../../../../utils/clientchatbot'

// Styled
import {
	ContainerTitle,
	Content
} from './styles'
import theme from '../../../../../styles/theme'
import api from '../../../../../services/api'

interface ClientModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const ClientModal: React.FC<ClientModalProps> = ({
	isOpen,
	onRequestClose
}) => {
	const [ id, setId ] = useState(0)
	const [ placeholderInput, setPlaceholderInput ] = useState('')
	const [ name, setName ] = useState(null)
	const [ cpf, setCpf ] = useState(null)
	const [ cep, setCep ] = useState(null)
	const [ log, setLog ] = useState(null)
	const [ district, setDistrict ] = useState(null)
	const [ city, setCity ] = useState(null)
	const [ uf, setUf ] = useState(null)
	const [ complement, setComplement ] = useState(null)

	const handleCreateClient = async () => {
		await api.post('/clients', {
			name: name,
			cpf: cpf,
			cep: cep,
			log: log,
			district: district,
			city: city,
			uf: uf,
			complement: complement
		})
	}

	useEffect(() => {
		if (clientchatbot[id].id === 0) 
			setPlaceholderInput('Nome')
		else if (clientchatbot[id].id === 1)
			setPlaceholderInput('CPF')
		else if (clientchatbot[id].id === 2)
			setPlaceholderInput('CEP')
		else if (clientchatbot[id].id === 3)
			setPlaceholderInput('Logradouro')
		else if (clientchatbot[id].id === 4)
			setPlaceholderInput('Bairro')
		else if (clientchatbot[id].id === 5)
			setPlaceholderInput('UF')
		else if (clientchatbot[id].id === 6)
			setPlaceholderInput('Cidade')
		else if (clientchatbot[id].id === 8)
			setPlaceholderInput('Complemento')
	})
	
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className='react-modal-content'
			overlayClassName='react-modal-overlay'
		>
			<ContainerTitle>
				<h3>Registro de Clientes</h3>
			</ContainerTitle>
			<form action='/client' method='post' onSubmit={handleCreateClient}>
				<Content>
					<Questions question={clientchatbot[id].question} />
				</Content>
				{clientchatbot[id].type === 'string' && 
					<Input
						placeholder={placeholderInput}
						onChange={event => {
							if (clientchatbot[id].id === 0)
								setName(event.target.value)
							else if (clientchatbot[id].id === 1)
								setCpf(event.target.value)
							else if (clientchatbot[id].id === 2)
								setCep(event.target.value)
							else if (clientchatbot[id].id === 3)
								setLog(event.target.value)
							else if (clientchatbot[id].id === 4)
								setDistrict(event.target.value)
							else if (clientchatbot[id].id === 5)
								setCity(event.target.value)
							else if (clientchatbot[id].id === 6)
								setUf(event.target.value)
							else if (clientchatbot[id].id === 8)
								setComplement(event.target.value)
						}}
						type='text'
						name='answer'
						width='100%'
						height='64px'
						paddingHorizontal='16px'
						color={theme.colors.text}
						backgroundColor={theme.colors.gray_300}
						border='none'
						borderRadius='12px'
						borderBottomLeftRadius='12px'
						borderTopLeftRadius='12px'
					>
						<Button
							title='ENVIAR'
							type='button'
							height='100%'
							paddingHorizontal='16px'
							color={theme.colors.text}
							backgroundColor={theme.colors.gray_300}
							border='none'
							borderTopRightRadius='12px'
							borderBottomRightRadius='12px'
							fontSize='14px'
							onClick={() => setId(id + 1)}
						/>
					</Input>
				}
				{clientchatbot[id].type === 'boolean' &&
					<div style={{
						display: 'flex'
					}}>
						<Button
							title='SIM'
							type='button'
							width='100%'
							height='54px'
							marginRight='2px'
							color={theme.colors.text}
							backgroundColor={theme.colors.gray_300}
							border='none'
							fontSize='14px'
							fontWeight={600}
							onClick={() => setId(id + 1)}
						/>
						<Button
							title='NÃO'
							type='button'
							width='100%'
							height='54px'
							marginLeft='2px'
							color={theme.colors.text}
							backgroundColor={theme.colors.gray_300}
							border='none'
							fontSize='14px'
							fontWeight={600}
							onClick={() => setId(id + 2)}
						/>
					</div>
				}
				{clientchatbot[id].type === 'finish' &&
					<div style={{
						display: 'flex',
						justifyContent: 'center'
					}}>
						<Button
							title='FINALIZAR'
							type='submit'
							width='230px'
							height='54px'
							marginLeft='2px'
							color={theme.colors.background}
							backgroundColor={theme.colors.primary}
							border='none'
							fontSize='14px'
							fontWeight={600}
						/>
					</div>
				}
			</form>
		</ReactModal>
	)
}

export default ClientModal