"use client"
import React, { useState } from "react";
import GenerateNlLogo from "../../assets/svg/GenerateNlLogo";
import Sparkle from "../../assets/svg/Sparkle";

export default function Navbar(props) {

   
    const handleGenerateClick = () => {
        props.setShowSavedQuery(true);
    };

    return (
        <div className="navbar-wrapper mx-[25px] my-[32px] flex items-center justify-between">
            <div className="flex items-center">
                <div className="mr-[24px] bg-[#25242D] h-[54px] w-[54px] flex justify-center items-center rounded-[8px]">
                    <GenerateNlLogo />
                </div>
                <div className="bg-[#25242D] rounded-[12px] h-[54px] p-[8px] flex items-center">
                    <Sparkle />
                    <div>
                        <input type="text" placeholder="Start searching with natural language" className="bg-[#100E12] min-w-[578px] ml-[8px] pl-[8px] py-[8px] rounded-[8px] text-[14px] text-white outline-none" />
                    </div>
                </div>
                <div>
                <button className="text-white text-[16px] bg-[#874BD4] rounded-[8px] px-[18px] py-[8px] ml-[10px]" onClick={handleGenerateClick}>Generate</button>
                </div>
            </div>  
            <div>
                <button className="text-[#874BD4] text-[16px] rounded-[8px] px-[18px] py-[8px] border border-[#874BD4]">Save</button>
            </div>
        </div>

    )
}
