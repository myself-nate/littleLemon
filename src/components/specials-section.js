import HorizontalScroller from "./horizontal-scroller";
import Section from "./section";
import { useMenuContext } from "../context/menu";
import FoodArticle from "./food-article";
import { ac1 } from "./colors";
const SpecialsSection = ({color}) =>{
    const isspecial = value=> value.special
    const specials = useMenuContext();
    console.log(specials)
    return (
      <Section color={'white'}>
        <h2>This Weeks Specials</h2>
        <HorizontalScroller>
            {specials.filter(isspecial).map((item) => (<FoodArticle key={item.id} foodItem={item} foodimg={item.getImageSrc()} color={ac1}/>))}
        </HorizontalScroller>
      </Section>
     );
  }
  export default SpecialsSection;