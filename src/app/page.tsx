import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 bg-[url('/public/window.svg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">
            Transform Your Body,<br />
            Optimize Your Life
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered precision for your fitness journey.<br />
            Personalized workouts, nutrition, and daily guidance.
          </p>
          <Link 
            href="/onboarding"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Strxngth?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Personalized Plans</h3>
              <p className="text-gray-300">Tailored to your body, goals, and lifestyle.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI Optimization</h3>
              <p className="text-gray-300">Continuous adaptation for maximum results.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Holistic Approach</h3>
              <p className="text-gray-300">Workouts, nutrition, and recovery in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Complete Onboarding</h3>
              <p className="text-gray-300">Tell us about your goals and lifestyle.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Get Your Plan</h3>
              <p className="text-gray-300">Receive your personalized fitness blueprint.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-300">Monitor your results and adherence.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Optimize</h3>
              <p className="text-gray-300">AI adjusts your plan for continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards your strongest self. Your personalized fitness journey starts here.
          </p>
          <Link 
            href="/onboarding"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
}
