import { useDispatch, useSelector } from "react-redux";
import { updateNotesSelector } from "../../selectors/update-notes";

export const useChangeNote = () => {
  const dispatch = useDispatch();
  const updateNotes = useSelector(updateNotesSelector);

  const changeNote = (changeInput, id) => {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: changeInput }),
    }).then(() => {
      dispatch({ type: "UPDATE_NOTES", payload: !updateNotes });
    });
  };

  return {
    changeNote,
  };
};
