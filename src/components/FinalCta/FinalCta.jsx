import { Button, GitHubIcon } from '../common/Button/Button';

export function FinalCta() {
  return (
    <section className="cta-final" id="download">
      <div className="container reveal">
        <h2>Empieza tu biblioteca hoy.</h2>
        <p>Sin cuentas, sin suscripciones, sin nube. Solo tú y todo lo que quieres aprender.</p>
        <div className="hero-ctas">
          <Button variant="primary" href="https://github.com/GermanVelazquez/Bythos" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            Ir al repositorio
          </Button>
        </div>
        <div className="cta-meta">Código abierto · Windows · Sin cuentas ni nube</div>
      </div>
    </section>
  );
}
