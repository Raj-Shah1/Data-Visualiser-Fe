"use client"
import React, { useState, useEffect } from "react";
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
import { Chart } from 'react-google-charts';


export default function QuerySection(props) {

    const [tabs, setTabs] = useState([{ id: 1, query: "" }]);

    const currentActiveTab = props.activeTab;

    const addTab = () => {
        const newTabId = tabs.length + 1;
        setTabs([...tabs, { id: newTabId, query: "" }]);
        props.setActiveTab(newTabId);
    };

    const closeTab = (tabId) => {
        const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
        setTabs(updatedTabs);
        props.setActiveTab(updatedTabs.length > 0 ? updatedTabs[0].id : null);
    };

    const switchTab = (tabId) => {
        props.setActiveTab(tabId);
    };

    const handleChangeQuery = (value) => {
        const updatedTabs = tabs.map((tab) =>
            tab.id === props.activeTab ? { ...tab, query: value } : tab
        );
        setTabs(updatedTabs);
    };

    console.log("props.generatedQuery[props.activeTab]", props.generatedQuery[props.activeTab])

    const handleExecuteQuery = () => {

        const executeUrl = 'http://127.0.0.1:5000/execute-query';

        const data = {
            query: props.generatedQuery[currentActiveTab],
        };
        
        const headers = {
            'Content-Type': 'application/json'
        };

        fetch(executeUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Request failed');
                }
            })
            .then(queryOutput => {
                 props.setQueryOutput({ ...props.generatedQuery, [currentActiveTab]: queryOutput });
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    // useEffect(() => {
    //     console.log("props.getQueryOutput------", props.getQueryOutput[currentActiveTab]);
    // }, [props.getQueryOutput]);

    //     const queryOutputResult = props.getQueryOutput[currentActiveTab];

    //     // console.log("type of ", typeof(queryOutputResult));

    return (
        <>
            <div className="bg-[#25242d80] mx-[32px] min-h-[740px]">
                <div className="px-[25px] py-[10px] flex rounded-[12px] ">
                    <div className="flex items-center gap-[22px]">
                        <div className="flex gap-[22px]">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`bg-[#d4cbff4d] px-[12px] py-[8px] rounded-[44px] flex items-center ${tab.id === props.activeTab ? "border-2 border-blue-500" : ""
                                        }`}
                                >
                                    <p
                                        className="text-white text-[12px] mr-[5px] cursor-pointer"
                                        onClick={() => switchTab(tab.id)}
                                    >
                                        {`Query ${tab.id}`}
                                    </p>
                                    <button onClick={() => closeTab(tab.id)}>
                                        <CrossIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button onClick={addTab} className="bg-[#d4cbff4d] px-[8px] text-[18px] py-[8px] rounded-[10px] flex items-center">
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
                            value={tabs.find((tab) => tab.id === props.activeTab) ? props.generatedQuery[props.activeTab] : ""}
                            onChange={handleChangeQuery}
                            style={{ borderBottomLeftRadius: "12px", borderTopLeftRadius: "12px", minHeight: "660px", minWidth: "600px", }}
                        />
                        <button onClick= { () => {
                            handleExecuteQuery();
                        }}
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
                    <div className="ml-[50px]">
                        <Chart
                            chartType="ScatterChart"
                            data={ queryOutputResult ? JSON.parse(queryOutputResult) : ""}
                            width="100%"
                            height="400px"
                            legendToggle
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
