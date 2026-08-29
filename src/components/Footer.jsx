import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 rounded-2xl border border-slate-500 m-2">
      <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">© 2026 <a href="#" className="hover:underline"> muhmdfayasek</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-end items-center mt-3 text-sm font-medium text-body">
          <li className="m-2.5 inside-footer">
            <a href="#" className="hover:underline me-4 md:me-6">
               <Icon icon="bi:linkedin"/>
               <span className="sr-only">LinkedIn Profile</span>
            </a>
          </li>
          <li className="m-2.5 inside-footer">
            <a href="#" className="hover:underline me-4 md:me-6">
              <Icon icon="bi:instagram"/>
              <span className="sr-only">Instagram Profile</span>
            </a>
          </li>
          <li className="m-2.5 inside-footer">
            <a href="#" className="hover:underline me-4 md:me-6">
              <Icon icon="bi:github"/>
              <span className="sr-only">Github Profile</span>
            </a>
          </li>
          <li className="m-2.5 inside-footer">
            <a href="#" className="hover:underline me-4 md:me-6">
              <Icon icon="bi:twitter-x"/>
              <span className="sr-only">X.com Profile</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}