import { VFC } from "react";
import Link from "next/link";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "HOME" },
  { href: "/", label: "プライバシーポリシー" },
  { href: "/", label: "免責事項" },
];

export const Footer: VFC = () => {
  return (
    <footer>
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <small lang="en">©︎ 2021 Alacoh</small>
    </footer>
  );
};
