import { Button, color, ColorModeScript, Flex, Input, InputGroup, InputLeftElement, InputLeftElementProps, Select, useColorMode } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

import { FiSearch } from "react-icons/fi"
import { appWindow } from "@tauri-apps/api/window"
import { invoke } from "@tauri-apps/api";

export const DarkModeSettings: React.FC = () => {


    const [theme, setTheme] = useState("");

    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem("theme") as string);
        if (
            (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) ||
            theme === "dark"
        ) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    function toggleTheme() {
        if (theme === "light") {
            localStorage.setItem("theme", JSON.stringify("dark"));
            setTheme("Dark");
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", JSON.stringify("light"));
            setTheme("Light");
            document.documentElement.classList.remove("dark");
        }
    }


    return (
        <div>
            <div>
                <h1 className='text-2xl font-semibold'>Appearance</h1>
                <p className='text-app-text opacity-50 mt-1'>
                    Appearance settings
                </p>
            </div>

            <div className='mt-5'>
                <p className="text-app-text  text-lg font-medium">Theme</p>
                <p className='text-app-text opacity-50 mt-1'>
                This is now {theme.toLocaleUpperCase()} theme
                </p>
                <Button
                    mt={5}
                    className='dark:text-red-300 bg-app-accent transition-all duration-200 hover:bg-app-accent/80'
                    onClick={toggleTheme}
                >
                    {theme === "dark" ? (
                        <h1 className="bg-red-300">Light</h1>
                    ) : (
                        <h1>Dark</h1>
                    )}
                </Button>

            </div>



        </div>
    );


}