import { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import HeaderHome from "../Components/HeaderHome/HeaderHome"

export const HomeTemplate = (props) => {
    
    const [windowSize, setWindowSize] = useState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    })

    const changeSizeWindow = async () => {
        let {innerHeight, innerWidth} = window;
        await setWindowSize({
            innerHeight: innerHeight,
            innerWidth: innerWidth
        })
        console.log(windowSize)
    }

    useEffect(() => {
        window.onresize = changeSizeWindow;
        window.onload = changeSizeWindow;

        return () => {
            // Hủy 2 sự kiện này khi component mất khỏi giao diện (chuyển template hoặc reload)
            window.removeEventListener('onload');
            window.removeEventListener('onresize');
        }
    }, [])

    let Component = props.component;

    if (props.mobileComponent) {
        if (windowSize.innerWidth < 768) {
            Component = props.mobileComponent;
        }
    }

    return <Route exact path={props.path} render={(propsRoute) => {
        return <>
            <HeaderHome />
            <Component {...propsRoute} />
        </>
    }} />
}