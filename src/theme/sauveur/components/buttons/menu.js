

const MenuButton = ({uri}) => {

    return(
        <a href={uri} className={"lg:hidden flex-wrap"}>
            <div className={"flex"}>
                <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
            </div>
            <div className={"flex"}>
                <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
            </div>

        </a>
    )
}

export default MenuButton;