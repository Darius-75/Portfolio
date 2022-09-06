import axios from "axios";
import { useEffect, useState } from "react";
import { EnumOptions } from "../types/EnumOptions";
import { Todo } from "../types/TodoType";

export const useTestHook = () => {
  const [test, setTest] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [option, setOption] = useState<EnumOptions>(EnumOptions.DELETEA);

  const sui = (value: string) => {
    setLoading(true);
    // setTest(value);
    setLoading(false);
  };

  const fetchApi = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      const dataSplice = data.slice(0, 2);
      console.log(dataSplice);

      setTest(dataSplice);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const changeTitle = (option: EnumOptions) => {
    switch (option) {
      case EnumOptions.DELETEA:
        const filteredData = test.filter((value) => {
          console.log("ddd", value.title);
          let newTitle = "";

          for (let i = 0; i < value.title.length - 1; i++) {
            if (value.title.charAt(i) != "a") {
              console.log("test: ", value.title.charAt(i));
              newTitle += `${value.title.charAt(i)}`;
            }
          }
          console.log("d", newTitle);

          value.title = newTitle;
          console.log("new test : ", value.title);
          return value;
        });
        setTest(filteredData);
        break;

      case EnumOptions.DELETEB:
        const filteredData2 = test.filter((value) => {
          console.log("ddd", value.title);
          let newTitle = "";

          for (let i = 0; i < value.title.length - 1; i++) {
            if (value.title.charAt(i) != "a") {
              console.log("test: ", value.title.charAt(i));
              newTitle += `${value.title.charAt(i)}`;
            }
          }

          value.title = newTitle;
          console.log("new test : ", value.title);
          return value;
        });
        setTest(filteredData2);
        break;

      case EnumOptions.DELETEC:
        const filteredData3 = test.filter((value) => {
          console.log("b", value.title);
          let newTitle = "";

          for (let i = 0; i < value.title.length - 1; i++) {
            if (value.title.charAt(i) != "c") {
              console.log("test: ", value.title.charAt(i));
              newTitle += `${value.title.charAt(i)}`;
            }
          }

          value.title = newTitle;
          console.log("new test : ", value.title);
          return value;
        });
        setTest(filteredData3);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { test, loading, sui, fetchApi, changeTitle };
};
