import { create } from 'zustand'

const useStore = create((set)=>({
  taskList: [{
    id: 0,
    title: 'Example task 1',
    done: false,
  }, {
    id: 1,
    title: 'Example task 2',
    done: true,
  }],
  addTask: (value) => set( (prev) => ({
    taskList: [...prev.taskList, value]
  }) ),
  removeTask: (targetId) => set( (prev) => ({
    taskList: prev.taskList.filter((list) => list.id !== targetId)
  }) ),
  checkTask: (targetId) => set( (prev) => ({
    taskList: prev.taskList.map((list) => {
      return (
        list.id !== targetId ? list : {...list, done: !list.done}
      )
    })
  }) ),
}))

export default useStore;