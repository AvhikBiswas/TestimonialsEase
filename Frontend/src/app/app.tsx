
const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">TestEase</div>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-300"><a href="#features">Features</a></li>
          <li className="hover:text-gray-300"><a href="#pricing">Pricing</a></li>
          <li className="hover:text-gray-300"><a href="#testimonials">Testimonials</a></li>
        </ul>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-200">Get Started</button>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold">Frustrated with Complex Feedback Tools? We’ve Got a Solution!</h1>
        <p className="mt-4 text-lg">Introducing TestEase, a SaaS product that makes collecting user feedback seamless and intuitive.</p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200">Start Simplifying Feedback Now</button>
      </header>

      {/* Pain Point Acknowledgment */}
      <section id="features" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">Tired of Slow Feedback Processes Holding You Back?</h2>
        <p className="mt-4 text-lg text-gray-600">Lengthy surveys and complicated tools often lead to poor response rates. Get instant, actionable insights from users without the hassle.</p>
        <div className="mt-8">
          <p className="text-gray-700 font-semibold">Pain Points:</p>
          <ul className="list-disc list-inside text-left max-w-lg mx-auto mt-2">
            <li>Time-consuming feedback forms.</li>
            <li>Low response rates and disengaged users.</li>
          </ul>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">Collect User Feedback Effortlessly with TestEase</h2>
        <p className="mt-4 text-lg text-gray-600">Our product makes feedback collection faster and easier for businesses, allowing you to focus on growing your brand and improving user experience.</p>
        <div className="mt-8">
          <p className="text-gray-700 font-semibold">Benefits:</p>
          <ul className="list-disc list-inside text-left max-w-lg mx-auto mt-2">
            <li>Instant user feedback collection.</li>
            <li>Simple setup with no technical expertise required.</li>
            <li>User-friendly interface designed to boost participation.</li>
          </ul>
        </div>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">Try for Free</button>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <p className="mt-4 text-lg text-gray-600">Choose the best plan that fits your business needs. Start for free, no hidden charges!</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="mt-4 text-gray-600">Ideal for small businesses just getting started.</p>
            <ul className="mt-4 space-y-2">
              <li>✔ 10 Feedbacks Per Month</li>
              <li>✔ Basic Analytics</li>
              <li>✔ Email Support</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">Get Started</button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="mt-4 text-gray-600">For growing businesses looking for more features.</p>
            <ul className="mt-4 space-y-2">
              <li>✔ 100 Feedbacks Per Month</li>
              <li>✔ Advanced Analytics</li>
              <li>✔ Priority Email Support</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">Upgrade Now</button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="mt-4 text-gray-600">For large-scale operations that need customization.</p>
            <ul className="mt-4 space-y-2">
              <li>✔ Unlimited Feedbacks</li>
              <li>✔ Full Analytics Suite</li>
              <li>✔ Dedicated Support</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Success Story / Social Proof */}
      <section id="testimonials" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">Companies Like Yours are Boosting Engagement by 50%!</h2>
        <p className="mt-4 text-lg text-gray-600">Don’t take our word for it—see how businesses like yours have transformed their feedback collection process.</p>
        <div className="mt-8 space-y-4 max-w-lg mx-auto">
          <blockquote className="bg-white p-4 rounded shadow">
            <p className="text-gray-700">"TestEase has made our feedback process incredibly simple and effective!"</p>
          </blockquote>
          <blockquote className="bg-white p-4 rounded shadow">
            <p className="text-gray-700">"Increased user participation and valuable insights in half the time!"</p>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">Ready to Make User Feedback Easier? Start Today with TestEase!</h2>
        <p className="mt-4 text-lg">Stop wasting time on outdated methods. Improve user experience in minutes with our free plan.</p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200">Get Started Now</button>
        <p className="mt-8 text-sm">© 2024 TestEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
