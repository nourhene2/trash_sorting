import React, { useState } from "react";
import "./UploadPage.css";

const UploadPage = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(""); // Stocke le résultat de la classification

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setResult(""); // Reset result if a new image is uploaded
    }
  };

  const handleClassifyImage = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setResult(`Class: ${data.class} (Confidence: ${data.confidence}%)`);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult(`Error: ${error.message}`);
    }
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
            <img src={URL.createObjectURL(image)} alt="Uploaded Preview" />     
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
