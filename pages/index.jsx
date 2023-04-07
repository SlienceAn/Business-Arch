import { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import backgroundImg from "../public/index.jpg"
import Carousel from "../components/Carousel"
const BackImage = () => {
  return (
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
  )
}
const TextContent = (props) => {
  const { isLoading, isUse, setUse } = props
  console.log(isLoading)
  return (
    <div className={isLoading ? "text-content" : "text-content text-content-anime"}>
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
  )
}
export default function App() {
  const [isUse, setUse] = useState(false)
  const [fuck, setfff] = useState(0)
  const [isLoading, setLoad] = useState(false)
  useEffect(() => { if (isUse === true) setLoad(true) }, [isUse])
  return (
    <div className="w-100 h-100 position-relative" >
      <BackImage />
      {isUse ?
        <Carousel isUse={isUse} setUse={setUse} /> :
        <TextContent isUse={isUse} isLoading={isLoading} setUse={setUse} />
      }
    </div>
  )
}
