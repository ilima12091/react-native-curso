import { create } from 'zustand';

export interface CounterState {
  count: number;
  increaseBy: (value: number) => void;
}

export const useCounterStore = create<CounterState>()(set => ({
  count: 0,
  increaseBy: (value: number) => set(state => ({ count: state.count + value })),
}));
