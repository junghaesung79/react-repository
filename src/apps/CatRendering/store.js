import { create } from 'zustand'

export const useStore = create((set)=>({
  yourState : 'VALUE',
  yourAction : (val) => set( (state) => ({ yourState : state.yourState }) )
}))
