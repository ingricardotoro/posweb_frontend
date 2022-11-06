import { useState } from 'react';
import CardMenu from './components/CardMenu';
import CartOrders from './components/CartOrders';
import HeaderMenu from './components/HeaderMenu';
import TabsMenu from './components/TabsMenu';

const CashOrders = () => {
	const [showOrder, setShowOrder] = useState(false);
	const [activeMenu, setActiveMenu] = useState(0);

	return (
		<>
			<CartOrders showOrder={showOrder} setShowOrder={setShowOrder} />
			<HeaderMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
			<TabsMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-xl text-gray-300'>Elige tu favorito</h2>
			</div>
			<div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
				{activeMenu === 0 && (
					<>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ArrozFuriwa_1024x1024@2x.jpg?v=1587935665'
							}
							price={248.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ArrozCamaronCebollinaHuevo_1024x1024@2x.jpg?v=1587935392'
							}
							price={291.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ScreenShot2020-04-26at3.50.15PM_1024x1024@2x.png?v=1587937873'
							}
							price={248.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ArrozCamaronCebollinaHuevo_1024x1024@2x.jpg?v=1587935392'
							}
							price={291.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ArrozFuriwa_1024x1024@2x.jpg?v=1587935665'
							}
							price={248.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ScreenShot2020-04-26at3.50.15PM_1024x1024@2x.png?v=1587937873'
							}
							price={291.0}
						/>
					</>
				)}
				{activeMenu === 1 && (
					<>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ChopSueyFuriwa_1024x1024@2x.jpg?v=1587936196'
							}
							price={248.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/PolloKungPao_1024x1024@2x.jpg?v=1587936374'
							}
							price={291.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ScreenShot2020-04-26at3.50.15PM_1024x1024@2x.png?v=1587937873'
							}
							price={248.0}
						/>
					</>
				)}
				{activeMenu === 2 && (
					<>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/2li_1024x1024@2x.png?v=1587955283'
							}
							price={58.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/nueva-cocacola_1024x1024@2x.jpg?v=1587955386'
							}
							price={48.0}
						/>
						<CardMenu
							image={
								'https://cdn.shopify.com/s/files/1/0273/1733/8214/products/agua_1024x1024@2x.jpg?v=1587955472'
							}
							price={35.0}
						/>
					</>
				)}
			</div>
		</>
	);
};

export default CashOrders;
