import { create } from "zustand";

type StateProps = {
	isAnimated: boolean;
	updateIsAnimated: (state: boolean) => void;
};

export const useArrow = create<StateProps>((set) => ({
	isAnimated: false,
	updateIsAnimated: (state) => set({ isAnimated: state }),
}));
