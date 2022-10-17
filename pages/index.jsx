import { useState } from 'react'
import Link from "next/link"
import backgroundImg from "../public/index.jpg"
import Carousel from "../components/Carousel"

export default function App() {
  const [isUse, setUse] = useState(false)
  return (
    <div className="w-100 h-100 position-relative" >
      <div className="animate-content" style={{ backgroundImage: `url(${backgroundImg.src})` }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {
        isUse ? <Carousel isUse={isUse} setUse={setUse} /> : <div className="text-content">
          <span className="text-header mb-4">Welcome to business-arch project !!</span>
          <div className="d-flex gap-2">
            <button className="btn btn-bg text-white">
              <Link href="/NewPage">
                <a>Get Started</a>
              </Link>
            </button>
            <button className="btn btn-bg text-white" onClick={() => setUse(!isUse)}>
              <a>How to use</a>
            </button>
          </div>
        </div>
      }
    </div>
  )
}
