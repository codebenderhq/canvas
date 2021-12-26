import AppLayout from "./_app";
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const App = ({children, uri = "", appState, appRoutes}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [mainIcons, setMain] = useState([])

    // useEffect(() =>{
    //     try{
    //
    //         if(children && children.length > 0){
    //             children.map((i,k) => {
    //
    //                 if (i.props.type == 'main') {
    //                     mainIcons.push(i)
    //                     setMain(mainIcons)
    //                 }
    //             })
    //         }
    //     }
    //     catch (e){
    //         console.error('current error',e.message)
    //     }
    //
    //
    // },[appState])

    return (

        <Router>

            <div className={"w-screen h-full flex lg:flex-row bg-black"}>
                <div className={`w-auto flex-grow h-full flex flex-col ${isOpen ? 'hidden lg:flex' : ''}`}>
                    <div className={"flex-grow w-full h-auto p-4"}>
                        {children && children.length > 0 ?
                            <Routes>

                                {/*<Route path={':domain'} element={<></>}/>*/}
                                {children.map((i, k) => {

                                    if (i.props) {

                                        return (<Route key={i.props.name} path={`${uri}/${i.props.name}`}
                                                       element={children[k]}/>);
                                    }

                                })}

                            </Routes> : children}

                    </div>

                    <div className={'w-full flex justify-center items-center cursor-pointer py-2'}>
                        {children && children.length > 0 ?
                            children.map((i, k) => {
                                if (i.props.name != appState && i.props.type === "main") {
                                    if (i.props.icon && i.props.name) {
                                        return (
                                            <Link key={`Link+${i.props.name}+${k}`} to={i.props.name}>
                                                <img src={i.props.icon}/>
                                            </Link>)
                                    } else {
                                        return (
                                            <Link key={`Link+${i.props.name}`} to={i.props.name}>{i.props.name}</Link>
                                        )
                                    }

                                }
                            }) : <></>
                        }

                    </div>


                </div>

            </div>


        </Router>

    );
};

export default App;
