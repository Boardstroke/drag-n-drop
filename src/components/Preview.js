import React from "react";
import Menu from './Menu';


function chunk_array(arr) {
  let column1 = [];
  let column2 = [];
  let column3 = [];
  for (let i = 0; i < arr.length; i += 3) {
    column1.push(arr[i]);
    column2.push(arr[i + 1]);
    column3.push(arr[i + 2]);
  }
  return [column1, column2, column3];
}

function Preview({ data }) {
  return (
    <section className="preview">
      <div className="image-grid">
        {chunk_array(data.fileList).map((column, i) => (
          <div className="image-column">
            {column.map(
              (item, i) =>
                item && (
                  <div className="image-item">
                    <div className="layer">
                      <Menu/>
                    </div>
                    <img src={item.preview} alt="" />
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Preview;
