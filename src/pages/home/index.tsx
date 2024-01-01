import { NavBar, PromotionalBanner } from "../../components";
import { BottomNavBar } from "./components/botttomNavBar";
import { HeroCarousel } from "./components/carousel";
import { Categories } from "./components/categories";
import { CategoriesToBag } from "./components/categoriesToBag";
import { DesignOfTheWeek } from "./components/designoftheweek";
import { Footer } from "./components/footer";
import { Section } from "./components/section";
import { WhatsNew } from "./components/whatsnew";
import { heroCarouselImgs, hotCarouselImgs } from "./mock/home";

export const Home = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
      <PromotionalBanner />
      <NavBar />
      </div>
      <div className="py-6 px-4 lg:px-40 overflow-y-auto">
        <Categories />
        <HeroCarousel
          imgs={heroCarouselImgs}
          carouselId="hero_snap"
          autoPlayMilliseconds={2000}
        />
        <Section title="What's New" content={<WhatsNew />} />
        <Section title="Design of the week" content={<DesignOfTheWeek />} />
        <Section
          title="Trending Categories 🔥"
          sub_title="Stay ahead of the fashion game with these hot trends to try!"
          content={<WhatsNew />}
        />
        <Section
          title="Too hot to be missed"
          content={
            <HeroCarousel
              imgs={hotCarouselImgs}
              carouselId="hot_snap"
              autoPlayMilliseconds={2000}
              isFullSize={false}
            />
          }
        />
        <Section title="Categories to bag" content={<CategoriesToBag />} />
      </div>
      <Footer />
      <BottomNavBar />
    </div>
  );
};
