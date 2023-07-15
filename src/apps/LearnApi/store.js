import { create } from 'zustand';

const useStore = create((set) => ({
  taskList: null,
  fetchTasks: (value) => set( (prev) => ({
    taskList: value.map(data => (
      {id: data.id, content: data.content, description: data.description}
    )).slice(5)
  }) ),
  AddTasks: (task) => set( (prev) => ({
    taskList: [...prev.taskList, task]
  }) ),
}))

export default useStore;