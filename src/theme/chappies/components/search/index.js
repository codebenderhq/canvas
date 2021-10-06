import googleMic from 'url:../../assets/images/mic.png'

const Search = ({theme = "white"}) => {


    return(
       <div className={`w-80 lg:w-1/4 h-12 lg:h-14 rounded-full p-2 bg-gray-200 flex z-20 font-chappies-regular` }>
           <input type="text" className="w-80 lg:w-full h-full bg-transparent appearance-none outline-none"></input>
           <img onClick={() => alert("do you talk to your computer?")} src={googleMic} className="w-8 p-2"></img>
       </div>
    )
}


export default Search;