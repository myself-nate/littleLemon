
const ReviewArticle = ({Review,color, personimg}) =>{
    var rating = ''
    for(let i = 0; i < Review.rating; i++){
        rating = rating + '★ '
    }
    return (
      <article className="review" style={{backgroundColor: color}}>
                <div>
                <picture>
                    <img src={personimg} alt={Review.name}/>
                </picture>
                <h3>{Review.name}</h3>
                </div>
                <h4>{rating}</h4>
                {Review.comment ? <details><summary>View Comment</summary><p>{Review.comment}</p></details>: <p>No Comment</p>}
      </article>
     );
  }
  export default ReviewArticle;