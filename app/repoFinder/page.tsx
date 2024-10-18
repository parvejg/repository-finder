import React, { useState } from "react";
import { FaAngleDown, FaHandPointDown } from "react-icons/fa";
type Lang = {
  title: string,
  value: string
}
const RepositoryFinder = async () => {
  const [selectedLan, setSelectedLan] = useState("")
  const res = await fetch("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json")
  const language:  Lang[] =  await res.json()
function handleLanguage(e){
  setSelectedLan(e.target.value)
}
  return (
    <div className=" flex justify-center items-center align-center h-screen w-full ">
      <div className=" flex flex-col items-center   w-[40%] h-[70%] rounded-2xl">
        <h1 className="font-4xl italic text-2xl font-bold  mt-7 ">
          {" "}
          Git Repository Finder
        </h1>
        <div
          className=" flex flex-col items-center
w-[70%] h-[60%] bg-white rounded-xl pt-4  mt-5 text-center"
        >
          <div className="flex flex-col w-[100%] items-center h-[90%]">
            {
              language.map((lan)=>   <p className=" flex  justify-around items-center gap-3 justify-center text-xl bg-red-100 mt-2 w-[80%] h-9 text-center align-center cursor-pointer rounded-xl border-solid border-2 border-black" onChange={handleLanguage}>
              Select a Language{" "}
              <span>
                <FaAngleDown className="text-end" />{" "}
              </span>
            </p>
              
          )
            }
         
            <div className=" flex flex-col items-center justify-center w-[70%] h-[100%] bg-gray-100 rounded-xl mt-5">
              <p className="font-bold">Please select a language</p>
            </div>
            <button className="btn bg-gray-800 text-white hover:text-black mt-5 w-40 h- m-0">
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryFinder;
