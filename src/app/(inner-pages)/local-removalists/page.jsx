import Banner from '@/components/ui/banner'
import Animations from '@/components/animations/Animations'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import AboutLocal from "@/pages/local/AboutLocal"
import LocalType from "@/pages/local/LocalTypes"
import Card from "@/pages/local/Card"


export default function local(){
    return(
        <>
        <Banner imgpath={'/img/banner-img/local.webp'} pagename="Local removalists" />
        <Breadcrumbs pageLink='/local-removalists' pageName='Local removalists' />
       <AboutLocal/>
       <Card/>
       <LocalType/>
        <Animations/>
        
        </>
    )
}