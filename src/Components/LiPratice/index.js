import {useState} from 'react';
import "./index.css"
import Details from "../Details/index"
const Content = () => {
   const item=[
    {
        id:"react",
        title:"React",
        data:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
    },
    {
        id:"html",
        title:"Html",
        data:"HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.HTML describes the structure of a Web page.HTML consists of a series of elements.HTML elements tell the browser how to display the content"
    },
    {
        id:"css",
        title:"Css",
        data:"Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page."
    },
    {
        id:"js",
        title:"Javascript",
        data:"JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. "
    },
    { 
        id:"sql",
        title:"Sql",
        data:"Structured Query Language or SQL is a standard Database language which is used to create, maintain and retrieve the data from relational databases like MySQL, Oracle, SQL Server, PostGre, etc. The recent ISO standard version of SQL is SQL:2019."
    }

   ]
   const [search,setSearch]=useState("")
   const [list,setLi]=useState( item)
   const onDelete=id=>{
    const filData=list.filter((item)=>item.id!==id)
    setLi(filData)
}
   
const filterData=list.filter((item)=>item.title.toLowerCase().includes(search))

    return (
        
        <>
        <div className='container' >
            <h1 className='heading'>Search With title</h1>
      <input className='search-box' type="search" onChange={(event)=>  setSearch(event.target.value)} value={search} placeholder="Search with title name"/>
      {filterData.length===0?<p className='ntg'>*****There is Nothing to Show*****</p>:
           (<ul>
               {filterData.map((details)=> (
                  <Details key={details.id} listDetail={details} onDelete={onDelete}/>
               )
               )}
            </ul>)

      }
      </div> 
        </>
    );
};

export default Content;