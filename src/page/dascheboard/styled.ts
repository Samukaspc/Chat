import styled from 'styled-components';

export const TopBar = styled.div`
width: 100%;
display: flex;
background-color:#6db5ef ;
height: 10vh;
img {
    margin-left: 10px;
}
`
export const MenuLateral = styled.div`
display: flex;
width: 20%;
display: flex;
background-color: w;
`
export const ConponentCenter = styled.div`
width: 100%;
display: flex;
`
export const Status = styled.div`
width: 100%;
display: flex;
background-color: #E6E6FA;
`
export const Daschebord = styled.div`
border-radius: 5px;
padding: 20px;
margin: 10px;
width: 100%;
background-color: white ;
input {
    width: 170px;
    margin: 0 10px;
    box-shadow: 0px 0px 2px 0px #000000;
}
button {
    margin: 0 10px;
    color: green;
    font-size: medium;
    color: white;
}
`
export const Center = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`

export const EndTop = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
margin-right: 10px;
align-items: center;
`
export const StartTop = styled.div`
width: 100px;
display: flex;
justify-content: flex-start;
align-items: center;
img {
    margin-right: 10px;
    width: 100px;
}
`

export const CenterGrid = styled.div`
width: 100%;
display: grid;
justify-content: center;
label {
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
}
`