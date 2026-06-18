import type { CSSProperties } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#fff" }}>

      {/* HERO BOX */}
      <section style={sectionStyle}>
        <a href="/signup" style={linkStyle}>
          <Card style={heroCardStyle}>
            <h1 style={titleStyle}>ServiceLineAI</h1>

            <p style={subtitleStyle}>
              AI Receptionist for electricians & home service businesses
            </p>

            <p style={textStyle}>
              Never miss a call. Never lose a job. Your AI answers 24/7 like your best employee.
            </p>

            <div style={{ marginTop: 30 }}>
              <Button
                size="lg"
                style={buttonStyle}
              >
                🚀 Start Free 7-Day Trial
              </Button>

              <p style={hintStyle}>
                Click anywhere to begin onboarding
              </p>
            </div>
          </Card>
        </a>
      </section>

      {/* FEATURES */}
      <section style={featuresGrid}>
        <Feature title="📞 Answers Every Call" text="AI picks up instantly and responds like a real receptionist." />
        <Feature title="📅 Books Jobs Automatically" text="Schedules appointments based on your availability." />
        <Feature title="⚡ 24/7 Receptionist" text="Never miss a customer even after hours." />
      </section>

      {/* SERVICES */}
      <section style={servicesSection}>
        <div style={container}>
          <a href="/signup" style={linkStyle}>
            <Card style={servicesCard}>
              <h2 style={h2Style}>Built for Service Businesses</h2>

              <p style={mutedText}>
                Electricians, HVAC, plumbers, contractors, and home services.
              </p>

              <div style={twoGrid}>
                <Card style={smallBox}>⚡ Electrical Services</Card>
                <Card style={smallBox}>🏠 Home Services</Card>
              </div>

              <p style={hintSmall}>Click to continue setup →</p>
            </Card>
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section style={sectionStyle}>
        <a href="/signup" style={linkStyle}>
          <Card style={pricingCard}>
            <h2 style={h2Style}>Simple Pricing</h2>

            <div style={twoGrid}>
              <Card style={smallBox}>
                <h3>Free Trial</h3>
                <p>7 days of live AI receptionist</p>
              </Card>

              <Card style={smallBox}>
                <h3>Basic</h3>
                <p>$59.99 / month</p>
              </Card>
            </div>

            <p style={hintSmall}>Everything leads to onboarding →</p>
          </Card>
        </a>
      </section>

      {/* MISSION */}
      <section style={missionSection}>
        <div style={container}>
          <a href="/signup" style={linkStyle}>
            <Card style={missionCard}>
              <h2 style={{ fontSize: 30 }}>Built for Contractors</h2>

              <p style={mutedTextWhite}>
                ServiceLineAI helps service businesses stop missing calls and losing jobs.
              </p>

              <p style={hintWhite}>Click anywhere to start setup →</p>
            </Card>
          </a>
        </div>
      </section>

    </main>
  )
}

/* ---------- COMPONENT ---------- */

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <a href="/signup" style={linkStyle}>
      <Card style={featureCard}>
        <h3>{title}</h3>
        <p>{text}</p>
      </Card>
    </a>
  )
}

/* ---------- STYLES ---------- */

const sectionStyle: CSSProperties = {
  padding: "80px 40px",
  maxWidth: 1100,
  margin: "0 auto",
}

const heroCardStyle: CSSProperties = {
  padding: 50,
  textAlign: "center",
  cursor: "pointer",
  border: "2px solid #111",
  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
}

const titleStyle: CSSProperties = {
  fontSize: 60,
  fontWeight: 900,
}

const subtitleStyle: CSSProperties = {
  fontSize: 20,
  marginTop: 15,
  opacity: 0.7,
}

const textStyle: CSSProperties = {
  marginTop: 10,
  fontSize: 16,
}

const buttonStyle: CSSProperties = {
  fontSize: 18,
  padding: "18px 34px",
  borderRadius: 12,
  background: "#111",
  color: "white",
}

const hintStyle: CSSProperties = {
  marginTop: 10,
  fontSize: 13,
  opacity: 0.6,
}

const featuresGrid: CSSProperties = {
  padding: "40px",
  maxWidth: 1100,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 20,
}

const featureCard: CSSProperties = {
  padding: 25,
  border: "1px solid #ddd",
  cursor: "pointer",
}

const servicesSection: CSSProperties = {
  padding: "60px 40px",
  background: "#f9f9f9",
}

const container: CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
}

const servicesCard: CSSProperties = {
  padding: 40,
  border: "1px solid #ddd",
}

const h2Style: CSSProperties = {
  fontSize: 32,
  fontWeight: 800,
}

const mutedText: CSSProperties = {
  marginTop: 10,
  opacity: 0.7,
}

const mutedTextWhite: CSSProperties = {
  marginTop: 20,
  opacity: 0.8,
}

const hintSmall: CSSProperties = {
  marginTop: 20,
  fontSize: 13,
  opacity: 0.6,
}

const hintWhite: CSSProperties = {
  marginTop: 20,
  fontSize: 13,
  opacity: 0.7,
}

const twoGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
  marginTop: 25,
}

const smallBox: CSSProperties = {
  padding: 20,
  border: "1px solid #ddd",
  textAlign: "center",
}

const pricingCard: CSSProperties = {
  padding: 40,
  textAlign: "center",
  border: "2px solid #111",
}

const missionSection: CSSProperties = {
  padding: "70px 40px",
  background: "#111",
  color: "white",
}

const missionCard: CSSProperties = {
  padding: 40,
  background: "#111",
  border: "1px solid #333",
  color: "white",
  textAlign: "center",
}

const linkStyle: CSSProperties = {
  textDecoration: "none",
  color: "inherit",
}