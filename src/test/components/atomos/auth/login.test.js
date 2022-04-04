import React from "react";
import { shallow } from "enzyme";
import LoginScreen from "../../../../components/atomos/auth/login/LoginScreen";

describe("Pruebas en <LoginScreen/>", () => {
  const wrapper = shallow(<LoginScreen />);

  test("debe de mostar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener una <a></a> con su texto", () => {
    const a = wrapper.find("a");
    const texto = "Login with spotify";
    expect(a.text().trim()).toBe(texto);
  });

  test("debe de tener una imagen con un ulr y alt", () => {
    const url =
      "http://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg";
    const img = wrapper.find("img");
    const alt = "Logo Spotify";
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(alt);
  });

  test("debe tener la clase container", () => {
    const div = wrapper.find("div");
    expect(div.prop("className")).toBe("container");
  });
});
