import { Icon } from "@iconify/react";

export default function Footer() {

  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-surface rounded-2xl border border-border m-2 text-text-muted">
      <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-body sm:text-center">© {year} <a href="#" className="hover:underline"> muhmdfayasek</a>. All Rights Reserved.
        </span>
        
        {/* Social media Profiles */}
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
      
      {/* Tools and other resouces i used in this project */}
        <div className="text-sm mx-5 mb-5 mt-2 text-center">
        <a href="https://zed.dev/">zed.dev </a> | 
        <a href="https://tailwindcss.com/"> Tailwind CSS </a> |
        <a href="https://flowbite.com/"> Flowbite </a> |
        <a href="https://iconify.design/"> Iconify </a>
        [<a href="https://devicon.dev/"> Devicon </a> |
        <a href="https://selfhost.st/"> selfh.st </a> |
        <a href="https://icons.getbootstrap.com/"> Bootstrap Icons </a> |
        <a href="https://akaricons.com/"> Akar Icons </a> |
        <a href="https://fontawesome.com/"> Font Awesome 6 </a> |
        <a href="https://carbon.design/"> Carbon </a>]
        </div>
    </footer>
  );
}