const SERCH_RESULT = 'SERCH_RESULT';

export const searchResult = () => ({ type: SERCH_RESULT });

const initialState = "";

const result = (state = initialState, action) => {
  switch (action.type) {
    case SERCH_RESULT:
      return state + 1;
    default:
      return state;
  }
};

export default result;