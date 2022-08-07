import * as React from "react";
import { Box, Grid } from "@mui/material";

import { LikeProd } from "../interfaces";

const LikeProduct: React.FC<LikeProd> = (props) => {
	const { name, img, minPrice, maxPrice, minQuantity } = props;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				marginRight: "24px",
				marginBottom: "120px",
			}}
		>
			<div
				style={{
					width: "336px",
					height: "336px",
					marginBottom: "16px",
				}}
			>
				<img
					src={require(`../images/${img}.png`)}
					alt={name}
					style={{
						width: "100%",
						height: "100%",
						maxWidth: "100%",
					}}
				/>
			</div>

			<span className="h4" style={{ marginBottom: "10px" }}>
				{name}
			</span>

			<Grid container spacing={0}>
				<Grid item xs={6}>
					<span className="h4-3">{`$${minPrice} - $${maxPrice}`}</span>
				</Grid>
				<Grid item xs={6}>
					<p className="h5-2">
						Minimum: <span className="h4-3">{minQuantity}</span>
					</p>
				</Grid>
			</Grid>
		</Box>
	);
};

export default LikeProduct;
