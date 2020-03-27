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
                        let element2 = document.getElementById("sidebariconid")
                        if (this.state.openStatues === false) {
                            element.style.display = "flex";
                            element2.classList.add("fa-times")
                            element2.classList.remove("fa-bars")
                            this.state.openStatues = true
                        } else if (this.state.openStatues === true) {
                            element.style.display = "none";
                            element2.classList.add("fa-bars")
                            element2.classList.remove("fa-times")
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