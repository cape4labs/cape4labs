import Image from "next/image"

interface headerTextElement {
    backgroundImage: string
    text: string
}

interface headerImgElement {
    imageSource?: string
}

export function HeaderTextElement({
    backgroundImage,
    text,
}: headerTextElement) {
    const getLines = (text: string): string[] => {
        const lowerText = text.toLowerCase()

        if (
            lowerText.includes("cape4labs") ||
            lowerText.includes("cape⁴labs")
        ) {
            return ["About", "cape⁴labs"]
        }
        if (lowerText === "about") {
            return ["About"]
        }
        if (lowerText.includes("where we can help you")) {
            return ["Where we can", "help you"]
        }
        if (lowerText === "contact") {
            return ["Contact"]
        }

        return [text]
    }

    const lines = getLines(text)

    return (
        <div
            className="relative h-full flex items-center justify-center overflow-hidden
        sm:w-1/2
        md:w-1/3
        lg:w-1/4
        xl:w-1/5
    "
        >
            <Image
                src={backgroundImage}
                alt="decorative flower background"
                fill
                className="object-cover absolute inset-0 z-0"
                unoptimized
            />

            <div
                className="relative z-10 
        sm:px-2
        md:px-2
        lg:px-2
        xl:px-4
        "
            >
                {lines.map((line, index) => (
                    <h2
                        key={index}
                        className={`text-white text-start 
              sm:text-xl   
              md:text-xl   
              lg:text-2xl  
              xl:text-3xl   
            }`}
                    >
                        {line}
                    </h2>
                ))}
            </div>
        </div>
    )
}

export function HeaderImgElement({ imageSource }: headerImgElement) {
    return (
        <div className="flex items-center justify-center bg-white text-midnight ">
            {!imageSource ? (
                <h1
                    className=" font-bold  text-start
                sm:text-2xl 
                md:text-4xl 
                lg:text-4xl 
                "
                >
                    Cape⁴
                    <br />
                    labs
                </h1>
            ) : (
                <Image
                    src={imageSource}
                    alt="flower"
                    width={100}
                    height={100}
                    className="h-full w-full"
                    quality={100}
                />
            )}
        </div>
    )
}
