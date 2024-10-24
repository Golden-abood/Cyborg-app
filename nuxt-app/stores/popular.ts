import { defineStore } from "pinia";
import { type Popular } from "~/types";

export const usePopularStore = defineStore("popular", () => {
  const populars = ref<Popular[]>([]);
  const popular = ref<Popular>();
  const title = ref<string>("");
  const type = ref<string>("");

  const list = async () => {
    const res = await fetch("http://localhost:3001/populars");
    const data = await res.json();
    populars.value = data;
  };
  const getPopular = async (id: string | string[]) => {
    const res = await fetch(`http://localhost:3001/populars/${id}`);
    const data = await res.json();
    popular.value = data;
  };
  const CreatePopular = async () => {
    const res = await fetch("http://localhost:3001/populars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        type: type.value,
      }),
    });

    const data = await res.json();
    // await list();
  };

  // const deletePopular = async (id: number) => {
  //   const res = await fetch(`http://localhost:3001/populars/${id}`, {
  //     method: "DELETE",
  //   });
  //   const data = await res.json();
  // };
  return {
    populars,
    popular,
    title,
    type,
    list,
    getPopular,
    CreatePopular,
    // deletePopular,
  };
});
