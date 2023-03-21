import React from "react";
import { TodoObject } from "../../interfaces";

interface FormProps {
  values: TodoObject;
  onSubmit: (e: React.FormEvent, refetch: () => void) => void;
  onChange: React.ChangeEventHandler;
  refetch: () => void;
}

const TodoForm = ({ values, onSubmit, onChange, refetch }: FormProps) => {
  return (
    <form
      className="flex flex-row justify-center items-center"
      onSubmit={(e) => onSubmit(e, refetch)}
    >
      <input
        className="bg-[#334056] w-full text-lg p-4 text-white focus:outline-0 rounded-l-lg"
        placeholder="New Task"
        type="text"
        onChange={onChange}
        value={values.entry}
        name="entry"
        required
      />
      <button
        className="p-4 w-28 bg-[#5b28d1] rounded-r-lg text-lg text-white font-bold"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
