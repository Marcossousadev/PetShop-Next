'use client'
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
export function AosInit(){

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true
        })
    }, []);
    return null;
}