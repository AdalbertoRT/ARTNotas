import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  border-left-width: ${props => props.border || 0};
  border-left-color: red;
  padding-horizontal: 10px;
  padding-vertical: 5px;
`;

export const OptionsButton = styled.TouchableHighlight`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const OptionsIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const styles = StyleSheet.create({
  collapse: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fefede',
    borderTopLeftRadius: 15,
  },
  collapseHeader: {
    borderBottomColor: '#333',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  collapseHeaderTitle: {},
  collapseBody: {
    paddingLeft: 20,
  },
  collapseBodyText: {
    fontSize: 20,
    borderLeftColor: 'red',
    borderLeftWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'justify',
  },
});
