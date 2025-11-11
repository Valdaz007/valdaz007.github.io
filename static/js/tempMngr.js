class TempFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="mt-4">
            <div class="footer-wrap">
                <div class="contact">
                    <h6>CONTACT</h6>
                    <ul>
                        <li class="">Phone: +675 7844 9084</li>
                        <li class="">Email: volsavaivictor@gmail.com</li>
                    </ul>
                </div>
                
                <div class="links">
                    <div class = "links-wrapper">
                        <h6>SOCIALS</h6>
                        <div class = "socials">
                            <div class="link">
                                <a href="https://www.facebook.com/profile.php?id=100008955696431">
                                    <img title="Facebook" class="link-img" src="./static/image/facebook.png">
                                </a>
                            </div>
                            <div class="link">
                                <a href="instagram.com">
                                    <img title="Instagram" class="link-img" src="./static/image/instagram.png">
                                </a>
                            </div>
                            <div class="link">
                                <a href="https://www.linkedin.com/in/victorvolsavai">
                                    <img title="Linked In" class="link-img" src="./static/image/linkedin.png">
                                </a>
                            </div>
                        </div>
                        <div class="hrOrange"></div>
                    </div>
                </div>
            </div>

            <p class="copyright">&copy 2025 ValdazMedia</p> 
        </footer>
        `
    }
}

customElements.define('temp-footer', TempFooter)