import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import kg from "../public/IMAGE 2023-03-13 15:06:27.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kunal Gursal</title>
        <meta name="description" content="I am Fullstack Developer"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white  px-10 text-black md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" text-xl font-mono">DevlopedbyKG</h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href ="https://drive.google.com/file/d/101INpdYhzWYe4R2nrpIsoPKCEyg1C-DM/view?usp=sharing" target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-2">
            <h2 className=" text-5xl text-teal-600 font-medium md:text-6xl">
              Kunal G
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl">Full Stack Devloper</h3>
            <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
               Hey guys it me your neighbour Fronted Developer & Freelancer Kunal Gursal,
              Feel free to join me down below.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-1 text-gray-700 cursor-pointer">
            <a href="https://twitter.com/kunal_g12" target="blank">
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-gursal-4159a81b4/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/its_kunal_g/" target="blank">
              <AiFillInstagram />
            </a>
            <a href="https://github.com/kunalg12" target="blank">
              <AiFillGithub />
            </a>
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={kg} fill objectFit="cover" alt="profile_pic" />
          </div>
        </section>
        {/* Second section */}
        <section>
          <div>
            <h3 className=" text-3xl text-center py-7">Services that I offer</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 text-center">
              Since the beginning as a freelance does developer and Designer,
              I've done remote work for
              <span className=" text-teal-500"> Agencies </span>Collatbrated
              with talented people around the world
            </p>
            <p className=" text-center">
              I offer from a wide range of services, including programming and
              teaching
            </p>
          </div>
          <div className=" lg:flex gap-10">
            <div className=" flex flex-col items-center shadow-lg p-10 rounded-xl dark:bg-white hover:ease-in duration-300">
              <Image src={design} width={100} height={100} alt="design" />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2 text-center">
                Creating elegant design suited for your needs design theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Illustartor</p>
              <p className=" text-gray-800 py-1">Figma</p>
            </div>

            <div className=" flex flex-col items-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="consulting"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Great consulting
              </h3>
              <p className="py-2 text-center">
                Teaching you in best way of possible in simple manner.
              </p>
              <h4 className=" py-4 text-teal-600">Teaching lang I used</h4>
              <p className=" text-gray-800 py-1">Any fronted Framework </p>
              <p className=" text-gray-800 py-1">Javascript</p>
              <p className=" text-gray-800 py-1">html css</p>
            </div>

            <div className=" flex flex-col items-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image src={code} width={100} height={100} alt="code" />
              <h3 className=" text-lg font-medium pt-8 pb-2">Clean code</h3>
              <p className="py-2 text-center">
                Writing better code for your website and application.
              </p>
              <h4 className=" py-4 text-teal-600">Fronted Devloper</h4>
              <p className=" text-gray-800 py-1">React Js</p>
              <p className=" text-gray-800 py-1">Tailwindcss</p>
              <p className=" text-gray-800 py-1">Javascript</p>
            </div>
          </div>
        </section>

        {/* last section */}
        <section>
          <div>
            <h3 className=" text-3xl py-1">Portfolio</h3>
            <p className=" text-md py-2 leading-8 text-gray-800">
              Since the beginning as a freelance does developer and Designer,
              I've done remote work for
              <span className=" text-teal-500"> Agencies </span>Collatbrated
              with talented people around the world
            </p>
            <p>
              I offer from a wide range of services, including programming and
              teaching
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web1}
                alt="design_img"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
                alt="design_img"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
                alt="design_img"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
                alt="design_img"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web5}
                alt="design_img"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web6}
                alt="design_img"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
