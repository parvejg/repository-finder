"use client";
import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaAngleDown, FaHandPointDown } from "react-icons/fa";
import { fetchLanguages } from "./fetchLangues";
type Lang = {
  title: string;
  value: string;
};
const RepositoryFinder =  () => {
  const [language, setLanguage] = useState([]);
  const [selectedLan, setSelectLan] = useState("");
  // console.log(language);
  useEffect(() => {
(()=>{
  const data =  fetchLanguages();
  data.then((res)=> setLanguage(res))
//  setLanguage(data)
})()

  }, []);
  // const fetchLanguages = async () => {
  //   const res = await axios.get(
  //     "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
  //   );
  //   setLanguage(res.data);
  //   console.log(res);
  // };

  const handleSelect = (e: any) => {
    setSelectLan(e.target.value);
  };

  return (
    <div className="flex justify-center items-center align-center h-screen w-full ">
      <div
        className=" flex flex-col items-center   w-[40%] h-[70%] rounded-2xl"
        defaultValue={selectedLan}
        onChange={handleSelect}
      >
        <h1 className="font-4xl italic text-2xl font-bold  mt-7 ">
          Git Repository Finder
        </h1>
        <div className=" flex flex-col items-center w-[70%] h-[60%] bg-white rounded-xl pt-4  mt-5 text-center">
          <div className="flex flex-col w-[100%] items-center h-[90%]">
        
            <div className="w-[100%] ">
              <select  className=" flex  justify-center items-center gap-3 justify-center text-xl bg-gray-100 mt-2 w-[100%] h-9 text-center align-center cursor-pointer rounded-xl border-solid border-2 border-black" value={selectedLan}>
                {language.map((lan: Lang) => (
                  <option className="mt-6 max-w-[100%]" value={lan.title} onChange={(e)=>handleSelect(e)}>{lan.title}</option>
                ))}
              </select>
            </div>
            <div className=" flex flex-col items-center justify-center w-[70%] h-[100%] bg-gray-100 rounded-xl mt-5">
              <div className="font-bold">Please select a language</div>
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
