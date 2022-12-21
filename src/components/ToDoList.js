import { useState, useEffect } from "react";
import ToDo from "./ToDo";

export default function ToDoList({
    activities,
    setActivities,
    newActivity,
    setNewActivity,
    foundActivity,
    setFoundActivity,
    handleChange,
    createToDo,
    getActivities
}){
    // const [activities, setActivities] = useState(null)
    // const [newActivity, setNewActivity] = useState(null)
    // const [foundActivity, setFoundActivity] = useState(null)

    // const handleChange = (e) => {
    //     setNewActivity({text: e.target.value, completed: false})
    // }

    // const createToDo = async () => {
    //     try{
    //         const response = await fetch(`/api`, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({...newActivity})
    //         })
    //         const data = await response.json()
    //         setFoundActivity(data)
    //     } catch(err){
    //         console.log(err)
    //     }
    // }

    // const getActivities = async () => {
    //     try{
    //         const response = await fetch('/api')
    //         const data = await response.json()
    //         setActivities(data)
    //     } catch(err){
    //         console.error(err)
    //     }
    // }
    // useEffect(() => {
    //     getActivities()
    // }, [])
    // useEffect(() => {
    //     getActivities()
    // }, [foundActivity])


    return(
        <>
            <h1>Create Todo</h1> 
            <input name="text" value={newActivity.text} onChange={handleChange} type='text'/>
            <button onClick={()=>createToDo()}>Create new Todo</button>
            {activities && activities.length ?(
                <>
                    <h2>To do items</h2>
                    <div className="to-do">
                        <ul>
                            {activities.filter((el) => !el.completed).map((item) => {
                                return(
                                    <ToDo
                                    key={item._id}
                                    activity={item}
                                    activities={activities}
                                    getActivities={getActivities}
                                    foundActivity={foundActivity}
                                    setFoundActivity={setFoundActivity}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                    <h2>Completed</h2>
                    <div className="complete">
                        <ul>
                            {activities.filter((el) => el.completed).map((item) => {
                                return(
                                    <ToDo
                                    key={item._id}
                                    activity={item}
                                    activities={activities}
                                    getActivities={getActivities}
                                    foundActivity={foundActivity}
                                    setFoundActivity={setFoundActivity}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </>
            ) : (<h2>No activities found</h2>)}
       </>
    )
}