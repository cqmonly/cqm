// import { useState } from "react";
import React from "react";
import { ISearchPanelProps } from "../../common/type";

export const SearchPanel = ({ param, setParam, users }: ISearchPanelProps) => {
  return (
    <form action="">
      <div>
        {/* setParam(Object,assign({}, param, {name: enent.target.value})) */}
        <input
          type="text"
          value={param.name}
          onChange={(event) =>
            setParam({
              ...param,
              name: event.target.value,
            })
          }
        ></input>
        <select
          value={param.personId}
          onChange={(event) =>
            setParam({
              ...param,
              personId: event.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
