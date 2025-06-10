document.addEventListener("DOMContentLoaded", function () {
    // Initialize Typed.js for typing effect
    if (document.getElementById('element')) {
        new Typed('#element', {
            strings: ['Computer Engineer.', 'Full Stack Developer.', 'Video Editor.', 'Backend Developer.'],
            typeSpeed: 70,
        });
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.navlist');

    if (hamburger && navList) {
        hamburger.addEventListener('click', function () {
            navList.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }

    // Create and append modal dynamically (Hidden initially)
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.display = "none"; // Initially hidden
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modalSkillName"></h2>
            <p id="modalSkillDescription"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const modalSkillName = document.getElementById("modalSkillName");
    const modalSkillDescription = document.getElementById("modalSkillDescription");
    const closeModal = modal.querySelector(".close");

    // Function to handle skill item clicks (only on mobile)
    function applySkillClickEvent() {
        document.querySelectorAll('.skill-item').forEach(item => {
            item.replaceWith(item.cloneNode(true)); // Remove previous event listeners
        });

        if (window.innerWidth < 768) { // Apply only on screens <768px
            document.querySelectorAll('.skill-item').forEach(item => {
                item.addEventListener('click', function () {
                    const skillName = this.querySelector('.skill-name').textContent;
                    const skillDescription = this.querySelector('.skill-description').textContent;

                    modalSkillName.textContent = skillName;
                    modalSkillDescription.textContent = skillDescription;
                    modal.style.display = "flex"; // Show modal
                });
            });
        }
    }

    // Run initially and on resize
    applySkillClickEvent();
    window.addEventListener('resize', applySkillClickEvent);

    // Close modal on close button click
    closeModal.addEventListener("click", () => modal.style.display = "none");

    // Close modal when clicking outside modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) modal.style.display = "none";
    });
});
