import { Logo } from '../common/Logo/Logo';
import { Button, GitHubIcon } from '../common/Button/Button';
import { Mockup } from '../Mockup/Mockup';

export function Hero() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div className="hero-logo">
          <Logo variant="hero" />
          <span className="hero-wordmark">BYTHOS</span>
        </div>

        <div className="hero-eyebrow">Aplicación de escritorio · Windows</div>

        <h1>
          Tu biblioteca personal
          <br />
          de aprendizaje
        </h1>

        <p className="hero-sub">
          Guarda links de YouTube y artículos, organízalos por tema y domina todo lo que aprendes.
          Sin cuentas, sin nube. Todo tuyo, en tu PC.
        </p>

        <div className="hero-ctas">
          <Button variant="primary" href="https://github.com/GermanVelazquez/Bythos" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            Ver repositorio en GitHub
          </Button>
          <Button variant="secondary" href="#how">
            Ver cómo funciona
          </Button>
        </div>
      </div>

      <Mockup />
    </header>
  );
}
