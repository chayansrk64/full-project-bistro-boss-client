import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-bg-img bg-fixed">
            <div className="pt-5">
            <SectionTitle
            subHeading="Check it Out"
            heading="featured item"
            >
            </SectionTitle>
            </div>
            <div className="md:flex items-center gap-8 bg-slate-400 bg-opacity-40 text-white px-32 pt-10 pb-20">
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div>
                <p>May 23, 2023</p>
                <h4 className="text-xl uppercase">Where can i get some</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe incidunt sapiente, sit facere molestias atque illo rerum nihil necessitatibus corrupti voluptatum obcaecati quas dolore nemo ratione quidem nisi deserunt eveniet! Saepe illum, libero ipsum consequuntur qui eaque, omnis impedit mollitia nisi placeat ducimus nesciunt architecto, dignissimos iure nulla neque natus?</p>
                <button className="btn btn-outline mt-5 border-0 border-b-4">More Menu</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;