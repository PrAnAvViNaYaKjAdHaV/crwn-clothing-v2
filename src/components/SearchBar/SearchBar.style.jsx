
import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display:flex;
  width:100%;
  padding-top: 1.2rem;
  & input[type="text"]{
     margin: 0;
     flex: 1;
     height: 100%;
  }
`
export const SearchContainer = styled.div`
   display: flex;
   width:100%;
   height: 3rem;
   margin-top: 1rem;
   flex-direction: column;
     @media screen and (max-width:800px) {
      width: 100%;
      height: 1rem;
  }
`

export const SearchResult = styled.div`
  z-index: 1;
  width:100%;
  align-self: flex-end;
  border-bottom-left-radius: 1rem;
   border-bottom-right-radius: 1rem;
  background-color:white;
  padding: 1rem;
`

export const CustomSelect = styled.select`
  margin: 0;
  flex:0.3;
  height:3rem;
`