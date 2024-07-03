import LocationPermission from "../components/LocationPermisions"
import Weather from "../components/Weather"
const Header = () => {
  
  return (
    <header className="relative flex flex-col justify-center items-center lg:bg-blue-400 lg:h-screen">
      <LocationPermission/>
      <Weather/>
    </header>
  )
}

export default Header
