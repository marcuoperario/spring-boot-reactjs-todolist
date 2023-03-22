import React, { useState } from "react";
import {
  FaRegEdit,
  RiDeleteBinFill,
  IoMdCheckmark,
  IoMdClose,
} from "react-icons/all";

const Todo = ({ values, onUpdate, refetch, onDelete }: any) => {
  const { entry, id, isCompleted } = values;
  const [ mutation, setMutation ] = useState({
    id: id,
    entry: entry,
    isCompleted: isCompleted,
  });
  const [ isEditing, setIsEditing ] = useState<boolean>(false);
  const [ operation, setOperation ] = useState<boolean>(false);
  return (
    <div className="flex flex-row justify-between items-center bg-[#334056] rounded-lg p-4 my-2">
      <div className="flex flex-row justify-center items-center space-x-2 grow">
        {isEditing ? (
          <>
            <input
              type = "checkbox"
              checked = { mutation.isCompleted }
              value = { isCompleted.toString() }
              onChange = {(e) =>
                setMutation((prev) => ({
                  ...prev,
                  isCompleted: !prev.isCompleted,
                }))
              }
            />
            <input
              name="entry"
              className="w-full bg-transparent text-justify text-white no-wrap focus:outline-0"
              autoFocus
              required
              value = { mutation.entry }
              onChange={(e) =>
                setMutation((prev) => ({ ...prev, entry: e.target.value }))
              }
            />
          </>
        ) : (
          <>
            <input
              type = "checkbox"
              checked = { isCompleted }
              disabled = { true }
              value = { isCompleted.toString() }
            />
            <p className="text-white w-full no-wrap">
              { entry }
            </p>
          </>
        )}
      </div>
      {operation ? (
        <div className="flex flex-row justify-center items-center space-x-4">
          <button
            className = "p-2 rounded-lg"
            onClick = {(e) => {
              onUpdate(e, mutation, refetch);
              setOperation(false);
              setIsEditing(false);
            }}
          >
            <IoMdCheckmark className = "text-white text-lg" />
          </button>
          <button
            className = "p-2 rounded-lg"
            onClick = {() => {
              setOperation(false);
              setIsEditing(false);
            }}
          >
            <IoMdClose className="text-white text-lg" />
          </button>
        </div>
      ) : (
        <>
          <button
            className = "p-2 rounded-lg"
            onClick = {() => {
              setIsEditing(true);
              setOperation(true);
            }}
          >
            <FaRegEdit className = "text-white text-lg" />
          </button>
          <button
            className = "p-2 rounded-lg"
            onClick = {(e) => onDelete(e, id, refetch)}
          >
            <RiDeleteBinFill className = "text-white text-lg" />
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
