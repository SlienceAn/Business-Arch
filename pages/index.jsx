import Link from "next/link"

export default function App() {
  return (
    <div className="w-100 h-100 position-relative">
      <div className="animate-content">
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
      <div className="text-content">
        <span className="text-header mb-4">Welcome to business-arch project !!</span>
        <div className="d-flex gap-2">
          <button className="btn btn-bg text-white">
            <Link href="/NewPage">
              <a>Get Started</a>
            </Link>
          </button>
          <button className="btn btn-bg text-white">
            <Link href="/Document">
              <a>Document</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
