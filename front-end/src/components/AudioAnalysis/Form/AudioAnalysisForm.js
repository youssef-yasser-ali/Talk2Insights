import React, { useState } from "react";
import "./AudioAnalysisForm.css";
import Spinner from "../Spinner/Spinner";
import { APIURL } from "../../../config";

function AudioAnalysisForm({ setAnalysis }) {
  const [file, setFile] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    const fileNameParts = selectedFile.name.split(".");
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

    if (fileExtension === "wav" || fileExtension === "mp3") {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      alert("Please choose a valid .wav or .mp3 audio file.");
      // Clear the input
      e.target.value = null;
      setFile(null);
      setFileName("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file == null) return;

    const formData = new FormData();
    formData.append("audio", file);

    setSpinner(true);

    try {
      const response = await fetch(`${APIURL}/process`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();
      setAnalysis(data);
    } catch (error) {
      console.error("An error occurred:", error);
      alert(
        "An error occurred while processing your audio. Please try again later."
      );
    } finally {
      setSpinner(false);
    }
  };

  return (
    <>
      <section className="audio-analysis-form">
        <h2>Upload your Audio Here</h2>

        <form onSubmit={handleSubmit}>
          <div className="file-input-container">
            <input
              type="file"
              name="audio"
              accept=".wav, .mp3"
              className="file-input"
              onChange={handleFileChange}
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="file-input-label"
              data-file-name={fileName}
            />
            {!file && <p className="hint">Accepts .mp3 and .wav files</p>}{" "}
            <p className="file-name">{fileName}</p>
          </div>
          <button type="submit">Analyze</button>
        </form>
      </section>
      {spinner && <Spinner />}
    </>
  );
}

export default AudioAnalysisForm;
