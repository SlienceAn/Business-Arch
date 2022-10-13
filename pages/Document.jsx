import { useRef, useEffect, useState } from 'react'
import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from 'react-icons/bs'

export default function Document() {
    const [imgWidth, setImgWidth] = useState()
    const [active, setActive] = useState(0)
    const slider = useRef(null)
    const nextFunc = () => {
        slider.current.scrollLeft += imgWidth;
        const sliderFullWidth = slider.current.scrollWidth;
        const lastSlide = sliderFullWidth - imgWidth;
        setActive(active + 1)
        if (lastSlide === Math.round(slider.current.scrollLeft)) {
            slider.current.scrollLeft = 0;
            setActive(0)
        }
    }
    const prevFunc = () => {
        if (active !== 0) {
            slider.current.scrollLeft -= imgWidth;
            setActive(active - 1)
        }
    }
    const toggleDots = (idx) => {
        slider.current.scrollLeft = idx * imgWidth;
        setActive(idx)
    }
    useEffect(() => {
        if (slider.current !== null) setImgWidth(slider.current.offsetWidth)
    }, [])
    return (
        <section className="py-4">
            <div className="box">
                <span id="prev" onClick={prevFunc}>
                    <BsCaretLeftSquareFill fontSize="2rem" />
                </span>
                <span id="next" onClick={nextFunc}>
                    <BsCaretRightSquareFill fontSize="2rem" />
                </span>
                <ul id="dots" className="dots">
                    {Array(5).fill(0).map((el, idx) =>
                        <li
                            key={idx}
                            className={active === idx ? "dots-active" : ""}
                            onClick={() => toggleDots(idx)}
                        >
                            <span>步驟{idx + 1}</span>
                        </li>)}
                </ul>
                <div ref={slider} id="slider" className="slider">
                    <img src="https://fakeimg.pl/400x200/5F9EA0/" />
                    <img src="https://fakeimg.pl/400x200/008B8B/" />
                    <img src="https://fakeimg.pl/400x200/556B2F/" />
                    <img src="https://fakeimg.pl/400x200/483D8B/" />
                    <img src="https://fakeimg.pl/400x200/8B4513/" />
                </div>
            </div>
        </section>
    )
}
