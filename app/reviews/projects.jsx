import values from "./values.json";
export default function Projects() {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-4 px-4
      py-10 text-center text-green-100
      md:gap-5 md:px-5 md:py-6
      xl:gap-56 xl:px-20 xl:py-36
      `}
    >
      {values.map((item) => (
        <div className="flex flex-col py-20" key={item.value}>
          <div
            className={`flex flex-col items-center py-10 text-xl 
            font-bold 
            md:text-2xl
            xl:text-5xl
            `}
          >
            <p
              className={` mb-5 flex h-8 w-8 items-center
            justify-center rounded-none bg-red-500
            md:mb-5 md:h-12 md:w-12
            xl:mb-20 xl:h-32 xl:w-32
            `}
            >
              {item.value}
            </p>
            <p className="py-1">{item.title}</p>
          </div>
          <p
            className={`
            text-xs 
            md:text-lg 
            xl:text-2xl
            `}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
