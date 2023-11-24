import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (value) => {
       
        const newCategory = value;

        if(categories.includes(newCategory)) return;

        // setCategories([...categories, newCategory])
        setCategories(cat => [newCategory, ...cat ])
    }


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={value => onAddCategory(value)} />

        {
            categories.map((category, i) => (<GifGrid key={category} category={category} />))
        }
    

    </>
  )
}