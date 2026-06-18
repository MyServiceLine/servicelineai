"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Signup() {
  const [form, setForm] = useState({
    businessName: "",
    phone: "",
    services: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("Submitted:", form)
    alert("AI Receptionist setup started (demo)")
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5",
      padding: 20
    }}>

      <Card style={{
        width: "100%",
        maxWidth: 500,
        padding: 30
      }}>

        <h1 style={{ fontSize: 28, fontWeight: 700 }}>
          Setup Your AI Receptionist
        </h1>

        <p style={{ marginTop: 8, opacity: 0.7 }}>
          Get your 7-day free trial. No credit card required.
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>

          <label>Business Name</label>
          <Input
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="e.g. Smith Electrical"
          />

          <div style={{ height: 10 }} />

          <label>Phone Number</label>
          <Input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
          />

          <div style={{ height: 10 }} />

          <label>Services You Offer</label>
          <Input
            name="services"
            value={form.services}
            onChange={handleChange}
            placeholder="Electrical repair, installs, emergency calls"
          />

          <Button type="submit" style={{ width: "100%", marginTop: 20 }}>
            Activate My AI Receptionist
          </Button>

        </form>

        <p style={{
          marginTop: 15,
          fontSize: 12,
          opacity: 0.6,
          textAlign: "center"
        }}>
          Your AI receptionist will be configured instantly after signup.
        </p>

      </Card>
    </main>
  )
}