// External libraries
import React from 'react'

// Components
import Sidebar from '../../common/Sidebar'

// Styled
import {
	SidebarContent,
	Container,
	Content
} from './styles'

const Home: React.FC = () => {
	return (
		<Container>
			<SidebarContent>
				<Sidebar home={true} />
			</SidebarContent>
			<Content>
				<h2>ReactJS Structure</h2>
				<h5>A ReactJS + Next.js structure made by Quindinzão.</h5>
			</Content>
		</Container>
	)
}

export default Home
