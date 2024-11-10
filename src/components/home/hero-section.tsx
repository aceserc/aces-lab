import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Generate Professional</span>
            <span className="block text-blue-200">Nepali Letters</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
            Create beautifully formatted Nepali letters with ease. Perfect for official correspondence, invitations, and more.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <Link to="/generator">
                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full bg-transparent border-white text-white hover:bg-blue-700">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default HeroSection
