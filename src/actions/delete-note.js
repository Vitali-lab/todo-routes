export const deleteNote = (id) => {
  return async (dispatch) => {
    dispatch({ type: "NOTES_LOADING" });

    try {
      fetch(`http://localhost:3000/notes/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
