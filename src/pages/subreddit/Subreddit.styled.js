import styled from "@emotion/styled";


export const Container = styled.div({
  paddingTop: '1rem',
  margin: 'auto',
  width: '50%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '@media (max-width: 760px)': {
    width: '90%',
    justifyContent: 'center',
  },
  '@media (max-width: 1024px)': {
    width: '100%',
  }
})

export const ContainerContent = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '50%',
  margin: 'auto',
  '@media (max-width: 760px)': {
    width: '90%',
    justifyContent: 'center',
  },
  '@media (max-width: 1024px)': {
    width: '100%',
  }
})

export const ContainerAside = styled.div({
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  '@media (max-width: 760px)': {
    display: 'none',
  }
})