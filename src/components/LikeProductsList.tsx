import { Box } from "@mui/material";
import * as React from "react";

import LikeProduct from "./LikeProduct";

const products = [
	{
		id: 1,
		img: "purple-tshirt",
		name: "Purple T-Shirt for Men",
		minPrice: 10,
		maxPrice: 24,
		minQuantity: 20,
	},
	{
		id: 2,
		img: "black-tshirt",
		name: "Black T-Shirt for Men",
		minPrice: 12,
		maxPrice: 26,
		minQuantity: 28,
	},
	{
		id: 3,
		img: "purple-tshirt",
		name: "Purple T-Shirt for Men",
		minPrice: 10,
		maxPrice: 24,
		minQuantity: 20,
	},
	{
		id: 4,
		img: "black-tshirt",
		name: "Black T-Shirt for Men",
		minPrice: 12,
		maxPrice: 26,
		minQuantity: 28,
	},
];

const LikeProductsList: React.FC = () => {
	return (
		<Box
			className="custom-container"
			sx={{ marginTop: "80px", display: "flex", flexDirection: "column" }}
		>
			<span className="h1" style={{marginBottom: "24px"}}>You might also like</span>

			<Box
				sx={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}
			>
				{products.map((product) => (
					<LikeProduct
						key={product.id}
						img={product.img}
						name={product.name}
						minPrice={product.minPrice}
						maxPrice={product.maxPrice}
						minQuantity={product.minQuantity}
					/>
				))}
			</Box>
		</Box>
	);
};

export default LikeProductsList;
