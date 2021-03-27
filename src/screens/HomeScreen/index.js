/* Nas telas (ex: página Home) conectamos as informações dos reducers passadas pelo Provider do redux */

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  Container,
  AddButton,
  AddButtonImage,
  NoteList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from './styles';
import ModalScreen from '../../components/Modal';
import ModalDelete from '../../components/Modal/modalDelete';
import {Note} from '../../components/Note';

export default () => {
  const navigation = useNavigation();
  const list = useSelector(state => state.notes.list);

  const [modal, setModal] = React.useState(false);
  const [modalDelete, setModalDelete] = React.useState(false);
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    navigation.setOptions({
      title: 'Suas Notas',
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate('Edit', {title: 'Nova Nota'})}>
          <AddButtonImage source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, []);

  const showModal = index => {
    setItem(index);
    setModal(!modal);
  };

  const listItem = ({item, index}) => (
    <Note data={item} index={index} modal={() => showModal(index)} />
  );

  return (
    <Container>
      {list.length > 0 ? (
        <NoteList
          style={{flex: 1, width: '100%'}}
          data={list}
          renderItem={listItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma anotação.</NoNotesText>
        </NoNotes>
      )}
      {modal && (
        <ModalScreen
          visible={modal}
          modal={() => setModal(!modal)}
          modalDelete={() => setModalDelete(!modalDelete)}
          item={item}
        />
      )}
      {modalDelete && (
        <ModalDelete
          item={item}
          visible={modalDelete}
          modalDelete={() => setModalDelete(!modalDelete)}
        />
      )}
    </Container>
  );
};
