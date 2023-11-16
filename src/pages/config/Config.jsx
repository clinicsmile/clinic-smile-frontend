import { useState, useEffect } from "react";
import AppButton from "../../components/ui/button/AppButton";
import { useBrand } from "../../hooks/useBrand";
import { services } from "../../services/services";

import { convertToBase64 } from "../../services/helper";

function Config() {
  const [colors, setColors] = useState({});
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadedLogo, setLoadedLogo] = useState(false);

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

  const saveColors = async () => {
    setLoading(true);
    const brand = JSON.parse(window.localStorage.getItem("brand"));
    brand.primaryColor = colors.primaryColor;
    brand.secundaryColor = colors.secondaryColor;
    window.localStorage.setItem("brand", JSON.stringify(brand));
    updateBrand();
    await services.updateBrand(brand);
    setLoading(false);
  };

  const saveLogo = async () => {
    setLoading(true);
    const brand = JSON.parse(window.localStorage.getItem("brand"));
    brand.logo = logo;
    window.localStorage.setItem("brand", JSON.stringify(brand));
    await services.updateLogo({ logo });
    setLoading(false);
    setLoadedLogo(false);
    window.location.reload();
  };

  const setSelectedLogo = async (file) => {
    let logoBase64 = await convertToBase64(file);
    setLogo(logoBase64);
    setLoadedLogo(true);
  };

  return (
    <div className="h-screen flex">
      <div className="w-5/6 h-5/6 overflow-y-scroll bg-white rounded-3xl text-center m-auto shadow-black shadow-2xl flex">
        <div className="h-full m-auto p-6 justify-center items-center">
          <div className="h-1/6">
            <span className="font-serif text-4xl text-center grid-cols-1 border-b-2 border-b-[--primary] pb-3">
              Configuración de marca
            </span>
          </div>

          <div className="flex flex-col border-2 object-contain b p-2  mb-6 justify-center items-center">
            <div className="w-auto h-1/4">
              <img src={logo} className="h-5/6 mx-auto" />
            </div>
            {!loadedLogo ? (
              <input
                className="mb-6"
                type="file"
                id="add-single-img"
                accept="image/jpeg , image/png"
                onChange={async (e) => setSelectedLogo(e.target.files[0])}
              />
            ) : (
              <div className="h-1/6">
                <AppButton
                  title={"Cambiar logo"}
                  type={"primaryClass"}
                  loading={loading}
                  action={() => saveLogo()}
                />
              </div>
            )}
          </div>

          <div className="flex h-1/6 justify-between">
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
          <div className="h-1/6">
            <AppButton
              title={"Guardar Colores"}
              type={"primaryClass"}
              loading={loading}
              action={() => saveColors()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Config;
