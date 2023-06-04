import "./Data.css";

export default function Data() {
  return (
    <div className="Sale">
      <span className="saleFor">Sale Progress <span className="saleFor">view details</span></span>
      <ul className="saleList">
        <li className="saleItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhx0RqKXDz1TIkf1rl6Egx21IX5YZA7Pn_As0ZNxyiQ&usqp=CAU&ec=48665701"
            alt=""
            className="saleImg"
          />
          <div className="saleUser">
            <span className="saleType">Clothing & soes</span>
            <span className="saleFor">Men & woman</span>
          </div>
          <button className="PriceHigh">
            {/* <Visibility className="widgetSmIcon" /> */}
            <i class="fa-solid fa-arrow-up"></i> 27.8%
          </button>
        </li>
        <li className="saleItem">
          <img
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhx0RqKXDz1TIkf1rl6Egx21IX5YZA7Pn_As0ZNxyiQ&usqp=CAU&ec=48665701"
            alt=""
            className="saleImg"
          />
          <div className="saleUser">
            <span className="saleType">Jewelry Items</span>
            <span className="saleFor">Woman</span>
          </div>
          <button className="PriceHigh">

          <i class="fa-solid fa-arrow-up"></i>  25.3%
          </button>
        </li>
        <li className="saleItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhx0RqKXDz1TIkf1rl6Egx21IX5YZA7Pn_As0ZNxyiQ&usqp=CAU&ec=48665701"
            alt=""
            className="saleImg"
          />
          <div className="saleUser">
            <span className="saleType">Home & Living</span>
            <span className="saleFor">Men % Woman</span>
          </div>
          <button className="PriceHigh">
          <i class="fa-solid fa-arrow-up"></i>  21.3%
          </button>
        </li>
        <li className="saleItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhx0RqKXDz1TIkf1rl6Egx21IX5YZA7Pn_As0ZNxyiQ&usqp=CAU&ec=48665701"
            alt=""
            className="saleImg"
          />
          <div className="saleUser">
            <span className="saleType">Electronics Items</span>
            <span className="saleFor">Men & Woman</span>
          </div>
          <button className="PriceHigh">
          <i class="fa-solid fa-arrow-up"></i>  18.7%
          </button>
        </li>
      
      </ul>
    </div>
  );
}
