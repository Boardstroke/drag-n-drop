import React from "react";
import DragAndDrop from "./components/DragAndDrop";

const state = {
  inDropZone: false,
  fileList: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "AddToDropZone":
      return { ...state, inDropZone: action.inDropZone };
    case "AddToList":
      return {
        ...state,
        fileList: state.fileList.concat(action.newFile),
      };
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = React.useReducer(reducer, state);
  return (
    <div className="App">
      <DragAndDrop data={data} dispatch={dispatch} />
    </div>
  );
}

export default App;
