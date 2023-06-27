import { ContainerArticles } from "./components/ContainerArticles"
import { ContainerNew } from "./components/ContainerNew"
import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"

function App() {

  return (
    <main className="px-4 pt-6 sm:pt-20 lg:w-[1200px] lg:m-auto overflow-hidden relative w-full">
      <Header />

      <div className="lg:flex lg:justify-between lg:h-[550px] z-10">
        <MainArticle />
        <ContainerNew />
      </div>
      
      <ContainerArticles />
    </main>
  )
}

export default App
