import './Sidebar.scss';
import MenuItem from '../../assets/Menu.png';

function Sidebar() {
  return (
    <aside className='sidebar'>
      <button className='sidebar-btn'><img src={MenuItem} alt='Menu' className='sidebar-btn__pic' /></button>
    </aside>
  )
}

export default Sidebar;