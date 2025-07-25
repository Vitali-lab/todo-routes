export const useAddNote = () => {
  const addNote = (inputText, updateNotes, navigate, dispatch) => {
    if (inputText.length === 0) {
      return;
    }
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: String(new Date().getTime()),
        text: inputText,
        completed: false,
        date: new Date().toLocaleString(),
      }),
    })
      .then((loadedNotes) => loadedNotes.json())
      .then(() => {
        dispatch({ type: "UPDATE_NOTES", payload: !updateNotes });
        navigate("/notes");
      });
  };

  return {
    addNote,
  };
};
