import React, { useState } from 'react';
import { FaPlus, FaCog, FaCircle, FaRegQuestionCircle } from 'react-icons/fa';
import { MdDashboardCustomize } from "react-icons/md";
// import { RiFontSize } from "react-icons/ri";
import { IoClose, IoInvertModeOutline, IoLanguage } from "react-icons/io5";
// FaKeyboard
// MdDashboard
// MdMode edit icon

export function ModalSettings({ isOpen, onClose }) {
    return (
        <div class="modal" style={{ display: isOpen ? 'block' : 'none' }}>
            <div class="modal-content">
                <div class="modal-title">
                    <h1>
                        Settings
                    </h1>
                    <span class="close-modal" onClick={onClose}>
                        <IoClose />
                    </span>
                </div>
                <div class="modal-section">
                    <button class="settings-option">
                        <IoInvertModeOutline />
                        <p class="modal-subtitle">
                            Theme
                        </p>
                        <p class="modal-text">
                            Customize visual style of the interface.
                        </p>
                    </button>
                </div>
                {/* <div class="modal-section">
                    <button class="settings-option">
                        <RiFontSize />
                        <p class="modal-subtitle">
                            Font-Size
                        </p>
                        <p class="modal-text">
                            Adjust the text size for better readability and visual appeal.
                        </p>
                    </button>
                </div> */}
                {/* <div class="modal-section">
                    <button class="settings-option">
                        <FaKeyboard />
                        <p class="modal-subtitle">
                            Shortcuts
                        </p>
                        <p class="modal-text">
                            Customize and define their preferred keyboard shortcuts for various actions.
                        </p>
                    </button>
                </div> */}
                <div class="modal-section">
                    <button class="settings-option">
                        <IoLanguage />
                        <p class="modal-subtitle">
                            Language
                        </p>
                        <p class="modal-text">
                            Choose your preferred language for the user interface.
                        </p>
                    </button>
                </div>
                <div class="modal-section">
                    <button class="settings-option">
                        <FaRegQuestionCircle />
                        <p class="modal-subtitle">
                            About
                        </p>
                        <p class="modal-text">
                            Relevant information about the application.
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export function ModalNewTask({ isOpen, onClose }) {
    return (
        <div class="modal" style={{ display: isOpen ? 'block' : 'none' }}>
            <div class="modal-content">
                <div class="modal-title">
                    <input id="task-name" defaultValue={"Untitled"}/>
                    <span class="close-modal" onClick={onClose}>
                        <IoClose />
                    </span> 
                </div>
                <div class="modal-section">
                    <div id="task-status" class="modal-title">
                        <p class="modal-subtitle">
                            Status 
                        </p>
                        <button id="activity-status" class="modal-task-status">
                            <FaCircle />
                            <p>
                                Delegate
                            </p>
                        </button>
                        <p class="modal-subtitle">
                            Category 
                        </p>
                        <button id="activity-status" class="modal-task-status">
                            <FaCircle />
                            <p>
                                Delegate
                            </p>
                        </button>
                    </div>
                </div>
                <div class="modal-section">
                    <p class="modal-subtitle">
                        Desciption: 
                    </p>

                </div>
                <div class="modal-section">
                    <p  id="task-description" class="modal-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div class="button-section">
                    <button class="save-button">
                        Save
                    </button>
                    {/* <button class="delete-button">
                        Delete
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export function ModalMatrix({ isOpen, onClose }) {
    return (
        <div class="modal" style={{ display: isOpen ? 'block' : 'none' }}>
            <div class="modal-content">
                <div class="modal-title">
                    <h1>
                        Eisenhower Matrix
                    </h1>
                    <span class="close-modal" onClick={onClose}>
                        <IoClose />
                    </span> 
                </div>
            </div>
        </div>
    );
}

export function ActionMenu() {
    const [newTaskModalOpen, setNewTaskModalOpen] = useState(false);
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    const [matrixModalOpen, setMatrixModalOpen] = useState(false);

    const openNewTaskModal = () => {
        setNewTaskModalOpen(true);
    };

    const closeNewTaskModal = () => {
        setNewTaskModalOpen(false);
    };

    const openSettingsModal = () => {
        setSettingsModalOpen(true);
    };

    const closeSettingsModal = () => {
        setSettingsModalOpen(false);
    };

    const openMatrixModal = () => {
        setMatrixModalOpen(true);
    };

    const closeMatrixModal = () => {
        setMatrixModalOpen(false);
    };

    return (
        <section id="header">
            <div id="action-menu">
                <button class="action-button" onClick={openNewTaskModal}>
                    <FaPlus />
                </button>
                <button class="action-button" onClick={openMatrixModal}>
                    <MdDashboardCustomize />
                </button>
                <button class="action-button" onClick={openSettingsModal}>
                    <FaCog />
                </button>
            </div>
            <ModalNewTask isOpen={newTaskModalOpen} onClose={closeNewTaskModal} />
            <ModalSettings isOpen={settingsModalOpen} onClose={closeSettingsModal} />
            <ModalMatrix isOpen={matrixModalOpen} onClose={closeMatrixModal} />
        </section>
    );
}

export function TaskStatusSection(){
    return (
        <section id="taskStatusSection">
            <div class="listSpace">
                <div class="task-status-title" id="not-started-title">
                    <FaCircle />
                    <p>
                        Not Started
                    </p>
                </div>
            </div>
            <div class="listSpace">
                <div class="task-status-title" id="in-progress-title">
                    <FaCircle />
                    <p>
                        In Progress
                    </p>
                </div>
            </div>
            <div class="listSpace">
                <div class="task-status-title" id="done-title">
                    <FaCircle />
                    <p>
                        Done
                    </p>
                </div>
            </div>
        </section>
      );
}