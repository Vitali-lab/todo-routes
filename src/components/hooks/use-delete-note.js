export const useDeleteNote = () => {
  const delNote = (id, setUpdateNotes) => {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUpdateNotes((prev) => !prev);
    });
  };

  return {
    delNote,
  };
};
