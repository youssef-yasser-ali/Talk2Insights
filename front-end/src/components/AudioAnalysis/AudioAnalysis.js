import { useState } from "react";
import AudioAnalysisForm from "./Form/AudioAnalysisForm";
import Results from "./Result/Result";

function AudioAnalysis() {
  const [analysisData, setAnalysis] = useState(null);

  return (
    <div>
      <AudioAnalysisForm setAnalysis={setAnalysis} />
      {analysisData && <Results data={analysisData} />}
    </div>
  );
}

export default AudioAnalysis;
