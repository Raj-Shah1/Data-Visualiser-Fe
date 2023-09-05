"use client"
import Navbar from "../../components/navbar/Navbar";
import QuerySection from "../../components/querySection/QuerySection";
import React, {useState} from "react";

export default function Home() {

  const [showSavedQuery, setShowSavedQuery] = useState(false);
  const [generatedQuery, setGeneratedQuery] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const [getQueryOutput, setQueryOutput] = useState("")

  return (
  <>
  <Navbar showSavedQuery={showSavedQuery} setShowSavedQuery={setShowSavedQuery} generatedQuery={generatedQuery} setGeneratedQuery={setGeneratedQuery} activeTab={activeTab}/>
  <QuerySection showSavedQuery={showSavedQuery} setShowSavedQuery={setShowSavedQuery} generatedQuery={generatedQuery} activeTab={activeTab} setActiveTab={setActiveTab} getQueryOutput={getQueryOutput} setQueryOutput={setQueryOutput}/>
  </>
  )
}
