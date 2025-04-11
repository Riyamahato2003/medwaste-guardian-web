
import React, { useState } from 'react';
import LogoDisplay from '../components/LogoDisplay';
import { Mic, Upload, Send } from 'lucide-react';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setResponseText('Processing your query...');
    
    try {
      // Simulating API call
      setTimeout(() => {
        setResponseText(`Here's guidance for disposing: ${inputText}`);
        setIsLoading(false);
      }, 1500);
      
      // In a real scenario, you would use the API:
      // const response = await fetch('/query', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ query: inputText })
      // });
      // const data = await response.json();
      // setResponseText(data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponseText('Sorry, an error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeechInput = () => {
    setResponseText('Speech recognition activated. Speak now...');
    // Speech recognition logic would go here
  };

  const handleImageUpload = () => {
    document.getElementById('imageInput')?.click();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <section className="text-center mb-16">
        <LogoDisplay size={140} className="mx-auto mb-8" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Medical Waste Disposal Assistant
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Get instant guidance on how to properly dispose of medical waste. 
          Simply speak, type, or upload an image of the waste item.
        </p>
      </section>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Speech Input */}
          <button
            onClick={handleSpeechInput}
            className="input-card md:min-h-44"
          >
            <Mic size={32} className="text-medical-primary mb-2" />
            <span className="font-medium">Speak Waste Type</span>
            <p className="text-xs text-gray-500">Click to start speaking</p>
          </button>

          {/* Text Input */}
          <form onSubmit={handleTextSubmit} className="input-card md:min-h-44">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type item name here..."
              className="medical-input w-full"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="medical-button bg-medical-primary text-white w-full flex items-center justify-center"
            >
              <Send size={16} className="mr-2" />
              Submit
            </button>
          </form>

          {/* Image Upload */}
          <div className="input-card md:min-h-44" onClick={handleImageUpload}>
            <Upload size={32} className="text-medical-primary mb-2" />
            <span className="font-medium">Upload Waste Image</span>
            <p className="text-xs text-gray-500">Click to select an image</p>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={() => setResponseText('Image uploaded. Processing...')}
            />
          </div>
        </div>

        {/* Response Area */}
        {responseText && (
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mt-8">
            <h3 className="font-semibold text-gray-900 mb-2">AI Assistant Response:</h3>
            <p className="text-gray-700">{responseText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
