/* Cria os reducers para cada tipo de dado (Exemplo: userReducer – para dados do usuário)*/

/*Exemplo de state(dados) de usuário vindos de uma requisição, webservice etc*/

import uuid from 'react-native-uuid';

const initialState = {
  list: [
    {
      id: uuid.v4(),
      title: 'DevsNotes',
      description:
        'O App de Notas que todo Dev precisa! O App de Notas que todo Dev precisa! O App de Notas que todo Dev precisa! O App de Notas que todo Dev precisa!',
      emphasis: false,
      filed: false,
    },
    {
      id: uuid.v4(),
      title: 'BetoNotes',
      description: 'O App de Notas do Beto!',
      emphasis: false,
      filed: false,
    },
    {
      id: uuid.v4(),
      title: 'AnaNotes',
      description: 'O App de Notas da Ana!',
      emphasis: false,
      filed: false,
    },
  ],
};

export default (state = initialState, action) => {
  let newList = [...state.list];

  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        id: uuid.v4(),
        title: action.payload.title,
        description: action.payload.body,
        emphasis: false,
        file: false,
      });
      break;
    case 'EDIT_NOTE':
      if (newList[action.payload.id]) {
        newList[action.payload.id] = {
          title: action.payload.title,
          description: action.payload.body,
        };
      }
      break;
    case 'DELETE_NOTE':
      if (newList[action.payload.key]) {
        newList = newList.filter((item, index) => index != action.payload.key);
      }
      break;
    case 'EMPHASIS_NOTE':
      if (newList.includes(action.payload.key)) {
        newList.map(el => {
          if (el.id == action.payload.key.id) el.emphasis = true;
        });
      }
      break;
    case 'NOT_EMPHASIS_NOTE':
      if (newList.includes(action.payload.key)) {
        newList.map(el => {
          if (el.id == action.payload.key.id) el.emphasis = false;
        });
      }
      break;
  }

  let emphasisList = newList.filter(el => el.emphasis == true);
  let notEmphasisList = newList.filter(el => el.emphasis == false);
  notEmphasisList = notEmphasisList.sort(function (a, b) {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });

  let finalList = emphasisList.concat(notEmphasisList);

  return {...state, list: finalList};
};
