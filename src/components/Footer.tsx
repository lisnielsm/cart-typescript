import * as React from "react";
import { Grid, Box, Avatar, TextField, MenuItem } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer: React.FC = () => {
	const [region, setRegion] = React.useState("USA");
	const [lang, setLang] = React.useState("EN");

	const handleRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRegion(event.target.value);
	};

	const handleLanguageChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setLang(event.target.value);
	};

	return (
		<div style={{ backgroundColor: "#E6E8E9", marginTop: "120px" }}>
			<div
				className="custom-container"
				style={{ paddingTop: "80px", paddingBottom: "80px" }}
			>
				<Grid
					container
					sx={{ marginBottom: { xs: "64px", md: "112px" } }}
				>
					<Grid item xs={12} sm={6} lg={3}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								marginRight: {
									xs: "24px",
									sm: "36px",
									md: "48px",
									lg: "72px",
									xl: "96px",
								},
								marginBottom: "24px",
							}}
						>
							<div
								onClick={() => {}}
								className="logo"
								style={{ marginBottom: "24px" }}
							>
								<span>LOGO</span>
							</div>

							<p className="h4-4">
								We sell custom products for all your needs.
								Packs and bulk products that you will enjoy.
							</p>

							<Box
								sx={{
									display: "flex",
									flexWrap: "nowrap",
									marginBottom: "40px",
								}}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										marginRight: "8px",
									}}
								>
									<PhoneIcon sx={{ width: 16, height: 16 }} />
								</div>
								<span
									style={{
										font: "600 16px 'Open Sans', sans-serif",
									}}
								>
									+1-202-555-0129
								</span>
							</Box>

							<Box sx={{ display: "flex", flexWrap: "nowrap" }}>
								<Avatar
									sx={{
										width: 32,
										height: 32,
										backgroundColor: "#535C67",
										marginRight: "8px",
									}}
								>
									<FacebookRoundedIcon
										sx={{
											width: 20,
											height: 20,
										}}
									/>
								</Avatar>

								<Avatar
									sx={{
										width: 32,
										height: 32,
										backgroundColor: "#535C67",
										marginRight: "8px",
									}}
								>
									<TwitterIcon
										sx={{ width: 18, height: 16 }}
									/>
								</Avatar>

								<Avatar
									sx={{
										width: 32,
										height: 32,
										backgroundColor: "#535C67",
										marginRight: "8px",
									}}
								>
									<InstagramIcon
										sx={{ width: 18, height: 18 }}
									/>
								</Avatar>

								<Avatar
									sx={{
										width: 32,
										height: 32,
										backgroundColor: "#535C67",
										marginRight: "8px",
									}}
								>
									<LinkedInIcon
										sx={{ width: 18, height: 18 }}
									/>
								</Avatar>

								<Avatar
									sx={{
										width: 32,
										height: 32,
										backgroundColor: "#535C67",
									}}
								>
									<YouTubeIcon
										sx={{ width: 22, height: 18 }}
									/>
								</Avatar>
							</Box>
						</Box>
					</Grid>

					<Grid item xs={12} sm={6} lg={3}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								marginRight: {
									xs: "24px",
									sm: "36px",
									md: "48px",
									lg: "72px",
									xl: "96px",
								},
								marginBottom: "24px",
							}}
						>
							<span
								className="h4"
								style={{ marginBottom: "24px" }}
							>
								Our company
							</span>

							<a href="#" className="footer-links">
								About us
							</a>

							<a href="#" className="footer-links">
								FAQ
							</a>

							<a href="#" className="footer-links">
								Partnerships
							</a>

							<a href="#" className="footer-links">
								Sustainability
							</a>

							<a href="#" className="footer-links">
								Blog
							</a>
						</Box>
					</Grid>

					<Grid item xs={12} sm={6} lg={3}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								marginRight: {
									xs: "24px",
									sm: "36px",
									md: "48px",
									lg: "72px",
									xl: "96px",
								},
								marginBottom: "24px",
							}}
						>
							<span
								className="h4"
								style={{ marginBottom: "24px" }}
							>
								How can we help
							</span>

							<a href="#" className="footer-links">
								Track your order
							</a>

							<a href="#" className="footer-links">
								Track your order
							</a>

							<a href="#" className="footer-links">
								Help center
							</a>
						</Box>
					</Grid>

					<Grid item xs={12} sm={6} lg={3}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								marginBottom: "24px",
							}}
						>
							<span
								className="h4"
								style={{ marginBottom: "24px" }}
							>
								Information
							</span>

							<a href="#" className="footer-links">
								Contact us
							</a>

							<a href="#" className="footer-links">
								Live chat
							</a>

							<a href="#" className="footer-links">
								Privacy
							</a>

							<a href="#" className="footer-links">
								Terms of use
							</a>
						</Box>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column-reverse", md: "row" },
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
						}}
					>
						<span className="h5-2">
							&copy; {new Date().getFullYear()} Customer Products.
							All rights reserved.
						</span>
					</Box>

					<Box sx={{ flexGrow: 1 }} />

					<Box
						sx={{
							display: "flex",
							flexWrap: "nowrap",
							justifyContent: "flex-start",
							alignItems: "center",
							marginBottom: { xs: "8px", md: "0" },
						}}
					>
						<span className="h5-2" style={{ marginRight: "8px" }}>
							Region:
						</span>
						<TextField
							className="select-arrow"
							select
							value={region}
							onChange={handleRegionChange}
							variant="standard"
							InputProps={{ disableUnderline: true }}
						>
							<MenuItem value={"USA"}>
								<Box
									sx={{ display: "flex", flexWrap: "nowrap" }}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<img
											src={require("../images/usa.png")}
											alt="USA flag"
											style={{
												width: "16px",
												height: "11px",
											}}
										/>
									</div>
									<span
										className="h5"
										style={{
											paddingLeft: "4px",
											marginBottom: "0",
										}}
									>
										United States
									</span>
								</Box>
							</MenuItem>
							<MenuItem value={"SP"}>
								<Box
									sx={{ display: "flex", flexWrap: "nowrap" }}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<img
											src={require("../images/sp.png")}
											alt="Spain flag"
											style={{
												width: "16px",
												height: "11px",
											}}
										/>
									</div>
									<span
										className="h5"
										style={{
											paddingLeft: "4px",
											marginBottom: "0",
										}}
									>
										Spain
									</span>
								</Box>
							</MenuItem>
						</TextField>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexWrap: "nowrap",
							justifyContent: "flex-start",
							alignItems: "center",
							marginLeft: { xs: "0", md: "36px" },
							marginBottom: { xs: "8px", md: "0" },
						}}
					>
						<span className="h5-2" style={{ marginRight: "8px" }}>
							Language:
						</span>
						<TextField
							className="select-arrow"
							select
							value={lang}
							onChange={handleLanguageChange}
							variant="standard"
							InputProps={{ disableUnderline: true }}
						>
							<MenuItem value={"EN"}>
								<Box sx={{ display: "flex" }}>
									<span
										className="h5"
										style={{
											paddingLeft: "4px",
											marginBottom: "0",
										}}
									>
										English
									</span>
								</Box>
							</MenuItem>
							<MenuItem value={"SP"}>
								<Box sx={{ display: "flex" }}>
									<span
										className="h5"
										style={{
											paddingLeft: "4px",
											marginBottom: "0",
										}}
									>
										Spanish
									</span>
								</Box>
							</MenuItem>
						</TextField>
					</Box>
				</Box>
			</div>
		</div>
	);
};

export default Footer;
