import type { MTTask } from "./types";
import * as index from "../index.ts";

class StorageApi {
    static setTasks(tasks: MTTask[]) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    static getTasks(): MTTask[] {
        const tasks = localStorage.getItem('tasks') || '[]';
        return JSON.parse(tasks);
    }

    static setTask(task: MTTask) {
        const tasks = StorageApi.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

StorageApi.setTasks(index.planets_maket);

export default StorageApi;