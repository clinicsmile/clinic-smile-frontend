import { useState, useEffect } from "react";
import AppButton from "../../components/ui/button/AppButton";
import { useBrand } from "../../hooks/useBrand";

function Config() {
  const [colors, setColors] = useState({});
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(false);
  const { updateBrand } = useBrand();

  useEffect(() => {
    const brand = JSON.parse(window.localStorage.getItem("brand"));
    setColors({
      primaryColor: brand.primaryColor,
      secondaryColor: brand.secundaryColor,
    });
    if (brand?.logo) {
      setLogo(brand.logo);
    }
  }, []);

  const handleColor = (color, type) => {
    setColors({ ...colors, [type + "Color"]: color.target.value });
  };

  const saveColors = () => {
    setLoading(true);
    const brand = JSON.parse(window.localStorage.getItem("brand"));
    brand.primaryColor = colors.primaryColor;
    brand.secundaryColor = colors.secondaryColor;
    window.localStorage.setItem("brand", JSON.stringify(brand));
    updateBrand();
    // Connect with API
    setLoading(false);
  };

  return (
    <div className="h-screen flex">
      <div className="w-5/6 h-5/6 bg-white rounded-3xl text-center m-auto shadow-black shadow-2xl flex">
        <div className="flex flex-col m-auto p-6">
          <span className="font-bold text-2xl">Configuración de marca</span>
          <span>Logo actual</span>
          <div className="my-5 h-1/4 border-2 border-cyan-600 p-2 rounded-md">
            <img src={logo} />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center items-center">
              <span>Color primario</span>
              <input
                className="w-[80px] rounded-md h-[80px] cursor-pointer"
                type="color"
                value={colors?.primaryColor}
                onChange={(color) => handleColor(color, "primary")}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span>Color secundario</span>
              <input
                className="w-[80px] rounded-md h-[80px] cursor-pointer"
                type="color"
                value={colors?.secondaryColor}
                onChange={(color) => handleColor(color, "secondary")}
              />
            </div>
          </div>
          <AppButton
            title={"Guardar Colores"}
            type={"primaryClass"}
            loading={loading}
            action={() => saveColors()}
          />
        </div>
      </div>
    </div>
  );
}

export default Config;
