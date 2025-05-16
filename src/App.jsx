import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="homepage">
      <header className="hero-area">
        <h1>🚀 StudyPal</h1>
        <p>
          Personalized learning paths for fast, slow and dyslexic learners.
        </p>
        <button className='get-started-btn'>Get started!</button>
      </header>
      <section className="features">
        <div className='feature'>
          <h3>📊 Initial Assessment </h3>
          <p> 
            Gauge Learning style, speed, comfort zones with smart diagnostics
          </p>
        </div>
        <div className='feature'>
          <h3>📚 Custom Study Paths</h3>
          <p> 
            Material adapts in depth, pace, and presentation just for you.
          </p>
        </div>
        <div className='feature'>
          <h3>🧠 AI as Your Tutor</h3>
          <p> 
            Ask questions, get explanations, and auto-summarized notes 24/7.
          </p>
        </div>                
      </section>
      <footer className='footer'>
        <p>©Made w ❤️ by Sukhdev Thukral, 2025 </p>
      </footer>
    </div>
  );
}

export default App
