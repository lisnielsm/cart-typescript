import * as React from "react";
import { Box, Button } from "@mui/material";

import { Order } from "../interfaces";

const OrderSummary: React.FC<Order> = (props) => {
	const { numberItems, total } = props;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<span className="h1" style={{ marginBottom: "24px" }}>
				Order Summary
			</span>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: "24px",
					borderBottom: "1px solid #E6E8E9",
					paddingBottom: "24px",
				}}
			>
				<span className="h4-2">Numbers of items</span>
				<span className="h4-2">{numberItems}</span>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: "32px",
				}}
			>
				<span className="h3">Total:</span>
				<span className="h1">
					$
					{new Intl.NumberFormat("en-US", {
						style: "decimal",
						minimumFractionDigits: 2,
					}).format(total)}
				</span>
			</Box>

			<Button
				variant="contained"
				onClick={() => {}}
				size="large"
				className="proceed-button h4"
				sx={{
					height: "48px",
					width: "100%",
					backgroundColor: "#3A4451",
					color: "#FFF",
					fontFamily: "'Open Sans', sans-serif",
					padding: "12px 24px",
					borderRadius: "8px",
                    textTransform: "none",
                    marginBottom: "12px"
				}}
			>
				Proceed to Checkout
			</Button>

            <Button
				variant="outlined"
				onClick={() => {}}
				size="large"
				className="continue-button h4"
				sx={{
					height: "48px",
					width: "100%",
					backgroundColor: "#FFF",
					color: "#091625",
					fontFamily: "'Open Sans', sans-serif",
					padding: "12px 24px",
					borderRadius: "8px",
                    textTransform: "none",
                    marginBottom: "12px",
                    border: "2px solid #091625"
				}}
			>
				Continue shopping
			</Button>
		</Box>
	);
};

export default OrderSummary;
