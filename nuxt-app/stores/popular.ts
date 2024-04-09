import { defineStore } from "pinia";
interface popular {
  id: number;
  title: String;
  type: String;
  src: String;
  count: String;
  follows: String;
  action: String;
  size: String;
  photo: String;
  video: String;
  screenshots: [];
}
export const usePopularStore = defineStore("popular", () => {
  const populars = ref<popular[]>([]);
  const popular = ref<popular>();
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
    await list();
  };

  const deletePopular = async (id: number) => {
    const res = await fetch(`http://localhost:3001/populars/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
  };
  return {
    populars,
    popular,
    title,
    type,
    list,
    getPopular,
    CreatePopular,
    deletePopular,
  };
});
