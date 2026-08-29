import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 rounded-2xl border border-slate-800 m-2 text-gray-400">
      <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-body sm:text-center">© 2026 <a href="#" className="hover:underline"> muhmdfayasek</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-end items-center mt-3 mb-3 text-md font-medium text-body">
          <li className="m-2.5 h-0">
            <a href="#" className="hover:underline me-4 md:me-6">
               <Icon icon="bi:linkedin"/>
               <span className="sr-only">LinkedIn Profile</span>
            </a>
          </li>
          <li className="m-2.5 h-0">
            <a href="#" className="hover:underline me-4 md:me-6">
              <Icon icon="bi:instagram"/>
              <span className="sr-only">Instagram Profile</span>
            </a>
          </li>
          <li className="m-2.5 h-0">
            <a href="#" className="hover:underline me-4 md:me-6">
              <Icon icon="bi:github"/>
              <span className="sr-only">Github Profile</span>
            </a>
          </li>
          <li className="m-2.5 h-0">
            <a href="#" className="hover:underline me-4 md:me-6">
              <Icon icon="bi:twitter-x"/>
              <span className="sr-only">X.com Profile</span>
            </a>
          </li>
        </ul>
      </div>
        <div className="text-sm mx-5 mb-5 mt-2 text-center">
          <a href="">zed.dev</a> | <a href="">Tailwind CSS</a> | <a href="">Iconify</a> | <a href="">Devicon</a> | <a href="">selfh.st</a> | <a href="">Bootstrap Icons</a> | <a href="">Akar Icons</a> | <a href="">Font Awesome 6</a>
        </div>
    </footer>
  );
}