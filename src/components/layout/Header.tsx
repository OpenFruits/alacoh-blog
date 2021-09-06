import { VFC } from "react";
import Link from "next/link";

export const Header: VFC = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <h1>Alacoh Blog</h1>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>
              <h2>home</h2>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <h2>about</h2>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <h2>profile</h2>
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
