import LandingPage from '../components/LandingPage'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <LandingPage />
      <Footer />
    </main>
  )
}

