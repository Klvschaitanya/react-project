import React from "react";
import { useTodo } from "../context/TodoContext";

const Test = () => {
  const { name } = useTodo();
  return <div>{name}</div>;
};

export default Test;
