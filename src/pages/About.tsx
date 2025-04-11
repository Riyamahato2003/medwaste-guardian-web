
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About MedWaste Guardian
          </h1>
          <div className="h-1 w-20 bg-medical-primary mx-auto"></div>
        </div>
        
        <div className="medical-card mb-10">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              MedWaste Guardian is an AI-powered assistant that helps healthcare workers dispose of biomedical waste safely and correctly. Using speech, text, or image input, the system identifies the type of medical waste—such as used syringes, gloves, blood-stained materials, or expired medicines—and guides users on proper disposal based on color-coded bin systems. Designed for nurses, sanitation staff, and paramedics, it supports multiple regional languages and works even in offline settings, making it ideal for both urban hospitals and rural clinics.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              The assistant uses AI technologies like computer vision and natural language processing to offer real-time recommendations and educational tips, helping prevent health hazards, needle-stick injuries, and environmental pollution. It also tracks disposal patterns to support compliance and training. MedWaste Guardian is more than just a tool—it's a digital companion promoting hygiene, safety, and sustainability in healthcare. By making biomedical waste management easy and accessible, it helps protect people, communities, and the planet.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Feature 1 */}
          <div className="medical-card">
            <div className="p-3 rounded-full bg-medical-accent text-medical-primary w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Multi-lingual Support</h3>
            <p className="text-gray-600 text-center">
              Supports multiple regional languages to ensure accessibility for all healthcare staff.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="medical-card">
            <div className="p-3 rounded-full bg-medical-accent text-medical-primary w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.125-3.75h7.5c.621 0 1.125.504 1.125 1.125m-9.75 0h9.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Offline Capability</h3>
            <p className="text-gray-600 text-center">
              Works in offline settings, making it suitable for both urban hospitals and rural clinics.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="medical-card">
            <div className="p-3 rounded-full bg-medical-accent text-medical-primary w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Compliance Tracking</h3>
            <p className="text-gray-600 text-center">
              Tracks disposal patterns to support regulatory compliance and staff training.
            </p>
          </div>
        </div>
        
        <div className="medical-card bg-medical-accent/30">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Mission</h3>
          <p className="text-gray-700 text-center">
            To make biomedical waste management easy, accessible, and safe—protecting healthcare workers, communities, and the environment through innovative AI solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
