import { ChevronDown, Heart, Menu, Search, ShoppingCart, User2Icon } from "lucide-react"


function Navbar() {
    return (
        <>

            <div className="hidden md:flex bg-white h-[100px] items-center">

                <div className="flex items-center text-3xl font-bold left-[10%] px-10 gap">
                    Bandage
                </div>

                <div className="flex items-center gap-6 ml-20">

                    <a>Home</a>
                    <a>Shop</a><ChevronDown />
                    <a>About</a>
                    <a>Contact</a>
                    <a>Pages</a>
                </div>


                <div className="flex items-center gap-5 text-cyan-500 right-[10%] px-10 ml-auto">
                    <div className="flex items-center gap-1 font-bold">
                        <User2Icon />
                        <a href="#">login</a>
                        /
                        <a href="#">Register</a>
                    </div>

                    <Search />
                    <ShoppingCart />
                    <Heart />
                </div>

            </div>



            <div className="flex md:hidden flex-col items-center px-6 h-[460px]">

                <div className="w-full flex items-center justify-between pt-6">

                    <div className="text-2xl font-bold">
                        Bandage
                    </div>

                    <div className="flex items-center gap-3">
                        <Search />
                        <ShoppingCart />
                        <Menu />
                    </div>

                </div>


                <div className="mt-16 flex flex-col items-center justify-between gap-8">
                    <a className="text-2xl text-[#737373]">Home</a>
                    <a className="text-2xl text-[#737373]">Product</a>
                    <a className="text-2xl text-[#737373]">Pricing</a>
                    <a className="text-2xl text-[#737373]">Contact</a>
                </div>


            </div>




        </>
    )
}

export default Navbar
