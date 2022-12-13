export const getImage = (imageInput) => {
  const input = imageInput;
  let uploadedImage = '';

  input.addEventListener('change', () => {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      uploadedImage = fileReader.result;
      console.log(uploadedImage);
    });
    fileReader.readAsDataURL(this.files[0]);
  });
};
