import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
export const SubredditMenu = styled.div({
  position: 'absolute',
  left: '0',
  top: '35px',
  zIndex: '25',
  width: '100%',
  height: '450px',
  backgroundColor: 'white',
  boxShadow: '0px 18px 16px 0px rgba(0, 0, 0, 0.1)',
  overflowY: 'auto',
  'a': {
    textDecoration: 'none',
    color: 'black',
  }
})
const fadeIn = keyframes`
    from {opacity:0}
    to{opacity: 1}
`
export const Subreddit = styled.div({
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontWeight: '200',
  padding: '0.7rem',
  gap: '1rem',
  animationName: `${fadeIn}`,
  animationDuration: '1s',
  'img': {
    borderRadius: '50%',
    width: '24px',
    height: '24px',
  },
  ':hover': {
    backgroundColor: '#f0f0f0',
  }
})

export const Divider = styled.hr({
  padding: '0',
  margin: '0',
  border: '0',
  height: '0',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
})

