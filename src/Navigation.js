import React, { useState } from 'react'
import { Menu, Image, Header} from 'semantic-ui-react'
import {
  Link
} from "react-router-dom";

export default function MenuExampleInverted() {
  const [activeItem, setActiveItem] = useState("home")

  const handleItemClick = (e, { name }) => setActiveItem(name)
    return (
      <Menu inverted>
        <Menu.Item as='a' header>
          <Image size='tiny' src='/images/hd.png' style={{ marginRight: '1.5em' }} />
          <Header inverted>OM Tools</Header>
        </Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        ><Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          name='Tech Checks'
          active={activeItem === 'Techchecks'}
          onClick={handleItemClick}
          ><Link to="/techckeks">Tech Checks</Link> 
        </Menu.Item>
        <Menu.Item
          name='Students'
          active={activeItem === 'Students'}
          onClick={handleItemClick}
          ><Link to="/students">Students</Link> 
        </Menu.Item>
        <Menu.Item
          name='Grades'
          active={activeItem === 'Grades'}
          onClick={handleItemClick}
          ><Link to="/scores">Grades</Link> 
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item
          name='Logout'
          active={activeItem === 'Logout'}
          onClick={handleItemClick}
          ><Link to="/logout">Logout</Link> 
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
