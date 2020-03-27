import React from 'react';
class SidebarComp extends React.Component {
    constructor() {
        super();
        this.state = {
            openStatues: false,
        }
    }

    render() {
        return (
            <nav className="sidebardiv">
                <button className="sidebar-menu-btn"
                    onClick={() => {
                        let element = document.getElementById("header-buttons")
                        let sidebaricon = document.getElementById("sidebariconid")
                        if (this.state.openStatues === false) {
                            element.style.opacity = 1;
                            element.style.transform = "translate(0)";

                            sidebaricon.classList.add("fa-times")
                            sidebaricon.classList.remove("fa-bars")
                            this.state.openStatues = true
                        } else if (this.state.openStatues === true) {
                            element.style.transform = "translate(100%)";
                            element.style.opacity = 0;

                            sidebaricon.classList.add("fa-bars")
                            sidebaricon.classList.remove("fa-times")
                            this.state.openStatues = false
                        }
                    }}>
                    <i id="sidebariconid" className="fas fa-bars"></i>
                </button>
            </nav>
        );
    }
}

export default SidebarComp;