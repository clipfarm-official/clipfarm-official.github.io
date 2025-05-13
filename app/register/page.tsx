"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "creator",
    youtube: "",
    twitch: "",
    instagram: "",
    tiktok: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ name: "", email: "", role: "creator", youtube: "", twitch: "", instagram: "", tiktok: "" })
      } else {
        const data = await res.json()
        setError(data.error || "Registration failed")
      }
    } catch (err) {
      setError("Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#18122b] to-[#2d1a60] p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-[#9147ff]/30">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">Register</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9147ff]"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9147ff]"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select
            className="rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9147ff]"
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="creator">Creator</option>
            <option value="clipper">Clipper</option>
          </select>
          <input
            className="rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9147ff]"
            name="youtube"
            placeholder="YouTube Handle (optional)"
            value={form.youtube}
            onChange={handleChange}
          />
          <input
            className="rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9147ff]"
            name="twitch"
            placeholder="Twitch Handle (optional)"
            value={form.twitch}
            onChange={handleChange}
          />
          <input
            className="rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9147ff]"
            name="instagram"
            placeholder="Instagram Handle (optional)"
            value={form.instagram}
            onChange={handleChange}
          />
          <input
            className="rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9147ff]"
            name="tiktok"
            placeholder="TikTok Handle (optional)"
            value={form.tiktok}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-[#9147ff] to-[#00eaff] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:from-[#00eaff] hover:to-[#9147ff] transition-colors"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {success && <div className="mt-4 text-green-400 text-center">Registration successful!</div>}
        {error && <div className="mt-4 text-red-400 text-center">{error}</div>}
      </div>
    </div>
  )
} 