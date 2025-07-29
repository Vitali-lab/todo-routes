const inisialState = {
  inputText: "",
  updateNotes: false,
  notes: [],
  currentNote: [],
  loading: true,
};

export const appReducer = (state = inisialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INPUT_TEXT": {
      return { ...state, inputText: payload };
    }
    case "CURRENT_NOTE": {
      return { ...state, currentNote: payload };
    }
    case "UPDATE_NOTES": {
      return { ...state, updateNotes: payload };
    }
    case "GET_NOTES": {
      return { ...state, notes: payload };
    }
    case "NOTES_LOADING": {
      return { ...state };
    }
    case "ADD_NOTES": {
      return { ...state, notes: payload };
    }
    case "IS_LOADING": {
      return { ...state, loading: payload };
    }

    default:
      return state;
  }
};
