
import { BsInfoCircleFill } from 'react-icons/bs'

const Card = ({ name, date, active, click }) => {
  return (
    <div className='card flex-row mb-2 border-0' onClick={click}>
      <div className={active === name ? 'active card-body w-75 p-2' : 'card-body w-75 p-2'}>
        <div>
          <strong>{name}</strong>
        </div>
        <span>{date}</span>
      </div>
      <div id={active === name ? "card-arrow" : ""} className='card-side w-25'>
        <BsInfoCircleFill fontSize="2rem" />
      </div>
      <style jsx>{`  
              .active{
                border-style:solid;
                border-width:3px 0 3px 3px;
                border-color:#01897d transparent #01897d #01897d;
              }
              .card:hover{
                cursor: pointer;
              }
              .card-side{
                color:#fff;
                background-color:#01897d;
                display:flex;
                justify-content:center;
                align-items:center;
                position:relative;
              }
              #card-arrow::before{
                position: absolute;
                content: "";
                left:100%;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 15px 0 15px 25px;
                border-color: transparent transparent transparent #01897d;
              }
            `}
      </style>
    </div>
  )
}

export default Card;