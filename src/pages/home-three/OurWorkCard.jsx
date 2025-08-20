import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function OurWorkCard({iconname:Icon,step,text,heading,className}){
    return(
        <div className={cn("work border-2  w-[20rem] spx24px spy24px  place-items-center group max-md:mt-8 ",className)}>
            <div className="icon-box  border border-red-400  rounded-full w-[70%] aspect-square bg-prim text-white-1 place-items-center relative ">< Icon className=" size-25  " />
            
            <h6 className="h3  bg-white-1 text-black-1 w-[30%] aspect-square  flex items-center  justify-center rounded-full  absolute -bottom-8 " >{step}</h6>
            </div>
            <div className=" content mt-10 text-center ">
                <SectionSubTitle
                text={heading}
                
                />
                <SectionText
                text={text}
                />
            </div>

        </div>

    )
}