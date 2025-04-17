import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScheduleSection } from "@/components/schedule-section";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";

export const metadata = {
  title: "Class Schedule | GravityGym",
  description: "View our full class schedule and plan your workouts at GravityGym",
};

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative py-20 md:py-28">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1675&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)",
            }}
          />
          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">CLASS SCHEDULE</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find the perfect class for your fitness journey and reserve your spot today.
            </p>
          </div>
        </section>

        {/* Main Schedule */}
        <ScheduleSection />

        {/* Class Descriptions */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">CLASS DESCRIPTIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-lime-500">HIIT</h3>
                <p className="text-gray-300 mb-3">
                  High-Intensity Interval Training combines short bursts of intense exercise with periods of rest or lower-intensity exercise.
                </p>
                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <div>
                    <span className="font-bold">Duration:</span> 45 min
                  </div>
                  <div>
                    <span className="font-bold">Intensity:</span> High
                  </div>
                  <div>
                    <span className="font-bold">Level:</span> All levels
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-lime-500">CrossFit</h3>
                <p className="text-gray-300 mb-3">
                  A high-intensity fitness program incorporating elements from several sports and types of exercise.
                </p>
                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <div>
                    <span className="font-bold">Duration:</span> 60 min
                  </div>
                  <div>
                    <span className="font-bold">Intensity:</span> High
                  </div>
                  <div>
                    <span className="font-bold">Level:</span> Intermediate
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-lime-500">Yoga</h3>
                <p className="text-gray-300 mb-3">
                  A mind and body practice with a sequence of postures and breathing techniques that promote physical and mental wellbeing.
                </p>
                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <div>
                    <span className="font-bold">Duration:</span> 60 min
                  </div>
                  <div>
                    <span className="font-bold">Intensity:</span> Low-Medium
                  </div>
                  <div>
                    <span className="font-bold">Level:</span> All levels
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-lime-500">Spinning</h3>
                <p className="text-gray-300 mb-3">
                  Indoor cycling workout class with a focus on endurance, strength, intervals, high intensity, and recovery.
                </p>
                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <div>
                    <span className="font-bold">Duration:</span> 45 min
                  </div>
                  <div>
                    <span className="font-bold">Intensity:</span> Medium-High
                  </div>
                  <div>
                    <span className="font-bold">Level:</span> All levels
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-lime-500">Pilates</h3>
                <p className="text-gray-300 mb-3">
                  System of exercises that focus on improving flexibility, strength, and body awareness without building bulk.
                </p>
                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <div>
                    <span className="font-bold">Duration:</span> 50 min
                  </div>
                  <div>
                    <span className="font-bold">Intensity:</span> Medium
                  </div>
                  <div>
                    <span className="font-bold">Level:</span> All levels
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-lime-500">Zumba</h3>
                <p className="text-gray-300 mb-3">
                  Dance fitness program that combines Latin and international music with dance moves.
                </p>
                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <div>
                    <span className="font-bold">Duration:</span> 60 min
                  </div>
                  <div>
                    <span className="font-bold">Intensity:</span> Medium
                  </div>
                  <div>
                    <span className="font-bold">Level:</span> All levels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Info */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">HOW TO BOOK A CLASS</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Download Our App</h3>
                    <p className="text-gray-300">Available on iOS and Android, our app makes booking classes quick and easy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Login to Your Account</h3>
                    <p className="text-gray-300">Use your membership credentials to access your profile.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Select Your Class</h3>
                    <p className="text-gray-300">Browse the schedule and tap on the class you want to join.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Confirm Your Spot</h3>
                    <p className="text-gray-300">Receive a confirmation and add it to your calendar with a single tap.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-3 text-lg">
                  DOWNLOAD THE APP
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
} 