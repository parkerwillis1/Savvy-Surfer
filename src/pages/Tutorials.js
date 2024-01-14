import React from 'react';
import './Tutorials.css'; // Make sure to create a corresponding CSS file for styling

const tutorialsArray = [
    { id: 1, title: "Beginner's Guide to Surfing", description: "Get started with the basics of surfing." },
    { id: 2, title: "Mastering the Waves", description: "Advanced techniques for experienced surfers." },
    { id: 3, title: "What To Bring When Surfing ", description: "An all gear guide for what to bring to the beach." },
    // ... more tutorials
];

const Tutorials = () => {
    return (
        <div className="tutorials-container">
            <h1>Surfing Tutorials</h1>
            <p>Explore our collection of tutorials and improve your surfing skills.</p>
            
            <div className="tutorial-list">
                {tutorialsArray.map(tutorial => (
                    <div key={tutorial.id} className="tutorial-item">
                        <h3>{tutorial.title}</h3>
                        <p>{tutorial.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tutorials;
