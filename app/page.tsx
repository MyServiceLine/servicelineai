import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#fff" }}>

      {/* HERO BOX */}
      <section style={{
        padding: "100px 40px 50px",
        maxWidth: 1100,
        margin: "0 auto"
      }}>
        <a href="/signup" style={{ textDecoration: "none" }}>
          <Card style={{
            padding: 50,
            textAlign: "center",
            cursor: "pointer",
            border: "2px solid #111",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)"
          }}>
            <h1 style={{ fontSize: 60, fontWeight: 900 }}>
              ServiceLineAI
            </h1>

            <p style={{ fontSize: 20, marginTop: 15, opacity: 0.7 }}>
              AI Receptionist for electricians & home service businesses
            </p>

            <p style={{ marginTop: 10, fontSize: 16 }}>
              Never miss a call. Never lose a job. Your AI answers 24/7 like your best employee.
            </p>

            <div style={{ marginTop: 30 }}>
              <Button
                size="lg"
                style={{
                  fontSize: 18,
                  padding: "18px 34px",
                  borderRadius: 12,
                  background: "#111",
                  color: "white"
                }}
              >
                🚀 Start Free 7-Day Trial
              </Button>

              <p style={{ marginTop: 10, fontSize: 13, opacity: 0.6 }}>
                Click anywhere to begin onboarding
              </p>
            </div>
          </Card>
        </a>
      </section>

      {/* FEATURES BOXES */}
      <section style={{
        padding: "40px",
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20
      }}>

        <a href="/signup" style={{ textDecoration: "none" }}>
          <Card style={boxStyle}>
            <h3>📞 Answers Every Call</h3>
            <p>AI picks up instantly and responds like a real receptionist.</p>
          </Card>
        </a>

        <a href="/signup" style={{ textDecoration: "none" }}>
          <Card style={boxStyle}>
            <h3>📅 Books Jobs Automatically</h3>
            <p>Schedules appointments based on your availability.</p>
          </Card>
        </a>

        <a href="/signup" style={{ textDecoration: "none" }}>
          <Card style={boxStyle}>
            <h3>⚡ 24/7 Receptionist</h3>
            <p>Never miss a customer even after hours.</p>
          </Card>
        </a>
      </section>

      {/* SERVICES BOX */}
      <section style={{ padding: "60px 40px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <a href="/signup" style={{ textDecoration: "none" }}>
            <Card style={{
              padding: 40,
              cursor: "pointer",
              border: "1px solid #ddd"
            }}>
              <h2 style={{ fontSize: 32, fontWeight: 800 }}>
                Built for Service Businesses
              </h2>

              <p style={{ marginTop: 10, opacity: 0.7 }}>
                Electricians, HVAC, plumbers, contractors, and home services.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginTop: 25
              }}>

                <Card style={innerBox}>
                  ⚡ Electrical Services
                </Card>

                <Card style={innerBox}>
                  🏠 Home Services
                </Card>

              </div>

              <p style={{ marginTop: 20, fontSize: 13, opacity: 0.6 }}>
                Click to continue setup →
              </p>
            </Card>
          </a>

        </div>
      </section>

      {/* PRICING BOX */}
      <section style={{
        padding: "70px 40px",
        maxWidth: 1100,
        margin: "0 auto"
      }}>
        <a href="/signup" style={{ textDecoration: "none" }}>
          <Card style={{
            padding: 40,
            textAlign: "center",
            cursor: "pointer",
            border: "2px solid #111"
          }}>
            <h2 style={{ fontSize: 34, fontWeight: 800 }}>
              Simple Pricing
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 30
            }}>

              <Card style={pricingBox}>
                <h3>Free Trial</h3>
                <p>7 days of live AI receptionist</p>
              </Card>

              <Card style={pricingBox}>
                <h3>Basic</h3>
                <p>$59.99 / month</p>
              </Card>

            </div>

            <p style={{ marginTop: 20, fontSize: 13, opacity: 0.6 }}>
              Everything leads to onboarding →
            </p>
          </Card>
        </a>
      </section>

      {/* MISSION BOX */}
      <section style={{
        padding: "70px 40px",
        background: "#111",
        color: "white"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <a href="/signup" style={{ textDecoration: "none" }}>
            <Card style={{
              padding: 40,
              background: "#111",
              border: "1px solid #333",
              color: "white",
              textAlign: "center",
              cursor: "pointer"
            }}>
              <h2 style={{ fontSize: 30 }}>
                Built for Contractors
              </h2>

              <p style={{ marginTop: 20, opacity: 0.8 }}>
                ServiceLineAI helps service businesses stop missing calls and losing jobs.
              </p>

              <p style={{ marginTop: 20, fontSize: 13, opacity: 0.6 }}>
                Click anywhere to start setup →
              </p>
            </Card>
          </a>

        </div>
      </section>

    </main>
  )
}

/* styles reused */
const boxStyle = {
  padding: 25,
  cursor: "pointer",
  border: "1px solid #ddd"
}

const innerBox = {
  padding: 20,
  border: "1px solid #ddd",
  textAlign: "center"
}

const pricingBox = {
  padding: 25,
  border: "1px solid #ddd"
}
