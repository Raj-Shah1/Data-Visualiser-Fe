"use client"
import Navbar from "../../components/navbar/Navbar";
import React, {useState} from "react";

export default function SavedQueries() {

  const [showSavedQuery, setShowSavedQuery] = useState(false);
  const [generatedQuery, setGeneratedQuery] = useState("");
  const [activeTab, setActiveTab] = useState(1);


  return (
  <>
  <Navbar showSavedQuery={showSavedQuery} setShowSavedQuery={setShowSavedQuery} generatedQuery={generatedQuery} setGeneratedQuery={setGeneratedQuery} activeTab={activeTab}/>
  {/* <QuerySection showSavedQuery={showSavedQuery} setShowSavedQuery={setShowSavedQuery} generatedQuery={generatedQuery} setGeneratedQuery={setGeneratedQuery} activeTab={activeTab} setActiveTab={setActiveTab} getQueryOutput={getQueryOutput} setQueryOutput={setQueryOutput}/> */}
  </>
  )
}
