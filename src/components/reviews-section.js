import HorizontalScroller from "./horizontal-scroller";
import Section from "./section";
import { useReviewsContext } from "../context/reviews";
import ReviewArticle from "./review-article"
import { ac1 } from "./colors";
const ReviewsSection = ({color}) =>{
    const reviews = useReviewsContext();
    return (
      <Section color={color}>
        <h2>Reviews</h2>
        <HorizontalScroller>
            {reviews.map((item) => (<ReviewArticle key={item.id} Review={item} personimg={item.getImageSrc()} color={ac1}/>))}
        </HorizontalScroller>
      </Section>
     );
  }
  export default ReviewsSection;