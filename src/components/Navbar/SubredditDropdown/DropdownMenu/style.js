import styled from "@emotion/styled";

export const SubredditToggleButton = styled.button({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '1rem',
  alignItems: 'center',
  backgroundColor: 'white',
  border: '1px solid white',
  transition: '0.7s',
  width: '80%',
  padding: "0.3rem",
  cursor: 'pointer',
  '@media (max-width: 524px)': {
    width: '100%',
    padding: '0.5rem',
  },
  '@media (min-width: 1024px)': {
    width: '70%',
  },
  ':hover': {
    border: '1px solid #e1e1e1',
  },
  ':focus': {
    border: '1px solid #e1e1e1',
  },
  'i': {
    color: '#838383',
    fontSize: '1.2rem',
  },
  'h3': {
    fontSize: '0.9rem',
    color: '#4d4d4d',
    padding: '0',
    margin: '0',
  },
})

export const SubredditToggleContainer = styled.div({
  width: "100%"
})


