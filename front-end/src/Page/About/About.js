import React from "react";
import "./About.css";

import img1 from "../../assets/img/img5.jpg";
function About() {
  return (
    <>
      <div className="about-container">
        <div className="header">
          <h1 className="header-title">
            About <span>Talk2Insights</span>
          </h1>
          <p className="header-description">
            Welcome to Talk2Insights, your trusted partner in audio analysis.
            Our mission is to transform spoken words and sounds into valuable
            insights, making audio data accessible and actionable.
          </p>
        </div>

        <div className="about-contents">
          <div className="about-content">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p>
                At Talk2Insights, we're on a mission to simplify audio analysis.
                We believe that every sound, every conversation, and every
                podcast holds the potential for knowledge. Our cutting-edge
                technology harnesses the power of artificial intelligence to
                transcribe, summarize, and analyze audio content with precision
                and speed.
              </p>
            </div>

            <div>
              <h2 className="section-title">What We Offer</h2>
              <ul className="feature-list">
                <li>
                  <strong>Audio Transcription:</strong> Our advanced
                  transcription tool converts spoken language into text with
                  unparalleled accuracy. Save time and effort on manual
                  transcriptions.
                </li>
                <li>
                  <strong>Summarization:</strong> Get to the heart of your audio
                  content with our summarization feature. We condense lengthy
                  audio into concise summaries, helping you extract key
                  insights.
                </li>
                <li>
                  <strong>Sentiment Analysis:</strong> Understand your audience
                  better by analyzing the emotional tone of your audio. Gain
                  valuable insights into audience reactions.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">Join Our Community</h2>
              <p>
                Join our growing community of users who have experienced the
                power of audio analysis with Talk2Insights. Whether you're a
                student, a business professional, or a content creator, we're
                here to make your audio analysis journey seamless and
                insightful.
              </p>
            </div>
          </div>
          <div className="about-image">
            <img src={img1} alt="Company Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
