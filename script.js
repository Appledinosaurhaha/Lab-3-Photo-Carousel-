// Sequence 1 Data (Beginning -> Middle -> End) using verified Unsplash photography
const sequence1 = [
    {
        phase: "Step 1 of 3: Beginning",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        caption: "A modern doorway waiting at the end of a long day."
    },
    {
        phase: "Step 2 of 3: Middle",
        url: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
        caption: "Getting ready to step inside and settle down."
    },
    {
        phase: "Step 3 of 3: End",
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        caption: "Safely inside the secure room, completely relaxed."
    }
];

// Sequence 2 Data (Reusing the SAME 3 images in a different narrative order!)
const sequence2 = [
    {
        phase: "Step 1 of 3: Beginning",
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        caption: "Waking up inside the secure room, realizing you are late."
    },
    {
        phase: "Step 2 of 3: Middle",
        url: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
        caption: "Grabbing your things quickly as you head out."
    },
    {
        phase: "Step 3 of 3: End",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        caption: "Slamming the door shut behind you as you rush off into the world."
    }
];

// Variables tracking state
let currentSequence = 1;
let currentIndex = 0;

// DOM Element Selectors
const seq1Btn = document.getElementById("seq1-btn");
const seq2Btn = document.getElementById("seq2-btn");
const storyTitle = document.getElementById("story-title");
const storyPhase = document.getElementById("story-phase");
const storyImage = document.getElementById("story-image");
const storyCaption = document.getElementById("story-caption");
const nextStepBtn = document.getElementById("next-step-btn");

// DOM Manipulation Function to update view
function updateDisplay() {
    let activeData;
    
    if (currentSequence === 1) {
        activeData = sequence1[currentIndex];
        storyTitle.textContent = "Sequence 1: Coming Home";
    } else {
        activeData = sequence2[currentIndex];
        storyTitle.textContent = "Sequence 2: Leaving in a Hurry";
    }

    storyPhase.textContent = activeData.phase;
    storyImage.src = activeData.url;
    storyCaption.textContent = activeData.caption;
}

// Event Listener for Sequence 1 Button
seq1Btn.addEventListener("click", function() {
    currentSequence = 1;
    currentIndex = 0;
    seq1Btn.classList.add("active");
    seq2Btn.classList.remove("active");
    updateDisplay();
});

// Event Listener for Sequence 2 Button
seq2Btn.addEventListener("click", function() {
    currentSequence = 2;
    currentIndex = 0;
    seq2Btn.classList.add("active");
    seq1Btn.classList.remove("active");
    updateDisplay();
});

// Event Listener for Next Step Button (Cycles Beginning -> Middle -> End)
nextStepBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex > 2) {
        currentIndex = 0; // Loop back to start
    }
    updateDisplay();
});