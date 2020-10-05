import React from "react";
import {
  BsThreeDots,
  BsFillTrashFill,
  BsFilesAlt,
  BsTagFill,
  BsChevronDown,
  BsChevronUp
} from "react-icons/bs";
import { BiHeading } from "react-icons/bi";
function Menu() {
  const [isActive, setIsActive] = React.useState(false);
  const [isActiveTitulo, setIsActiveTitulo] = React.useState(false);
  const [isActiveDescricao, setIsActiveDescricao] = React.useState(false);
  return (
    <div className="menu">
      <div onClick={() => setIsActive(!isActive)} className="actions">
        <BsThreeDots />
      </div>

      <nav className={isActive ? "active" : ""}>
        <ul>
          <li onClick={() => setIsActiveTitulo(!isActiveTitulo)}>
            {" "}
            <BiHeading />{" "}
            <div className="label">
              Titulo
              {
                isActiveTitulo ? <BsChevronUp /> : <BsChevronDown />
              }
            </div>
          </li>
          <div className="input-area">
            {isActiveTitulo && <textarea  placeholder="Titulo" />}
          </div>
          <li onClick={() => setIsActiveDescricao(!isActiveDescricao)}>
            {" "}
            <BsFilesAlt />
            <div>
              Descrição
              {
                isActiveDescricao ? <BsChevronUp /> : <BsChevronDown />
              }
            </div>
          </li>
          <div className="input-area">
            {isActiveDescricao && <textarea  placeholder="Titulo" />}
          </div>
          <li>
            {" "}
            <BsTagFill /> Categorias
          </li>
          <li className="delete">
            {" "}
            <BsFillTrashFill /> Excluir
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
