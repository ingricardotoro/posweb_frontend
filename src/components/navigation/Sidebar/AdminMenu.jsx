import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../../lib/context/theme/SidebarContext";

const AdminMenu = () => {

    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <>
            <Link to='/admin' className='font-bold text-2xl'>
                PosWeb
            </Link>
            <hr />
            <ul className='mt-2'>
                <li className='text-gray-500  flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
                    <Link to='usuarios' onClick={toggleSidebar}>
                        Usuarios
                    </Link>
                </li>
                <li className='text-gray-500 flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
                    <Link to='clientes' onClick={toggleSidebar}>
                        Clientes
                    </Link>
                </li>
                <li className='text-gray-500 flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
                    <Link to='proveedores' onClick={toggleSidebar}>
                        Proveedores
                    </Link>
                </li>
                <li className='text-gray-500 flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
                    <Link to='categorias' onClick={toggleSidebar}>
                        Categorías
                    </Link>
                </li>
                <li className='text-gray-500 flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
                    <Link to='productos' onClick={toggleSidebar}>
                        Productos
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default AdminMenu