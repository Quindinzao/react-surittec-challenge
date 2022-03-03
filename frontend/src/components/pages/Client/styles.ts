// External libraries
import styled from 'styled-components'

// Styled
import mq from '../../../styles/breakpoint'
import theme from '../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

	${mq({
		padding: [
			'16px',
			'2rem',
			'5rem',
			'5rem'
		]
	})}
`

export const SidebarContent = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  background-color: transparent;

  ${mq({ 
		width: [
			'fit-content',
			'fit-content',
			'17.5rem',
			'17.5rem' 
		],
		height: [
			'100%',
			'100%',
			'fit-content',
			'fit-content' 
		]
	})};
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Grid = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

	h5 {
		margin-bottom: 16px;
		color: ${theme.colors.primary};
		text-align: center;
	}

	h6 {
		margin-bottom: 8px;
	}

	span {
		color: ${theme.colors.tertiary}
	}

  ${mq({
		gridTemplateColumns: [
			'1fr',
			'1fr',
			'1fr 1fr',
			'1fr 1fr 1fr'
		]
	})}
`

export const Card = styled.div`
  height: 280px;

  padding: 16px;

  background-color: ${theme.colors.gray_700};
  border-radius: 12px;
`

export const FloatButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.primary};
  border: none;

  color: ${theme.colors.background};

  position: fixed;
  bottom: 32px;
  right: 32px;

  transition: 0.5s;

  &:hover {
    filter: brightness(70%)
  }

  ${mq({
		width: [
			'54px',
			'54px',
			'100px',
			'100px'
		],
		height: [
			'54px',
			'54px',
			'100px',
			'100px'
		],
		borderRadius: [
			'54px',
			'54px',
			'100px',
			'100px' 
		],
		fontSize: [
			'24px',
			'24px',
			'50px',
			'50px'
		],
		cursor: [
			'none', 
			'none', 
			'pointer', 
			'pointer'
		]
	})}
`
