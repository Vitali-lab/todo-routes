import { useDispatch, useSelector } from "react-redux";
import { updateNotesSelector } from "../selectors/update-notes";

export const useDeleteNote = () => {
  const dispatch = useDispatch();
  const updateNotes = useSelector(updateNotesSelector);

  const delNote = (id) => {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "UPDATE_NOTES", payload: !updateNotes });
    });
  };

  return {
    delNote,
  };
};
