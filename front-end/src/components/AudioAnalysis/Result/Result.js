import React from "react";
import "./Results.css";
import { sentimentColors } from "../../../colors";

function Results({ data }) {
  const sentiment = data.sentiment_label;

  const color = sentimentColors[sentiment] || "gray";

  return (
    <section className="results">
      <h2 className="heading">Analysis Results </h2>
      {data && (
        <div className=" result-details">
          <div className=" result result-text">
            <h2> text : </h2>
            <p> {data.text}</p>
          </div>

          <div className="result result-summary">
            <h2> summary : </h2>
            <p>
              {data.summary === ""
                ? `the text is not enoght to summarize`
                : data.summary}
            </p>
          </div>

          <div className="result result-sentiment">
            <h2> Sentiment : </h2>
            <div>
              <p>
                {data.sentiment_label} {data.sentiment_score}%
              </p>
              <span className="color" style={{ backgroundColor: color }}></span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Results;
