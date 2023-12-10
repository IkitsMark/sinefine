import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TitleList = () => {
    const navigate = useNavigate();
    

    const [kingdomList, setKingdomList] = useState([])
    const [countyList, setCountyList] = useState([])
    const [baronyList, setBaronyList] = useState([])
    const [listing, setListing] = useState("Kingdoms")
    const [loading, setLoading] = useState(true)

    const fetchKingdoms = () => {
        return fetch("http://localhost:8888/api/kingdoms")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setKingdomList(data);
            })
    };

    const fetchCounties = () => {
        return fetch("http://localhost:8888/api/counties")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCountyList(data);

            })
    };

    const fetchBaronies = () => {
        return fetch("http://localhost:8888/api/baronies")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setBaronyList(data);

            })
    };


    const handleListing = (value, e) => {
        e.preventDefault()
        if (value === "Kingdoms") {
            setListing(value)
        } else if (value === "Counties") {
            setListing(value)
        } else if (value === "Baronies") {
            setListing(value)
        } else {
            console.log("Couldn't handle listing")
        }
    }
  

    useEffect(() => {
        const fetches = async () => {
            await fetchKingdoms()
            await fetchCounties()
            await fetchBaronies()
            setLoading(false)
        }
        
        fetches()

    }, [])


    if (loading) {
        <div>Loading</div>
    }

    return (
        <div className="titlelist">
            <div>
                <p>{listing} List</p>
                <button onClick={(e) => { handleListing("Kingdoms", e) }}>Kingdom List</button>
                <button onClick={(e) => { handleListing("Counties", e) }}>County List</button>
                <button onClick={(e) => { handleListing("Baronies", e) }}>Barony List</button>
            </div>

            {listing === "Kingdoms" ?
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vassals</th>
                            <th>Wealth</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kingdomList.map((kingdom) => {
                            return <tr key={kingdom._id}>
                                <td>{kingdom.name}</td>
                                <td>{kingdom.vassals.map((vassal) => {
                                    return vassal.name + ", "
                                })}</td>
                                <td>{kingdom.wealth}</td>
                                <td><button type="button" onClick={()=>navigate(`/add/${kingdom._id}`)} >Add Estate</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                : listing === "Counties" ? <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vassals</th>
                            <th>Lord</th>
                            <th>Wealth</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countyList.map((county) => {
                            return <tr key={county._id}>
                                <td>{county.name}</td>
                                <td>{county.vassals.map((vassal) => {
                                    return vassal.name + ", "
                                })}</td>
                                <td>{county.lord}</td>
                                <td>{county.wealth}</td>
                                <td><button type="button">Add Estate</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                    : listing === "Baronies" ? <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Lord</th>
                                <th>Wealth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {baronyList.map((barony) => {
                                return <tr key={barony._id}>
                                    <td>{barony.name}</td>
                                    <td>{barony.lord}</td>
                                    <td>{barony.wealth}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                        : <>Empty</>}
        </div>
    );
}

export default TitleList;