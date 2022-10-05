import React from 'react'
import style from "../../styles/components/table.module.css"
import Image from "next/image"
const CompareTable = () => {
let tableItems = [
    "UNLIMITED STORY POSTING",
    "UNLIMITED PHOTO UPLOAD",
    "EMBEDDING CUSTOM CONTENT",
    "CUSTOMIZE METADATA",
    "ADVANCED METRICS",
    "PHOTO DOWNLOADS",
    "SEARCH ENGINE INDEXING",
    "CUSTOM ANALYTICS"
]

  return (
    <section id={style.comparetable} >
        <h2 className={style.header}>COMPARE</h2>
        <table className={style.table}>
            <thead>
                <tr className={style.table__header}>
                    <td>THE FEATURES</td>
                    <td>BASIC</td>
                    <td>PRO</td>
                    <td>BUSINESS</td>
                </tr>
            </thead>
            <tbody>
                {tableItems.map((e,i) => {
                    if(i < 3){
                        return <tr key={i} className={style.table__item}>
                                    <td>{e}</td>
                                    <td><Image src="/images/check.svg" height={15} width={15} /></td>
                                    <td><Image src="/images/check.svg" height={15} width={15} /></td>
                                    <td><Image src="/images/check.svg" height={15} width={15} /></td>
                                </tr>
                    }else if(i > 2 && i < 5){
                        return <tr key={i} className={style.table__item}>
                                    <td>{e}</td>
                                    <td></td>
                                    <td><Image src="/images/check.svg" height={18} width={15} /></td>
                                    <td><Image src="/images/check.svg" height={18} width={15} /></td>
                                </tr>
                    }
                    return <tr key={i} className={style.table__item}>
                                <td>{e}</td>
                                <td></td>
                                <td></td>
                                <td><Image src="/images/check.svg" height={18} width={15} /></td>
                            </tr>
                })
                }
            </tbody>
        </table>
    </section>
  )
}

export default CompareTable