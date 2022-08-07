import * as React from "react";
import { Box, Grid } from "@mui/material";

import { Item } from "../interfaces";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const items = [
	{
		id: 1,
		name: "My Christmas pack",
		image: "christmas-pack",
		quantity: 50,
		price: 71.2,
		isPack: true,
		packDescription: [
			{
				name: "Homemade Strawberry",
				details: "300g jar",
			},
			{
				name: "French Lavender",
				details: "Handcrafted soap",
			},
			{
				name: "Green Tea",
				details: "Contains ginseng",
			},
			{
				name: "J. Smith Lotion",
				details: "Lime Basil and Mandarin",
			},
			{
				name: "Green Tea stickers",
				details: "500 stickers",
			},
			{
				name: "J. Smith Lotion stickers",
				details: "500 stickers",
			},
			{
				name: "Homemade Strawberry stickers",
				details: "500 stickers",
			},
		],
	},
	{
		id: 2,
		name: "Man Red T-Shirt",
		image: "red-tshirt",
		quantity: 10,
		price: 13.5,
		isPack: false,
	},
	{
		id: 3,
		name: "Man Navy Blue T-Shirt",
		image: "navy-blue-tshirt",
		quantity: 20,
		price: 14.99,
		isPack: false,
	},
];

const CartItemsList: React.FC = () => {
	const getTotalPrice = (total: number, currentValue: Item): number => {
		return total + currentValue.price * currentValue.quantity;
	};

	return (
		<Box className="custom-container" sx={{ marginTop: "32px" }}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={8}>
					<p className="h1" style={{ marginBottom: "40px" }}>
						Your Cart{" "}
						<span className="subtitle">
							{"(" + items.length + ")"}
						</span>
					</p>

					{items.map((item) => (
						<CartItem
							key={item.id}
							name={item.name}
							image={item.image}
							quantity={item.quantity}
							price={item.price}
							isPack={item.isPack}
							packDescription={item.packDescription}
						></CartItem>
					))}
				</Grid>
				<Grid item xs={12} md={4}>
					<OrderSummary
						numberItems={items.length}
						total={items.reduce(getTotalPrice, 0)}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CartItemsList;
