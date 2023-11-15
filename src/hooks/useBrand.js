export function useBrand() {
  const updateBrand = () => {
    const { primaryColor, secundaryColor } = JSON.parse(
      window.localStorage.getItem("brand")
    );
    document.querySelector("body").style.setProperty("--primary", primaryColor);
    document
      .querySelector("body")
      .style.setProperty("--secondary", secundaryColor);
  };
  return { updateBrand };
}
