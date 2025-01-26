import React, { useState } from "react";
import "./UploadPage.css";

const UploadPage = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(""); // Stocke le résultat de la classification

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setResult(""); // Réinitialiser le résultat si une nouvelle image est téléversée
  };

  const handleClassifyImage = () => {
    // Simulation du résultat de classification
    const simulatedResults = [
      "Plastic Bottle",
      "Cardboard Box",
      "Glass Jar",
      "Metal Can",
      "Paper Sheet",
      "Non-Recyclable Trash",
    ];
    const randomResult =
      simulatedResults[Math.floor(Math.random() * simulatedResults.length)];

    // Définir le résultat simulé
    setResult(randomResult);
  };

  return (
    <div className="upload-page">
      {/* Header Section */}
      <header className="upload-header">
        <h1>Classify an Image</h1>
        <p>
          Use our AI-powered tool to identify recyclable materials in your
          waste. Simply upload an image, and we'll guide you on how to sort
          it correctly!
        </p>
      </header>

      {/* Upload Section */}
      <section className="upload-section">
        <h2>Step 1: Upload Your Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="upload-input"
        />
        {image && (
          <div className="image-preview">
            <h2>Preview</h2>
            <img src={image} alt="Uploaded Preview" className="preview-image" />
          </div>
        )}
      </section>

      {/* Classify Section */}
      {image && (
        <section className="classify-section">
          <h2>Step 2: Classify the Image</h2>
          <button className="classify-button" onClick={handleClassifyImage}>
            Classify Now
          </button>
        </section>
      )}

      {/* Result Section */}
      {result && (
        <section className="result-section">
          <h2>Classification Result</h2>
          <p className="result">{result}</p>
        </section>
      )}
    </div>
  );
};

export default UploadPage;
