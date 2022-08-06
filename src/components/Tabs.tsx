import * as React from "react";
import { Button, Box } from "@mui/material";

const tabs = [
	"All products",
	"Packaging",
	"Drinkware",
	"Apparel",
	"Notebooks",
	"Backpacks",
];

const Tabs: React.FC = () => {
	return (
		<Box
			className="custom-container"
			sx={{
				flexGrow: 1,
				backgroundColor: "#E6E8E9",
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				textTransform: "none",
			}}
		>
			{tabs.map((tab) => (
				<Button
					key={tab}
					className="tab-option"
					// onClick={handleCloseNavMenu}
					sx={{
						color: "#535C67",
						display: "block",
						textTransform: "none",
						fontSize: "15px",
						padding: { xs: "8px 16px", sm: "20px 16px" },
					}}
				>
					{tab}
				</Button>
			))}
		</Box>
	);
};

export default Tabs;
