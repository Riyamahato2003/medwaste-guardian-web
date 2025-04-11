
import React, { useState, useRef } from 'react';
import { Mic, Upload, Type } from 'lucide-react';

interface InputPanelProps {
  onTextSubmit: (text: string) => void;
  onImageUpload: (file: File) => void;
  onStartRecording: () => void;
}

const InputPanel: React.FC<InputPanelProps> = ({ 
  onTextSubmit, 
  onImageUpload, 
  onStartRecording 
}) => {
  const [text, setText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onTextSubmit(text);
      setText('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
      {/* Speech Input Card */}
      <div 
        className="input-card"
        onClick={onStartRecording}
      >
        <div className="p-3 rounded-full bg-medical-accent text-medical-primary mb-2">
          <Mic size={28} />
        </div>
        <h3 className="text-lg font-medium text-gray-800">Speak Waste Type</h3>
        <p className="text-sm text-gray-500 text-center mt-1">
          Click to speak and describe the waste item
        </p>
      </div>

      {/* Text Input Card */}
      <div className="input-card">
        <div className="p-3 rounded-full bg-medical-accent text-medical-primary mb-2">
          <Type size={28} />
        </div>
        <h3 className="text-lg font-medium text-gray-800">Type Item Name</h3>
        <form onSubmit={handleTextSubmit} className="w-full mt-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type item name here..."
            className="medical-input w-full"
          />
          <button
            type="submit"
            className="medical-button bg-medical-primary text-white w-full mt-2"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Image Upload Card */}
      <div className="input-card" onClick={triggerFileInput}>
        <div className="p-3 rounded-full bg-medical-accent text-medical-primary mb-2">
          <Upload size={28} />
        </div>
        <h3 className="text-lg font-medium text-gray-800">Upload Waste Image</h3>
        <p className="text-sm text-gray-500 text-center mt-1">
          Click to upload an image of the waste item
        </p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          id="imageInput"
        />
      </div>
    </div>
  );
};

export default InputPanel;
