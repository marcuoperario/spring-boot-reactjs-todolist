import React, { useState, useCallback, useEffect } from "react";
import { BASE_URLS } from "../constants";

const initDataValues = {
  todos: [],
  isLoading: true,
  error: false,
};

const useGetTodos = () => {
  const [ data, setData ] = useState(initDataValues);

  const fetchTodos = useCallback(async () => {
    const response = await fetch(`${BASE_URLS.todo}/todos/all`)
      .then((res) => res.json())
      .then(async (values) => {
        setData((prev) => ({ ...prev, todos: values, isLoading: false }));
      })
      .catch((err) => {
        console.log(err);
        setData((prev) => ({
          ...prev,
          todos: [],
          isLoading: false,
          error: true,
        }));
      });
      return response;
  }, [ data.isLoading ]);

  const refetch = () => setData((prev) => ({ ...prev, isLoading: true }));

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { ...data, refetch };
};
export default useGetTodos;
