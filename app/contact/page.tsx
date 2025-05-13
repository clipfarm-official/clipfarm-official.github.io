export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#18122b] to-[#2d1a60] p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-[#9147ff]/30 text-center">
        <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
        <p className="text-lg text-[#e0e0ff] mb-4">For all inquiries, please email us at:</p>
        <a href="mailto:contactus@clipfarm.info" className="text-xl font-semibold text-[#9147ff] hover:underline">contactus@clipfarm.info</a>
      </div>
    </div>
  )
} 