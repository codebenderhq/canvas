import googleMic from 'url:../../assets/images/mic.png'

const Search = ({theme = "white"}) => {


    return(
       <div className={`w-max-lg h-16 rounded-full p-2 bg-gray-200 flex z-20 font-chappies-regular` }>
           <input type="text" className="w-full h-full bg-transparent appearance-none outline-none"></input>
           <img onClick={() => alert("do you talk to your computer?")} src={googleMic} className="p-2"></img>
       </div>
    )
}


export default Search;