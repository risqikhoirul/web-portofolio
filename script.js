document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. THEME TOGGLE (DARK DEFAULT PER DESIGN.md + DERIVED LIGHT MODE)
     ========================================================================== */
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  const THEME_STORAGE_KEY = "risqi_portfolio_theme";

  function applyTheme(theme) {
    const validTheme = theme === "light" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", validTheme);

    if (themeToggleBtn && themeLabel) {
      const isLight = validTheme === "light";
      themeToggleBtn.setAttribute("aria-pressed", String(isLight));
      themeToggleBtn.setAttribute(
        "aria-label",
        isLight ? "Ganti ke mode gelap" : "Ganti ke mode terang"
      );
      themeLabel.textContent = isLight ? "Mode Gelap" : "Mode Terang";
    }
  }

  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
    } else {
      applyTheme("dark");
    }
  } catch {
    applyTheme("dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlEl.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Ignore storage restrictions in private browsing
      }
    });
  }

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");

  function setMobileDrawerState(isOpen) {
    if (!mobileMenuBtn || !mobileDrawer) return;
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    mobileMenuBtn.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
    const menuText = mobileMenuBtn.querySelector(".mobile-menu-text");
    if (menuText) {
      menuText.textContent = isOpen ? "Tutup" : "Menu";
    }
    mobileDrawer.hidden = !isOpen;
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      setMobileDrawerState(!isExpanded);
    });

    const mobileLinks = mobileDrawer.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setMobileDrawerState(false);
      });
    });
  }

  /* ==========================================================================
     3. BANPANG MOBILE WEB INTERACTIVE WORKBENCH (WITH LOADING & ERROR STATES)
     ========================================================================== */
  const screenTabs = Array.from(document.querySelectorAll(".screen-tab"));
  const stagePanel = document.getElementById("banpang-stage-panel");
  const stageBadge = document.getElementById("stage-mode-badge");
  const stageTitle = document.getElementById("stage-title");
  const stageDesc = document.getElementById("stage-desc");
  const stageLoading = document.getElementById("stage-loading");
  const stageError = document.getElementById("stage-error");
  const stageRetryBtn = document.getElementById("stage-retry-btn");
  const stageCanvas = document.getElementById("stage-canvas");
  const stageImage = document.getElementById("stage-image");
  const stageVideo = document.getElementById("stage-video");
  const stageFullscreenBtn = document.getElementById("stage-fullscreen-btn");

  let activeTabElement = screenTabs[0] || null;

  function showStageState(state) {
    if (!stageLoading || !stageError || !stageCanvas) return;
    stageLoading.hidden = state !== "loading";
    stageError.hidden = state !== "error";
    stageCanvas.hidden = state !== "ready";
  }

  function activateScreenTab(tabEl) {
    if (!tabEl) return;
    activeTabElement = tabEl;

    screenTabs.forEach((t) => {
      const isCurrent = t === tabEl;
      t.classList.toggle("active", isCurrent);
      t.setAttribute("aria-selected", String(isCurrent));
    });

    if (stagePanel && tabEl.id) {
      stagePanel.setAttribute("aria-labelledby", tabEl.id);
    }

    const mode = tabEl.getAttribute("data-mode") || "image";
    const src = tabEl.getAttribute("data-src") || "";
    const title = tabEl.getAttribute("data-title") || "";
    const desc = tabEl.getAttribute("data-desc") || "";
    const width = tabEl.getAttribute("data-width") || "1280";
    const height = tabEl.getAttribute("data-height") || "2240";

    if (stageTitle) stageTitle.textContent = title;
    if (stageDesc) stageDesc.textContent = desc;

    if (mode === "video") {
      if (stageBadge) stageBadge.textContent = "PEMUTAR VIDEO DEMO";
      if (stageFullscreenBtn) stageFullscreenBtn.hidden = true;
      if (stageImage) stageImage.hidden = true;

      if (stageVideo) {
        stageVideo.hidden = false;
        showStageState("ready");
        stageVideo.play().catch(() => {
          // Autoplay might require user click on video controls
        });
      }
    } else {
      if (stageBadge) stageBadge.textContent = "PRATINJAU VISUAL";
      if (stageFullscreenBtn) stageFullscreenBtn.hidden = false;

      if (stageVideo) {
        stageVideo.pause();
        stageVideo.hidden = true;
      }

      if (stageImage) {
        stageImage.hidden = false;
        showStageState("loading");

        const tempImg = new Image();
        tempImg.onload = () => {
          stageImage.src = src;
          stageImage.alt = title;
          stageImage.setAttribute("width", width);
          stageImage.setAttribute("height", height);
          showStageState("ready");
        };
        tempImg.onerror = () => {
          showStageState("error");
        };
        tempImg.src = src;
      }
    }
  }

  screenTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateScreenTab(tab);
    });

    tab.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextTab = screenTabs[(index + 1) % screenTabs.length];
        nextTab.focus();
        activateScreenTab(nextTab);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevTab =
          screenTabs[(index - 1 + screenTabs.length) % screenTabs.length];
        prevTab.focus();
        activateScreenTab(prevTab);
      }
    });
  });

  if (stageRetryBtn) {
    stageRetryBtn.addEventListener("click", () => {
      if (activeTabElement) {
        activateScreenTab(activeTabElement);
      }
    });
  }

  /* ==========================================================================
     4. PROJECT ARCHIVE FILTER & KEYWORD SEARCH (WITH EMPTY STATE)
     ========================================================================== */
  const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
  const searchInput = document.getElementById("project-search");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const resetArchiveBtn = document.getElementById("reset-archive-btn");
  const archiveCount = document.getElementById("archive-count");
  const archiveEmpty = document.getElementById("archive-empty");
  const projectCards = Array.from(document.querySelectorAll(".project-card"));

  let currentCategory = "all";
  let currentQuery = "";

  function updateProjectArchive() {
    const normalizedQuery = currentQuery.trim().toLowerCase();
    let visibleCount = 0;

    if (clearSearchBtn) {
      clearSearchBtn.hidden = normalizedQuery.length === 0;
    }

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category") || "";
      const keywords = (card.getAttribute("data-keywords") || "").toLowerCase();
      const textContent = (card.textContent || "").toLowerCase();

      const matchesCategory =
        currentCategory === "all" || category === currentCategory;
      const matchesQuery =
        normalizedQuery === "" ||
        keywords.includes(normalizedQuery) ||
        textContent.includes(normalizedQuery);

      const isVisible = matchesCategory && matchesQuery;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (archiveCount) {
      archiveCount.textContent = `Menampilkan ${visibleCount} dari ${projectCards.length} proyek terverifikasi.`;
    }

    if (archiveEmpty) {
      archiveEmpty.hidden = visibleCount > 0;
    }
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCategory = btn.getAttribute("data-filter") || "all";
      filterBtns.forEach((b) => {
        const isSelected = b === btn;
        b.classList.toggle("active", isSelected);
        b.setAttribute("aria-pressed", String(isSelected));
      });
      updateProjectArchive();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentQuery = e.target.value || "";
      updateProjectArchive();
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentQuery = "";
      updateProjectArchive();
      searchInput.focus();
    });
  }

  if (resetArchiveBtn) {
    resetArchiveBtn.addEventListener("click", () => {
      currentCategory = "all";
      currentQuery = "";
      if (searchInput) searchInput.value = "";
      filterBtns.forEach((b) => {
        const isAll = b.getAttribute("data-filter") === "all";
        b.classList.toggle("active", isAll);
        b.setAttribute("aria-pressed", String(isAll));
      });
      updateProjectArchive();
    });
  }

  /* ==========================================================================
     5. BANGKIT TRANSCRIPT COLLAPSIBLE DRAWER
     ========================================================================== */
  const toggleTranscriptBtn = document.getElementById("toggle-transcript-btn");
  const transcriptDrawer = document.getElementById("bangkit-transcript-drawer");

  if (toggleTranscriptBtn && transcriptDrawer) {
    toggleTranscriptBtn.addEventListener("click", () => {
      const isExpanded =
        toggleTranscriptBtn.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;
      toggleTranscriptBtn.setAttribute("aria-expanded", String(nextState));
      transcriptDrawer.hidden = !nextState;
      toggleTranscriptBtn.textContent = nextState
        ? "Sembunyikan Rincian Transkrip"
        : "Lihat Rincian Transkrip (13 Mata Kuliah)";
    });
  }

  /* ==========================================================================
     6. ACCESSIBLE EVIDENCE & IMAGE LIGHTBOX MODAL (R-26, R-32)
     ========================================================================== */
  const evidenceModal = document.getElementById("evidence-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalTriggers = Array.from(document.querySelectorAll(".modal-trigger"));

  let lastFocusedTrigger = null;

  function openEvidenceModal({ src, title, caption }, triggerEl) {
    if (!evidenceModal || !modalImage || !modalTitle || !modalCaption) return;
    lastFocusedTrigger = triggerEl || document.activeElement;

    modalTitle.textContent = title || "Pratinjau Dokumen";
    modalImage.src = src;
    modalImage.alt = title || "Pratinjau dokumen bukti";
    modalCaption.textContent = caption || "";

    evidenceModal.hidden = false;
    document.body.style.overflow = "hidden";
    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }

  function closeEvidenceModal() {
    if (!evidenceModal || evidenceModal.hidden) return;
    evidenceModal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
  }

  modalTriggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      openEvidenceModal(
        {
          src: btn.getAttribute("data-modal-image") || "",
          title: btn.getAttribute("data-modal-title") || "",
          caption: btn.getAttribute("data-modal-caption") || "",
        },
        btn
      );
    });
  });

  if (stageFullscreenBtn && stageImage) {
    stageFullscreenBtn.addEventListener("click", () => {
      openEvidenceModal(
        {
          src: stageImage.src,
          title: stageTitle ? stageTitle.textContent : "Banpang Mobile Web",
          caption: stageDesc ? stageDesc.textContent : "",
        },
        stageFullscreenBtn
      );
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeEvidenceModal);
  }

  if (evidenceModal) {
    evidenceModal.addEventListener("click", (e) => {
      if (e.target === evidenceModal) {
        closeEvidenceModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (evidenceModal && !evidenceModal.hidden) {
        closeEvidenceModal();
      } else if (
        mobileMenuBtn &&
        mobileMenuBtn.getAttribute("aria-expanded") === "true"
      ) {
        setMobileDrawerState(false);
        mobileMenuBtn.focus();
      }
    }
  });

  /* ==========================================================================
     7. COPY TO CLIPBOARD CONTROLS
     ========================================================================== */
  const copyBtns = Array.from(document.querySelectorAll(".copy-btn"));

  copyBtns.forEach((btn) => {
    const originalText = btn.textContent;
    btn.addEventListener("click", async () => {
      const valueToCopy = btn.getAttribute("data-copy") || "";
      if (!valueToCopy) return;

      try {
        await navigator.clipboard.writeText(valueToCopy);
        btn.textContent = "Tersalin!";
      } catch {
        // Fallback for older browsers
        const tempInput = document.createElement("input");
        tempInput.value = valueToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        btn.textContent = "Tersalin!";
      }

      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    });
  });

  /* ==========================================================================
     8. DIRECT CONTACT DISPATCH COMPOSER (WHATSAPP & EMAIL)
     ========================================================================== */
  const dispatchForm = document.getElementById("dispatch-form");
  const formFeedback = document.getElementById("form-feedback");

  if (dispatchForm) {
    let selectedChannel = "whatsapp";
    const submitButtons = dispatchForm.querySelectorAll('button[type="submit"]');
    submitButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedChannel = btn.getAttribute("data-channel") || "whatsapp";
      });
    });

    dispatchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("sender-name");
      const contactInput = document.getElementById("sender-contact");
      const topicSelect = document.getElementById("sender-topic");
      const messageInput = document.getElementById("sender-message");

      const nameVal = nameInput ? nameInput.value.trim() : "";
      const contactVal = contactInput ? contactInput.value.trim() : "";
      const topicVal = topicSelect ? topicSelect.value.trim() : "Diskusi Umum";
      const messageVal = messageInput ? messageInput.value.trim() : "";

      if (!nameVal || !contactVal || !messageVal) {
        if (formFeedback) {
          formFeedback.hidden = false;
          formFeedback.textContent =
            "Mohon lengkapi Nama, Kontak Balasan, dan Rincian Pesan sebelum mengirim.";
        }
        if (!nameVal && nameInput) nameInput.focus();
        else if (!contactVal && contactInput) contactInput.focus();
        else if (!messageVal && messageInput) messageInput.focus();
        return;
      }

      const structuredBody = [
        `Halo M. Khoirul Risqi,`,
        ``,
        `Perkenalkan saya ${nameVal} (${contactVal}).`,
        `Keperluan: ${topicVal}`,
        ``,
        `Pesan:`,
        messageVal,
      ].join("\n");

      if (formFeedback) {
        formFeedback.hidden = false;
        formFeedback.textContent =
          selectedChannel === "email"
            ? "Membuka aplikasi Email Anda dengan draf pesan yang telah disiapkan..."
            : "Mengarahkan ke WhatsApp (0852-3318-5875) dengan draf pesan Anda...";
      }

      if (selectedChannel === "email") {
        const subject = encodeURIComponent(`[Portofolio] ${topicVal} - ${nameVal}`);
        const body = encodeURIComponent(structuredBody);
        window.location.href = `mailto:risqisgb@gmail.com?subject=${subject}&body=${body}`;
      } else {
        const waText = encodeURIComponent(structuredBody);
        window.open(
          `https://wa.me/6285233185875?text=${waText}`,
          "_blank",
          "noopener,noreferrer"
        );
      }
    });
  }
});

