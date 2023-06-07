import "./Feature.css";
import { useState } from "react";


export default function Feature() {

    const data = [
        // 'value':'--Choose an option--',
        {
            "id": 1,
            "day": "sunday",
            sunday:{"active": 543,
            "draft": 573,
            "expired": 246,
            "inactive": 235,
            "soldout": 123}
        },
        {
            "id": 2,
            "day": "monday",
            "active": 243,
            "draft": 653,
            "expired": 136,
            "inactive": 265,
            "soldout": 623,
        },
        {
            "id": 3,
            "day": "tuesday",
            "active": 243,
            "draft": 353,
            "expired": 532,
            "inactive": 275,
            "soldout": 713,
        },
        {
            "id": 4,
            "day": "wednesday",
            "active": 284,
            "draft": 135,
            "expired": 831,
            "inactive": 765,
            "soldout": 923,
        },
        {
            "id": 5,
            "day": "thursday",
            "active": 353,
            "draft": 853,
            "expired": 213,
            "inactive": 216,
            "soldout": 262,
        },
        {
            "id": 6,
            "day": "friday",
            "active": 246,
            "draft": 284,
            "expired": 246,
            "inactive": 235,
            "soldout": 533,
        },
        {
            "id": 7,
            "day": "saturday",
            "active": 633,
            "draft": 133,
            "expired": 286,
            "inactive": 135,
            "soldout": 963,
        }
    ]

    const [selected, setSelected] = useState(data);
    // const [op, setOp] = useState();

    const handleChange = (event) => {
        console.log(event.target.value);
    setSelected(event.target.value);
    }
    return (
        <>
            <div className="features">
                <h3 className="overview">Listing Overview</h3>
                <select name="" id="options" onChange={handleChange}>
                    {
                        data.map((opt, i) => <option>{opt.day}</option>)
                    }
                    {/* <option value={selected}>Last seven Days </option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option> */}
                </select>
            </div>
             {/* <p>{opt}</p> */}
            {/*
            {data.map((opt, i) => {
                return(
                    <div key={opt.id}>
                       
                    </div>
                )
            })
        }  */}
           
            <div className="featured">
               
                <div className="featuredItem">
                    <span><i class="fa-sharp fa-solid fa-sun"></i></span>
                    <span className="featuredTitle">  Active Listings</span>
                    <div className="statsContainer">
                        <span className="stats">2453 </span>
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
