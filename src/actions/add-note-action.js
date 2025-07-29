export const addNotes = (inputText) => {
  return async (dispatch) => {
    dispatch({ type: "NOTES_LOADING" });

    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: String(new Date().getTime()),
          text: inputText,
          completed: false,
          date: new Date().toLocaleString(),
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Заметка успешно добавлена:', result);
    } catch (error) {
      console.error('Ошибка при добавлении заметки:', error);
      alert('Ошибка при добавлении заметки. Попробуйте еще раз.');
    }
  };
};
