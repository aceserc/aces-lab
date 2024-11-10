import { Footer } from '@/components/reuseable/footer'
import { Navbar } from '@/components/reuseable/navbar'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div className="font-bricolageGrotesque flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
