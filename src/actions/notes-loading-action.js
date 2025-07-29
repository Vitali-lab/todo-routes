export const fetchNotes = () => {
  return async (dispatch) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "NOTES_LOADING" });

    try {
      const response = await fetch("http://localhost:3000/notes");
      const data = await response.json();

      dispatch({ type: "GET_NOTES", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "IS_LOADING", payload: false });
    } finally {
      dispatch({ type: "IS_LOADING", payload: false });
    }
  };
};
