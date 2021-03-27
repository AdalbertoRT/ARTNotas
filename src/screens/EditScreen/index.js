/* Nas telas (ex: página Home) conectamos as informações dos reducers passadas pelo Provider do redux */

import React from 'react';
// import {connect} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Container,
  Note,
  NoteHeader,
  NoteBody,
  TitleInput,
  BodyInput,
  SaveButton,
  SaveButtonImage,
  CloseButton,
  CloseButtonImage,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const list = useSelector(state => state.notes.list);
  const route = useRoute();
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const handleClose = () => {
    navigation.goBack();
  };

  const handleAdd = () => {
    if (title != '' && body != '') {
      if (route.params.title === 'Nova Nota') {
        dispatch({
          type: 'ADD_NOTE',
          payload: {
            title,
            body,
          },
        });
      } else {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            id: route.params.key,
            title,
            body,
          },
        });
      }
      navigation.goBack();
    } else {
      alert('Preencha o Título e o Texto');
    }
  };

  React.useEffect(() => {
    if (route.params?.key != undefined && list[route.params.key]) {
      setTitle(route.params.noteTitle);
      setBody(route.params.noteBody);
    }
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerRight: () => (
        <SaveButton underlayColor="transparent" onPress={handleAdd}>
          <SaveButtonImage source={require('../../assets/save.png')} />
        </SaveButton>
      ),
      headerLeft: () => (
        <CloseButton underlayColor="transparent" onPress={handleClose}>
          <CloseButtonImage source={require('../../assets/close.png')} />
        </CloseButton>
      ),
    });
  }, [title, body]);

  return (
    <Container>
      <Note>
        <NoteHeader>
          <TitleInput
            value={title}
            onChangeText={t => setTitle(t)}
            placeholder="Digite o Título"
            placeholderTextColor="#aaa"
            autoFocus={true}></TitleInput>
        </NoteHeader>
        <NoteBody>
          <BodyInput
            value={body}
            onChangeText={b => setBody(b)}
            placeholder="Digite o Texto"
            placeholderTextColor="#aaa"
            multiline={true}
            textAlignVertical="top"></BodyInput>
        </NoteBody>
      </Note>
    </Container>
  );
};

/* Essa função pega as informações do state do reducer e transforma em props para a Tela. Em outras palavras faz a leitura dos dados. */
// const mapStateToProps = (state) => {
//   return {
//     title: state.notes.title /* prop title */,
//     description: state.notes.description /* prop description */,
//   };
// };

// /* Essa função executa ações de acordo com os dados passados no dispatch para o state do reducer. Em outras palavras faz a escrita dos dados. Essas ações(métodos) se transformam em props para a tela. */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     /* prop setTitle() */
//     setTitle: (title) => dispatch({type: 'SET_TITLE', payload: {title: title}}),
//     /* prop setDescription() */
//     setDescription: (description) =>
//       dispatch({type: 'SET_DESCRIPTION', payload: {description: description}}),
//   };
// };

// // const styles = StyleSheet.create({
// //   title: {
// //     fontSize: 50,
// //     fontWeight: 'bold',
// //     marginVertical: 20,
// //     color: '#0033ff',
// //   },
// //   description: {
// //     fontSize: 20,
// //     color: '#FFFFFF',
// //     textAlign: 'center',
// //   },
// //   image: {
// //     width: 130,
// //     height: 120,
// //   },
// // });

// /* o export deve ser agora no connect, seguido da execução da tela */
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
