import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Klvschaitanya")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);
  return (
    <div>
      <p>Github:{data?.login}</p>
      <img src={data?.avatar_url} alt="" />
    </div>
  );
};

export default Github;

export const githubInfocheck = async () => {
  let result;
   await fetch("https://api.github.com/users/Klvschaitanya")
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      result = res;
    });
  return result;
};
