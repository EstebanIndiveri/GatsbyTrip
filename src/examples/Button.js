import styled from 'styled-components';
const color='blue'
const Button = styled.button`
color:${color};
background:#e1e1e1;
font-size:1rem;
padding:1rem;
margin:1rem;
border-radius:10px;
border:none;
cursor:pointer;
transition: opacity 300ms;
&:hover{
    transition:all 300ms;
    opacity:0.8;
}
`;
export default Button;