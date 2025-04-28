import { Check } from "lucide-react"
import Image, { StaticImageData } from "next/image"

interface ExpertProfileProps {
    name: string
    title: string
    description: string
    qualifications: string[]
    imageSrc: StaticImageData
    specialty: string
    color: "rose" | "fuchsia" | "purple"
}

export function ExpertProfile({
    name,
    title,
    description,
    qualifications,
    imageSrc,
    specialty,
    color = "rose",
}: ExpertProfileProps) {
    const getGradient = (color: string) => {
        switch (color) {
            case "rose":
                return "from-rose-500 to-rose-600"
            case "fuchsia":
                return "from-fuchsia-500 to-fuchsia-600"
            case "purple":
                return "from-purple-500 to-purple-600"
            default:
                return "from-rose-500 to-purple-600"
        }
    }

    const getBgColor = (color: string) => {
        switch (color) {
            case "rose":
                return "bg-rose-50 border-rose-600/20 text-rose-600"
            case "fuchsia":
                return "bg-fuchsia-50 border-fuchsia-600/20 text-fuchsia-600"
            case "purple":
                return "bg-purple-50 border-purple-600/20 text-purple-600"
            default:
                return "bg-rose-50 border-rose-600/20 text-rose-600"
        }
    }

    const getCheckColor = (color: string) => {
        switch (color) {
            case "rose":
                return "text-rose-500"
            case "fuchsia":
                return "text-fuchsia-500"
            case "purple":
                return "text-purple-500"
            default:
                return "text-rose-500"
        }
    }

    return (
        <div className="flex flex-col lg:flex-row-reverse  mx-auto gap-x-48 gap-y-10 mt-32 items-center justify-center lg:items-start w-full  ">
            <div className="relative h-64 flex-shrink-0  ">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getGradient(color)} opacity-10 blur-lg`} />
                <div className="relative overflow-hidden rounded-full border-2 border-white shadow-lg">
                    <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={name}
                        width={256}
                        height={256}
                        className="h-64 w-64 object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center lg:items-start h-full justify-end">
                <div
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium shadow-sm mb-2 ${getBgColor(color)}`}
                >
                    <span className="mr-1">✨</span> {specialty}
                </div>

                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <p className="text-lg font-medium text-muted-foreground mb-4">{title}</p>

                <p className="text-muted-foreground mb-8 text-center lg:text-left max-w-xl">{description}</p>
                <ul className="space-y-2 mt-auto">
                    {qualifications.map((qualification, index) => (
                        <li key={index} className="flex items-center">
                            <Check className={`mr-2 h-5 w-5 ${getCheckColor(color)}`} />
                            <span>{qualification}</span>
                        </li>
                    ))}
                </ul>
              
            </div>
        
        </div>
    )
}
