import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon,} from 'antd'

class NavBar extends React.Component {
  state = {
    current: ''
  }

  handleClick = (event) => {
    localStorage.current = event.key
    this.setState({
      current: event.key
    });
  };

  componentDidMount() {
    if (localStorage.current) {
      this.setState({
        current: localStorage.current
      })
    } else {
      this.setState({
        current: 'planner'
      })
    }
  }

  render() {
    return (
        <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          theme="light"
          overflowedIndicator={<Icon type="menu" />}
          >
          <Menu.Item disabled="true" className="menu-title">Meal Mate</Menu.Item>
          <Menu.Item className="logout" key="setting:2" onClick={this.props.logout} style={{float: 'right'}}>
            <Icon type="logout" />
            Logout
          </Menu.Item>
          <Menu.Item key="setting:1" style={{float: 'right'}}>
            <Link to="/home/profile">
              <Icon type="user" />
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item className="menu-element" key="planner">
            <Link to="/home">
              <Icon type="calendar" />
              Planner
            </Link>
          </Menu.Item>
          <Menu.Item className="menu-element" key="meals">
            <Link to="/home/meals">
              <Icon type="coffee" />
              Meals
            </Link>
          </Menu.Item>
          <Menu.Item className="menu-element" key="recipe">
            <Link to="/home/addrecipe">
              <Icon type="plus" />
              Add Recipe
            </Link>
          </Menu.Item>
          <Menu.Item className="menu-element" key="shopping-list">
            <Link to="/home/shoppinglist">
              <Icon type="ordered-list" />
              Shopping List
            </Link>
          </Menu.Item>



        </Menu>
      </div>
    )
  }
}

export default NavBar
