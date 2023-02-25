
const FoodArticle = ({foodItem,color, foodimg}) =>{
    return (
      <article className="food" style={{backgroundColor: color}}>
                <picture>
                    <img src={foodimg} alt={foodItem.discription}/>
                </picture>
                <details>
                    <summary>{foodItem.name}</summary>
                    <p>{foodItem.discription}</p>
                </details>
                <a href='../order'>Order online for {foodItem.price}</a>
      </article>
     );
  }
  export default FoodArticle;