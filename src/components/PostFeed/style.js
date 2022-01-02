import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SectionMain = styled(Link)({
  textDecoration: 'none',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  minHeight: '250px',
  backgroundColor: 'whitesmoke',
  borderRadius: '4px',
  border: '1px solid #eeeeee',
  cursor: 'pointer',
  transition: '0.2s',
  boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`,
  ':hover': {
    border: '1px solid #8e9aaf',
  }
},
  props => ({
    maxHeight: props.media ? '600px' : '400px'
  })
)
export const SectionVotes = styled.div({
  minWidth: '8%',
  backgroundColor: '#eeeeee',
  borderRadius: '2px 0 0 2px',
})

export const SectionPost = styled.div({
  width: '93%',
  borderRadius: '0 2px 2px 0',
  display: 'flex',
  flexDirection: 'column',
})

