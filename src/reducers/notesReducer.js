/* Cria os reducers para cada tipo de dado (Exemplo: userReducer – para dados do usuário)*/

/*Exemplo de state(dados) de usuário vindos de uma requisição, webservice etc*/
const initialState = {
  list: [
    {
      id: 1,
      title: 'DevsNotes',
      description:
        'O App de Notas que todo Dev precisa! O App de Notas que todo Dev precisa! O App de Notas que todo Dev precisa! O App de Notas que todo Dev precisa!',
    },
    {id: 2, title: 'BetoNotes', description: 'O App de Notas do Beto!'},
    {id: 3, title: 'AnaNotes', description: 'O App de Notas da Ana!'},
  ],
};

export default (state = initialState, action) => {
  let newList = [...state.list];

  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        description: action.payload.body,
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
  }

  return {...state, list: newList};
};
