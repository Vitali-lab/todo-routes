export const useChangeNote = () => {
  const changeNote = (changeInput, setUpdateNotes, id) => {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: changeInput }),
    }).then(() => {
      setUpdateNotes((prev) => !prev);
    });
  };

  return {
    changeNote,
  };
};
