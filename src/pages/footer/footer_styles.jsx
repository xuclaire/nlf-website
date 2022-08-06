import styled from 'styled-components';

export const Box = styled.div`
padding: 30px 10px;
background: #2F353F;
position: absolute;
bottom: 0;
width: 100%;

@media (max-width: 1000px) {
padding: 30px 10px;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
max-width: 1000px;
margin: 0 20px;
`;

export const Container2 = styled.div`
display: flex;
flex-direction: row;
max-width: 1000px;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
margin-left: 60px;
`;

export const Column1 = styled.div`
display: grid;
align-content: center;
margin-left: 30px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(3,
1fr);
grid-gap: 20px;

@media (max-width: 20px) {
grid-template-columns: repeat(3,
1fr);
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 5px;
font-size: 14px;
font-family: Palatino;
text-decoration: none;

&:hover {
color: white;
text-decoration: underline;
transition: 200ms ease-in;
}
`;

export const Text = styled.p`
color: #fff;
margin-bottom: 1px;
font-size: 14px;
font-family: Palatino;
`;

export const Button = styled.button`
  border: 2px solid #F09C78;
  background: #F09C78;
  font-family: Palatino;
  font-size: 20px;
  white-space: nowrap;
  padding: 8px;  
`;
