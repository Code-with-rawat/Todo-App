
export default function CardsData({NetflixData,mode}) {
  const {id,img_url,name,rating,description,watch_url} = NetflixData; 
  return (
    <>
      <div key={id}>
          <div
      className={`card m-3 bg-${mode} text-${mode === "light" ? "dark" : "light"}`}
      style={{ width: "18rem" }}
    >
          <img
            src={img_url}
            className="card-img-top "
            style={{ height: "230px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="rates">Rating: <span className={`Rating ${rating>=8.5?"hits":"floop"}`}> {rating}</span></p>
            <p className="card-text flex-grow-1">
              {description.length> 100?description.slice(0, 100) + "...":description}
            </p>
            <a
              href={watch_url}
              target="_blank"
              className="d-flex justify-content-center fw-bolder"
            >
              <button className="btn" style={{backgroundColor:rating>8.5?"rgb(113, 230, 113)":"rgb(250, 250, 35)", } }> Visit Here</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
