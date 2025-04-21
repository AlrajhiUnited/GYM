document.addEventListener('DOMContentLoaded', () => {

    // --- Final Workout Plan Data (with Alternatives) ---
    const workoutPlan = {
        "السبت": [ // صدر (رئيسي) + ترايسبس (متوسط)
            { name_ar: "ضغط بالدامبل على بنش مائل", name_en: "Incline Dumbbell Press", sets: 4, reps: "8-12", rest: "60-90s", primary: "الصدر العلوي", primary_en: "Upper Chest", secondary: ["الكتف الأمامي", "الترايسبس"], secondary_en: ["Anterior Deltoid", "Triceps"], targetGroup: "Chest", notes: null, alternative_ar: "جهاز ضغط الصدر المائل", alternative_en:"Incline Chest Press Machine" },
            { name_ar: "ضغط بالبار على بنش مستوي", name_en: "Flat Barbell Press", sets: 4, reps: "6-10", rest: "60-90s", primary: "الصدر الأوسط", primary_en: "Mid Chest", secondary: ["الكتف الأمامي", "الترايسبس"], secondary_en: ["Anterior Deltoid", "Triceps"], targetGroup: "Chest", notes: null, alternative_ar: "جهاز ضغط الصدر المستوي", alternative_en:"Chest Press Machine" },
            { name_ar: "غطس للصدر", name_en: "Chest Dips", sets: 3, reps: "8-12", rest: "60s", primary: "الصدر السفلي، الترايسبس", primary_en: "Lower Chest, Triceps", secondary: ["الكتف الأمامي"], secondary_en: ["Anterior Deltoid"], targetGroup: "Chest", notes: null, alternative_ar: "جهاز الغطس للصدر (بتركيز الصدر)", alternative_en:"Dip Machine (Chest Focus)" },
            { name_ar: "ضغط بار بقبضة ضيقة", name_en: "Close-Grip Bench Press", sets: 4, reps: "8-10", rest: "60-90s", primary: "الترايسبس", primary_en: "Triceps Brachii", secondary: ["الصدر", "الكتف الأمامي"], secondary_en: ["Chest", "Anterior Deltoid"], targetGroup: "Triceps", notes: null, alternative_ar: "جهاز الغطس للترايسبس", alternative_en:"Dip Machine (Triceps Focus)" },
            { name_ar: "مد الحبل فوق الرأس", name_en: "Overhead Rope Extension", sets: 3, reps: "12-15", rest: "60s", primary: "الترايسبس (الرأس الطويل)", primary_en: "Triceps (Long Head)", secondary: [], secondary_en: [], targetGroup: "Triceps", notes: null, alternative_ar: "تمرين كابل بالفعل", alternative_en:"Cable Exercise" }
        ],
        "الأحد": [ // ظهر (رئيسي) + بايسبس (متوسط) + جذع
            { name_ar: "عقلة", name_en: "Pull-ups", sets: 4, reps: "AMRAP / 8-12", rest: "90s", primary: "الظهر العريض", primary_en: "Latissimus Dorsi", secondary: ["البايسبس", "الترابيس", "المعينات"], secondary_en: ["Biceps", "Trapezius", "Rhomboids"], targetGroup: "Back", notes: null, alternative_ar: "جهاز السحب العلوي واسع / جهاز العقلة المساعدة", alternative_en:"Wide Lat Pulldown / Assisted Pull-up Machine" },
            { name_ar: "تجديف بالبار (أداء صارم)", name_en: "Barbell Row (Strict Form)", sets: 4, reps: "8-10", rest: "60-90s", primary: "الظهر العريض، الترابيس الوسطى", primary_en: "Latissimus Dorsi, Mid Trapezius", secondary: ["البايسبس", "الكتف الخلفي", "أسفل الظهر"], secondary_en: ["Biceps", "Posterior Deltoid", "Erector Spinae"], targetGroup: "Back", notes: null, alternative_ar: "جهاز التجديف الأفقي (بمسند للصدر)", alternative_en:"Chest Supported Row Machine" },
            { name_ar: "تجديف بالكابل جلوساً (قبضة ضيقة)", name_en: "Seated Cable Row (Close Grip)", sets: 3, reps: "10-12", rest: "60s", primary: "الظهر الأوسط، المعينات", primary_en: "Mid Back, Rhomboids", secondary: ["البايسبس", "الظهر العريض"], secondary_en: ["Biceps", "Latissimus Dorsi"], targetGroup: "Back", notes: null, alternative_ar: "تمرين كابل بالفعل", alternative_en:"Cable Exercise" },
            { name_ar: "مرجحة بايسبس بالبار وقوفاً", name_en: "Standing Barbell Curl", sets: 4, reps: "8-10", rest: "60-90s", primary: "البايسبس", primary_en: "Biceps Brachii", secondary: ["العضدية", "الساعد"], secondary_en: ["Brachialis", "Forearm"], targetGroup: "Biceps", notes: null, alternative_ar: "جهاز مرجحة البايسبس", alternative_en:"Bicep Curl Machine" },
            { name_ar: "مرجحة مطرقة بالدامبل على بنش مائل", name_en: "Incline Dumbbell Hammer Curl", sets: 3, reps: "10-12", rest: "60s", primary: "العضدية، الساعد", primary_en: "Brachialis, Forearm", secondary: ["البايسبس"], secondary_en: ["Biceps Brachii"], targetGroup: "Biceps", notes: null, alternative_ar: "مرجحة المطرقة بالكابل (حبل)", alternative_en:"Cable Hammer Curl (Rope)" }
        ],
        "الاثنين": [ // أرجل (تركيز على الأمان)
            { name_ar: "ضغط الأرجل", name_en: "Leg Press", sets: 4, reps: "10-15", rest: "90s", primary: "الفخذ الأمامية، الأرداف", primary_en: "Quadriceps, Glutes", secondary: ["أوتار الركبة", "العضلات الضامة"], secondary_en: ["Hamstrings", "Adductors"], targetGroup: "Legs", notes: null, alternative_ar: "تمرين جهاز بالفعل", alternative_en:"Machine Exercise" },
            { name_ar: "رفعة مميتة رومانية بالدامبل", name_en: "Dumbbell Romanian Deadlift (RDL)", sets: 4, reps: "10-12", rest: "60-90s", primary: "أوتار الركبة، الأرداف", primary_en: "Hamstrings, Glutes", secondary: ["أسفل الظهر", "الساعد"], secondary_en: ["Erector Spinae", "Forearms"], targetGroup: "Legs", notes: "تأكد من الأداء الصحيح لحماية الظهر!", alternative_ar: "جهاز ثني الأرجل (جلوساً/رقوداً)", alternative_en:"Seated/Lying Leg Curl Machine" },
            { name_ar: "سكوات الكأس بالدامبل", name_en: "Goblet Squat", sets: 3, reps: "10-12", rest: "60s", primary: "الفخذ الأمامية، الأرداف", primary_en: "Quadriceps, Glutes", secondary: ["أوتار الركبة", "الجذع"], secondary_en: ["Hamstrings", "Core"], targetGroup: "Legs", notes: null, alternative_ar: "جهاز هاك سكوات / جهاز V-سكوات", alternative_en:"Hack Squat Machine / V-Squat Machine" },
            { name_ar: "ثني الأرجل رقوداً", name_en: "Lying Leg Curls", sets: 3, reps: "12-15", rest: "45-60s", primary: "أوتار الركبة", primary_en: "Hamstrings", secondary: ["السمانة"], secondary_en: ["Calves"], targetGroup: "Legs", notes: null, alternative_ar: "تمرين جهاز بالفعل", alternative_en:"Machine Exercise" },
            { name_ar: "دفع الورك بالبار", name_en: "Barbell Hip Thrust", sets: 4, reps: "8-12", rest: "90s", primary: "الأرداف", primary_en: "Glutes", secondary: ["أوتار الركبة", "أسفل الظهر"], secondary_en: ["Hamstrings", "Erector Spinae"], targetGroup: "Legs", notes: null, alternative_ar: "جهاز دفع الورك / جهاز رفرفة الأرداف", alternative_en:"Hip Thrust Machine / Glute Kickback Machine" },
            { name_ar: "رفع السمانة وقوفاً", name_en: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "30-45s", primary: "السمانة (الخارجية)", primary_en: "Calves (Gastrocnemius)", secondary: ["عضلة السوليس"], secondary_en: ["Soleus"], targetGroup: "Calves", notes: null, alternative_ar: "جهاز رفع السمانة وقوفاً / جهاز ضغط الأرجل", alternative_en:"Standing Calf Raise Machine / Leg Press Machine" },
            { name_ar: "بلانك", name_en: "Plank", sets: 3, reps: "60 ثانية", rest: "60s", primary: "البطن، أسفل الظهر", primary_en: "Core", secondary: [], secondary_en: [], targetGroup: "Core", notes: null, alternative_ar: "تمرين وزن جسم", alternative_en:"Bodyweight Exercise" }
        ],
        "الثلاثاء": [ // أكتاف (تركيز أمامي/جانبي) + ترايسبس (ثقيل)
            { name_ar: "ضغط كتف بالدامبل جلوساً", name_en: "Seated Dumbbell Shoulder Press", sets: 4, reps: "8-12", rest: "60-90s", primary: "الكتف الأمامي والجانبي", primary_en: "Anterior & Medial Deltoid", secondary: ["الترايسبس", "الترابيس"], secondary_en: ["Triceps", "Trapezius"], targetGroup: "Shoulders", notes: null, alternative_ar: "جهاز ضغط الكتف", alternative_en:"Shoulder Press Machine" },
            { name_ar: "رفع جانبي بالدامبل", name_en: "Dumbbell Lateral Raise", sets: 5, reps: "10-15", rest: "45-60s", primary: "الكتف الجانبي", primary_en: "Medial Deltoid", secondary: ["الكتف الأمامي/الخلفي"], secondary_en: ["Anterior/Posterior Deltoid"], targetGroup: "Shoulders", notes: null, alternative_ar: "جهاز الرفع الجانبي", alternative_en:"Lateral Raise Machine" },
            { name_ar: "رفع جانبي بالكابل", name_en: "Cable Lateral Raise", sets: 3, reps: "12-15", rest: "45-60s", primary: "الكتف الجانبي", primary_en: "Medial Deltoid", secondary: ["الترابيس العلوية"], secondary_en: ["Upper Trapezius"], targetGroup: "Shoulders", notes: "آخر مجموعة: دروب سيت (اختياري)", alternative_ar: "تمرين كابل بالفعل", alternative_en:"Cable Exercise" },
            { name_ar: "رفع أمامي بالدامبل (اختياري)", name_en: "Dumbbell Front Raise (Optional)", sets: 3, reps: "10-12", rest: "45-60s", primary: "الكتف الأمامي", primary_en: "Anterior Deltoid", secondary: ["الكتف الجانبي"], secondary_en: ["Medial Deltoid"], targetGroup: "Shoulders", notes: "أداء متحكم فيه", alternative_ar: "رفع أمامي بالكابل / جهاز ضغط الكتف", alternative_en:"Cable Front Raise / Shoulder Press Machine" },
            { name_ar: "تمرين فرنش برس (Skullcrushers)", name_en: "Skullcrushers (Lying Triceps Ext.)", sets: 4, reps: "8-12", rest: "60-90s", primary: "الترايسبس (جميع الرؤوس)", primary_en: "Triceps Brachii (All Heads)", secondary: [], secondary_en: [], targetGroup: "Triceps", notes: null, alternative_ar: "جهاز مد الترايسبس / جهاز الغطس", alternative_en:"Triceps Extension Machine / Dip Machine" },
            { name_ar: "دفع كابل ترايسبس (ذراع واحدة معكوسة)", name_en: "Single Arm Reverse Grip Pushdown", sets: 3, reps: "12-15", rest: "45-60s", primary: "الترايسبس (الرأس الأوسط)", primary_en: "Triceps (Medial Head)", secondary: ["الرأس الجانبي", "المرفقية"], secondary_en: ["Triceps (Lateral Head)", "Anconeus"], targetGroup: "Triceps", notes: "آخر مجموعة: دروب سيت (اختياري)", alternative_ar: "تمرين كابل بالفعل", alternative_en:"Cable Exercise" },
            { name_ar: "سحب الوجه بالحبل", name_en: "Face Pulls", sets: 4, reps: "15-20", rest: "45-60s", primary: "الكتف الخلفي، الترابيس", primary_en: "Posterior Deltoid, Trapezius", secondary: ["العضلات المدورة"], secondary_en: ["Rotator Cuff"], targetGroup: "Shoulders", notes: "ركز على الأداء لصحة الكتف", alternative_ar: "تمرين كابل بالفعل (أو جهاز الرفرفة الخلفية)", alternative_en:"Cable Exercise (or Rear Delt Fly Machine)" }
        ],
        "الأربعاء": [ // بايسبس (ثقيل) + ساعد + بطن
            { name_ar: "عقلة قبضة معكوسة (Chin-ups)", name_en: "Chin-ups (Underhand Grip)", sets: 3, reps: "AMRAP / 6-10", rest: "90s", primary: "البايسبس، الظهر العريض", primary_en: "Biceps, Latissimus Dorsi", secondary: ["الساعد"], secondary_en: ["Forearms"], targetGroup: "Biceps", notes: null, alternative_ar: "جهاز سحب علوي (قبضة معكوسة/ضيقة) / جهاز عقلة مساعد", alternative_en:"Underhand Lat Pulldown / Assisted Pull-up Machine" },
            { name_ar: "مرجحة بايسبس بالدامبل على بنش مائل", name_en: "Incline Dumbbell Curl", sets: 4, reps: "8-12", rest: "60s", primary: "البايسبس (الرأس الطويل)", primary_en: "Biceps (Long Head)", secondary: ["العضدية", "الساعد"], secondary_en: ["Brachialis", "Forearm"], targetGroup: "Biceps", notes: null, alternative_ar: "جهاز مرجحة البايسبس", alternative_en:"Bicep Curl Machine" },
            { name_ar: "مرجحة بريتشر (جهاز أو بار EZ)", name_en: "Preacher Curl (Machine or EZ Bar)", sets: 4, reps: "10-12", rest: "0 ثانية (سوبر سيت)", primary: "البايسبس (الرأس القصير)", primary_en: "Biceps (Short Head)", secondary: ["العضدية"], secondary_en: ["Brachialis"], targetGroup: "Biceps", notes: "سوبر سيت 1/2: أداء التمرين ثم الانتقال فوراً للتمرين التالي.", alternative_ar: "جهاز بريتشر كيرل (إذا لم يستخدم)", alternative_en:"Preacher Curl Machine (if not used)" },
            { name_ar: "مرجحة التركيز بالدامبل", name_en: "Concentration Curl", sets: 4, reps: "12-15", rest: "60 ثانية", primary: "البايسبس (قمة العضلة)", primary_en: "Biceps (Peak)", secondary: ["العضدية"], secondary_en: ["Brachialis"], targetGroup: "Biceps", notes: "سوبر سيت 2/2: بعد هذا التمرين استرح 60 ثانية. آخر مجموعة: دروب سيت (اختياري).", alternative_ar: "جهاز مرجحة البايسبس (تركيز على الانقباض)", alternative_en:"Bicep Curl Machine (Focus on Peak)" },
            { name_ar: "ثني الرسغ بالبار", name_en: "Barbell Wrist Curl", sets: 3, reps: "15-20", rest: "0 ثانية (سوبر سيت)", primary: "الساعد القابضة", primary_en: "Forearm Flexors", secondary: [], secondary_en: [], targetGroup: "Forearms", notes: "سوبر سيت 1/2. آخر مجموعة: دروب سيت (اختياري).", alternative_ar: "ثني الرسغ بالدامبل", alternative_en:"Dumbbell Wrist Curl" },
            { name_ar: "ثني الرسغ العكسي بالبار", name_en: "Reverse Barbell Wrist Curl", sets: 3, reps: "15-20", rest: "45 ثانية", primary: "الساعد الباسطة", primary_en: "Forearm Extensors", secondary: [], secondary_en: [], targetGroup: "Forearms", notes: "سوبر سيت 2/2. آخر مجموعة: دروب سيت (اختياري).", alternative_ar: "ثني الرسغ العكسي بالدامبل", alternative_en:"Dumbbell Reverse Wrist Curl" },
            { name_ar: "سحق بالكابل", name_en: "Cable Crunches", sets: 3, reps: "15-20", rest: "45-60s", primary: "البطن المستقيمة", primary_en: "Rectus Abdominis", secondary: ["الجوانب"], secondary_en: ["Obliques"], targetGroup: "Core", notes: null, alternative_ar: "جهاز تمرين البطن", alternative_en:"Ab Crunch Machine" },
            { name_ar: "رفع الساق المعلق / كرسي الكابتن", name_en: "Hanging Leg Raises / Captain's Chair", sets: 3, reps: "AMRAP / 15-20", rest: "60s", primary: "البطن السفلية، قابضات الفخذ", primary_en: "Lower Abs, Hip Flexors", secondary: ["الجوانب"], secondary_en: ["Obliques"], targetGroup: "Core", notes: null, alternative_ar: "جهاز رفع الركبة العمودي", alternative_en:"Vertical Knee Raise Machine" }
        ]
    };


    // --- Modal Elements (Added Alternative Placeholders) ---
    const modal = document.getElementById('exerciseModal');
    const modalExerciseNameAr = document.getElementById('modal-exercise-name-ar');
    const modalSets = document.getElementById('modal-sets');
    const modalReps = document.getElementById('modal-reps');
    const modalRest = document.getElementById('modal-rest');
    const modalPrimaryMuscle = document.getElementById('modal-primary-muscle');
    const modalPrimaryMuscleEn = document.getElementById('modal-primary-muscle-en');
    const modalSecondaryMuscle = document.getElementById('modal-secondary-muscle');
    const modalSecondaryMuscleEn = document.getElementById('modal-secondary-muscle-en');
    const modalAlternativeSection = document.getElementById('modal-alternative-section'); // Get section div
    const modalAlternativeAr = document.getElementById('modal-alternative-ar');       // Get alt AR p tag
    const modalAlternativeEn = document.getElementById('modal-alternative-en');       // Get alt EN p tag
    const modalNotes = document.getElementById('modal-notes');
    const closeButton = document.querySelector('.close-button');

    // --- Function to create Youtube URL ---
    function createYoutubeUrl(exerciseName) {
        const cleanName = exerciseName.replace(/ *\([^)]*\) */g, "");
        const query = encodeURIComponent(`${cleanName} tutorial`);
        return `https://www.youtube.com/results?search_query=${query}`;
    }

    // --- Function to generate table for a day ---
    function generateWorkoutTable(dayContainerId, dayExercises, dayKey) {
        const container = document.getElementById(dayContainerId);
        if (!container) return;

        const table = document.createElement('table');
        table.className = 'workout-table';

        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        const headers = ["التمرين", "الجلسات × التكرارات", "الراحة"];
        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();
        dayExercises.forEach((exercise, index) => {
            const row = tbody.insertRow();
            row.className = 'exercise-row';
            row.setAttribute('data-group', (exercise.targetGroup && typeof exercise.targetGroup === 'string') ? exercise.targetGroup.toLowerCase() : 'unknown');
            row.setAttribute('data-exercise-index', index);
            row.setAttribute('data-day-key', dayKey);

            const cellName = row.insertCell();
            cellName.className = 'exercise-name-cell';
            // Extract first part of note for concise display in table
            let shortNote = '';
            if (exercise.notes) {
                if (exercise.notes.toLowerCase().includes('سوبر سيت 1/2')) shortNote = 'سوبر سيت 1/2';
                else if (exercise.notes.toLowerCase().includes('سوبر سيت 2/2')) shortNote = 'سوبر سيت 2/2';
                else if (exercise.notes.toLowerCase().includes('دروب سيت')) shortNote = 'آخر مجموعة: دروب سيت';
                else shortNote = exercise.notes.substring(0, 20) + '...'; // Generic shortening
            }
            const noteHtml = shortNote ? `<span class="tech-note">${shortNote}</span>` : '';
            cellName.innerHTML = `
                <span class="name-ar">${exercise.name_ar}</span>
                ${noteHtml}
                <a href="${createYoutubeUrl(exercise.name_en)}" target="_blank" class="exercise-link" onclick="event.stopPropagation()">
                    ${exercise.name_en} (شاهد الفيديو)
                </a>
            `;

            const cellSetsReps = row.insertCell();
            cellSetsReps.className = 'sets-reps-cell';
            cellSetsReps.textContent = `${exercise.sets} × ${exercise.reps}`;

            const cellRest = row.insertCell();
            cellRest.className = 'rest-cell';
            cellRest.textContent = exercise.rest;

            // Click listener for modal
            row.addEventListener('click', () => {
                const day = row.getAttribute('data-day-key');
                const exerciseIndex = parseInt(row.getAttribute('data-exercise-index'), 10);
                if (!day || isNaN(exerciseIndex) || !workoutPlan[day]) return;

                const clickedExercise = workoutPlan[day][exerciseIndex];
                if (!clickedExercise) return;

                // Populate the modal basic info
                modalExerciseNameAr.textContent = clickedExercise.name_ar;
                modalSets.textContent = clickedExercise.sets;
                modalReps.textContent = clickedExercise.reps;
                modalRest.textContent = clickedExercise.rest;
                modalPrimaryMuscle.textContent = clickedExercise.primary || 'N/A';
                modalPrimaryMuscleEn.textContent = clickedExercise.primary_en || 'N/A';
                modalSecondaryMuscle.textContent = Array.isArray(clickedExercise.secondary) && clickedExercise.secondary.length > 0 ? clickedExercise.secondary.join('، ') : 'لا يوجد';
                modalSecondaryMuscleEn.textContent = Array.isArray(clickedExercise.secondary_en) && clickedExercise.secondary_en.length > 0 ? clickedExercise.secondary_en.join(', ') : 'None';

                 // Populate and display notes in modal if they exist
                if (clickedExercise.notes) {
                    modalNotes.textContent = "ملاحظة: " + clickedExercise.notes;
                    modalNotes.style.display = 'block';
                } else {
                    modalNotes.style.display = 'none';
                }

                // Populate and display Alternatives in modal if they exist
                if (clickedExercise.alternative_ar && clickedExercise.alternative_en) {
                    modalAlternativeAr.textContent = clickedExercise.alternative_ar;
                    modalAlternativeEn.textContent = `(${clickedExercise.alternative_en})`;
                    modalAlternativeSection.style.display = 'block'; // Show the alternative section
                } else {
                    modalAlternativeSection.style.display = 'none'; // Hide the alternative section if no alternative
                }


                modal.style.display = 'block';
            });
        });

        container.appendChild(table);
    }

     // Mapping Day Keys to HTML container IDs
     const dayIdMapping = {
        "السبت": "day-saturday",
        "الأحد": "day-sunday",
        "الاثنين": "day-monday",
        "الثلاثاء": "day-tuesday",
        "الأربعاء": "day-wednesday"
     };

    // --- Generate Tables for Each Day ---
    Object.keys(workoutPlan).forEach(dayKey => {
        const dayId = dayIdMapping[dayKey];
        if (dayId) {
             generateWorkoutTable(dayId, workoutPlan[dayKey], dayKey);
        }
    });

    // --- Modal Close Logic ---
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
