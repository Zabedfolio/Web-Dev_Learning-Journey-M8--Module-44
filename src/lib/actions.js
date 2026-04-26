'use server'

import { postTask } from "@/lib/tasks";
import { revalidatePath } from "next/cache";

export const addATask = async(formData) =>{


    // const title = formData.get('title');
    // const description = formData.get('description');
    // const status = formData.get('status');
    // const priority = formData.get('priority');
    // const assignedTo = formData.get('assignedTo');
    // const date = formData.get('date');

    // const newTask = {title, description, status, priority, assignedTo, date};


    const newTask = Object.fromEntries(formData.entries());
    console.log('Adding a task with name:', newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks')
    }
    return res;
    
}