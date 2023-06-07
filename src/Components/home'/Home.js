import Chart from '../Charts/charts'
import Feature from '../feature/Feature'
import { userData } from "../../DummyData";
import './Home.css'
import Data from '../Charts/Data';
import UserList from '../userlist/UserList';

export default function Home() {
    return (
        <div className="home">
            <Feature />
            <div className='data'>
                <Chart data={userData} title="Revanue Stats" grid dataKey="Active User" />
                <Data />
            </div>
            <UserList/>

        </div>
    )
}