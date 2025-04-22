document.addEventListener("DOMContentLoaded", () => {
  const uploadButton = document.getElementById("uploadButton");
  const gifBlock = document.querySelector(".gif");
  const centerContainer = document.getElementById("centerContainer");

  uploadButton.addEventListener("click", () => {
    // Hide the GIF block
    if (gifBlock) {
      gifBlock.style.display = "none";
    }

    // Center the upload button block dynamically
    if (centerContainer) {
      centerContainer.style.display = "flex";
      centerContainer.style.justifyContent = "center";
      centerContainer.style.alignItems = "center";
      centerContainer.style.height = "auto"; // Full viewport height
    }
  });
});


document.getElementById("uploadButton").addEventListener("click", () => {
  // Create a file input element
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";

  // Append the file input to the document body and trigger the click event
  document.body.appendChild(fileInput);
  fileInput.click();

  // Listen for the file input's change event
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0]; // Get the uploaded file

    if (file) {
      const reader = new FileReader();

      // Read the file and display the image preview
      reader.onload = (e) => {
        const previewContainer = document.getElementById("previewContainer");
        const previewImage = document.getElementById("imagePreview");
        const imageInfo = document.getElementById("imageInfo");

        imageInfo.style.display = "block";

        // Show the preview container
        previewContainer.style.display = "flex";

        // Update the preview container with the image
        previewImage.innerHTML = ""; // Clear existing content
        const image = document.createElement("img");
        image.src = e.target.result;
        image.style.maxWidth = "300px"; // Set a fixed width for the preview
        image.style.height = "auto";
        image.className = "img-thumbnail";
        previewImage.appendChild(image);

        // Update image info
        document.getElementById("fileName").textContent = `File Name: ${file.name}`;
        document.getElementById("fileSize").textContent = `File Size: ${(file.size / 1024).toFixed(2)} KB`;
      };

      reader.readAsDataURL(file); // Trigger file reading
    }

    // Remove the temporary file input from the document body
    document.body.removeChild(fileInput);
  });
});
