import { useRef, useEffect, useState } from 'react'
import { BsCaretLeftSquareFill, BsCaretRightSquareFill, BsFillXCircleFill } from 'react-icons/bs'

const step = ["新增紀錄", "添加方法", "查看紀錄", "修改紀錄", "其他說明"]

export default function Carousel({ isUse, setUse }) {
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
            <div className="box text-center">
                <span id="prev" onClick={prevFunc}>
                    <BsCaretLeftSquareFill fontSize="2rem" />
                </span>
                <span id="next" onClick={nextFunc}>
                    <BsCaretRightSquareFill fontSize="2rem" />
                </span>
                <ul id="dots" className="dots">
                    {step.map((el, idx) =>
                        <li
                            key={idx}
                            className={active === idx ? "dots-active" : ""}
                            onClick={() => toggleDots(idx)}
                        >
                            <span>Step.{idx + 1}-{el}</span>
                        </li>)}
                </ul>
                <div ref={slider} id="slider" className="slider">
                    <img src="/step/step-one.png" />
                    <img src="/step/step-two.png" />
                    <img src="/step/step-three.png" />
                    <img src="" />
                    <img src="" />
                </div>
                <button className="btn btn-bg text-white gap-2" onClick={() => setUse(!isUse)}>
                    <BsFillXCircleFill fontSize="1rem" className='mr-2'/>
                    <span>Close</span>
                </button>
            </div>
        </section>
    )
}
