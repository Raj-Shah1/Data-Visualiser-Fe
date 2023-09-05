"use client"
import React, { useState } from "react";
import CrossIcon from "../../assets/svg/CrossIcon";
import Download from "../../assets/svg/Download";
import ShareIcon from "../../assets/svg/Share";
import PlusIcon from "../../assets/svg/PlusIcon";
import Save from "../../assets/svg/Save";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import Run from "../../assets/svg/Run";
import ColumnChart from "../../assets/chart-svg/ColumnChart";
import BarChart from "../../assets/chart-svg/BarChart";


export default function QuerySection(props) {

    return (
        <>
            <div className="bg-[#25242d80] mx-[32px] min-h-[740px]">
                <div className="px-[25px] py-[10px] flex rounded-[12px] ">
                    <div className="flex items-center gap-[22px]">
                        {/* {props.showSavedQuery && (
                            <button className="flex items-center">
                                <Save />
                                <span className="text-[12px] pl-[5px] text-white">Saved Queries</span>
                            </button>
                        )} */}
                        {props.showSavedQuery && (
                            <div className="bg-[#d4cbff4d] px-[12px] py-[8px] rounded-[44px] flex items-center">
                                <p className="text-white text-[12px] mr-[5px]">Query 1</p>
                                <button onClick={() => setShowQuery1(false)}> <CrossIcon /></button>
                            </div>
                        )}
                        <button className="bg-[#d4cbff4d] px-[8px] text-[18px] py-[8px] rounded-[10px] flex items-center">
                            <PlusIcon />
                        </button>

                    </div>
                    <div className="flex gap-[28px] ml-auto">
                        <button className="flex items-center">
                            <ShareIcon />
                            <span className="text-white text-[12px] ml-[4px]">Share</span>
                        </button>
                        <button className="flex items-center">
                            <Download />
                            <span className="text-white text-[12px] ml-[4px]">Download</span>
                        </button>
                    </div>
                </div>

                <div className="flex">
                    <div className="px-[25px] relative">
                        <AceEditor
                            mode="mysql"
                            theme="twilight"
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                            highlightActiveLine={false}
                            value={props.generatedQuery}
                            style={{ borderBottomLeftRadius: "12px", borderTopLeftRadius: "12px", minHeight: "660px", minWidth: "600px", }}
                        />
                        <button
                            className="bg-[#232129] text-white px-4 py-2 rounded-md absolute bottom-[10px] left-[85%]">
                            <Run />
                        </button>
                    </div>
                    {props.showSavedQuery && (
                        <div className="bg-[#100E12] min-h-[660px] min-w-[150px]">
                            <p className="text-white px-[12px] py-[8px] bg-[#232129] text-center font-normal text-[10px]">Select Graph</p>
                            <div className="flex gap-[24px] flex-col items-center pt-[24px]">
                                <button><ColumnChart /></button>
                                <button><BarChart /></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
