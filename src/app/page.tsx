import { Hero } from "@/components/ui/hero"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"
import { MasterPlan } from "@/components/ui/master-plan"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-950 text-zinc-50 pt-20">
      <Header />
      
      {/* Hero Section */}
      <Hero
        subtitle="Building advanced humanoid hands that move, feel, and sense like human hands."
        actions={[
          {
            label: "Join Our Team",
            href: "#careers",
            variant: "default"
          },
          {
            label: "Partner With Us",
            href: "#investors",
            variant: "outline"
          }
        ]}
      />

      {/* Vision Section */}
      <section className="w-full py-32 px-4 md:px-8 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">H1 Hand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-video relative bg-zinc-900/50 rounded-xl overflow-hidden ring-1 ring-zinc-800/50 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/cEo4WlCanMc"
                title="H1 Hand Demo"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-zinc-100">20+ Degrees of Freedom</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Our first humanoid hand prototype, developed in just 3 months. Featuring advanced vision-based control and real-time adaptation capabilities.
              </p>
              <a 
                href="https://www.youtube.com/watch?v=cEo4WlCanMc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="link" className="text-primary hover:text-primary/80 group text-lg pl-0">
                  Watch Full Demo 
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan Section */}
      <MasterPlan />

      {/* Investors Section */}
      <section id="investors" className="w-full py-32 px-4 md:px-8 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">Partner With Us</h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            Join us in shaping the future of humanoid robotics. We're looking for strategic partners who share our vision of advancing robotic capabilities through innovative approaches.
          </p>
          <form className="space-y-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <input
              type="text"
              placeholder="Organization"
              className="w-full p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
            <Button className="w-full text-base py-6">Submit Interest</Button>
          </form>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="w-full py-32 px-4 md:px-8 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">Join Our Team</h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            We're looking for exceptional talent to join us in revolutionizing humanoid robotics. If you're passionate about robotics, computer vision, and machine learning, we want to hear from you.
          </p>
          <form className="space-y-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <select className="w-full p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
              <option value="">Select Role</option>
              <option value="robotics">Robotics Engineer</option>
              <option value="vision">Computer Vision Engineer</option>
              <option value="ml">Machine Learning Engineer</option>
              <option value="mechanical">Mechanical Engineer</option>
            </select>
            <textarea
              placeholder="Why do you want to join Proception?"
              rows={4}
              className="w-full p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
            <Button className="w-full text-base py-6">Submit Application</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 md:px-8 border-t border-zinc-800/50 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-zinc-500 text-sm">© 2024 Proception. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors">Terms</a>
              <a href="#" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
