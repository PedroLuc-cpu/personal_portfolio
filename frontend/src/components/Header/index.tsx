import Style from "./style.module.css"

export default function Header() {
       
       return(
              <header className={Style.header}>
                     <nav className={Style.navegation_container}>
                            <ul className={Style.nav_ul_items}>
                                   <li>Home</li>
                                   <li>Home</li>
                                   <li>Home</li>
                                   <li>Home</li>
                            </ul>
                     </nav>
              </header>
       )
}