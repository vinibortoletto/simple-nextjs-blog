import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-2 bg-slate-900 text-slate-200">
      <nav>
        <ul className="flex items-center justify-center gap-2">
          <li className="font-bold">
            <Link href="/">vini.bortoletto</Link>
          </li>
          <li>
            <Link href="https://github.com/vinibortoletto" target="_blank">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/in/vinicius-bortoletto"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
