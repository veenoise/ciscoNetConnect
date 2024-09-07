"use client"

import { MagicCard } from "@/components/magicui/magic-card";

const MissionVision = () => {

  return (
    <section className="bg-neutral-900 py-10 md:py-24 my-10" id="missionVision">
      <div className="cursor-pointer grid md:grid-cols-2 gap-5 justify-center container">
        <MagicCard
          className="border-none bg-stone-100 p-5 max-w-96 md:ml-auto"
          gradientColor="#b3b6b7"
        >
          <h3 className="text-xl text-center mb-2 font-semibold">Mission</h3>
          <p className="text-center">Ut adipisicing magna non pariatur eu adipisicing adipisicing ut occaecat et commodo veniam ipsum aliquip. Voluptate sint esse sunt veniam eiusmod. Cupidatat ex aliqua et eu sunt est commodo eiusmod. Laborum pariatur mollit ea do aliqua commodo. Id et ad fugiat id laboris nulla dolore magna voluptate.</p>
        </MagicCard>
        <MagicCard
          className="border-none bg-stone-100 p-5 max-w-96 md:mr-auto"
          gradientColor="#b3b6b7"
        >
          <h3 className="text-xl text-center mb-2 font-semibold">Vision</h3>
          <p className="text-center">Ut adipisicing magna non pariatur eu adipisicing adipisicing ut occaecat et commodo veniam ipsum aliquip. Voluptate sint esse sunt veniam eiusmod. Cupidatat ex aliqua et eu sunt est commodo eiusmod. Lgiat id laboris nulla dolore magna voluptate.</p>
        </MagicCard>
      </div> 
    </section>
    
  )
}

export default MissionVision;