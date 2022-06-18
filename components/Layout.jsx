import React from 'react'
import Header from './header/Header'
import Topbar from './topbar/Topbar'

export default function layout({children}) {
  return (
    <>
    {/* <Topbar />
    <Header /> */}
    {children}
    </>
  )
}
