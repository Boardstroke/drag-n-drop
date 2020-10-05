import React from 'react'

function Dropzone({handleDragExit, handleDrop, handleDragEnter, handleDragOver}) {
  return (
    <section
        className="dropzone"
        onDragExit={handleDragExit}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
      >
        <p>Arrasta e solte os arquivos aqui</p>
      </section>
  )
}

export default Dropzone
