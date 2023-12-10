import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const AddEstate = () => {
    const [estate, setEstate] = useState()
    const [loading, setLoading] = useState(true)

    let { id } = useParams()

    const fetchByID = async (id) => {
        fetch(`http://localhost:8888/api/estate/${id}`)
            .then((res) => res.json())
            .then((data)=> setEstate(data))
    }
    const patchEstateToCounty = (estate) => {
        fetch("http://localhost:8888/api/counties", {
            method: "PATCH",
            headers: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify(estate)
        })
            .then((res) => res.json())
    }

    useEffect(() => {
        const fetching = async () => {
            await fetchByID(id)
            //Ide kell egy handle hogy melyik listát fetchelje (vagy a grófságokat vagy a báróságokat akarjuk, a királyok nem lehetnek hűbéresek, a bárok nem lehetnek hűbérurak.)
            setLoading(false)
        }
        fetching()
    }, [])

    const handleSubmit = (dataToAdd, e) => {
        e.preventDefault()

    }

    return (<div>
        <form /* onSubmit={(e) => handleSubmit(value, e)} */>
            <div className="control">
                <label htmlFor="estateName">Estate Name</label>
                <select>
                    <option value="basevalue">Choose an Estate to Add</option>
                </select>
            </div>
            <div className="control">
                <label htmlFor="estateLord">Estate Lord</label>
                <select>
                    <option value="basevalue">Choose an Estate to be Lord</option>
                </select>
            </div>
            <button type="s ubmit">Add Estate</button>
        </form>
    </div>);
}

export default AddEstate;