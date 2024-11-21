import { MenuIcon, User } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Props = {}

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center">
        <div className="text-3xl font-semibold flex items-center gap-x-4">
            <MenuIcon size={24}/>
            <Image alt="logo" src="/image.svg" width={40} height={40} />
            Video Sharing
        </div>
        <div className="hidden gap-x-10 items-center lg:flex">
            <Link href="/" className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80 transition-all duration-150">
                Home
            </Link>
            <Link href="/">Preços</Link>
            <Link href="/">Contato</Link>
        </div>
        <Link href="/auth/login">
            <Button className="text-base flex gap-x-2">
                <User fill="#000"/>
                Login
            </Button>
        </Link>
    </div>
  )
}

export default LandingPageNavBar