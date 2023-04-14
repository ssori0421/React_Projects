const initialState = {
  contactList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action; // type과 payload를 action 객체로부터 뽑아쓰겠다
  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
