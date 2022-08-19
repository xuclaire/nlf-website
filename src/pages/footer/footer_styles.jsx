import styled from 'styled-components';

export const Box = styled.div`
  padding: 30px 10px;
  background: #2f353f;
  bottom: 0;
  width: 100%;
  position: 'fixed';
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding: 30px 10px;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 1000px;
  margin: 0 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 102px;
  max-width: 300px;
`;

export const Column1 = styled.div`
  display: grid;
  align-content: center;
  margin-left: 157px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 200px 340px 200px 100px 1fr;
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
  margin-bottom: 2px;
  font-size: 14px;
  font-family: Palatino;
`;

export const Button = styled.button`
  border: 2px solid #f09c78;
  background: #f09c78;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
  padding: 8px;
  border-radius: 30px;
`;
