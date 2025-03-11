import Box from "@mui/material/Box";
import { TeaserCard } from "../../components/sections";
import teasersData from "../../data/teasersData";
import { HeroSection } from "../../components/heroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Box>
        {teasersData.map((teaser, index) => (
          <TeaserCard key={index} {...teaser} />
        ))}
      </Box>
    </>
  );
};

export default Home;
