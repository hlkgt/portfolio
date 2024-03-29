import React from "react"
import Link from "../components/Link"
import aboutIcon from "../assets/icon/about_icon.svg"
import downloadIcon from "../assets/icon/download_icon.svg"

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-dvh bg-primary px-4 lg:px-40 flex justify-center items-center flex-col gap-8 capitalize text-xl lg:text-6xl text-center text-secondary">
      <p>
        hi, saya <span className="font-bold">leo Marselio</span>
        <br />
        selamat datang di wesbsite saya
      </p>
      <div className="flex gap-4">
        <Link icon={aboutIcon} text={"tentang saya"} path={"#about-me"} />
        <Link
          icon={downloadIcon}
          text={"download CV"}
          isPrimary={true}
          path={"#"}
          target="blank"
        />
      </div>
    </section>
  )
}

export default Home
