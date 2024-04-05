import React, { useState } from 'react';
import { FaPlus, FaCog, FaCircle, FaRegQuestionCircle, FaKeyboard } from 'react-icons/fa';
import { MdDashboardCustomize } from "react-icons/md";
import { RiFontSize } from "react-icons/ri";
import { IoClose, IoInvertModeOutline, IoLanguage } from "react-icons/io5";
// MdDashboard
// MdMode edit icon

export function ModalSettings({ isOpen, onClose }) {
    return (
        <div class="modal" style={{ display: isOpen ? 'block' : 'none' }}>
            <div class="modal-content">
                <div class="modal-title">
                    <h1>Settings</h1>
                    <span class="close-modal" onClick={onClose}>
                        <IoClose />
                    </span>
                </div>
                <button>
                    <IoInvertModeOutline />
                    <p class="modal-subtitle">Theme</p>
                    <p class="modal-text">
                        Customize visual style of the interface.
                    </p>
                </button>
                <div class="modal-section">
                    <button>
                        <RiFontSize />
                        <p class="modal-subtitle">Font-Size</p>
                        <p class="modal-text">
                            Adjust the text size for better readability and visual appeal.
                        </p>
                    </button>
                </div>
                <div class="modal-section">
                    <button>
                        <FaKeyboard />
                        <p class="modal-subtitle">Shortcuts</p>
                        <p class="modal-text">
                            Customize and define their preferred keyboard shortcuts for various actions.
                        </p>
                    </button>
                </div>
                <div class="modal-section">
                    <button>
                        <IoLanguage />
                        <p class="modal-subtitle">Language</p>
                        <p class="modal-text">
                            Choose your preferred language for the user interface.
                        </p>
                    </button>
                </div>
                <div class="modal-section">
                    <button>
                        <FaRegQuestionCircle />
                        <p class="modal-subtitle">About</p>
                        <p class="modal-text">
                            Information about the application, including its version number, development team, and any relevant information.
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
                    <h1>New Task</h1>
                    <span class="close-modal" onClick={onClose}>
                        <IoClose />
                    </span> 
                </div>
                <div class="modal-section">
                    <div class="modal-title">
                        <p class="modal-subtitle">Status: </p>
                        <p class="modal-subtitle">Category: </p>
                    </div>
                </div>
                <div class="modal-section">
                    <p class="modal-subtitle">Desciption: </p>
                </div>
                <div class="button-section">
                    <button class="save-button">Save</button>
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
                    <h1>Eisenhower Matrix</h1>
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
        <section id="titleSection">
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