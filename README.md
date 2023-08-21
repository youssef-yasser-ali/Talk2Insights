# Talk2Insights

Talk2Insights is a web application that enables users to convert spoken audio into text, summarize the content, and analyze the sentiment of the conversation. This project aims to provide valuable insights from audio content, which can be useful for various applications such as customer service analysis, content transcription, and more.

## Features

- Record and upload audio files in WAV and MP3 format.
- Convert spoken audio into text using speech recognition.
- Summarize the text content for quick insights.
- Analyze the sentiment of the conversation using sentiment analysis.
- User-friendly web interface for easy interaction.

## Technologies Used

### Front-end

- `React.js ` for building the user interface.
- `React Router` for routing between pages.

### Back-end

- `Flask` for handling server-side logic.
- `Flask-CORS` for handling cross-origin resource sharing.
- `Hugging Face Transformers` for speech recognition, text summarization, and sentiment analysis.
- `SpeechRecognition` for converting speech to text.
- `Pydub` for converting audio files to WAV format.

## Getting Started

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/youssef-yasser-ali/Talk2Insights.git
   ```

2. **Front-end Setup:**

   - Navigate to the front-end directory:
     ```sh
     cd Talk2Insights/front-end
     ```
   - Install front-end dependencies:
     ```sh
     npm install
     ```
   - Start the front-end development server:
     ```sh
     npm start
     ```

3. **Back-end Setup:**

   - Open a new terminal window.
   - Navigate to the back-end directory:
     ```sh
     cd Talk2Insights/back-end
     ```
   - Install Python dependencies:
     ```sh
     pip install -r requirements.txt
     ```
   - Start the Flask back-end server:
     ```sh
     python app.py
     ```

4. **Access the Application:**

   Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
