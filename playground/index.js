import { Sauveur } from "../src/";
// import MainApp from '@codebenderhq/canvas/src/theme/sauveur/components/app'
import "../src/theme/sauveur/style/index.css";

Sauveur.app(() => (
    <Sauveur.Structure>
        <div className="w-full h-auto">hello worlr</div>
        <div className="flex-col lg:flex flex-grow">

            {/* w-1/2 */}
            <div className={`w-full w-full h-full bg-black flex justify-center items-center`}>
                <div className="max-w-sm lg:max-w-2xl lg:w-full flex-wrap justify-center">
                    <div className="text-7xl text-white text-center font-bold p-2"><h1>Kuro</h1></div>
                    <div className="flex h-14 w-full justify-center">
                        <div className={`w-80 lg:w-3/4 h-12 lg:h-14 rounded-full p-2 bg-gray-300 flex z-20 ` }>
                            <input className="w-full input-style"></input>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full lg:w-1/2 h-full hidden"></div>
        </div>
        <div className="w-full h-auto">hello world</div>
    </Sauveur.Structure>
));

// (() => {
//     <App>
//         <>hello world</>
//     </App>
// })
// App(() => <>hello world</>)

// app(() => (<Splash theme={"black"}></Splash>));
