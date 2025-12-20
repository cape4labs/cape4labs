import { HeaderImgElement, HeaderTextElement } from './HeaderElements'


export default function Header() {
  return (
    <header className="flex flex-row bg-midnight w-full h-28 sticky justify-center font-primary">
      <HeaderImgElement imageSource='' />
      <HeaderTextElement backgroundImage='/img/nav/first-nav-bg.png' text='About cape⁴labs' />
      <HeaderImgElement imageSource='/img/nav/first-nav-flower.png' />
      <HeaderTextElement backgroundImage='/img/nav/second-nav-bg.png' text='About' />
      <HeaderImgElement imageSource='/img/nav/second-nav-flower.png' />
      <HeaderTextElement backgroundImage='/img/nav/third-nav-bg.png' text='Where we can help you' />
      <HeaderImgElement imageSource='/img/nav/third-nav-flower.png' />
      <HeaderTextElement backgroundImage='/img/nav/fourth-nav-bg.png' text='Contact' />
      <HeaderImgElement imageSource='/img/nav/fourth-nav-flower.png' />
    </header>
  )
}
