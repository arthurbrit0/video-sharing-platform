import { MenuIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

type Props = {}

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center">
        <div className="text-red-400 text-3xl font-semibold flex items-center gap-x-4">
            <MenuIcon size={24}/>
            <Image alt="logo" src="/image.svg" width={40} height={40} />
            Video Sharing
        </div>
    </div>
  )
}

export default LandingPageNavBar