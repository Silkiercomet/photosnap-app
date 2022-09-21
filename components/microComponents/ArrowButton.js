import Image from "next/image"
function ArrowButton({isBlack = true, text = "placeholder"}) {
  return (
    <button className={isBlack ? "black" : "white"}>{text} {isBlack 
        ? <i><Image src="/images/arrow-black.svg" alt="black arrow" height={9} width={42} /></i>
        : <i><Image src="/images/arrow-white.svg" alt="white arrow" height={9} width={42} /></i>}</button>
  )
}

export default ArrowButton