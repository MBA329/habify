"use client"
import { Plus } from "lucide-react"

export default function AddHabitButton(){
  const handleAdd = ()=>{

  }

  return <div  onClick={handleAdd} className=" flex gap-3  text-white p-2 rounded-md">Add Habit <Plus/></div>
}