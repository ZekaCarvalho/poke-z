import styled from  'styled-components'

export const Header = styled.div`
    position: sticky;
    top: 0px;
    padding: 20px 22%;
    display: flex;
    justify-content: space-around;
    background-color: #80b8f0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    align-items: center;
`
export const divSearch = styled.div`
    display: flex;
`


export const inputName = styled.input`
    outline: none;
    padding: 5px; 
    border: none;
    border-bottom-left-radius: 5px; 
    border-top-left-radius: 5px; 
    min-width: 300px;
`
export const imgSearch = styled.img`
width: 100%;
height: auto;
`

export const buttonSearch = styled.button`
    align-items: center;
    border: none;
    border-left: 1px solid black;
    border-top-right-radius: 5px; 
    border-bottom-right-radius: 5px; 
    display: flex;
    outline: none ;
    padding: 0 10px 0 10px;
    background-color: #e0e4e8
    transition: opacity 0.4s;   

&:hover{
    color: white;
    background-color: #3888f0
}
`