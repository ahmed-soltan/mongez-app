import { Link } from "@mongez/react-router";

export default function Header() {
  return <>
   <nav className="flex items-center justify-between w-full">
    <div className="text-3xl font-semibold text-slate-400">
      Task Management App
    </div>
    <div className="flex items-center gap-3">
      <Link href="/">Home</Link>
      <Link to="/about">About</Link>
      <h1>Contact us</h1>
    </div>
   </nav>
  </>;
}
