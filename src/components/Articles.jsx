
export const Articles = ({img, number, title, text}) => {
  return (
    <article className="flex gap-x-5" >
      <img className='w-[100px] h-[130px] object-cover m-auto' src={img} alt="Imagen de seccion" />
      <div className='flex flex-col justify-between basis-3/4'>
        <p className='text-[28px] text-GrayishBlue font-bold'>{number}</p>
        <h3 className='text-[20px] font-bold text-VeryDarkBlue hover:text-SoftRed cursor-pointer'>
          {title}
        </h3>
        <p className='text-[15px] text-DarkGrayishBlue'>{text}</p>
      </div>
    </article>
  )
}
