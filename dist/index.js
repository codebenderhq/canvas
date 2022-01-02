require("./index.css");
var $cMI0G$reactjsxruntime = require("react/jsx-runtime");
var $cMI0G$react = require("react");
var $cMI0G$reactrouterdom = require("react-router-dom");
var $cMI0G$reactdom = require("react-dom");
var $cMI0G$faunadb = require("faunadb");
var $cMI0G$jstemporalpolyfill = require("@js-temporal/polyfill");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Sauveur", () => $45151204656f70f4$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Chappies", () => $5f265d9b4ec838b4$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Services", () => $e2dd7711505ea4d7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "API", () => $302fbcedec8ad5f4$export$2e2bcd8739ae039);

const $d973d9c7f46c0c79$var$splash = ({ theme: theme = "black"  })=>{
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
        className: `w-screen h-screen bg-${theme}`
    }));
};
var $d973d9c7f46c0c79$export$2e2bcd8739ae039 = $d973d9c7f46c0c79$var$splash;




const $7033e948c28f244a$var$AppLayout = ({ children: children  })=>{
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactjsxruntime.Fragment, {
        children: children
    }));
};
var $7033e948c28f244a$export$2e2bcd8739ae039 = $7033e948c28f244a$var$AppLayout;




const $3bf0a1c31d77ad43$var$App = ({ children: children , uri: uri = "" , appState: appState , appRoutes: appRoutes  })=>{
    const [isOpen, setIsOpen] = $cMI0G$react.useState(false);
    const [mainIcons, setMain] = $cMI0G$react.useState([]);
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
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.BrowserRouter, {
        children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
            className: "w-screen h-full flex lg:flex-row bg-black",
            children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                className: `w-auto flex-grow h-full flex flex-col ${isOpen ? 'hidden lg:flex' : ''}`,
                children: [
                    /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                        className: "flex-grow w-full h-auto p-4",
                        children: children && children.length > 0 ? /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.Routes, {
                            children: children.map((i, k)=>{
                                if (i.props) return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.Route, {
                                    path: `${uri}/${i.props.name}`,
                                    element: children[k]
                                }, i.props.name));
                            })
                        }) : children
                    }),
                    /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                        className: 'w-full flex justify-center items-center cursor-pointer py-2',
                        children: children && children.length > 0 ? children.map((i, k)=>{
                            if (i.props.name != appState && i.props.type === "main") {
                                if (i.props.icon && i.props.name) return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.Link, {
                                    to: i.props.name,
                                    children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("img", {
                                        src: i.props.icon
                                    })
                                }, `Link+${i.props.name}+${k}`));
                                else return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.Link, {
                                    to: i.props.name,
                                    children: i.props.name
                                }, `Link+${i.props.name}`));
                            }
                        }) : /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactjsxruntime.Fragment, {
                        })
                    })
                ]
            })
        })
    }));
};
var $3bf0a1c31d77ad43$export$2e2bcd8739ae039 = $3bf0a1c31d77ad43$var$App;





const $a6358de6ad836a4e$var$BlogApp = ({ children: children , uri: uri = "" , appState: appState , appRoutes: appRoutes  })=>{
    const [isOpen, setIsOpen] = $cMI0G$react.useState(false);
    const [pages, setPages] = $cMI0G$react.useState([]);
    const [pageCount, setPageCount] = $cMI0G$react.useState(0);
    const [currentPage, turnPage] = $cMI0G$react.useState(0);
    const [mainIcons, setMain] = $cMI0G$react.useState([]);
    $cMI0G$react.useEffect(()=>{
        try {
            let currentLength = 0;
            if (appState !== 'sauveur') children = children.filter((i)=>{
                if (appRoutes[appState].routes.includes(i.props.name)) return i;
            });
            currentLength = children.length;
            const mainPages = Math.floor(currentLength / 4);
            const subPages = currentLength % 4;
            const _temporaryPages = [];
            if (currentLength) children.map((i, k)=>{
                if (i.props.type != 'main') {
                    if (mainPages > 0 && k < mainPages * 4) {
                        _temporaryPages.push(i);
                        if ((k + 1) % 4 === 0) {
                            pages.push({
                                page: _temporaryPages
                            });
                            setPages(pages);
                        }
                    } else {
                        // just main pages
                        pages.push({
                            page: [
                                i
                            ]
                        });
                        setPages(pages);
                    }
                } else {
                    mainIcons.push(i);
                    setMain(mainIcons);
                }
            });
            setPageCount(pages.length);
        } catch (e) {
            console.error('current error', e.message);
        }
    }, [
        appState
    ]);
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.BrowserRouter, {
        children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
            className: "w-screen h-screen flex lg:flex-row",
            children: [
                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                    className: `w-auto flex-grow h-full flex flex-col ${isOpen ? 'hidden lg:flex' : ''}`,
                    children: [
                        /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                            className: "flex-grow w-full h-auto p-4",
                            children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.Routes, {
                                children: children.map((i, k)=>{
                                    if (i.props) return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.Route, {
                                        path: `${uri}/${i.props.name}`,
                                        elements: children[k]
                                    }, i.props.name));
                                })
                            })
                        }),
                        appRoutes[appState].hasMenu ? /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                            className: 'w-full flex justify-center items-center cursor-pointer py-2',
                            children: [
                                mainIcons.length > 0 ? mainIcons.map((i, k)=>{
                                    if (k < 2) return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.Link, {
                                        to: i.props.name,
                                        children: i.props.name
                                    }, `Link+${i.props.name}`));
                                }) : /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactjsxruntime.Fragment, {
                                }),
                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                                    onClick: ()=>setIsOpen(!isOpen)
                                    ,
                                    className: "lg:hidden flex-wrap",
                                    children: [
                                        /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full bg-current m-1"
                                                }),
                                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full bg-current m-1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full bg-current m-1"
                                                }),
                                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full bg-current m-1"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactjsxruntime.Fragment, {
                        })
                    ]
                }),
                appRoutes[appState].hasMenu ? /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                    className: `w-full lg:w-1/3 h-full bg-white text-black p-2 ${!isOpen ? 'hidden lg:flex lg:flex-col' : 'z-10 flex flex-col'} `,
                    children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs($cMI0G$reactjsxruntime.Fragment, {
                        children: [
                            /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                className: 'w-full flex-grow h-auto',
                                children: pages.length > 0 ? /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("nav", {
                                    children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("ul", {
                                        children: pages[currentPage].page.map((i, k)=>{
                                            if (pages[currentPage].page.length == 3) ;
                                            else {
                                                if (i.props) return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("li", {
                                                    onClick: ()=>setIsOpen(!isOpen)
                                                    ,
                                                    children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactrouterdom.Link, {
                                                        to: i.props.name,
                                                        children: i.props.name
                                                    })
                                                }, i.props.name));
                                            }
                                        })
                                    })
                                }) : /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactjsxruntime.Fragment, {
                                })
                            }),
                            pages.length > 0 ? /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                                onClick: ()=>turnPage(currentPage < pageCount - 1 ? currentPage + 1 : 0)
                                ,
                                className: 'w-full flex items-center justify-center text-current z-10 cursor-pointer',
                                children: [
                                    /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("span", {
                                        children: currentPage
                                    }),
                                    "view more",
                                    /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("span", {
                                        children: pageCount - 1
                                    })
                                ]
                            }) : /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactjsxruntime.Fragment, {
                            }),
                            /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                className: 'w-full flex justify-center items-center cursor-pointer',
                                children: /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                                    onClick: ()=>setIsOpen(!isOpen)
                                    ,
                                    className: "lg:hidden flex-wrap",
                                    children: [
                                        /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full bg-current m-1"
                                                }),
                                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full bg-current m-1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full bg-current m-1"
                                                }),
                                                /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full bg-current m-1"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx($cMI0G$reactjsxruntime.Fragment, {
                })
            ]
        })
    }));
};
var $a6358de6ad836a4e$export$2e2bcd8739ae039 = $a6358de6ad836a4e$var$BlogApp;




const $11945e52994c1fbb$var$app = (El)=>{
    ($parcel$interopDefault($cMI0G$reactdom)).render(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx(El, {
    }), document.getElementById("app"));
};
var $11945e52994c1fbb$export$2e2bcd8739ae039 = $11945e52994c1fbb$var$app;



const $61963034d60846f3$var$Structure = ({ children: children , theme: theme = "black"  })=>{
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
        className: `w-full h-screen flex flex-col-reverse lg:flex-col bg-${theme}`,
        children: children
    }));
};
var $61963034d60846f3$export$2e2bcd8739ae039 = $61963034d60846f3$var$Structure;



const $2009048ad636b5de$var$MenuButton = ({ uri: uri  })=>{
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("a", {
        href: uri,
        className: "lg:hidden flex-wrap",
        children: [
            /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                        className: "w-3 h-3 rounded-full bg-current m-1"
                    }),
                    /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                        className: "w-3 h-3 rounded-full bg-current m-1"
                    })
                ]
            }),
            /*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                        className: "w-3 h-3 rounded-full bg-current m-1"
                    }),
                    /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
                        className: "w-3 h-3 rounded-full bg-current m-1"
                    })
                ]
            })
        ]
    }));
};
var $2009048ad636b5de$export$2e2bcd8739ae039 = $2009048ad636b5de$var$MenuButton;


var $37d2d32f7e024b18$export$2e2bcd8739ae039 = {
    MenuButton: $2009048ad636b5de$export$2e2bcd8739ae039
};


var $45151204656f70f4$export$2e2bcd8739ae039 = {
    App: $3bf0a1c31d77ad43$export$2e2bcd8739ae039,
    Splash: $d973d9c7f46c0c79$export$2e2bcd8739ae039,
    app: $11945e52994c1fbb$export$2e2bcd8739ae039,
    Structure: $61963034d60846f3$export$2e2bcd8739ae039,
    Buttons: $37d2d32f7e024b18$export$2e2bcd8739ae039
};




const $3c5908dbf83b3824$var$Layout = ({ children: children , theme: theme = "white"  })=>{
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
        className: `w-screen h-screen flex items-center justify-center bg-${theme} z-20`,
        children: children
    }));
};
var $3c5908dbf83b3824$export$2e2bcd8739ae039 = $3c5908dbf83b3824$var$Layout;



var $6095ec792c5518f9$exports = {};
$6095ec792c5518f9$exports = new URL("mic.12f6c14a.png", "file:" + __filename).toString();


const $2b59397e25b85181$var$Search = ({ theme: theme = "white"  })=>{
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsxs("div", {
        className: `w-80 lg:w-1/4 h-12 lg:h-14 rounded-full p-2 bg-gray-200 flex z-20 font-chappies-regular`,
        children: [
            /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("input", {
                type: "text",
                className: "w-80 lg:w-full h-full bg-transparent appearance-none outline-none"
            }),
            /*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("img", {
                onClick: ()=>alert("do you talk to your computer?")
                ,
                src: (/*@__PURE__*/$parcel$interopDefault($6095ec792c5518f9$exports)),
                className: "w-8 p-2"
            })
        ]
    }));
};
var $2b59397e25b85181$export$2e2bcd8739ae039 = $2b59397e25b85181$var$Search;



const $37b973b880269f15$var$LayoutCol = ({ children: children , theme: theme = "white"  })=>{
    return(/*#__PURE__*/ $cMI0G$reactjsxruntime.jsx("div", {
        className: `w-full h-auto flex flex-wrap items-center justify-center bg-${theme} z-20  z-20`,
        children: children
    }));
};
var $37b973b880269f15$export$2e2bcd8739ae039 = $37b973b880269f15$var$LayoutCol;


var $5f265d9b4ec838b4$export$2e2bcd8739ae039 = {
    Layout: $3c5908dbf83b3824$export$2e2bcd8739ae039,
    Search: $2b59397e25b85181$export$2e2bcd8739ae039,
    LayoutCol: $37b973b880269f15$export$2e2bcd8739ae039
};



const $035a6af011aefcfe$var$getUriParams = ({ uri: uri = window.location , param: param  })=>{
    let url = new URL(uri);
    let searchParams = new URLSearchParams(url.search);
    return searchParams.get(param);
};
const $035a6af011aefcfe$var$getLocalStorage = (key)=>{
    return localStorage.getItem(key);
};
var $035a6af011aefcfe$export$2e2bcd8739ae039 = {
    getUriParams: $035a6af011aefcfe$var$getUriParams,
    getLocalStorage: $035a6af011aefcfe$var$getLocalStorage
};


const $04285862c22f73b7$var$ErrorHandling = ({ msg: msg , err: err  })=>{
    console.error(msg, err);
};
const $04285862c22f73b7$var$LogHandling = ({ msg: msg , type: type  })=>{
    console.log(msg, type);
};
var $04285862c22f73b7$export$2e2bcd8739ae039 = {
    ErrorHandling: $04285862c22f73b7$var$ErrorHandling,
    LogHandling: $04285862c22f73b7$var$LogHandling
};



let $d83e3129e2532a42$var$q = $cMI0G$faunadb.query;
const $d83e3129e2532a42$var$faunaSDK = new $cMI0G$faunadb.Client({
    secret: 'fnAEbszNIGACTHJLDOzFvk2Sw9JBJYXTZQNlHA6E',
    domain: 'db.fauna.com',
    // NOTE: Use the correct domain for your database's Region Group.
    port: 443,
    scheme: 'https'
});
//add trycatch for devesive coding
const $d83e3129e2532a42$var$create = async (data, col)=>{
    return await $d83e3129e2532a42$var$faunaSDK.query($d83e3129e2532a42$var$q.Create($d83e3129e2532a42$var$q.Collection(col), {
        data: data
    }));
};
const $d83e3129e2532a42$var$read = async (id, col = "theplug")=>{
    //console.log("id tp read",id)
    return await $d83e3129e2532a42$var$faunaSDK.query($d83e3129e2532a42$var$q.Get($d83e3129e2532a42$var$q.Ref($d83e3129e2532a42$var$q.Collection(col), id)));
};
const $d83e3129e2532a42$var$update = async (data, id, col)=>{
    return await $d83e3129e2532a42$var$faunaSDK.query($d83e3129e2532a42$var$q.Update($d83e3129e2532a42$var$q.Ref($d83e3129e2532a42$var$q.Collection(col), id), {
        data: data
    }));
};
const $d83e3129e2532a42$var$remove = async (id, col = "theplug")=>{
    console.log("removing the data", id);
    return await $d83e3129e2532a42$var$faunaSDK.query($d83e3129e2532a42$var$q.Delete($d83e3129e2532a42$var$q.Ref($d83e3129e2532a42$var$q.Collection(col), id)));
};
const $d83e3129e2532a42$var$findById = async (id, index = "identity")=>{
    return await $d83e3129e2532a42$var$faunaSDK.query($d83e3129e2532a42$var$q.Get($d83e3129e2532a42$var$q.Match($d83e3129e2532a42$var$q.Index(index), id)));
};
const $d83e3129e2532a42$var$findByIndex = async (id, index = "analyticIdentity ")=>{
    let result = await $d83e3129e2532a42$var$faunaSDK.query($d83e3129e2532a42$var$q.Paginate($d83e3129e2532a42$var$q.Match($d83e3129e2532a42$var$q.Index(index), id)));
    let exp = result.data.map((i)=>$d83e3129e2532a42$var$q.Get(i)
    );
    let data = await $d83e3129e2532a42$var$faunaSDK.query(exp);
    return data;
};
const $d83e3129e2532a42$var$getAll = async (index = "genus")=>{
    let result = await $d83e3129e2532a42$var$faunaSDK.query($d83e3129e2532a42$var$q.Paginate($d83e3129e2532a42$var$q.Documents($d83e3129e2532a42$var$q.Collection(index))));
    let exp = result.data.map((i)=>$d83e3129e2532a42$var$q.Get(i)
    );
    let data = await $d83e3129e2532a42$var$faunaSDK.query(exp);
    return data;
};
var $d83e3129e2532a42$export$2e2bcd8739ae039 = {
    create: $d83e3129e2532a42$var$create,
    update: $d83e3129e2532a42$var$update,
    getAll: $d83e3129e2532a42$var$getAll,
    read: $d83e3129e2532a42$var$read,
    remove: $d83e3129e2532a42$var$remove,
    findById: $d83e3129e2532a42$var$findById,
    findByIndex: $d83e3129e2532a42$var$findByIndex
};


var $e2dd7711505ea4d7$export$2e2bcd8739ae039 = {
    NativeService: $035a6af011aefcfe$export$2e2bcd8739ae039,
    SystemService: $04285862c22f73b7$export$2e2bcd8739ae039,
    FaunaService: $d83e3129e2532a42$export$2e2bcd8739ae039
};



const $45ada8671b12cfe0$export$d395cf2f8c1b1775 = (id, domain, timezone, page, referer)=>{
    return {
        id: id,
        type: 'page',
        domain: domain,
        timezone: timezone,
        page: page,
        referer: referer
    };
};
const $45ada8671b12cfe0$export$a68cf31a3bee210c = (id, domain, timezone, page, action)=>{
    return {
        id: id,
        type: 'action',
        domain: domain,
        timezone: timezone,
        page: page,
        action: action
    };
};



const $9f598ce43b4c11bb$var$initAnalytics = async (id, domain, page, referer)=>{
    return await $d83e3129e2532a42$export$2e2bcd8739ae039.create($45ada8671b12cfe0$export$d395cf2f8c1b1775(id, domain, $cMI0G$jstemporalpolyfill.Temporal.Now.timeZone().toJSON(), page, referer), 'analytics');
};
var $9f598ce43b4c11bb$export$2e2bcd8739ae039 = {
    initAnalytics: $9f598ce43b4c11bb$var$initAnalytics
};


var $302fbcedec8ad5f4$export$2e2bcd8739ae039 = {
    AnalyticsAPI: $9f598ce43b4c11bb$export$2e2bcd8739ae039
};




//# sourceMappingURL=index.js.map
