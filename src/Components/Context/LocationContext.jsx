import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState({
        "lat":40.75,
        "lon":30.58333
    });

    const values = {
        location,
        setLocation
    }
    return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>
}
export const useLocation = () => useContext(LocationContext);