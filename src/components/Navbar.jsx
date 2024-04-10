import React from "react";
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-white py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <h3 className="text-white text-3xl">NextMySQL Products App</h3>
        </Link>

        <ul>
          <li>
            <Link className="text-sky-500 hover:text-sky-300" href="/new">New product</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
