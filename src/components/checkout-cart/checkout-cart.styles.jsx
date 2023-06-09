import styled from 'styled-components';

export const CheckoutCartContainer = styled.div`
  cursor: auto;
  background: rgb(167, 193, 187);
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  top: 44px;
  right: 0;
  border-radius: 30px 0 30px 30px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  overflow-y: scroll;
  align-items: center;
  span {
  }
  img {
    width: 30%;
  }
`;

export const NoItemTxt = styled.p`
  color: #2d4e46;
  font-size: 20px;
  font-weight: 400;
`;

export const Button = styled.button`
  font-family: 'Baloo 2';
  cursor: pointer;
  background: rgba(80, 132, 120, 0.3);
  outline: none;
  border: transparent;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  color: #002834;
  &:hover {
    background: rgba(80, 132, 120, 0.5);
  }
`;
