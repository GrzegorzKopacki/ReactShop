import { Layout } from "../../components/Layout/Layout";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Photos } from "../../components/Photos/Photos";
export function ProductDetails() {
	const product = {
		id: 1,
		gender: "men",
		category: "odziez",
		subcategory: "koszulki",
		productName: "T-Shirt",
		brand: "Top Brand",
		pricePLN: 49,
		priceUSD: 10,
		photos: [
			"http://localhost:3000/product-photos/man-t-shirt-1.jpg",
			"http://localhost:3000/product-photos/man-t-shirt-4.jpg",
			"http://localhost:3000/product-photos/man-t-shirt-3.jpg",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
		maintenanceInfo:
			"Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
	};
	return (
		<Layout>
			<FlexContainer>
				<ExpandableMenu />
				<div>
					<Breadcrumbs />
					<Photos product={product} />
				</div>
			</FlexContainer>
		</Layout>
	);
}
