import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
          About MinimalBlog
        </h1>
        <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          We believe in the power of simplicity. Our mission is to strip away the noise and deliver high-quality, insightful content that helps you navigate the modern world of design and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://picsum.photos/seed/about/800/800"
            alt="Our workspace"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="prose sm:prose-lg prose-indigo text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p>
            MinimalBlog started as a small personal project in 2023. Frustrated by the cluttered, ad-heavy experience of most modern websites, we set out to create a sanctuary for readers—a place where the content truly comes first.
          </p>
          <p>
            Today, we are a growing community of writers, designers, and developers who share a passion for clean aesthetics and functional design. We cover everything from the latest web technologies to tips for maintaining a healthy work-life balance.
          </p>
          <p>
            Whether you're a seasoned professional or just starting your journey, we hope you find inspiration and value in our articles.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-3xl p-10 text-center border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Newsletter</h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Get the latest articles, design inspiration, and productivity tips delivered straight to your inbox every week. No spam, ever.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border-0 py-3 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
          <button
            type="button"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
}
