import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
`;

export const Note = styled.View`
  flex: 1;
  background-color: #fefede;
  margin: 10px;
  border-top-left-radius: 15px;
`;
export const NoteHeader = styled.View`
  border-bottom-color: #333;
  border-bottom-width: 2px;
`;
export const NoteBody = styled.View`
  flex: 1;
`;

export const TitleInput = styled.TextInput`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  border-left-color: red;
  border-left-width: 2px;
  padding: 10px;
  color: #333;
`;
export const BodyInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  border-left-color: red;
  border-left-width: 2px;
  padding: 10px;
  color: #333;
  text-align: justify;
`;

export const SaveButton = styled.TouchableHighlight``;
export const SaveButtonImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
export const CloseButton = styled.TouchableHighlight``;
export const CloseButtonImage = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;
