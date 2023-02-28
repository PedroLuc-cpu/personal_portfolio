import Style from "./style.module.css"


export default function Main(){
       return(
              <main className={Style.main_container}>
                     <section className={Style.Section_first}>
                                   <h1 className={Style.h1}>Pedro</h1>
                                   <img style={{height:"650px"}} src="https://images.pexels.com/photos/15326426/pexels-photo-15326426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                     </section>
                     <section className={Style.article_paragraph_children}>
                           <article className={Style.article_children}>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat vel reprehenderit dolore impedit modi consectetur tempora repellendus iusto doloremque ipsum sed optio exercitationem debitis voluptates inventore amet, quia nihil.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat vel reprehenderit dolore impedit modi consectetur tempora repellendus iusto doloremque ipsum sed optio exercitationem debitis voluptates inventore amet, quia nihil.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat vel reprehenderit dolore impedit modi consectetur tempora repellendus iusto doloremque ipsum sed optio exercitationem debitis voluptates inventore amet, quia nihil.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat vel reprehenderit dolore impedit modi consectetur tempora repellendus iusto doloremque ipsum sed optio exercitationem debitis voluptates inventore amet, quia nihil.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat vel reprehenderit dolore impedit modi consectetur tempora repellendus iusto doloremque ipsum sed optio exercitationem debitis voluptates inventore amet, quia nihil.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat vel reprehenderit dolore impedit modi consectetur tempora repellendus iusto doloremque ipsum sed optio exercitationem debitis voluptates inventore amet, quia nihil.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat vel reprehenderit dolore impedit modi consectetur tempora repellendus iusto doloremque ipsum sed optio exercitationem debitis voluptates inventore amet, quia nihil.</p>
                           </article>

                     </section>
              </main>
       )
}