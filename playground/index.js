import { hello } from "../.dfx/local/canisters/hello";
import * as React from "react";
import { render } from "react-dom";

const MyHello = () => {
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');


    const [number, setNumber] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [keywords, setKeywords] = React.useState([])

    async function doGreet() {
        const greeting = await hello.leaving(name);


        console.log(greeting)

        // const getProfile = await hello.get("0815206804");

        // const _profile = {
        //   name: name,
        //   description: desc,
        //   keywords: []
        // }

        // const setProfile = await hello.update(number,_profile)


        // console.log("the profile in the store",getProfile)
        // console.log("the response after storing",setProfile)

         setMessage(greeting);
    }

    return (
        <div style={{ "fontSize": "30px" }}>
            <div className="w-full h-32 p-2 bg-gray-100" >
                <p>Greetings, from DFINITY!</p>
                <p>
                    {" "}
                    Type your message in the Name input field, then click{" "}
                    <b> Get Greeting</b> to display the result.
                </p>
            </div>
            <div style={{ margin: "30px" }}>

                <input
                    placeholder="number"
                    id="number"
                    value={number}
                    onChange={(ev) => setNumber(ev.target.value)}
                ></input>
                <input
                    placeholder="name"
                    id="name"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                ></input>

                <input id="desc" value={desc} onChange={(ev) => setDesc(ev.target.value)} placeholder="Description"></input>
                <button onClick={doGreet}>Get Greeting!</button>
            </div>
            <div>
                Greeting is: "
                <span style={{ color: "blue" }}>{message}</span>"
            </div>
        </div>
    );
};

render(<MyHello />, document.getElementById("app"));





// import { Sauveur } from "../src/";
// // import MainApp from '@codebenderhq/canvas/src/theme/sauveur/components/app'
// import "../src/theme/sauveur/style/index.css";
//
// fetch('/api').then( async(res) => console.log(await res.json()))
//
// Sauveur.app(() => (
//     <Sauveur.Structure>
//         <div className="w-full h-auto">hello worlr</div>
//         <div className="flex-col lg:flex flex-grow">
//
//             {/* w-1/2 */}
//             <div className={`w-full w-full h-full bg-black flex justify-center items-center`}>
//                 <div className="max-w-sm lg:max-w-2xl lg:w-full flex-wrap justify-center">
//                     <div className="text-7xl text-white text-center font-bold p-2"><h1>Kuro</h1></div>
//                     <div className="flex h-14 w-full justify-center">
//                         <div className={`w-80 lg:w-3/4 h-12 lg:h-14 rounded-full p-2 bg-gray-300 flex z-20 ` }>
//                             <input className="w-full input-style"></input>
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//             <div className="w-full lg:w-1/2 h-full hidden"></div>
//         </div>
//         <div className="w-full h-auto">hello world</div>
//     </Sauveur.Structure>
// ));

// (() => {
//     <App>
//         <>hello world</>
//     </App>
// })
// App(() => <>hello world</>)

// app(() => (<Splash theme={"black"}></Splash>));
