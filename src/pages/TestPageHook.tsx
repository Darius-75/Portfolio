import React from "react";
import { useTestHook } from "../hooks/useTestHook";
import { EnumOptions } from "../types/EnumOptions";
import { Todo } from "../types/TodoType";

type Props = {};

const TestPageHook = (props: Props) => {
  const { test, sui, fetchApi, loading, changeTitle } = useTestHook();
  return (
    <div>
      {!loading && test ? (
        <div>
          {test.map((value: Todo) => {
            return <div>{value.title}</div>;
          })}
        </div>
      ) : (
        "loading..."
      )}
      <button onClick={() => fetchApi()}>je suis pas un bouton</button>
      <button onClick={() => changeTitle(EnumOptions.DELETEA)}>remove A</button>
      <button onClick={() => changeTitle(EnumOptions.DELETEB)}>remove B</button>
      <button onClick={() => changeTitle(EnumOptions.DELETEC)}>remove C</button>
    </div>
  );
};

export default TestPageHook;
