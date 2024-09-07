"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import facebook from "./../../public/facebook.png"
import gmail from "./../../public/gmail.png"
import discord from "./../../public/discord.png"
import Image from "next/image"
import { Dock, DockIcon } from "@/components/magicui/dock";

const Contact = () => {
  return (
    <section className="container grid md:grid md:grid-cols-2 gap-10" id="contact">
      <div>
        <h2 className="text-xl font-bold mb-5">Contact us</h2>
        <p className="mb-3">If you have any questions feel free to reach out to us. Fill the form to send your query or get in touch with us through the following platforms.</p>
        <Dock magnification={60} distance={100}>
          <DockIcon>
            <a href="" target="_blank">
              <Image
                src={facebook}
                alt="facebook icon"
                width={32}
              />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="" target="_blank">
              <Image
                src={gmail}
                alt="gmail icon"
                width={32}
              />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="" target="_blank">
              <Image
                src={discord}
                alt="discord icon"
                width={32}
              />
            </a>
          </DockIcon>
        </Dock>
      </div>
     
      <Card className="bg-neutral-900">
        <CardHeader></CardHeader>
        <CardContent>
          <form action="" method="POST" target="_blank">
            <div className="flex flex-col gap-3 mb-5">
              <Label htmlFor="Fullname" className="text-neutral-200">Full name <span className="text-red-500">*</span></Label>
              <Input type="text" name="Fullname" id="Fullname" placeholder="Juan Dela Cruz" required />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Label htmlFor="Email" className="text-neutral-200">Email address <span className="text-red-500">*</span></Label>
              <Input type="email" name="Email" id="Email" placeholder="example@mail.com" required />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Label htmlFor="Organization" className="text-neutral-200">Company / Organization</Label>
              <Input type="text" name="Organization" id="Organization" placeholder="(Optional)" />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Label htmlFor="Message" className="text-neutral-200">Message <span className="text-red-500">*</span></Label>
              <Textarea name="Message" id="Message" rows={5} placeholder="Send us a message!" className="resize-none " />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-neutral-100 hover:bg-purple-700 hover:text-neutral-100 focus:bg-neutral-100 active:bg-neutral-100 text-neutral-800">Submit message</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="">
        
      </div>
    </section>
  )
}

export default Contact