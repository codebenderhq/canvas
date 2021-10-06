const LayoutCol = ({children,theme = "white"}) => {


    return(
       <div className={`w-full h-auto flex flex-wrap items-center justify-center bg-${theme} z-20  z-20`}>
           {children}
       </div>
    )
}


export default LayoutCol;