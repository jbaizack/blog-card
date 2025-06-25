import { IoArrowForward } from "react-icons/io5";

type CardInfo = {
  coverImageLink?: string, 
  category: string, 
  title: string, 
  description: string, 
  CTALink: string
}; 

type Props = {
  info: CardInfo
}; 

export default function Card({info}: Props) {
  const {coverImageLink, category, title, description, CTALink} = info; 

  return (
    <div className="container">
      <img src={coverImageLink} />
      <div className="flex flex-col gap-3 px-4 py-6">
        <div className="flex flex-col gap-2">
          <div className="w-fit bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200">
            <span className="font-normal text-sm text-center text-green-700">{category}</span>
          </div>
          <div className="font-semibold text-lg text-neutral-900">{title}</div>
        </div>
        <div className="flex flex-col gap-6 self-stretch">
          <div className="font-medium text-base text-neutral-600">{description}</div>
          <div className="flex justify-left items-center gap-1.5 rounded">
            <div className="flex justify-center items-center px-0.5">
              <a href={CTALink} className="flex items-center font-medium text-base text-indigo-700 gap-2">Read more<IoArrowForward /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}