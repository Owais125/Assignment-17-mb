import React from 'react'

const Card2 = ({image,title,dec}) => {
  return (
    <div>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} width="450px" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{dec}</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card2