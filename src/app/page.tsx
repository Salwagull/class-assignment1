import React from "react";
import Link from "next/link"

export default function Home() {
  return (
    <header>
      <nav>
        <div className="left">Salwa's Web-Page</div>
        <div className="right">
        <ul>
          {/* <li><a href="/">Main Home</a></li>
          <li><a href="/about"><b><i><u>About</u></i></b></a></li>
          <li><a href="/contact"><b><i><u>Contact</u></i></b></a></li>
          <li><a href="/home"><b><i><u>Home</u></i></b></a></li>
          <li><a href="/services"><b><i><u>Services</u></i></b></a></li>
          <li><a href="/services/web-services"><b><i><u>Web-Services</u></i></b></a></li> */}
          <li>
            <Link href="/" target="_blank">
            <b><u><i>Main HomePage</i></u></b>
            </Link>
          </li>
          <li>
            <Link href="/about" target="_blank">
            <b><u><i>About</i></u></b>
            </Link>
          </li>
          <li>
            <Link href="/contact" target="_blank">
            <b><u><i>Contact</i></u></b>
            </Link>
          </li>
          <li>
            <Link href="/Home" target="_blank">
            <b><u><i>Home</i></u></b>
            </Link>
          </li>
          <li>
            <Link href="/services" target="_blank">
            <b><u><i>Services</i></u></b>
            </Link>
          </li>
          <li>
            <Link href="/services/web-services" target="_blank">
            <b><u><i>Web-Services</i></u></b>
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}
