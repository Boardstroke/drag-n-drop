import React from "react";
import Preview from "./Preview.js";
const DragAndDrop = ({ data, dispatch, actions }) => {
  const handleDragEnter = (event) => {
    event.preventDefault();
    document.querySelector(".dropzone").classList.add("inDropzone");
    dispatch({ type: "AddToDropZone", inDropZone: true });
  };

  const handleDragExit = () => {
    document.querySelector(".dropzone").classList.remove("inDropzone");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";

    dispatch({ type: "AddToDropZone", inDropZone: true });
  };

  const handleDrop = (event) => {
    event.preventDefault();

    [...event.dataTransfer.files].forEach((file) => {
      let newFile = {
        file: file,
        preview: window.URL.createObjectURL(file),
      };

      dispatch({ type: "AddToList", newFile });
      dispatch({ type: "AddToDropZone", inDropZone: false });
    });

    handleDragExit();
    event.stopPropagation();
  };
  console.log(data);

  return (
    <div className="dragNDrop__main">
      <Preview data={data} />
      <section
        className="dropzone"
        onDragExit={handleDragExit}
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleDragOver(event)}
        onDragEnter={(event) => handleDragEnter(event)}
      >
        <p>Arrasta e solte os arquivos aqui</p>
      </section>
    </div>
  );
};

export default DragAndDrop;
