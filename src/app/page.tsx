import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">AI performance system</div>
            <h1>Your body needs a system, not more guessing.</h1>
            <p>
              Strxngth turns your goals, body type, diet, injuries, schedule,
              and consistency issues into a daily training, nutrition, recovery,
              and execution plan.
            </p>

            <div className="hero-actions">
              <Link href="/onboarding" className="btn-primary" aria-label="Primary action">
                Build My Strxngth Plan
              </Link>
              <Link href="/dashboard" className="btn-secondary">
                View Demo Dashboard
              </Link>
            </div>
          </div>

          <div className="panel os-card">
            <div className="panel-top">
              <span>Today’s System</span>
              <span className="status-pill">Sample plan</span>
            </div>

            <div className="metric-grid">
              <div className="metric">
                <span>Protein</span>
                <strong>Target</strong>
              </div>
              <div className="metric">
                <span>Training</span>
                <strong>Split</strong>
              </div>
              <div className="metric">
                <span>Hydration</span>
                <strong>Daily</strong>
              </div>
              <div className="metric">
                <span>Adherence</span>
                <strong>Focus</strong>
              </div>
            </div>

            <div className="today">
              <h3>Execution checklist</h3>
              <div className="check">
                <span className="dot" />
                <span>Upper push workout, 60 to 75 minutes.</span>
              </div>
              <div className="check">
                <span className="dot" />
                <span>Protein and carbs before training window.</span>
              </div>
              <div className="check">
                <span className="dot" />
                <span>Evening recovery meal and sleep wind-down.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Why Strxngth exists</div>
            <h2>Most health apps track your failure. Strxngth builds your execution.</h2>
            <p>
              Calorie trackers are manual. Workout apps are generic. Wearables show data
              without telling you what to do next. Strxngth connects the plan,
              the reminders, and the daily decisions into one performance layer.
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Personalized training</h3>
              <p>
                Plans adapt around your goals, equipment, schedule, body type,
                injuries, energy, and consistency level.
              </p>
            </div>
            <div className="card">
              <h3>Protein-first nutrition</h3>
              <p>
                Get practical calorie, macro, hydration, and meal timing targets
                that fit real life instead of fantasy meal plans.
              </p>
            </div>
            <div className="card">
              <h3>Execution coaching</h3>
              <p>
                Daily reminders, checklists, and coach feedback help you stack
                repeatable wins instead of relying on motivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">How it works</div>
            <h2>One intake. One system. Daily execution.</h2>
          </div>

          <div className="workflow">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Enter your body context</h3>
              <p>Height, weight, goal, diet, injuries, supplements, schedule, and gym consistency.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Generate the plan</h3>
              <p>Strxngth creates training, nutrition, hydration, reminders, and daily checklists.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Use the dashboard</h3>
              <p>Track today’s focus, meal timing, training split, and adherence targets.</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h3>Adjust over time</h3>
              <p>The product direction is adaptive coaching that changes when real life changes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Build the system your future body follows.</h2>
            <p>
              Strxngth is an early-stage MVP. The current version gives you a
              premium intake, plan generation, and demo dashboard. The next version
              adds deeper tracking, account persistence, and adaptive coaching.
            </p>

            <div className="hero-actions">
              <Link href="/onboarding" className="btn-primary">
                Start Intake
              </Link>
              <Link href="/dashboard" className="btn-secondary">
                Preview Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span>Strxngth · AI-powered health execution.</span>
        </div>
      </footer>
      <ProductHonestyNote status="demo" />
    </div>
  );
}
