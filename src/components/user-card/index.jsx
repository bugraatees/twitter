import { useState } from "react";
import Button from "../../components/button";

export default function UserCard({ user }) {


    const [following, setFollowing] = useState(false)

    return (
        <button className="py-3 px-4 flex gap-3 transition-colors hover:bg-white/[0.03] ">
            <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
            <div className="flex-1 max-w-full flex flex-col text-left">
                <div className="text-[15px] leading-5 font-bold flex items-center">
                    {user.fullName}
                    {user?.verified}
                </div>
                <div className="text-[15px] text-[#71767b]">@{user.username}</div>
            </div>
            <div>
                {following ? (
                    <Button
                        variant="white-outline"
                        size="small"
                        className="whitespace-nowrap group"
                        onClick={() => setFollowing(false)}
                    >
                        <div className="flex group-hover:hidden ">Takip Ediliyor</div>
                        <div className="hidden group-hover:flex">Takibi Bırak</div>
                    
                    </Button>
                ) : (
                    <Button variant="white" size="small" onClick={() => setFollowing(true)}>
                        Takip Et
                    </Button>
                )}
            </div>
        </button >
    )
}