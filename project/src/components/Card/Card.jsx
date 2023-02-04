import "./Card.css";


const Card = ({ad,sekil,endirim,qiymet,kredit,rey,ulduz,noneUlduz}) => {
  return (
    <div className="Card">

      <img src={sekil} alt="tefal1" />
      <div className="endirim">
        <p style={{ fontSize: '16px' }}>{endirim}</p>
        <p>Nağd alışa</p>
        <p>ENDİRİM</p>
      </div>
      <div className="likes">
        <div className="stars">
         {ulduz}
         {ulduz}
         {noneUlduz}
         {noneUlduz}
         {noneUlduz}
        </div>
        <p>{rey} rəy</p>
      </div>

      <p className="producName">{ad}</p>

      <div className="buying">
        <div className="price">
          <small>Qiymət</small>
          <h4>{qiymet} M</h4>
        </div>
        <div className="credit">
          <p>Hissə-hissə ödəniş</p>
          <p>18 ay <span>{kredit}</span> M</p>
        </div>
      </div>

      <div className="click">
        <button type="button">Almaq</button>
        <div className="heartBack">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="heartBack">

          <i class="fa-solid fa-scale-unbalanced-flip"></i>
        </div>
      </div>




    </div>
  )
}

export default Card;