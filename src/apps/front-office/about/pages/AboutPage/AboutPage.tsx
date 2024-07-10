import { Link } from "@mongez/react-router"

const AboutPage = ({params}:{params:{id:string}}) => {
    console.log(params.id)
  return (
    <div>
      Hello world
      <Link href="/">Return to Home Page</Link>
      </div>
  )
}

export default AboutPage