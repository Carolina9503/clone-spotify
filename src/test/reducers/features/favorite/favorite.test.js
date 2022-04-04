import favoriteSlice from "../../../../reducers/features/favorite/favoriteSlice";

const demoTodos = {};

describe("pruebas en favorite reducer", () => {
  test("debe retornar el estado por defecto", () => {
    const state = favoriteSlice();
  });
});
