"use client"
import Navbar from "../../components/navbar/Navbar";
import QuerySection from "../../components/querySection/QuerySection";
import React, {useState} from "react";

export default function Home() {

  const [showSavedQuery, setShowSavedQuery] = useState(false);

  return (
  <>
  <Navbar showSavedQuery={showSavedQuery} setShowSavedQuery={setShowSavedQuery} />
  <QuerySection showSavedQuery={showSavedQuery} setShowSavedQuery={setShowSavedQuery} />
  </>
  )
}
