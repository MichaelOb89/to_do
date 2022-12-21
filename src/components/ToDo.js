export default function ToDo({activity, activities, foundActivity, getActivities, setFoundActivity}){
    const completeToDo = async (activity) => {
        activity.completed = true
        try{
            const response = await fetch(`/api/${activity._id}`, {
                method:"PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...activity})
            })
            const data = await response.json()
            setFoundActivity(data)
        } catch(err){
            console.error(err)
        }
    }
    const deleteToDo = async (activity) => {
        try{
            const response = await fetch(`/api/${activity._id}`, {
                method:"DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }  
            })
            const data = await response.json()
            setFoundActivity(data)
        } catch(err){
            console.error(err)
        }
    }

    return(
        <li>
            <h2>{activity.text}</h2>
            {!activity.completed ? <button onClick={()=>completeToDo(activity)}>Mark as Complete</button> : 
            <button onClick={()=>deleteToDo(activity)}>Remove from List</button>}
        </li>
    )
}