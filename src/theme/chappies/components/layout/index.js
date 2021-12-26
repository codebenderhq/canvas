import '../../style/index.css'

const Layout = ({children,theme = "white"}) => {


    return(
       <div className={`w-screen h-screen flex items-center justify-center bg-${theme} z-20`}>
           {children}
       </div>
    )
}


export default Layout;