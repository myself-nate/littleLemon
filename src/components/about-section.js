import Section from "./section";
import { pr1 } from "./colors";
import { Link } from "react-router-dom";

const AboutSection = ({color}) =>{
    return (
        <Section className='about' role='hero' color={pr1}>
            <main>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>When we first opened our doors in 1987 under the caring manaagment of Gino, our current owners grandfather, we were located a few doors down on the other side of the road. where the nail salon currently is. After amazing feedback and a growing customer base we moved here. The bigger space and outdoor area allowed use to deliver a truely primo service. Now as we look to the future and exciting growth is on it's way and we look forward to sharing that with you soon</p>
                </div>
                <Link to='/booking'>Make Booking</Link>
            </main>
            <aside>
            <picture>
                <img src={require('../img/inside.jpg')} alt='the little lemon resturant from outside'/>
            </picture>
            <picture>
                <img src={require('../img/Matt.jpg')} alt='co owners mike and rob'/>
            </picture>
            </aside>
        </Section>
     );
  }
  export default AboutSection;