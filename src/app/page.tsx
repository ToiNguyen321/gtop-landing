import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Trải nghiệm GTop hoàn toàn miễn phí"
          description="Không phí ẩn. Không quảng cáo chen ngang. Bạn chỉ cần khám phá."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Cảm nhận người dùng"
          description="Lắng nghe chia sẻ từ những người đã đồng hành cùng chúng tôi."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
