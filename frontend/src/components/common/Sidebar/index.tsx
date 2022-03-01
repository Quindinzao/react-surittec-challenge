// External libraries
import React, {
	useState 
} from 'react'

// Assets
import ReactIcon from '../../../assets/images/reactjs-icon.svg'

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
	registerClient?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({
	home,
	client,
	registerClient
}) => {
	const [ isActive, setIsActive ] = useState(false)
	return (
		<Container isActive={isActive}>
			<ContentImage isActive={isActive}>
				<ReactIcon />
			</ContentImage>
			<Content isActive={isActive}>
				<h5>MENU</h5>
				<Link href='/' isActive={home}>
          HOME
				</Link>
				<Link href='/client' isActive={client}>
          CLIENT
				</Link>
				<Link href='/registerclient' isActive={registerClient}>
          REGISTER CLIENT
				</Link>
			</Content>
			<ButtonMenu onClick={() => setIsActive(!isActive)}>
        &#9776;
			</ButtonMenu>
		</Container>
	)
}

export default Sidebar
