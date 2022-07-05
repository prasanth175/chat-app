/* eslint-disable array-callback-return */
import React from 'react'
import { Loader, Nav } from 'rsuite';
import { Link, useLocation } from 'react-router-dom';
import { useRooms } from '../../context/rooms.context';
import RoomItem from './RoomItem';


function ChatRoomList({ aboveElementHeight }) {

    const rooms = useRooms();
    const location = useLocation();

  return (
    <Nav
       appearance='subtitle'
       vertical
       reversed
       className='overflow-y-scroll custom-scroll'
       style={{
        height: `calc(100% - ${aboveElementHeight}px)`,
       }}
       activeKey={location.pathname}
    >
        {!rooms && (
            <Loader center vertical content='Loading' speed='slow' size="md" />
        )}
        {rooms &&
          rooms.length > 0 &&
          rooms.map((room) => (
            <Nav.Item
            componentClass={Link}
            to={`/chat/${room.id}`}
             key={room.id}
             eventKey={`/chat/${room.id}`}
             >
                <RoomItem room={room} />
            </Nav.Item>
          ))}
    </Nav>
  )
}

export default ChatRoomList;