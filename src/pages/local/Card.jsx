import { url } from "inspector";
import Image from "next/image";

export default function Card(){
    return(
        <div className=" w-[350px] overflow-hidden rounded-xl border-2 group ">
            <div className=" overflow-hidden w-full h-[300px] relative " >
             <Image
              src={'https://media.istockphoto.com/id/487175846/photo/delivery-man-unloading-truck.webp?a=1&b=1&s=612x612&w=0&k=20&c=OkcEhNbpV0w9JPTgNqCkJ_IZx5fXnqktOdbOsffF3Es='}
              width={500}
              height={400}
              alt="Mission image two"
              className=" w-full z-0 h-full object-cover hover:scale-[1.03] theme-transition-6 object-center "
            />
            <p className=" absolute top-1/2 left-1/2 bg-[var(--primary)]/60 ">lorem</p>
            <div className=" z-10 absolute transform translate-y-full group-hover:translate-y-0  left-0  duration-1000 ease-in-out bottom-0  bg-gradient-to-t from-0% from-black-4/70 via-50% via-black-4/30 text-white-1 to-black-4/1 ">
                <p className=" text-center  ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum provident harum earum!</p>
            </div>
            </div>
            
        </div>
    )
}