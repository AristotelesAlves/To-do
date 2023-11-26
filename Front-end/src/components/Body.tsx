import {ReactNode} from 'react'

interface Ibody{
    children: ReactNode
}

export function Body(props: Ibody){
    return(
        <section className="w-screen h-screen flex justify-center items-center bg-cyan-950">
            <div className="flex flex-col p-3 rounded-xl h-[85%] w-[450px] bg-white">
                {props.children}
            </div>
        </section>
    )
}