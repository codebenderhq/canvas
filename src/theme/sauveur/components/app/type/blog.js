import {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const BlogApp = ({ children, uri ="", appState,appRoutes }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [pages, setPages] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, turnPage] = useState(0)
    const [mainIcons, setMain] = useState([])

    useEffect(() =>{
        try{
            let currentLength = 0

            if(appState !== 'sauveur'){
                children = children.filter((i) => {
                    if(appRoutes[appState].routes.includes(i.props.name)){
                        return i
                    }
                })

            }
            currentLength = children.length
            const mainPages = Math.floor(currentLength/4)
            const subPages = currentLength % 4
            const _temporaryPages = []

            if (currentLength){
                children.map((i,k) => {

                    if(i.props.type != 'main')
                    {
                        if(mainPages > 0 && k < mainPages * 4)
                        {

                            _temporaryPages.push(i)

                            if( (k+1) % 4 === 0){
                                pages.push({page:_temporaryPages})
                                setPages(pages)
                            }
                        }else{
                            // just main pages
                            pages.push({page:[i]})
                            setPages(pages)
                        }
                    }else {
                        mainIcons.push(i)
                        setMain(mainIcons)
                    }

                })
            }

            setPageCount(pages.length);

        }
        catch (e){
            console.error('current error',e.message)
        }


    },[appState])

    return (

        <Router>

            <div className={"w-screen h-screen flex lg:flex-row"}>
                <div className={`w-auto flex-grow h-full flex flex-col ${isOpen ? 'hidden lg:flex' : '' }`}>
                    <div className={"flex-grow w-full h-auto p-4"}>
                        <Routes>
                            {children.map((i, k) => {

                                if(i.props){

                                    return (<Route key={i.props.name} path={`${uri}/${i.props.name}`} elements={children[k]}/>);
                                }

                            })}
                        </Routes>

                    </div>


                    {
                        appRoutes[appState].hasMenu ?
                            <div className={'w-full flex justify-center items-center cursor-pointer py-2'}>
                                {mainIcons.length > 0 ?
                                    mainIcons.map((i,k) => {
                                        if(k < 2){
                                            return(
                                                <Link key={`Link+${i.props.name}`} to={i.props.name}>{i.props.name}</Link>
                                            )
                                        }
                                    }) : <></>
                                }
                                <div onClick={() => setIsOpen(!isOpen)} className={"lg:hidden flex-wrap"}>
                                    <div className={"flex"}>
                                        <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                                        <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                                    </div>
                                    <div className={"flex"}>
                                        <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                                        <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                                    </div>

                                </div>
                            </div>
                            :
                            <></>

                    }


                </div>

                {
                    appRoutes[appState].hasMenu  ?
                        <div  className={`w-full lg:w-1/3 h-full bg-white text-black p-2 ${!isOpen ? 'hidden lg:flex lg:flex-col': 'z-10 flex flex-col' } `}>



                            <>
                                {/*work on menu design*/}
                                <div className={'w-full flex-grow h-auto'}>

                                    {pages.length > 0 ?
                                        <nav>
                                            <ul>
                                                {
                                                    pages[currentPage].page.map((i, k) => {
                                                        if(pages[currentPage].page.length == 3){
                                                            //display four items here
                                                        }else{
                                                            if(i.props){
                                                                return(<li onClick={() => setIsOpen(!isOpen)} key={i.props.name}><Link to={i.props.name}>{i.props.name}</Link></li>)
                                                            }
                                                        }
                                                    })}
                                            </ul>

                                        </nav>
                                        :
                                        <></>

                                    }


                                </div>

                                {pages.length > 0 ?
                                    <div onClick={() => turnPage(currentPage < (pageCount - 1) ? currentPage + 1: 0)} className={'w-full flex items-center justify-center text-current z-10 cursor-pointer'}>
                                        <span>{currentPage}</span>view more<span>{pageCount - 1}</span>
                                    </div> : <></>
                                }



                                <div className={'w-full flex justify-center items-center cursor-pointer'}>



                                    <div onClick={() => setIsOpen(!isOpen)} className={"lg:hidden flex-wrap"}>
                                        <div className={"flex"}>
                                            <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                                            <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                                        </div>
                                        <div className={"flex"}>
                                            <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                                            <div className={"w-3 h-3 rounded-full bg-current m-1"}></div>
                                        </div>

                                    </div>

                                </div>
                            </>






                        </div>
                        :
                        <></>
                }
            </div>


        </Router>

    );
};

export default BlogApp;
