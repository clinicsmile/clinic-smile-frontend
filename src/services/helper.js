
const toBase64 = (file, callback) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
};

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    toBase64(file, (base64) => {
      resolve(base64);
    });
  });
};

export { convertToBase64 };