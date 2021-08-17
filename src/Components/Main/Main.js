import {useEffect, useState} from 'react';
import axios from 'axios';

const Main = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
        .then(res => setData(res.data.Countries))
        .catch(err => console.log(err))
    }, [])

    const tableData = data.map(obj => {
        return <tr>
            <td>{obj.Country}</td>
            <td>{obj.TotalConfirmed}</td>
            <td>{obj.TotalDeaths}</td>
        </tr>
    })

    return (
        <div>
            <h1>Covid Stats</h1>
            <p>Using WHO api</p>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className="table table-light">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Confirmed</th>
                        
                            <th>Deaths</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Main;