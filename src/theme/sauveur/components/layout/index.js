

const Structure = ({children,theme="black"}) => {

    return (
        <div className={`w-full h-screen flex flex-col-reverse lg:flex-col bg-${theme}`}>{children}</div>
    )

}

export default Structure;