import Image from 'next/image'
import { HeaderImgElement, HeaderTextElement } from './HeaderElements'


export default function Header() {
  return (
    <header className="flex flex-row bg-midnight w-full h-28 sticky justify-center font-primary text-2xl border-b-4 border-b-midnight">
      <HeaderImgElement imageSource=''/>
      <HeaderTextElement backgroundImage='/imgs/nav/first-nav-bg.png' text='About cape⁴labs'/>
      <HeaderImgElement imageSource='/imgs/nav/first-nav-flower.png'/>
      <HeaderTextElement backgroundImage='/imgs/nav/second-nav-bg.png' text='About'/>
      <HeaderImgElement imageSource='/imgs/nav/second-nav-flower.png'/>
      <HeaderTextElement backgroundImage='/imgs/nav/third-nav-bg.png' text='Where we can help you'/>
      <HeaderImgElement imageSource='/imgs/nav/third-nav-flower.png'/>
      <HeaderTextElement backgroundImage='/imgs/nav/fourth-nav-bg.png' text='Contact'/>
      <HeaderImgElement imageSource='/imgs/nav/fourth-nav-flower.png'/>
    </header>
  )
}
