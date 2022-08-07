import * as React from "react";
import { styled } from "@mui/material/styles";
import {
	AppBar,
	Button,
	Box,
	Toolbar,
	IconButton,
	InputBase,
	MenuItem,
	Menu,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "20px",
	backgroundColor: "#FFF",
	marginRight: theme.spacing(2),
	marginLeft: theme.spacing(2),
	width: "100%",
	[theme.breakpoints.up("md")]: {
		marginLeft: theme.spacing(6),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	"& .MuiInputBase-input": {
		color: "#000000",
		fontSize: "15px",
		fontWeight: 400,
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "40ch",
		},
		[theme.breakpoints.up("xl")]: {
			width: "80ch",
		},
	},
	"& .MuiInputBase-input::placeholder": {
		color: "#000",
		opacity: 1,
	},
}));

const Header: React.FC = () => {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<Button
					disableRipple={true}
					startIcon={
						<PersonOutlineOutlinedIcon
							sx={{ width: 24, height: 24 }}
						/>
					}
					sx={{
						color: "#001342",
						textTransform: "none",
						fontSize: "15px",
						fontFamily: "'Open Sans', sans-serif",
						fontWeight: 400,
						whiteSpace: "nowrap",
					}}
				>
					Sign in
				</Button>
			</MenuItem>
			<MenuItem>
				<Button
					disableRipple={true}
					startIcon={
						<ShoppingBagOutlinedIcon
							sx={{ width: 24, height: 24 }}
						/>
					}
					sx={{
						color: "#001342",
						textTransform: "none",
						fontSize: "15px",
						fontFamily: "'Open Sans', sans-serif",
						fontWeight: 400,
					}}
				>
					Cart
				</Button>
			</MenuItem>
		</Menu>
	);

	return (
		<Box
			className="custom-container"
			sx={{
				flexGrow: 1,
				backgroundColor: "#091625",
			}}
		>
			<AppBar
				position="static"
				sx={{
					padding: "20px 0px",
					backgroundColor: "transparent",
					boxShadow: "none",
				}}
			>
				<Toolbar
					sx={{
						paddingLeft: "0 !important",
						paddingRight: "0 !important",
					}}
				>
					<Button
						variant="contained"
						onClick={() => {}}
						size="large"
						sx={{
							height: "48px",
							maxWidth: "172px",
							minWidth: "120px",
							width: "100%",
							backgroundColor: "#CED0D3",
							color: "#848A92",
							fontFamily: "'Open Sans', sans-serif",
							fontSize: "13px",
							lineHeight: "16px",
							borderRadius: 0,
						}}
					>
						Logo
					</Button>

					<Search sx={{ display: { xs: "none", sm: "block" } }}>
						<SearchIconWrapper>
							<SearchIcon sx={{ color: "#001342" }} />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search products"
							inputProps={{ "aria-label": "search" }}
						/>
					</Search>

					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Button
							startIcon={
								<PersonOutlineOutlinedIcon
									sx={{ width: 24, height: 24 }}
								/>
							}
							sx={{
								color: "#FFF",
								textTransform: "none",
								fontSize: "15px",
								fontFamily: "'Open Sans', sans-serif",
								fontWeight: 400,
								marginRight: "16px",
								whiteSpace: "nowrap",
							}}
						>
							Sign in
						</Button>

						<Button
							startIcon={
								<ShoppingBagOutlinedIcon
									sx={{ width: 24, height: 24 }}
								/>
							}
							sx={{
								color: "#FFF",
								textTransform: "none",
								fontSize: "15px",
								fontFamily: "'Open Sans', sans-serif",
								fontWeight: 400,
							}}
						>
							Cart
						</Button>
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>

				<Search
					sx={{
						display: { xs: "block", sm: "none" },
						marginLeft: "0",
						marginTop: "16px",
						width: "80%",
					}}
				>
					<SearchIconWrapper>
						<SearchIcon sx={{ color: "#001342" }} />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search products"
						inputProps={{ "aria-label": "search" }}
					/>
				</Search>
			</AppBar>
			{renderMobileMenu}
		</Box>
	);
};

export default Header;
