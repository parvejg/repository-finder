import axios from "axios";
export const fetchLanguages = async () => {
   const res = await axios.get(
     "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
   );
   if(res.status === 200){
      return res.data
   }
  return []
 };