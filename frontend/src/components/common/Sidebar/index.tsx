// External libraries
import React, {
	useState 
} from 'react'

// Styled
import {
	ButtonMenu,
	Container,
	Content,
	ContentImage,
	Link
} from './styles'

interface SidebarProps {
  home?: boolean
	client?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({
	home,
	client
}) => {
	const [ isActive, setIsActive ] = useState(false)
	return (
		<Container isActive={isActive}>
			<ContentImage isActive={isActive}>
				<img src='/images/reactjs-icon.svg' alt='react icon' />
			</ContentImage>
			<Content isActive={isActive}>
				<h5>MENU</h5>
				<Link href='/' isActive={home}>
          INÍCIO
				</Link>
				<Link href='/client' isActive={client}>
          CLIENTE
				</Link>
			</Content>
			<ButtonMenu onClick={() => setIsActive(!isActive)}>
        &#9776;
			</ButtonMenu>
		</Container>
	)
}

export default Sidebar
