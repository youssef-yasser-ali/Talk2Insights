import os

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS 

import speech_recognition as sr
from transformers import pipeline

from pydub import AudioSegment
import io


app = Flask(__name__)
CORS(app, resources={r"/contact": {"origins": "*"}, r"/process": {"origins": "*"}})

# Default route to indicate that the server is working
@app.route('/')
def index():
    return "Flask server is up and running!"


summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
sentiment_analyzer = pipeline("sentiment-analysis" , model = 'SamLowe/roberta-base-go_emotions')


@app.route('/process', methods=['POST'])
def process():
    audio_file = request.files['audio']
    if audio_file:
        audio_data = audio_file.read()

        # Check the file extension
        if audio_file.filename.lower().endswith('.mp3'):
            # Convert .mp3 to .wav
            mp3_audio = AudioSegment.from_mp3(io.BytesIO(audio_data))
            wav_audio = io.BytesIO()
            mp3_audio.export(wav_audio,format = 'wav')
            audio_data = wav_audio.getvalue()

        # Save the audio file temporarily
        audio_path = 'temp.wav'
        with open(audio_path, 'wb') as temp_file:
            temp_file.write(audio_data)

        # Convert speech to text
        recognizer = sr.Recognizer()
        with sr.AudioFile(audio_path) as source:
            audio_data = recognizer.record(source)
            text = recognizer.recognize_google(audio_data)


        if len(text) < 40 : 
            summary = ''
        else :
        # Summarize text
            summary = summarizer(text, max_length=150, min_length=30, do_sample=False)[0]['summary_text']

        # Analyze sentiment
        sentiment = sentiment_analyzer(text)[0]
        sentiment_label = sentiment['label']
        sentiment_score = sentiment['score']

        os.remove(audio_path)  # Remove the temporary audio file

        return jsonify({
            'text': text,
            'summary': summary,
            'sentiment_label': sentiment_label,
            'sentiment_score': sentiment_score
        })




@app.route('/contact', methods=['POST'])
def handle_contact_form():
    if request.method == 'POST':
        try:
            data = request.get_json()  
            
            #  just print it :)  ...
            print(data)




            # Respond with a success message
            response_data = {'message': 'Form data received successfully'}
            return jsonify(response_data), 200
        except Exception as e:
            # Handle any errors that may occur during processing
            return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)