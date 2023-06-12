import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        <li className="font-bold">simple blog - vini.bortoletto</li>
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
  );
}
