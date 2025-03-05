import { About } from "@/components/sections/about";
import FAQs from "@/components/sections/faqs";
import { Features } from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integration } from "@/components/sections/integration";
import { Metrics } from "@/components/sections/metrics";

export default function Home() {
	return (
		<>
			<HeroSection />

			<Features />
			<About />
			<HowItWorks />
			<Metrics />
			<section className="w-full flex flex-col bg-gradient-to-t from-[#01014e] from-0% via-primary via-10%  to-[#2B49BB] ">
				<Integration />
				<FAQs />
				<Footer />
			</section>
		</>
	);
}
