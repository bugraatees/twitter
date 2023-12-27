import Footer from "./footer";
import Premium from "./premium/index";
import Search from "./search/index";
import Topics from "./topics/index";
import WhoFollow from "./who-follow";

export default function RightBar (){
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
            <WhoFollow />
            <Footer />
        </aside>
    )
}