// Main JavaScript file - Initialize and handle all interactions

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initializeNavigation();
  initializeHeroSection();
  initializeAboutSection();
  initializeExperienceSection();
  initializeCertificationsSection();
  initializeSkillsSection();
  initializeProjectsSection();
  initializeContactSection();
  initializeFooter();

  // Set up scroll listeners
  window.addEventListener("scroll", updateActiveNavLink);
  window.addEventListener("scroll", handleNavbarScroll);
  window.addEventListener("scroll", handleScrollAnimations);

  // Initial calls
  updateActiveNavLink();
  handleScrollAnimations();
});

// Handle navbar background on scroll
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Handle scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
      element.classList.add("animated");
    }
  });
}

// Navigation
function initializeNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Handle navigation link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      smoothScrollTo(targetId);

      // Close mobile menu if open
      navMenu.classList.remove("active");
    });
  });
}

// Hero Section
function initializeHeroSection() {
  const heroName = document.querySelector(".hero-name");
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const socialLinksContainer = document.querySelector(".social-links");

  heroName.textContent = personalInfo.name;
  heroTitle.textContent = personalInfo.title;
  heroSubtitle.textContent = personalInfo.subtitle;

  // Add social links
  socialLinksContainer.innerHTML = socialLinks
    .map((link) => createSocialLinkHTML(link))
    .join("");
}

// About Section
function initializeAboutSection() {
  const aboutContent = document.querySelector(".about-content");
  aboutContent.innerHTML = `<p>${personalInfo.bio}</p>`;
}

// Experience Section
function initializeExperienceSection() {
  const experienceTimeline = document.getElementById("experienceTimeline");

  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...experiences].sort(
    (a, b) => b.startDate - a.startDate
  );

  experienceTimeline.innerHTML = sortedExperiences
    .map((exp, index) => createExperienceCardHTML(exp, index))
    .join("");
}

// Certifications Section
function initializeCertificationsSection() {
  const certificationsGrid = document.getElementById("certificationsGrid");

  // Sort certifications by issue date (most recent first)
  const sortedCertifications = [...certifications].sort(
    (a, b) => b.issueDate - a.issueDate
  );

  certificationsGrid.innerHTML = sortedCertifications
    .map((cert, index) => createCertificationCardHTML(cert, index))
    .join("");
}

// Skills Section
function initializeSkillsSection() {
  const skillsContainer = document.getElementById("skillsContainer");
  skillsContainer.innerHTML = skills
    .map((category) => createSkillCategoryHTML(category))
    .join("");

  // Animate skill bars on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillFills = entry.target.querySelectorAll(".skill-level-fill");
        skillFills.forEach((fill) => {
          const width = fill.style.width;
          fill.style.width = "0%";
          setTimeout(() => {
            fill.style.width = width;
          }, 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category) => observer.observe(category));
}

// Projects Section
function initializeProjectsSection() {
  const projectsGrid = document.getElementById("projectsGrid");

  // Sort projects by completion date (most recent first)
  const sortedProjects = [...projects].sort(
    (a, b) => b.completionDate - a.completionDate
  );

  projectsGrid.innerHTML = sortedProjects
    .map((project, index) => createProjectCardHTML(project, index))
    .join("");
}

// Contact Section
function initializeContactSection() {
  const contactDetails = document.getElementById("contactDetails");
  const contactForm = document.getElementById("contactForm");

  // Display contact information
  contactDetails.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>
        </div>
        ${socialLinks
          .map(
            (link) => `
            <div class="contact-item">
                <i class="${link.icon}"></i>
                <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.platform}</a>
            </div>
        `
          )
          .join("")}
    `;

  // Handle form submission
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Clear previous errors
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.textContent = ""));
    document.getElementById("formStatus").className = "form-status";

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Validate form
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      // Display errors
      Object.keys(errors).forEach((field) => {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
          errorElement.textContent = errors[field];
        }
      });
      return;
    }

    // Disable submit button
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      // Send email
      const result = await sendEmail(formData);

      // Show success message
      const formStatus = document.getElementById("formStatus");
      formStatus.className = "form-status success";
      formStatus.textContent = result.message;

      // Reset form
      contactForm.reset();
    } catch (error) {
      // Show error message
      const formStatus = document.getElementById("formStatus");
      formStatus.className = "form-status error";
      formStatus.textContent =
        error.message ||
        "Failed to send message. Please try again or email directly.";
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}

// Footer
function initializeFooter() {
  const currentYear = document.getElementById("currentYear");
  const footerSocial = document.getElementById("footerSocial");

  currentYear.textContent = new Date().getFullYear();
  footerSocial.innerHTML = socialLinks
    .map((link) => createSocialLinkHTML(link))
    .join("");
}

// Certificate Modal Functions
function openCertificateModal(imageSrc, certName) {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("certificateImage");
  const caption = document.getElementById("certificateCaption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.textContent = certName;
  document.body.style.overflow = "hidden";
}

function closeCertificateModal() {
  const modal = document.getElementById("certificateModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside the image
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("certificateModal");
  const closeBtn = document.querySelector(".modal-close");

  if (closeBtn) {
    closeBtn.onclick = closeCertificateModal;
  }

  if (modal) {
    modal.onclick = function (event) {
      if (event.target === modal) {
        closeCertificateModal();
      }
    };
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeCertificateModal();
    }
  });
});

// Make function globally available
window.openCertificateModal = openCertificateModal;
