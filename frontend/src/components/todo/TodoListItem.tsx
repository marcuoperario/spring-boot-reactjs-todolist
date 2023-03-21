import React, { useState } from "react";
import {
  FaRegEdit,
  RiDeleteBinFill,
  IoMdCheckmark,
  IoMdClose,
} from "react-icons/all";
import { TodoListItemProps } from "../../interfaces";

const TodoListItem = ({
  data,
  onChange,
  onDelete,
  onUpdate,
  onSelect,
}: TodoListItemProps) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [operation, setOperation] = useState<boolean>(false);
  const [entry, setEntry] = useState<string>(data.entry);

  const Return = () => {
    setOperation(false);
    setIsDeleting(false);
    setIsEditing(false);
    setDisabled(true);
  };

  const onCancel = () =>
    onChange({ target: { value: entry, name: "entry" } } as any);

  return (
    <div className = "flex flex-row justify-between items-center bg-[#334056] rounded-lg p-4 my-2">
      <div className = "flex flex-row justify-center items-center space-x-2 grow">
        <input
          type = "checkbox"
          checked = { data?.isCompleted }
          disabled = { disabled }
          onChange = { onChange }
          value = { data?.isCompleted.toString() }
        />
        { isEditing ? (
          <input
            className = "w-full bg-transparent text-justify text-white no-wrap focus:outline-0"
            value = { data.entry }
            disabled = { disabled }
            onChange = { onChange }
            autoFocus
            required
          />
        ) : (
          <p className="text-white w-full no-wrap">
            { data.entry }
          </p>
        )}
      </div>
      { operation ? (
        <div className = "flex flex-row justify-center items-center space-x-4">
          <button
            className = "p-2 rounded-lg"
            onClick = {(e) => {
              if (isEditing && data.entry) {
                onUpdate(e, data?.id ?? "");
              } else if (isDeleting && entry) {
                onDelete(e, data?.id ?? "");
              }
              Return();
            }}
          >
            <IoMdCheckmark className = "text-white text-lg" />
          </button>
          <button
            className = "p-2 rounded-lg"
            onClick = {() => {
              onCancel();
              Return();
            }}
          >
            <IoMdClose className="text-white text-lg" />
          </button>
        </div>
      ) : (
        <>
          <button
            className="p-2 rounded-lg"
            onClick = {() => {
              setOperation(true);
              setDisabled(false);
              setIsEditing(true);
              onSelect(data);
            }}
          >
            <FaRegEdit className = "text-white text-lg" />
          </button>
          <button
            className = "p-2 rounded-lg"
            onClick = {() => {
              setOperation(true);
              setIsDeleting(true);
            }}
          >
            <RiDeleteBinFill className = "text-white text-lg" />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoListItem;