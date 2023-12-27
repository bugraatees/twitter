import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";
import ForYou from "./for-you";

export default function Home() {
    return (
        <>
            <StickyHeader title="Anasayfa" />
            <Tab activeTab="for-you">
                <Tab.Items>
                    <Tab.Item id="for-you">
                        Sana Özel
                    </Tab.Item>
                    <Tab.Item id="followings">
                        Takip Edilenler
                    </Tab.Item>
                </Tab.Items>

                <Tab.Content id="for-you">
                <ForYou /> 
                </Tab.Content>
                <Tab.Content id="followings">
                    2.content
                </Tab.Content>
            </Tab >
        </>
    )
}