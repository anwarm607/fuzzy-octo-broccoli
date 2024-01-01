import { NavBar, PromotionalBanner } from "../../components";
import { HeroCarousel } from "./components/carousel";
import { Categories } from "./components/categories";
import { Section } from "./components/section";
import { WhatsNew } from "./components/whatsnew";
import { heroCarouselImgs } from "./mock/home";

export const Home = () => {
  return (
    <div>
      <PromotionalBanner />
      <NavBar />
      <div className="py-6 px-4 lg:px-40 overflow-y-auto">
        <Categories />
        <HeroCarousel imgs={heroCarouselImgs} carouselId="hero_snap" autoPlayMilliseconds={2000} />
        <Section title="What's New" content={<WhatsNew />}/>
        <Section title="Design of the week" content={<WhatsNew />}/>
        <Section title="Trending Categories 🔥" sub_title="Stay ahead of the fashion game with these hot trends to try!" content={<WhatsNew />}/>
        <Section title="Too hot to be missed" content={<WhatsNew />}/>
        <Section title="Categories to bag" content={<WhatsNew />}/>
      </div>
    </div>
  );
};
