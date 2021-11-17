import React from 'react'
import Popup from 'reactjs-popup'

const OpenMenu = () => {
    return (
        <button className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
        </button>
    );
}

const PopupMenu = () => {
    return (
        <div>
            <Popup
                trigger={ OpenMenu }
                position="right top"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                arrow={false}
            >
                <div className="bg-black-medium">
                    <div className="popup-menu-item"> Edit </div>
                    <div className="popup-menu-item"> Delete </div>
                </div>
            </Popup>
        </div>
    )
}

export default PopupMenu
