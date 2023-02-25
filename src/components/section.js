
const Section = ({color, children,className}) =>{
  return (
    <section className={className} style={{backgroundColor: color}}>
        {children}
    </section>

   );
}

export default Section;