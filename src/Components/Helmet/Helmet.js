
export default function Helmet(props){
   document.title='grocery ordering app-'+props.title;
    return(
       <div className="w-100">{props.children}</div>
    )
}