"use client"

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { 
  ShieldIcon,
  ChartNoAxesCombinedIcon,
  NetworkIcon,
  CpuIcon,
  SquareCodeIcon
 } from 'lucide-react'

const features = [
  {
    Icon: ShieldIcon,
    name: "Cybersecurity",
    description: "Eiusmod laboris fugiat minim cillum anim labore magna ipsum eiusmod laboris amet.",
    href: "/",
    cta: "Learn more",
    background: <img />,
    className: "md:col-auto"
  },
  {
    Icon: ChartNoAxesCombinedIcon,
    name: "IoT and Data analytics",
    description: "Eiusmod laboris fugiat minim cillum anim labore magna ipsum eiusmod laboris amet.",
    href: "/",
    cta: "Learn more",
    background: <img />,
    className: "md:col-auto"
  },
  {
    Icon: NetworkIcon,
    name: "Networking",
    description: "Eiusmod laboris fugiat minim cillum anim labore magna ipsum eiusmod laboris amet.",
    href: "/",
    cta: "Learn more",
    background: <img />,
    className: "md:col-auto"
  },
  {
    Icon: CpuIcon,
    name: "OS and IT",
    description: "Eiusmod laboris fugiat minim cillum anim labore magna ipsum eiusmod laboris amet.",
    href: "/",
    cta: "Learn more",
    background: <img />,
    className: "md:col-auto"
  },
  {
    Icon: SquareCodeIcon,
    name: "Python",
    description: "Eiusmod laboris fugiat minim cillum anim labore magna ipsum eiusmod laboris amet.",
    href: "/",
    cta: "Learn more",
    background: <img />,
    className: "md:col-auto"
  }
]

const Department = () => {
  
  return (
    <section className="my-10 container" id="department">
      <h2 className="text-xl font-bold mb-5">Departments</h2>
      <BentoGrid className="md:grid md:grid-cols-3">
        {
          features.map((feature) => {
            return (
              <BentoCard
                key={feature.name}
                {...feature}
              />
            )
          })
        }
      </BentoGrid>
      

    </section>
  )
}

export default Department