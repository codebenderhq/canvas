import { hello } from "../.dfx/local/canisters/hello";
import * as React from "react";
import { render } from "react-dom";
import { nanoid } from 'nanoid'


const MyHello = () => {
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');


    const [number, setNumber] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [keywords, setKeywords] = React.useState([])

    async function doGreet() {
        // const greeting = await hello.leaving(name);
        //
        //
        // console.log(greeting)

         const getProduct = await hello.get_products( );

        const _product = {
          name: "shirt",
          description: "plain white shirt",
          brand: "sauveur",
            price: 100.00,
            quantity:2,
            metadata:""
        }

        const id  = nanoid()
        console.log('product id',id)
        const setProduct = await hello.update_product(id,_product)



        console.log("the profile in the store",getProduct)
        console.log("the response after storing",setProduct)

         // setMessage(greeting);
    }

    return (
        <div className={"bg-black w-screen h-screen"}>

            <div className={"w-32 h-32 bg-white"} onClick={() => doGreet()}>
                click me
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
