import React from 'react'
import navlinks from '../../data/navlinks.js';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {navlinks.map((group, idx) => (
        <div key={idx}>
          {group.section && <h3>{group.section}</h3>}
          <ul>
            {group.links.map((link, i) => (
              <li key={i} className="nav-item">
                <span className="icon">{link.icon}</span>
                <span>{link.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Sidebar