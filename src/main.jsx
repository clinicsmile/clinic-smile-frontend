import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { services } from "./services/services.js";
import { useBrand } from "./hooks/useBrand.js";
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>;
<script>
  {window.addEventListener("load", async () => {
    const { updateBrand } = useBrand();
    const data = await services.getBrand();
    console.log(data);
    updateBrand(data);
  })}
</script>;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
