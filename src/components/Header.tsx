import { useEffect, useState } from "react"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);    


    useEffect(() => {
        const [isScrolled, setIsScrolled] = useState(false);
        const onScroll = () => setIsScrolled(window.scrollY > 8);    
    }, []);


  return (
    <div>
        <header>Header pages</header>
    </div>
  )
}

export default Header
