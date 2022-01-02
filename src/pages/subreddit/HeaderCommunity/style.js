import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeaderCommunityBg = styled.div({
  width: '100%',
  minHeight: '5rem',
  marginTop: '2rem',
},
props => ({
  backgroundColor: props.color
})
)
export const HeaderCommunityDetails = styled.div({
  width: '100%',
  backgroundColor: 'white',
  minHeight: '5rem',
  position: 'sticky',
  top: '2rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  borderBottom: '1px solid #e6e6e9',
  borderTop: '1px solid #e6e6e9',
  transition: 'all 0.15s ease-in-out',
  zIndex : '1',
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    width: '50%',
    paddingLeft: '5rem',
    gap: '1rem',
    transition: '1.2s ease-in-out',
    '@media (max-width: 480px)': {
      justifyContent: 'flex-start',
      width: '100%',
      padding: '0.8rem',
    }
  },
  img: {
    border: '3px solid white',
    position: 'absolute',
    top: '-15px',
    left: '0',
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    transition: '0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95)',
    '@media (max-width: 475px)': {
      top: '0',
      position: 'relative',
      left: '15px',
      width: '72px',
      height: '72px',
    }
  },
  '@media (max-width: 524px)': {
    top: '3.5rem',
  }
})

export const CommunityHeaderText = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h2: {
    margin: '0',
    padding: '0',
    '@media (max-width: 1000px)': {
      display: 'none',
    }
  },
  h5: {
    margin: '0',
    color: 'grey',
  },
})

export const headerScroll = css({
  padding: '0.5rem',
  minHeight: '0.5rem',
  maxHeight: '3rem',
  top: '2.5rem',
  zIndex: '1',
  div: {
    margin: '0',
    '@media (max-width: 475px)': {
      width: '100%',
      paddingRight: '0.8rem',
    }
  },
  img: {
    top: '-35px',
    transform: 'translateY(30px)',
    width: '40px',
    height: '40px',
    '@media (max-width: 475px)': {
      position: 'relative',
      transform: 'translateY(0)',
      left: '15px',
      width: '45px',
      height: '45px',
    }
  },
  h2: {
    display: 'none',
  },
  '@media (max-width: 524px)': {
    top: '3.9rem',
  }
})

