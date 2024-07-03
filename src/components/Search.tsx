import { useState, useRef } from "react";
import { useJsApiLoader, Autocomplete, Libraries } from "@react-google-maps/api";
import { useUbication } from "../hooks/useUbication";

const libraries: Libraries = ['places']

const Search = () => {
  const [input, setInput] = useState('')
  const {setUbication} = useUbication()

  const autocompleteRef = useRef<google.maps.places.Autocomplete>()

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_API_KEY_GOOGLE,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const handlePlaceChanged = () => {
    if (autocompleteRef.current !== null && autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace()
      setInput(place.formatted_address || "")
      const viewport = place?.geometry?.viewport
      if(viewport){
        const latitude = (viewport.getNorthEast().lat() + viewport.getSouthWest().lat()) / 2
        const longitude = (viewport.getNorthEast().lng() + viewport.getSouthWest().lng()) / 2
        setUbication({ latitude: latitude, longitude: longitude })
        setInput('')
      }
      
    }
  }

  return (
    <form className="mb-8 lg:mb-0 lg:w-[30%] lg:self-end cursor-pointer">
      <label className="flex items-center gap-6 p-2 bg-gray-800 rounded-xl cursor-pointer">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            fill="gray"
            d="M12.9 14.32c-1.34 1.049-3.050 1.682-4.908 1.682-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8 0 1.858-0.633 3.567-1.695 4.925l0.013-0.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6v0c-3.314 0-6 2.686-6 6s2.686 6 6 6v0z"
          ></path>
        </svg>
        <Autocomplete
          className=""
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            id="autocomplete"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="on"
            type="search"
            placeholder="Buscar una ciudad"
            className="text-white bg-gray-800 border-none outline-none flex-grow"
          />
        </Autocomplete>
      </label>
    </form>
  )
}

export default Search
