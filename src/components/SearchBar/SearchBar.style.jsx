
import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display:flex;
  width:100%;
  padding-top: 1.2rem;
  & input[type="text"]{
     margin: 0;
     flex: 1;
  }
`
export const SearchContainer = styled.div`
   display: flex;
   width: 70%;
   flex-direction: column;
`

export const SearchResult = styled.div`
  z-index: 1;
  width: 75.5%;
  align-self: flex-end;
  border-bottom-left-radius: 1rem;
   border-bottom-right-radius: 1rem;
  background-color:white;
  padding: 1rem;
`

export const CustomSelect = styled.select`
margin: 0;
  flex:0.3;
`