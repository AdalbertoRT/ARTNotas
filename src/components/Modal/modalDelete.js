import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {
  Modal,
  ModalContent,
  ModalContainer,
  ModalHead,
  ModalBody,
  ButtonEdit,
  ButtonDelete,
  IconEdit,
  IconDelete,
} from './styles';

const ModalDelete = ({item, visible, modalDelete}) => {
  const list = useSelector((state) => state.notes.list);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <ModalHead>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
              Excluir Nota!
            </Text>
            <IconDelete source={require('../../assets/full-trash.png')} />
          </ModalHead>
          <ModalBody style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Deseja excluir a nota: *{list[item].title}*
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 20,
              }}>
              <ButtonEdit
                underlayColor="transparent"
                onPress={() => modalDelete()}
                style={{
                  borderWidth: 2,
                  borderColor: 'green',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: 'green'}}>
                  Cancelar
                </Text>
              </ButtonEdit>
              <ButtonDelete
                underlayColor="transparent"
                onPress={() => {
                  dispatch({
                    type: 'DELETE_NOTE',
                    payload: {
                      key: item,
                    },
                  });
                  modalDelete();
                }}
                style={{
                  borderWidth: 2,
                  borderColor: 'red',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'red'}}>
                  Excluir
                </Text>
              </ButtonDelete>
            </View>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default ModalDelete;
