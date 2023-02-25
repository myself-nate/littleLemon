import HorizontalScroller from "./horizontal-scroller";
import Section from "./section";
import { useMenuContext } from "../context/menu";
import FoodArticle from "./food-article";
import { ac1 } from "./colors";
const MenuSection = ({type,title}) =>{
    const menu = useMenuContext();
    const typefilter = (value)=>{
        if(value.type === type){return true}
    }
    // console.log(menu)
    const filtered = menu.filter(typefilter)
    return (
      <Section className='menu' color={'white'}>
        <h2>{title}</h2>
        <HorizontalScroller>
            {filtered.map((item) => (<FoodArticle key={item.id} foodItem={item} foodimg={item.getImageSrc()} color={ac1}/>))}
        </HorizontalScroller>
      </Section>
     );
  }
  export default MenuSection;