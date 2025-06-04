// HomePage.jsx – Version avec CSS pur et particles.js + image de fond
import { useEffect } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import '../assets/styles/HomePage.css'; // fichier CSS pur associé

export default function HomePage() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="homepage-container">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.4 },
            size: { value: 2 },
            move: { enable: true, speed: 1, direction: 'none' },
          },
        }}
      />

      {/* Content */}
      <div className="content">
        <header className="navbar">
          <h3>🎓 MonEspace</h3>
          <div className="nav-icons">
            <span>🔔</span>
            <span>👤</span>
          </div>
        </header>

        <section className="hero">
          <h1>Bienvenue 👋</h1>
          <p>Accédez facilement à vos cours, notes, et examens depuis un seul espace intuitif.</p>
        </section>

        <section className="cards">
          <div className="card cours">📚 Mes Cours</div>
          <div className="card notes">📝 Mes Notes</div>
          <div className="card examens">📆 Examens</div>
        </section>

        <footer>
          &copy; 2025 MonEspace. Tous droits réservés.
        </footer>
      </div>
    </div>
  );
}
