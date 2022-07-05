import React from 'react'
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';

function Sidebar() {
  return (
    <div>


        <div>
            <DashboardToggle />
            <CreateRoomBtnModal />
        </div>
        bottom
    </div>
  )
}

export default Sidebar;