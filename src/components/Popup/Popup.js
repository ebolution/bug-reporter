class Popup {
    constructor() {
        this.popupEl = document.getElementById('bug-report-popup');
        this.closeBtn = document.getElementsByClassName('close')[0];

        // Event listener to close the popup
        this.closeBtn.onclick = () => {
            this.popupEl.style.display = "none";
        }

        // Event listener to close the popup when clicking outside
        window.onclick = (event) => {
            if (event.target == this.popupEl) {
                this.popupEl.style.display = "none";
            }
        }
    }

    open() {
        this.popupEl.style.display = "block";
    }

    close() {
        this.popupEl.style.display = "none";
    }

    setContent(content) {
        this.popupEl.querySelector('.popup-content').innerHTML += content;
    }
}

export default Popup;
