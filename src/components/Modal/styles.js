import styled from 'styled-components/native';

export const Modal = styled.Modal`
  flex: 1;
  padding: 20px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const ModalHead = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color: #333;
`;

export const ModalBody = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

export const ButtonEdit = styled.TouchableHighlight`
  align-items: center;
`;

export const ButtonDelete = styled.TouchableHighlight`
  align-items: center;
`;

export const IconEdit = styled.Image`
  width: 40px;
  height: 40px;
`;

export const IconDelete = styled.Image`
  width: 40px;
  height: 40px;
`;
