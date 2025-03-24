import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import Footer from '../Footer/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
        
        {/* Copyright Footer */}
        <div className="copyright">
          <p>Copyright © 2025 Sukhman Aulakh</p>
        </div>
        {/* Footer with social links and copyright will display on mobile/tablet */}
        <Footer />
      </div>
      
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  )
}

export default Layout