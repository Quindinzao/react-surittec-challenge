// External libraries
import React from 'react'

// Styled
import {
	Container,
	Content
} from './styles'

interface QuestionsProps {
  question: string
}

const Questions: React.FC<QuestionsProps> = ({
	question 
}) => {
	return (
		<Container>
			<img src='/images/avatar.png' alt='avatar' />
			<Content>
				{question}
			</Content>
		</Container>
	)
}

export default Questions