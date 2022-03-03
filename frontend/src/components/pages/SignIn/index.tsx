// External libraries
import React, {
	useState 
} from 'react'
import theme from '../../../styles/theme'
import Button from '../../common/Button'
import Input from '../../common/Input'

// Styled
import {
	Container, 
	Content,
	Form
} from './styles'
 
const SignIn: React.FC = () => {
	const [ username, setUsername ] = useState('')
	const [ password, setPassword ] = useState('')
	return (
		<Container>
			<Content>
				<Form>
					<Input
						placeholder='Username'
						onChange={event => setUsername(event.target.value)}
						type='email'
						name='answer'
						value={username}
						width='100%'
						maxWidth='480px'
						height='64px'
						paddingHorizontal='16px'
						color={theme.colors.text}
						backgroundColor={theme.colors.gray_300}
						border='none'
						borderRadius='12px'
					/>
					<Input
						placeholder='Senha'
						onChange={event => setPassword(event.target.value)}
						type='password'
						name='answer'
						value={password}
						width='100%'
						maxWidth='480px'
						height='64px'
						marginTop='8px'
						paddingHorizontal='16px'
						color={theme.colors.text}
						backgroundColor={theme.colors.gray_300}
						border='none'
						borderRadius='12px'
					/>
					<Button
						title='ENTRAR'
						width='100%'
						maxWidth='480px'
						height='64px'
						marginTop='8px'
						color={theme.colors.background}
						backgroundColor={theme.colors.primary}
						border='none'
						borderRadius='10px'
						fontSize='14px'
						fontWeight={600}
					/>
				</Form>
			</Content>
		</Container>
	)
}
 
export default SignIn