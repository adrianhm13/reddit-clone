import styled from "@emotion/styled";

export const AsideMain = styled.section({
  width: '100%',
  minHeight: '250px',
  backgroundColor: 'whitesmoke',
  borderRadius: '4px',
  boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`,
})
export const AsideTitle = styled.h2({
  margin: '0',
  fontSize: '1rem',
  fontWeight: '400',
  width: '100%',
  color: 'white',
  borderRadius: '4px 4px 0 0',
  padding: '1rem 0.5rem',
},
props => ({
  backgroundColor: props.color
})
)

export const AsideContent = styled.div({
  padding: '1rem',
  i: {
    color: '#5829a7',
    fontSize: '1.5rem',
    marginRight: '0.3rem',
  },
  p: {
    fontSize: '0.9rem',
    fontWeight: '100',
    margin: '0',
  },
  hr: {
    padding: '0',
    marginTop: '1rem',
    border: '0',
    height: '0',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  },
  button: {
    marginTop: '1rem',
    width: '100%',
  },
  div: {
    padding: '0.5rem',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
  },
  '& > div > p': {
    fontSize: '0.8rem',
    margin: '0',
    color: 'grey',
  }
})