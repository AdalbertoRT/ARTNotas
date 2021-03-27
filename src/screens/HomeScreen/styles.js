import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const AddButton = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const AddButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const NoteList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoNotes = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoNotesImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const NoNotesText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
