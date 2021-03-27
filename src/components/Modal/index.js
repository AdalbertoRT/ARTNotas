import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Text, Pressable, Alert} from 'react-native';
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

const ModalScreen = ({visible, modal, modalDelete, item}) => {
  const list = useSelector((state) => state.notes.list);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleEditar = (item) => {
    if (list[item]) {
      navigation.navigate('Edit', {
        title: 'Editar Nota',
        key: item,
        noteTitle: list[item].title,
        noteBody: list[item].description,
      });
      modal();
    } else {
      navigation.navigate('Home');
      modal();
      alert('Não é possivel editar essa nota. Tente novamente.');
    }
  };

  const handleDelete = (item) => {
    modal();
    modalDelete();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <ModalHead>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
              {list[item].title}
            </Text>
            <Pressable onPress={modal}>
              <Text style={{color: '#000', fontSize: 16}}>FECHAR</Text>
            </Pressable>
          </ModalHead>
          <ModalBody>
            <ButtonEdit
              underlayColor="transparent"
              onPress={() => handleEditar(item)}>
              <>
                <IconEdit source={require('../../assets/edit.png')} />
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: 'green'}}>
                  Editar
                </Text>
              </>
            </ButtonEdit>
            <ButtonDelete
              underlayColor="transparent"
              onPress={() => handleDelete(item)}>
              <>
                <IconDelete source={require('../../assets/delete.png')} />
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'red'}}>
                  Excluir
                </Text>
              </>
            </ButtonDelete>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default ModalScreen;
