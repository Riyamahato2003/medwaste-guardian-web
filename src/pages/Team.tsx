
import React from 'react';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

const teamMembers = [
  { name: 'Devayush Rout', role: 'Team Lead' },
  { name: 'Riya Mahato', role: 'ML Engineer' },
  { name: 'Divyansh Kumar', role: 'Backend Developer' },
  { name: 'Syed Afreen', role: 'UI/UX Designer' },
  { name: 'Mohmmad Belal', role: 'Full Stack Developer' },
  { name: 'Ojas Tijore', role: 'Data Scientist' },
];

const Team = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind MedWaste Guardian
          </p>
          <div className="h-1 w-20 bg-medical-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card group">
              <div className="w-32 h-32 rounded-full bg-medical-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl text-medical-primary font-medium">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-medical-primary font-medium mt-1 mb-4">
                {member.role}
              </p>
              <div className="flex gap-4 justify-center">
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                  <LinkedinIcon size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                  <GithubIcon size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals passionate about healthcare technology and AI to join our mission.
          </p>
          <button className="medical-button bg-medical-primary text-white">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
