
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Subscribe() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 dark:bg-zinc-100">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
          Stay Connected
        </h2>
        <p className="mx-auto max-w-[700px] text-zinc-100 md:text-lg dark:text-zinc-800">
          Subscribe to our newsletter and follow us on our social media.
        </p>
        <div className="w-full max-w-md space-y-2 my-4">
          <form className="flex space-x-2">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 text-zinc-900 bg-white" />
            <Button type="submit" variant="outline" className="text-white border-white">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="#" aria-label="Facebook page" className="text-white" prefetch={false}>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Twitter profile" className="text-white" prefetch={false}>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Instagram profile" className="text-white" prefetch={false}>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn profile" className="text-white" prefetch={false}>
            <Linkedin/>
          </Link>
        </div>
      </div>
    </section>
  )
}
