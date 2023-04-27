import styled from 'styled-components';

export const ProductToBuy = styled.div`
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  margin: 20px 20px;
  justify-items: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(80, 132, 120, 0.5);
  p {
    font-weight: 500;
    font-size: 20px;
  }
  img {
    border-radius: 10px;
    width: 150px;
    height: 150px;
  }
`;

export const EditQuantity = styled.span`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 24px;
  justify-content: center;
  align-items: center;
`;

export const EditQuantityButtons = styled.span`
  user-select: none;
  cursor: pointer;
  display: flex;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 25px;
  background: rgba(80, 132, 120, 0.25);
  border-radius: 10px;
  &:hover {
    background: rgba(80, 132, 120, 0.5);
  }
`;

export const DeleteButton = styled.span`
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;

  &:hover {
    color: red;
  }
`;
