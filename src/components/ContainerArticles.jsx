import { Articles } from "./Articles"
import ImagePC from '../assets/images/image-retro-pcs.jpg'
import ImageKeyboard from '../assets/images/image-top-laptops.jpg'
import ImageGaming from '../assets/images/image-gaming-growth.jpg'

export const ContainerArticles = () => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 my-20 gap-6 grid-cols-1">
      <Articles
        img={ImagePC} 
        number={"01"}
        title={"Reviving Retro PCs"}
        text={"What happens when old PCs are given modern upgrades?"}
      />
      <Articles
        img={ImageKeyboard} 
        number={"02"}
        title={"Top 10 Laptops of 2022"}
        text={"Our best picks for various needs and budgets."}
      />
      <Articles
        img={ImageGaming} 
        number={"03"}
        title={"The Growth of Gaming"}
        text={"How the pandemic has sparked fresh opportunities."}
      />
    </section>
  )
}


