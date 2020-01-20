import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import {ListItem, ListItemText, Collapse, ListItemIcon, makeStyles} from '@material-ui/core'
import {ExpandLess, ExpandMore} from '@material-ui/icons'
import './sidebar.css'

const darkTheme = {
  backgroundColor: '#383838',
  color: '#8AC7F3'
}

function SidebarItem ({label, name, items, depthStep = 10, depth = 0, Icon}) {
  const sidebarOpenState = {[name]: false}
  const [open, setOpen] = useState(sidebarOpenState)

  const handleClick = () => {
    setOpen(currentState => ({
      ...currentState,
      [name]: !currentState[name]
    }))
  }
  const expandBtn = open => open ? <ExpandLess /> : <ExpandMore />
  return (
    <Fragment>
      <ListItem onClick={handleClick} button dense>
        {Icon && <ListItemIcon>
          <Icon />
        </ListItemIcon>}
        <ListItemText style={{paddingLeft: depth * depthStep}}>
          <span>{label}</span>
        </ListItemText>
        {items && expandBtn(open[name])}
      </ListItem>
      <Collapse in={!open[name]} timeout='auto' unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem) => (
              <SidebarItem
                key={subItem.name}
                onClick={handleClick}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        ) : null}
      </Collapse>
    </Fragment>
  )
}

SidebarItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.array,
  depth: PropTypes.number,
  theme: PropTypes.object,
  depthStep: PropTypes.number
}

function Sidebar ({items, theme, icon, width}) {
  const useStyles = makeStyles(material => {
    let themeColor = {
      backgroundColor: material.palette.background.paper,
      color: '#000'
    }
    if (theme === 'dark') {
      themeColor = darkTheme
    }
    return {
      root: {
        width: width,
        maxWidth: width,
        ...themeColor
      },
      nested: {
        paddingLeft: material.spacing(4)
      }
    }
  })
  const materialTheme = useStyles()
  return (
    <div className='sidebar'>
      <List className={materialTheme.root} disablePadding dense>
        {items.map((sidebarItem, index) => (
          <SidebarItem
            Icon={sidebarItem.icon}
            items={sidebarItem.items}
            key={`${sidebarItem.name}${index}`}
            label={sidebarItem.label}
            name={sidebarItem.name}
          />
        ))}
      </List>
    </div>
  )
}

Sidebar.defaultProps = {
  theme: 'light',
  width: '240px'
}

Sidebar.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  height: PropTypes.string,
  items: PropTypes.array,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  width: PropTypes.string
}

export default Sidebar
