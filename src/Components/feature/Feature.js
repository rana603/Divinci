import "./Feature.css";


export default function Feature() {
    return (
        <>
            <div className="features">
                <h3 className="overview">Listing Overview</h3>
                <select name="" id="options">
                    <option value="">Last seven Days </option>
                    <option value="">......</option>
                </select>
            </div>
            <div className="featured">

                <div className="featuredItem">
                    <span><i class="fa-sharp fa-solid fa-sun"></i></span>
                    <span className="featuredTitle">  Active Listings</span>
                    <div className="statsContainer">
                        <span className="stats">2453</span>
                    </div>
                    <span className="featuredSub">765 this week  <i class="fa-solid fa-chart-line"></i></span>
                </div>
                <div className="featuredItem">
                    <span><i class="fa-sharp fa-solid fa-sun"></i></span>
                    <span className="featuredTitle">  Draft listings</span>
                    <div className="statsContainer">
                        <span className="stats">546</span>

                    </div>
                    <span className="featuredSub">85 this week  <i class="fa-solid fa-chart-line"></i></span>
                </div>
                <div className="featuredItem">
                    <span><i class="fa-sharp fa-solid fa-sun"></i></span>
                    <span className="featuredTitle">  Expired Listings</span>
                    <div className="statsContainer">
                        <span className="stats">325</span>

                    </div>
                    <span className="featuredSub">76 this week  <i class="fa-solid fa-chart-line"></i></span>
                </div>
                <div className="featuredItem">
                    <span><i class="fa-sharp fa-solid fa-sun"></i></span>
                    <span className="featuredTitle">  Inactive Listings</span>
                    <div className="statsContainer">
                        <span className="stats">246</span>

                    </div>
                    <span className="featuredSub">25 this week <i class="fa-solid fa-chart-line"></i></span>
                </div>
                <div className="featuredItem">
                    <span><i class="fa-sharp fa-solid fa-sun"></i></span>
                    <span className="featuredTitle">  Sold out </span>
                    <div className="statsContainer">
                        <span className="stats">674</span>
                    </div>
                    <span className="featuredSub">47 this week <i class="fa-solid fa-chart-line"></i></span>
                </div>

            </div>
        </>
    );
}
