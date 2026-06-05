import type { MTTask } from "./types";

class StorageApi {
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

export default StorageApi;