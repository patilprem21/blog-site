import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="tech-text text-2xl font-bold">
              DataScience<span className="text-yellow">Blog</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="professional-text hover:text-yellow transition-colors">Home</Link>
              <Link href="/about" className="professional-text hover:text-yellow transition-colors">About</Link>
              <Link href="/blog" className="professional-text hover:text-yellow transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="mx-auto rounded-full border-4 border-yellow shadow-2xl"
            />
          </div>
          
          <h1 className="tech-text text-5xl md:text-7xl font-black mb-6">
            Welcome to My
            <span className="block text-yellow">Data Science</span>
            <span className="block">Journey</span>
          </h1>
          
          <p className="professional-text text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Exploring the fascinating world of machine learning, data analysis, and AI. 
            Sharing insights, tutorials, and project experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-primary text-lg px-8 py-4">
              Read My Blog
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="tech-text text-4xl font-bold text-center mb-12">
            Latest <span className="text-yellow">Posts</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <footer className="bg-charcoal text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="tech-text text-2xl font-bold mb-4">
            DataScience<span className="text-yellow">Blog</span>
          </div>
          <p className="professional-text mb-6">
            Sharing knowledge, one post at a time.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/patilprem21" className="text-yellow hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-yellow hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:your@email.com" className="text-yellow hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
