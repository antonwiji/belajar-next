"use client"

import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
import Card from "@/app/component/Card"

const page = () => {
    const [persons, setPersons] = useState<any>([])

    const getApi = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res)
            setPersons(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getApi()
        
    }, [])
    console.log(persons, 'person data')
    return(
        <div className="container">
            <div className="h-12 w-32 bg-black">
                <ul>
                    {persons.map((person: any) => {
                    return(
                        <Card 
                            name={person.name}
                            email={person.email}
                            phone={person.phone}
                        />
                    )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default page