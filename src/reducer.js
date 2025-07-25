const inisialState = {
  inputText: "",
  updateNotes: false,
};

export const appReduser = (state = inisialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INPUT_TEXT": {
      return { ...state, inputText: payload };
    }
    case "UPDATE_NOTES": {
      return { ...state, updateNotes: payload };
    }

    default:
      return state;
  }
};
