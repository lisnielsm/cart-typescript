import * as React from "react";
import { Box, Grid } from "@mui/material";

import { Item } from "../interfaces";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const items:Item[] = [
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
	const [cartItems, setCartItems] = React.useState<Item[]>([]);

	React.useEffect(() => {
		// simulate an API call
		setCartItems(items);
	}, [])

	const getTotalPrice = (total: number, currentValue: Item): number => {
		return total + currentValue.price * currentValue.quantity;
	};

	const deleteCartItem = (id:number) => {
		setCartItems(cartItems.filter(item => item.id !== id));
	}

	return (
		<Box className="custom-container" sx={{ marginTop: "32px" }}>
			<Grid container>
				<Grid item xs={12} md={8} sx={{paddingRight: "24px"}}>
					<p className="h1" style={{ marginBottom: "40px", marginTop: "0" }}>
						Your Cart{" "}
						<span className="subtitle">
							{"(" + cartItems.length + ")"}
						</span>
					</p>

					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							item={item}
							items={cartItems}
							setCartItems={setCartItems}
							deleteCartItem={deleteCartItem}
						></CartItem>
					))}
				</Grid>
				<Grid item xs={12} md={4}>
					<OrderSummary
						numberItems={cartItems.length}
						total={cartItems.reduce(getTotalPrice, 0)}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CartItemsList;
