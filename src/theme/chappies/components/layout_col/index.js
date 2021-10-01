const LayoutCol = ({children,theme = "white"}) => {


    return(
       <div className={`w-auto h-auto flex-wrap items-center justify-center bg-${theme} z-20`}>
           {children}
       </div>
    )
}


export default LayoutCol;