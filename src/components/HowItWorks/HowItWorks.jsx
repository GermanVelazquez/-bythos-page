import { steps } from '../../data/content';
import { SectionHeader } from '../common/SectionHeader/SectionHeader';

export function HowItWorks() {
  return (
    <section id="how" className="steps-section">
      <div className="container">
        <SectionHeader
          label="Cómo funciona"
          title="Tres pasos. Siempre los mismos."
          description="Sin curvas de aprendizaje. Sin onboarding de veinte pantallas."
        />

        <div className="steps-grid reveal">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
