import * as React from "react";
import { Box, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { Item } from "../interfaces";

const CartItem: React.FC<Item> = (props) => {
	const { name, image, quantity, price, isPack, packDescription } = props;

	return (
		<Box
			sx={{
				borderBottom: "1px solid #CED0D3",
				padding: "0 0 18px 0",
				marginBottom: "24px",
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					marginBottom: { xs: "24px", sm: "0" },
				}}
			>
				<img
					src={require(`../images/${image}.png`)}
					alt={name}
					style={{
						width: "120px",
						height: "120px",
						maxWidth: "100%",
					}}
				/>

				{isPack ? (
					<div
						style={{
							marginLeft: "44px",
							paddingTop: "6px",
						}}
					>
						<span
							className="h7"
							style={{
								backgroundColor: "#E6E8E9",
								color: "#848A92",
								padding: "3px",
							}}
						>
							PACK
						</span>
					</div>
				) : null}
			</Box>
			<Box
				sx={{
					paddingLeft: { xs: "0", sm: "16px" },
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
				}}
			>
				<span className="h2">{name}</span>
				<span className="h3">Quantity: {quantity}</span>

				{isPack ? (
					<>
						<ul>
							{packDescription?.map((description) => (
								<li className="h5" key={description.name}>
									{description.name}{" "}
									<span className="subtitle2">
										{"(" + description.details + ")"}
									</span>
								</li>
							))}
						</ul>
						<Box>
							<Button
								className="h6"
								sx={{
									color: "#091625",
									textTransform: "none",
									marginLeft: "-8px",
								}}
							>
								Edit pack
							</Button>
							<span className="h6">|</span>
							<Button
								className="h6"
								sx={{
									color: "#091625",
									textTransform: "none",
								}}
							>
								Remove
							</Button>
						</Box>
					</>
				) : (
					<Button
						startIcon={
							<DeleteOutlineOutlinedIcon
								sx={{ width: 16, height: 16 }}
							/>
						}
						sx={{
							color: "#091625",
							textTransform: "none",
							fontSize: "12px",
							fontFamily: "'Open Sans', sans-serif",
							fontWeight: 600,
							marginLeft: "-8px",
							marginTop: "-6px",
						}}
					>
						Remove
					</Button>
				)}
			</Box>

			<Box sx={{ flexGrow: 1 }} />

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-end",
				}}
			>
				<span className="h2">
					$
					{new Intl.NumberFormat("en-US", {
						style: "decimal",
						minimumFractionDigits: 2,
					}).format(price)}
				</span>
				<p className="h3" style={{ textAlign: "right", marginBottom: "0" }}>
					Total:{" "}
					<span className="h2">
						$
						{new Intl.NumberFormat("en-US", {
							style: "decimal",
							minimumFractionDigits: 2,
						}).format(quantity * price)}
					</span>
				</p>
			</Box>
		</Box>
	);
};

export default CartItem;
