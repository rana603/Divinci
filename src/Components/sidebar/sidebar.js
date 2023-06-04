
import './sidebar.css'
export default function sidebar(){
  return (

    <div className="sidebar">
      <div className="subsidebar">
      <h6>Admin Panel</h6>
        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-solid fa-house"></i>  Dashboard</h3>
          <ul className="sidebarList">
            <li className="subItems active">
            <i className="sidebarIcon"   class="fa-solid fa-list"></i>
               Listings
            </li>
          </ul>
        </div>
        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-sharp fa-solid fa-book"></i>  Order & Delivery</h3>
        </div>
        <div className="sidebarData">
          <h3 className="Title"> <i className="sidebarIcon" class="fa-sharp fa-solid fa-chart-simple"></i>  Stats</h3>
        </div>
        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-solid fa-calendar-days"></i>  Finances</h3>
          
        </div>
        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-solid fa-calendar-days"></i>  Marketing</h3>
          
        </div>
        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-solid fa-calendar-days"></i>  Integration</h3>
          
        </div>
        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-solid fa-calendar-days"></i>  Reports</h3>
          
        </div>
        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-solid fa-calendar-days"></i>  Settings</h3>
          
        </div>
        <h6>Insights</h6>
        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-solid fa-calendar-days"></i> Inbox <span className="topic">2</span></h3>
          
        </div>
        

        <div className="sidebarData">
          <h3 className="Title"><i className="sidebarIcon" class="fa-solid fa-calendar-days"></i>  Noticfications</h3>
          
        </div>

      </div>

    </div>
  )
}