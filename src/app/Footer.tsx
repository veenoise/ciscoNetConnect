"use client"

import Image from "next/image";
import Link from "next/link";
import facebook from "./../../public/facebook.svg"
import discord from "./../../public/discord.svg"

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-10 overflow-x-hidden">
      <div className="grid grid-cols-6 container lg:px-52">
        <div className="col-span-4 md:col-span-3">
          <img 
            src="https://placehold.co/128"
            alt="logo image"
            width={128}
            height={128}
            className="mb-5"
          />
          <a href="tel:09616161616">
            <p className="text-neutral-200 mb-3 font-bold text-2xl">+639616161616</p>
          </a>
          <a href="mailto:sample@email.com">
            <p className="text-neutral-200">sample_email@email.com</p>
          </a>
        </div>
        <div className="order-last col-span-6 mt-10 md:mt-0 md:col-span-2 md:order-none">
          <h4 className="text-neutral-200 mb-5 font-bold text-xl text-center md:text-start">Quick links</h4>
          <div className="grid grid-cols-2 gap-x-4 md:grid-cols-none">
            <Link href="/">
              <p className="text-neutral-200 mb-3 text-end md:text-start">Homepage</p>
            </Link>
            <Link href="/news">
              <p className="text-neutral-200 mb-3">News</p>
            </Link>
            <Link href="/blog">
              <p className="text-neutral-200 mb-3 text-end md:text-start">Blogs</p>
            </Link>
            <Link href="/learning-hub">
              <p className="text-neutral-200 mb-3">Learning hub</p>
            </Link>
            <Link href="/museo">
              <p className="text-neutral-200 mb-3 text-end md:text-start">Museo</p>
            </Link>
            <Link href="/join">
              <p className="text-neutral-200">Join us!</p>
            </Link>
          </div>
          
        </div>
        <div>
          <h4 className="text-neutral-200 mb-5 font-bold text-xl">Social</h4>
          <div className="flex gap-3">
            <a href="" target="_blank">
              <Image 
                src={facebook} 
                alt="facebook icon" 
                height={32}
              />
            </a>
            <a href="" target="_blank">
              <Image 
                src={discord} 
                alt="facebook icon" 
                height={32}
              />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer;