import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Text, Pressable, View} from 'react-native';
import {
  Modal,
  ModalContent,
  ModalContainer,
  ModalHead,
  ModalBody,
  ButtonsComponent,
  ButtonEdit,
  ButtonDelete,
  ButtonEmphasis,
  ButtonToFile,
  IconEdit,
  IconDelete,
} from './styles';

const ModalScreen = ({visible, modal, modalDelete, item, reload}) => {
  const list = useSelector(state => state.notes.list);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [emphasis, setEmphasis] = React.useState(false);

  React.useLayoutEffect(() => {
    if (list[item].emphasis) setEmphasis(true);
  }, []);

  const handleEditar = item => {
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

  const handleDelete = item => {
    modal();
    modalDelete();
  };

  const handleEmphasis = item => {
    setEmphasis(!emphasis);
    if (emphasis === false) {
      dispatch({
        type: 'EMPHASIS_NOTE',
        payload: {
          key: item,
        },
      });
    }
    if (emphasis === true) {
      dispatch({
        type: 'NOT_EMPHASIS_NOTE',
        payload: {
          key: item,
        },
      });
    }

    reload();
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
            <ButtonsComponent>
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
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'red'}}>
                    Excluir
                  </Text>
                </>
              </ButtonDelete>
            </ButtonsComponent>
            <ButtonsComponent>
              <ButtonEmphasis
                underlayColor="transparent"
                onPress={() => handleEmphasis(list[item])}>
                <>
                  <IconDelete
                    source={
                      list[item].emphasis
                        ? require(`../../assets/ordinary_note.png`)
                        : require(`../../assets/important_note.png`)
                    }
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: list[item].emphasis ? '#faa377' : 'purple',
                    }}>
                    {list[item].emphasis ? 'Não destacar' : 'Destacar'}
                  </Text>
                </>
              </ButtonEmphasis>
              <ButtonToFile underlayColor="transparent">
                <>
                  <IconDelete source={require('../../assets/secure.png')} />
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'blue'}}>
                    Arquivar
                  </Text>
                </>
              </ButtonToFile>
            </ButtonsComponent>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default ModalScreen;
