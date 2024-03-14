import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import COVER_PHOTO from "../../assets/hero.jpg";
export function MainPage() {
	return (
		<Layout>
			<Hero heroImage={COVER_PHOTO} />
		</Layout>
	);
}
