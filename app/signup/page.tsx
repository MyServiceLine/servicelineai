"use client"

import type React from "react"
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
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log("Submitted:", form)
    alert("AI Receptionist setup started (demo)")
  }

  return (
    <main style={styles.page}>
      <Card style={styles.card}>
        <h1 style={styles.title}>Setup Your AI Receptionist</h1>

        <p style={styles.subtitle}>
          Get your 7-day free trial. No credit card required.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Business Name</label>
          <Input
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="e.g. Smith Electrical"
          />

          <div style={{ height: 12 }} />

          <label style={styles.label}>Phone Number</label>
          <Input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
          />

          <div style={{ height: 12 }} />

          <label style={styles.label}>Services You Offer</label>
          <Input
            name="services"
            value={form.services}
            onChange={handleChange}
            placeholder="Electrical repair, installs, emergency calls"
          />

          <Button type="submit" style={styles.button}>
            Activate My AI Receptionist
          </Button>
        </form>

        <p style={styles.footer}>
          Your AI receptionist will be configured instantly after signup.
        </p>
      </Card>
    </main>
  )
}

/* ---------- STYLES ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
    padding: 20,
  } as React.CSSProperties,

  card: {
    width: "100%",
    maxWidth: 500,
    padding: 30,
  } as React.CSSProperties,

  title: {
    fontSize: 28,
    fontWeight: 700,
  } as React.CSSProperties,

  subtitle: {
    marginTop: 8,
    opacity: 0.7,
  } as React.CSSProperties,

  form: {
    marginTop: 20,
  } as React.CSSProperties,

  label: {
    display: "block",
    marginBottom: 6,
    fontSize: 14,
  } as React.CSSProperties,

  button: {
    width: "100%",
    marginTop: 20,
  } as React.CSSProperties,

  footer: {
    marginTop: 15,
    fontSize: 12,
    opacity: 0.6,
    textAlign: "center",
  } as React.CSSProperties,
}