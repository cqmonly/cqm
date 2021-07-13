import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import React from "react";
import * as qs from "qs";
import { cleanObject, useMount, useDebounce } from "../../utils/index";
// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:8000";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedValue = useDebounce(param, 1000);
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedValue))}`
    ).then(async (response) => {
      if (response.ok) {
        const info = await response.json();
        setList(info);
      }
    });
  }, [debouncedValue]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        const infos = await response.json();
        setUsers(infos);
      }
    });
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};
