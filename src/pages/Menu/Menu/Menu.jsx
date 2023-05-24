import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
 
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
 
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title> Bistro Boss | Menu </title>
      </Helmet>

      <Cover img={coverImg}title="our menu"subTitle="Would You Like To Try a Dish?"></Cover>
      {/* main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      {/* offered menu itmes */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={dessert} title="Dessert" img={dessertImg}> </MenuCategory>
      
      {/* pizza menu items */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}> </MenuCategory>
      {/* salad menu items */}
      <MenuCategory items={salad} title="Salad" img={saladImg}> </MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title="Soup" img={soupImg}> </MenuCategory>
      













      {/* <Cover 
      img={coverImg}
      title="our menu"
      subTitle="Would You Like To Try a Dish?"
      ></Cover>

      <PopularMenu></PopularMenu>
      <Cover 
      img={coverImg}
      title="our menu"
      subTitle="Would You Like To Try a Dish?"
      ></Cover>

      <PopularMenu></PopularMenu> */}
      
    </div>
  );
};

export default Menu;
