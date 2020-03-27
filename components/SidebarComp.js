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
                        if (this.state.openStatues === false) {
                            element.style.display = "flex";
                            this.state.openStatues = true
                        } else if (this.state.openStatues === true) {
                            element.style.display = "none";
                            this.state.openStatues = false
                        }
                    }}>
                    <i className="fas fa-bars"></i>
                </button>
            </nav>
        );
    }
}

export default SidebarComp;