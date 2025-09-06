import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
export default function Todolist({checked, handleChecked,currTask,handleDelete}) {
  return (
    <li  className="todo-item">
      <span className={checked ? 'checkList':'notCheckList'}>{currTask}</span>
      <button className="check-btn" onClick={()=> handleChecked(currTask)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => handleDelete(currTask)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}
