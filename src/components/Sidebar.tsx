import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
// import ProfileImage from "../assets/images.jpg"
import {
	ChevronLeft,
	ChevronRightOutlined,
	HomeOutlined,
	ShoppingCartOutlined,
	Groups2Outlined,
	ReceiptLongOutlined,
	PublicOutlined,
	PointOfSaleOutlined,
	TodayOutlined,
	CalendarMonthOutlined,
	AdminPanelSettingsOutlined,
	TrendingUpOutlined,
	PieChartOutline
} from '@mui/icons-material';

interface SidebarProps {
	isNonMobile: boolean;
	drawerWidth: string;
	isSidebarOpen: boolean;
	setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
const navItems: any[] = [
	{
		text: 'Dashboard',
		Icon: <HomeOutlined />
	},
	{
		text: 'Client Facing',
		Icon: null
	},
	{
		text: 'Products',
		Icon: <ShoppingCartOutlined />
	},
	{
		text: 'Customers',
		Icon: <Groups2Outlined />
	},
	{
		text: 'Transactions',
		Icon: <ReceiptLongOutlined />
	},
	{
		text: 'Geography',
		Icon: <PublicOutlined />
	},
	{
		text: 'Sales',
		Icon: null
	},
	{
		text: 'Overview',
		Icon: <PointOfSaleOutlined />
	},
	{
		text: 'Daily',
		Icon: <TodayOutlined />
	},
	{
		text: 'Monthly',
		Icon: <CalendarMonthOutlined />
	},
	{
		text: 'Breakdown',
		Icon: <PieChartOutline />
	},
	{
		text: 'Management',
		Icon: null
	},
	{
		text: 'Admin',
		Icon: <AdminPanelSettingsOutlined />
	},
	{
		text: 'Performance',
		Icon: <TrendingUpOutlined />
	}
];
const Sidebar: FC<SidebarProps> = ({ isNonMobile, isSidebarOpen, setIsSidebarOpen, drawerWidth }): JSX.Element => {
	const { pathname } = useLocation();
	const [active, setActive] = useState<string>('');
	const navigate = useNavigate();
	const theme: any = useTheme();
	useEffect(() => {
		setActive(pathname.substring(1));
	}, [pathname]);
	return (
		<Box component="nav" className="no-scrollbar">
			{isSidebarOpen ? (
				<Drawer
					open={isSidebarOpen}
					onClose={() => setIsSidebarOpen(false)}
					variant="persistent"
					anchor="left"
					className="no-scrollbar"
					sx={{
						'width': drawerWidth,
						'& .MuiDrawer-paper': {
							color: theme.palette.secondary[200],
							backgroundColor: theme.palette.background.alt,
							boxSixing: 'border-box',
							borderWidth: isNonMobile ? 0 : '2px',
							width: drawerWidth
						}
					}}
				>
					<Box width="100%" className="no-scrollbar">
						<Box m="1.5rem 2rem 2rem 3rem">
							<FlexBetween color={theme.palette.secondary.main}>
								<Box display="flex" alignItems="center" gap="0.5rem">
									<Typography variant="h5" fontWeight="bold">
										SANTRA BUISNESS
									</Typography>
								</Box>
								{!isNonMobile ? (
									<IconButton onClick={() => setIsSidebarOpen((prev) => !prev)}>
										<ChevronLeft />
									</IconButton>
								) : (
									<></>
								)}
							</FlexBetween>
						</Box>
						<List>
							{navItems.map(({ text, Icon }, index) => {
								if (!Icon)
									return (
										<Typography key={`${text}-${index}`} sx={{ m: '2.25rem 0 1rem 3rem' }}>
											{text}
										</Typography>
									);
								const lcText: string = text.toLowerCase();
								return (
									<ListItem key={`${text}-${index}`}>
										<ListItemButton
											onClick={() => (navigate(`/${lcText}`), setActive(lcText))}
											sx={{
												backgroundColor: active === lcText ? theme.palette.secondary[300] : 'transparent',
												color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100]
											}}
										>
											<ListItemIcon
												sx={{
													ml: '2rem',
													color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200]
												}}
											>
												{Icon}
											</ListItemIcon>
											<ListItemText primary={text} />
											{active === lcText ? <ChevronRightOutlined sx={{ mx: 'auto' }} /> : <></>}
										</ListItemButton>
									</ListItem>
								);
							})}
						</List>
					</Box>
				</Drawer>
			) : (
				<></>
			)}
		</Box>
	);
};

export default Sidebar;
