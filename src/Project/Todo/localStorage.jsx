import React from "react";
const todoKey = "reactTodo";
export const getlocalStorageTodo = () => {
  const rawtodo = () => {
    localStorage.getItem(todoKey);
    if (!rawtodo) return[];
    return JSON.parse(rawtodo);
  };
};

    export const setlocalStorageTodo = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
  };
