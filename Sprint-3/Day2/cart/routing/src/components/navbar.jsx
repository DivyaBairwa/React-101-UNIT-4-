export const Navbar = ()=>{
    const nav = [
        {title:"Home", to:"/"},
        {title:"About", to:"/about"},
        {title:"Users", to:"/users"}
    ]

    return (
        <div>
            {nav.map((e,i)=>(
                <a key={i} href={e.to} style={{margin:"10px"}}>{e.title}</a>
            ))}
        </div>
    )
}