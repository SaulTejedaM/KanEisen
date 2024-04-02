import React, { useState } from 'react';
import { FaPlus, FaCog, FaCircle } from 'react-icons/fa';
import { MdDashboardCustomize } from "react-icons/md";
import { IoClose } from "react-icons/io5";
// MdDashboard
export function ModalSettings({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div class="modal-background">
            <div class="modal-content">
                <div class='modal-title-section'>
                    <h1>Settings</h1>
                    <span class="close-modal" onClick={onClose}>
                        <IoClose />
                    </span>
                </div>
                
            </div>
        </div>
    );
}



export function ActionMenu() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const openSettings = () => {
        setIsSettingsOpen(true);
    };

    const closeSettings = () => {
        setIsSettingsOpen(false);
    };

    return (
        <section id="titleSection">
            <div id="action-menu">
                <button class="action-button">
                    <FaPlus />
                </button>
                <button class="action-button">
                    <MdDashboardCustomize />
                </button>
                <button class="action-button" onClick={openSettings}>
                    <FaCog />
                </button>
            </div>
            <ModalSettings isOpen={isSettingsOpen} onClose={closeSettings} />
            {/* <div id="title">
                <MdDashboard/>
                <h1>
                    KanEisen
                </h1>
            </div> */}
        </section>
    );
}



export function TaskStatusSection(){
    return (
        <section id="taskStatusSection">
            <div class="listSpace">
                <div class="task-status-title" id="not-started-title">
                    <FaCircle />
                    <p>Not Started</p>
                </div>
            </div>
            <div class="listSpace">
                <div class="task-status-title" id="in-progress-title">
                    <FaCircle />
                    <p>In Progress</p>
                </div>
            </div>
            <div class="listSpace">
                <div class="task-status-title" id="done-title">
                    <FaCircle />
                    <p>Done</p>
                </div>
            </div>
        </section>
      );
}


