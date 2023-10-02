import { Link } from "react-router-dom"
import PageNotFoundImage from "../assets/images/pagenotfound.png"
import { Button } from "../components/Button"
import { useTitle } from "../hooks/useTitle"

export const PageNotFound = () => {
  useTitle(`Page not found`)
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <div>
            <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
            <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found"></img>
            </div>
          </div>
          <div className="flex justify-center my-4"lass></div>
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
