import React, {
  useState,
  FormEvent,
  ChangeEvent,
} from "react";
import { BASE_URLS } from "../constants";
import { TodoObject } from "../interfaces";

const initTodoValues = {
  id: null,
  entry: "",
  isCompleted: false,
};

const useTodoMutation = () => {
  const [ todoValues, setTodoValues ] = useState<TodoObject>(initTodoValues);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setTodoValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async (
    e: FormEvent,
    id: string,
    callback: () => void
  ) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URLS.todo}/todos/${id}`, {
      method: "DELETE",
      mode: "cors",
    })
      .then((values) => {
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  };

  const handleUpdate = async (
    e: MouseEvent,
    payload: TodoObject,
    callback: () => void
  ) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URLS.todo}/todos/${payload.id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((values) => {
        callback();
        setTodoValues(initTodoValues);
      })
      .catch((err) => {
        callback();
        console.log(err);
      });
    return response;
  };

  const handleSubmit = async (e: FormEvent, callback: () => void) => {
    e.preventDefault();
    const payload = {
      entry: todoValues.entry,
      isCompleted: todoValues.isCompleted,
    };
    const response = await fetch(`${BASE_URLS.todo}/todos/new`, {
      method: "POST",
      body: JSON.stringify(payload),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res: Response) => res.json())
      .then((values) => {
        setTodoValues(initTodoValues);
        callback();
      })
      .catch((err: Error) => {
        console.log(err);
        callback();
      });
    return response;
  };

  return {
    handleChange,
    handleDelete,
    handleSubmit,
    handleUpdate,
    todoValues,
  };
};

export default useTodoMutation;
