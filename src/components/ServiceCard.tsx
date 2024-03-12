import { IServiceCardProps } from "../interface"

export const ServiceCard = ({title, description, Icon}: IServiceCardProps) => {
  return (
    <div className="p-8 transition-transform duration-500 shadow bg-base-200/50 xl:w-96 hover:scale-[103%]">
    <Icon className="text-5xl fill-primary" />
    <div className="flex flex-col gap-2 pt-4">
    <h2 className="w-2/3 text-lg uppercase font-marlinge">{title}</h2>
    <p className="font-thin text-white/70">{description}</p>
    </div>
    </div>
  )
}