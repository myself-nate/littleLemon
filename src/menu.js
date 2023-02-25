import './App.css';
import MenuSection from './components/menu-section';
import Section from './components/section';
import { MenuProvider } from './context/menu';
import { pr1 } from './components/colors';
function Menu() {
   return (
    <>
      <Section color={pr1}>
         <h1>Menu</h1>
         <p>View all our dishes and drinks.</p>
      </Section>
       <MenuProvider>
        <MenuSection type='starter' title='Starters'/>
        <MenuSection type='pizza' title='Pizzas'/>
        <MenuSection type='pasta' title='Pastas'/>
       </MenuProvider>
    </>
  );
}

export default Menu;