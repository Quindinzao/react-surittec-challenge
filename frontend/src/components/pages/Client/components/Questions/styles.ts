// External libraries
import styled from 'styled-components'
import mq from '../../../../../styles/breakpoint'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 72px;

  margin-top: 12px;
  
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
  ${mq({
		height: [
			'48px',
			'48px',
			'72px',
			'72px'
		],
		borderRadius: [
			'48px',
			'48px',
			'72px',
			'72px'
		]
	})}
  }
`

export const Content = styled.div`
  width: calc(100% - 84px);
  height: 100%;
  min-height: 72px;
  
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  background-color: ${theme.colors.gray_300};
  border-radius: 12px;
  
  font-size: 18px;
  
  @media screen and (max-width: 768px) {
    width: calc(100% - 56px);
  }

  ${mq({
		width: [
			'calc(100% - 56px)',
			'calc(100% - 56px)',
			'calc(100% - 84px)',
			'calc(100% - 84px)' 
		]
	})}
`