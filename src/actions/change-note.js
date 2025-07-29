export const changeNote = (changeInput, id) => {
  return (dispatch) => {
    dispatch({ type: "NOTES_LOADING" });

    try {
      fetch(`http://localhost:3000/notes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: changeInput }),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
