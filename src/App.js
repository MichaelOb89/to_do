import { useState, useEffect } from 'react'
import ToDoList from './components/ToDoList'

export default function App(){
    const [activities, setActivities] = useState(null)
    const [newActivity, setNewActivity] = useState(null)
    const [foundActivity, setFoundActivity] = useState(null)

    const handleChange = (e) => {
        setNewActivity({text: e.target.value, completed: false})
    }

    const createToDo = async () => {
        try{
            const response = await fetch(`/api`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newActivity})
            })
            const data = await response.json()
            setFoundActivity(data)
        } catch(err){
            console.log(err)
        }
    }

    const getActivities = async () => {
        try{
            const response = await fetch('/api')
            const data = await response.json()
            setActivities(data)
        } catch(err){
            console.error(err)
        }
    }
    useEffect(() => {
        getActivities()
    }, [])
    useEffect(() => {
        getActivities()
    }, [foundActivity])

    return(
        <>
            <ToDoList
            activities={activities}
            setActivities={setActivities}
            newActivity={newActivity}
            setNewActivity={setNewActivity}
            foundActivity={foundActivity}
            setFoundActivity={setFoundActivity}
            handleChange={handleChange}
            createToDo={createToDo}
            getActivities={getActivities}
            />
        </>
    )
}