export function useBrand() {
  const updateBrand = (brand) => {
    const { primaryColor, secundaryColor } =
      brand || JSON.parse(window.localStorage.getItem("brand"));
    document.querySelector("body").style.setProperty("--primary", primaryColor);
    document
      .querySelector("body")
      .style.setProperty("--secondary", secundaryColor);
  };
  return { updateBrand };
}
