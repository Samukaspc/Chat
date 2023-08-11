import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: linear-gradient(to top, #cce7f0, #b4eef5, #9df5ee, #92fadd, #99fdc2);
  
  
`;

export const LoginForm = styled.form` 
  width: 400px;
  background-color: azure;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  h1  {
    text-align: center;
}
  a {
    text-decoration: none;
  }
 input {
   border: 1px solid #000000;
 }
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
    button {
        width: 100%;
        font-size: 20px;
        height: auto;
    }
`;


export const StartEnd = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    button {
        width: 200px;  
    }
`;


