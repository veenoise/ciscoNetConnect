"use client"

import teamImage from "./../../public/team_image.png"
import Image from "next/image"

const About = () => {
  return (
    <section className="container h-[70vh] my-10" id="about">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-5">About us</h2>
          <p>Reprehenderit ad labore eiusmod fugiat. Adipisicing exercitation ipsum ipsum dolor. Consectetur eu enim eu eu cillum. Laborum sunt culpa aliqua cillum magna excepteur pariatur do non deserunt commodo do amet.</p>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src={teamImage}
            alt="the animated picture of the team"
          />
        </div>
      </div>
      
    </section>
  )
}

export default About