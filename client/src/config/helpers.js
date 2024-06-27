/**
 * Downloads the content of a canvas as an image.
 * @param {string} canvasId - The ID of the canvas element to download.
 */
export const reader = (file) => {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = reject;

      if (file instanceof Blob) {
          fileReader.readAsDataURL(file);
      } else {
          reject(new Error('Passed argument is not a Blob or File.'));
      }
  });
};

export const downloadCanvasToImage = (canvasId) => {
  const canvas = document.getElementById(canvasId);
  if (canvas) {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'shirt-design.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  } else {
      console.error(`Canvas with id ${canvasId} not found.`);
  }
};

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};

