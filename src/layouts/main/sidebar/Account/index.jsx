import { Popover, Transition } from "@headlessui/react"
import { useAccount } from "../../../../store/auth/hooks"
import More from "./more"

export default function Account() {

    const account = useAccount()


    return (
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button
                    className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center transition-color outline-none"
                >
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 text-[15px] font-bold">
                        <h6 className="font-bold leading-[20px]">{account.fullname}</h6>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                </Popover.Button>
                <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <Popover.Panel className="absolute bottom-[80px] w-[300px] -translate-y-2 overflow-hidden py-3 left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl">
                        {({close}) => (
                        <More close= {close} />
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}