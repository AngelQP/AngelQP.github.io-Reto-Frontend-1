
export const NewArticle = ({title, text}) => {
  return (
    <article className="border-b-2 border-GrayishBlue md:pb-6 lg:pb-6 mt-6 pb-6 last:border-none">
      <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold">{title}</h2>
      <p className="text-[15px] text-GrayishBlue leading-6">{text}</p>
    </article>
  )
}


  


