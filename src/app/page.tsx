import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="tech-text text-xl sm:text-2xl font-bold">
              DataScience<span className="text-yellow">Blog</span>
            </div>
            <div className="hidden sm:flex space-x-6 lg:space-x-8">
              <Link href="/" className="professional-text hover:text-yellow transition-colors text-sm sm:text-base">Home</Link>
              <Link href="/about" className="professional-text hover:text-yellow transition-colors text-sm sm:text-base">About</Link>
              <Link href="/blog" className="professional-text hover:text-yellow transition-colors text-sm sm:text-base">Blog</Link>
            </div>
            {/* Mobile menu button - you can add this later */}
            <div className="sm:hidden">
              <button className="text-charcoal hover:text-yellow transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <Image
              src="/images/WhatsApp Image 2024-07-13 at 12.13.37 PM.jpeg"
              alt="Profile Picture"
              width={384}
              height={384}
              className="mx-auto w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-yellow shadow-2xl"
              priority
            />
          </div>
          
          <h1 className="tech-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
            Data Science Blog
          </h1>
          
          <p className="professional-text text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Projects, notes, and tutorials on machine learning, data analysis, and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/blog" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              Read My Blog
            </Link>
            <Link href="/about" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="tech-text text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Latest <span className="text-yellow">Posts</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Sample Post Cards */}
            <div className="card p-6">
              <div className="mb-4">
                <span className="bg-yellow text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  Machine Learning
                </span>
              </div>
              <h3 className="tech-text text-xl font-bold mb-3">
                Building Your First ML Model
              </h3>
              <p className="professional-text mb-4">
                A comprehensive guide to creating your first machine learning model from scratch.
              </p>
              <div className="flex items-center justify-between">
                <span className="professional-text text-sm">Jan 15, 2024</span>
                <Link href="/blog/building-first-ml-model" className="text-yellow hover:text-charcoal transition-colors">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="card p-6">
              <div className="mb-4">
                <span className="bg-yellow text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  Python
                </span>
              </div>
              <h3 className="tech-text text-xl font-bold mb-3">
                Data Analysis with Pandas
              </h3>
              <p className="professional-text mb-4">
                Essential pandas techniques for data manipulation and analysis.
              </p>
              <div className="flex items-center justify-between">
                <span className="professional-text text-sm">Jan 20, 2024</span>
                <Link href="/blog/pandas-data-analysis" className="text-yellow hover:text-charcoal transition-colors">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="card p-6">
              <div className="mb-4">
                <span className="bg-yellow text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  Deep Learning
                </span>
              </div>
              <h3 className="tech-text text-xl font-bold mb-3">
                Neural Networks Explained
              </h3>
              <p className="professional-text mb-4">
                Understanding the fundamentals of neural networks and deep learning.
              </p>
              <div className="flex items-center justify-between">
                <span className="professional-text text-sm">Jan 25, 2024</span>
                <Link href="/blog/neural-networks-explained" className="text-yellow hover:text-charcoal transition-colors">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{fontFamily: "'Poppins', 'Open Sans', sans-serif"}}>
            DataScience<span className="text-yellow">Blog</span>
          </div>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base" style={{fontFamily: "'Open Sans', 'Inter', sans-serif"}}>
            Sharing knowledge, one post at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="https://github.com/patilprem21" className="text-yellow hover:text-white transition-colors font-medium text-sm sm:text-base" style={{fontFamily: "'Open Sans', 'Inter', sans-serif"}}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-yellow hover:text-white transition-colors font-medium text-sm sm:text-base" style={{fontFamily: "'Open Sans', 'Inter', sans-serif"}}>
              LinkedIn
            </a>
            <a href="mailto:your@email.com" className="text-yellow hover:text-white transition-colors font-medium text-sm sm:text-base" style={{fontFamily: "'Open Sans', 'Inter', sans-serif"}}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
