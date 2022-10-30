import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../../lib/context/theme/SidebarContext";

const VentasMenu = () => {

    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <>
            <Link to='/ventas' className='font-bold text-2xl'>
                PosWeb
            </Link>
            <hr />
            <ul className='mt-2'>
                <li className='text-gray-500  flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
                    <Link to='caja' onClick={toggleSidebar}>
                        Caja
                    </Link>
                </li>
                <li className='text-gray-500 flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
                    <Link to='pedidos-web' onClick={toggleSidebar}>
                        Pedidos Web
                    </Link>
                </li>
                <li className='text-gray-500 flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
                    <Link to='pedidos-mesa' onClick={toggleSidebar}>
                        Pedidos mesa
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default VentasMenu