import{ useState }  from "react"
import styles from "./timer.module.css"
const T =()=>{
    const [Time,setTime]=useState(0)

    useState(()=>{
        const id=setInterval(() => {
            setTime((second)=>{
                if(second===10)
                {
                    clearInterval(id)
                    return 0
                }
                else
                {
                    return second +1
                }
            })
        }, 1000);
    })
    return(
        <>
            <h1 className={styles.timer}>Counter : {Time}</h1>
        </>
    )
}
export {T}