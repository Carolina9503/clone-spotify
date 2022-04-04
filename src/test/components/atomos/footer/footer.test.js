import { shallow } from "enzyme";
import Footer from "../../../../components/atomos/footer/Footer";

describe("Pruebas en <Footer/>", () => {
  const wrapper = shallow(<Footer />);

  test("debe de mostarr el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener una imagen con una url y un alt", () => {
    const img = wrapper.find("img");
    const url =
      "https://i.scdn.co/image/ab67616d00004851e6f407c7f3a0ec98845e4431";
    const alt = "covers";

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(alt);
  });

  test("debe tener un div con los iconos de la barra", () => {
    const div = wrapper.find("div");
    console.log(wrapper.contains());
  });
});
