import { About } from "./About";
import { Home } from "./Home";


const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title:"About",
    link: "/about",
    id: "header-link-about"
  },
  {
    title: "Movies",
    link: "/movies",
    id:  "header-link-movies",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return<  >
    {/* //map through the link ad display it in header */}
    {links.map((e)=>{
      return <h5 onMouseEnter={(e)=>{
        e.target.style.cursor="pointer"
      }} 
      key={e.id}
      // onClick={}
      onClick={()=>{
        
        console.log(e.id)
      }}
      >{e.title}</h5>
    })}
    
  </>;
  
};
