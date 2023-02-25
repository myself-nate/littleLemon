import Section from "./section";
import { pr1 } from "./colors";
import { Link } from "react-router-dom";

const HeroSection = ({color}) =>{
    return (
        <Section className='hero' role='hero' color={pr1}>
            <main>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We at Little Lelmon pride ourselves on delivering an authentic Italian experiance in the heart of down town Chicargo. First opeming our doors in 1987 we take great pride in the comunity of people we serve. Multiple genertions of familys have gathered round our tables to enjoy our chrisp Pizzas and made in house pastas. We welcome you to try our dishes for yourselves, order online or book a table. We hope you enjoy.</p>
                </div>
                <Link to='/booking'>Make Booking</Link>
            </main>
            <picture>
                <img src={require('../img/location.jpg')} alt='the little lemon resturant from outside'/>
            </picture>
        </Section>
     );
  }
  export default HeroSection;