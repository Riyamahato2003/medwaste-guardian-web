
import React, { useState } from 'react';
import { toast } from 'sonner';
import InputPanel from '../components/InputPanel';

const Home = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTextSubmit = async (text: string) => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const response = await fetch("/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text })
      });
      
      const data = await response.json();
      
      if (data.response) {
        setResult(data.response);
      } else {
        throw new Error(data.error || "No response received");
      }
    } catch (err) {
      console.error("Text error:", err);
      toast.error(`Error: ${err instanceof Error ? err.message : String(err)}`);
      setResult("Sorry, there was an error processing your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const formData = new FormData();
      formData.append("image", file);
      
      const imageResponse = await fetch("/predict/image", {
        method: "POST",
        body: formData
      });
      
      const imageData = await imageResponse.json();
      
      if (imageData.classification) {
        const imageDesc = `Image classification result: ${JSON.stringify(imageData.classification)}`;
        
        const llmResponse = await fetch("/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: imageDesc })
        });
        
        const llmData = await llmResponse.json();
        
        if (llmData.response) {
          setResult(llmData.response);
        } else {
          throw new Error(llmData.error || "No guidance received");
        }
      } else {
        throw new Error(imageData.error || "No classification result");
      }
    } catch (err) {
      console.error("Image error:", err);
      toast.error(`Error: ${err instanceof Error ? err.message : String(err)}`);
      setResult("Sorry, there was an error processing your image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartRecording = async () => {
    setIsLoading(true);
    setResult(null);
    
    try {
      toast.info("Recording started...");
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      const audioChunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };
      
      mediaRecorder.onstop = async () => {
        try {
          const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
          const formData = new FormData();
          formData.append("audio", audioBlob, "recorded_audio.webm");
          
          const speechResponse = await fetch("/predict/speech", {
            method: "POST",
            body: formData
          });
          
          const speechData = await speechResponse.json();
          
          if (speechData.response) {
            toast.success("Speech recognized!");
            
            const llmResponse = await fetch("/query", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ query: speechData.response })
            });
            
            const llmData = await llmResponse.json();
            
            if (llmData.response) {
              setResult(llmData.response);
            } else {
              throw new Error(llmData.error || "No guidance received");
            }
          } else {
            throw new Error(speechData.error || "Speech recognition failed");
          }
        } catch (err) {
          console.error("Speech processing error:", err);
          toast.error(`Error: ${err instanceof Error ? err.message : String(err)}`);
          setResult("Sorry, there was an error processing your speech. Please try again.");
        } finally {
          setIsLoading(false);
          stream.getTracks().forEach(track => track.stop());
        }
      };
      
      mediaRecorder.start();
      
      setTimeout(() => {
        if (mediaRecorder.state !== "inactive") {
          mediaRecorder.stop();
        }
      }, 5000);
      
    } catch (err) {
      console.error("Recording error:", err);
      toast.error(`Error accessing microphone: ${err instanceof Error ? err.message : String(err)}`);
      setResult("Sorry, there was an error accessing your microphone. Please ensure microphone permissions are enabled and try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            MedWaste <span className="text-medical-primary">Guardian</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered assistant for safe and correct disposal of biomedical waste.
          </p>
        </div>
        
        <div className="mb-12">
          <InputPanel 
            onTextSubmit={handleTextSubmit}
            onImageUpload={handleImageUpload}
            onStartRecording={handleStartRecording}
          />
        </div>
        
        {isLoading && (
          <div className="medical-card animate-pulse-gentle max-w-3xl mx-auto my-8">
            <div className="h-6 bg-gray-200 rounded-full w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
          </div>
        )}
        
        {result && !isLoading && (
          <div className="medical-card max-w-3xl mx-auto my-8 animate-fade-in">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Waste Disposal Guidance</h3>
            <div className="bg-medical-accent/30 p-4 rounded-lg">
              <p className="text-gray-700 whitespace-pre-line">{result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
