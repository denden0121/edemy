import { createContext, useRef, useContext } from "react";

const HeroRefContext = createContext(null);

export const HeroRefProvider = ({ children }) => {
	const heroRef = useRef(null);

	return (
		<HeroRefContext.Provider value={{ heroRef }}>
			{children}
		</HeroRefContext.Provider>
	);
};

export const useHeroRef = () => useContext(HeroRefContext);
