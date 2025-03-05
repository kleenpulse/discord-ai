import { create } from "zustand";

type State = {
	isPictureInView: boolean;
	updatePictureInView: (state: boolean) => void;
};

export const usePictureInView = create<State>()((set) => ({
	isPictureInView: false,
	updatePictureInView: (state) => set({ isPictureInView: state }),
}));
