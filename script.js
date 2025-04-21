// --- Workout Data Object ---
const workoutPlan = {
    days: [
        {
            dayName: "السبت: صدر (رئيسي) + ترايسبس (متوسط)",
            exercises: [
                {
                    nameAr: "ضغط الصدر بالدمبل على بنش مستوي",
                    nameEn: "Dumbbell Bench Press",
                    setsReps: "4 × 8-12",
                    rest: "60-90 ثانية",
                    primaryMuscleAr: "الصدر (الأوسط)",
                    primaryMuscleEn: "Chest (Middle Pecs)",
                    secondaryMuscleAr: "الكتف الأمامي، الترايسبس",
                    secondaryMuscleEn: "Anterior Deltoids, Triceps",
                    alternativeAr: "جهاز ضغط الصدر",
                    alternativeEn: "Machine Chest Press",
                    notes: "التركيز على التحكم في النزول.",
                    muscleGroupColor: "صدر"
                },
                {
                    nameAr: "ضغط الصدر بالدمبل على بنش مائل",
                    nameEn: "Incline Dumbbell Press",
                    setsReps: "3 × 10-12",
                    rest: "60-90 ثانية",
                    primaryMuscleAr: "الصدر (العلوي)",
                    primaryMuscleEn: "Chest (Upper Pecs)",
                    secondaryMuscleAr: "الكتف الأمامي، الترايسبس",
                    secondaryMuscleEn: "Anterior Deltoids, Triceps",
                    alternativeAr: "جهاز ضغط الصدر المائل",
                    alternativeEn: "Incline Machine Press",
                    notes: "زاوية ميل 30-45 درجة لاستهداف الجزء العلوي من الصدر.",
                    muscleGroupColor: "صدر"
                },
                {
                    nameAr: "تفتيح الصدر بالدمبل على بنش مستوي",
                    nameEn: "Dumbbell Flyes",
                    setsReps: "3 × 12-15",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الصدر",
                    primaryMuscleEn: "Chest (Pecs)",
                    secondaryMuscleAr: "الكتف الأمامي",
                    secondaryMuscleEn: "Anterior Deltoids",
                    alternativeAr: "جهاز تفتيح الصدر (Pec Deck) أو تفتيح بالكابل",
                    alternativeEn: "Pec Deck Machine or Cable Flyes",
                    notes: "التركيز على مدى الحركة الكامل والإحساس بالتمدد والانقباض.",
                    muscleGroupColor: "صدر"
                },
                {
                    nameAr: "تمرين دفع الكابل للأسفل للترايسبس (حبل أو بار)",
                    nameEn: "Triceps Pushdown (Rope or Bar)",
                    setsReps: "4 × 10-12",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الترايسبس (جميع الرؤوس)",
                    primaryMuscleEn: "Triceps (All Heads)",
                    secondaryMuscleAr: "الساعد",
                    secondaryMuscleEn: "Forearms",
                    alternativeAr: "جهاز دفع الترايسبس للأسفل",
                    alternativeEn: "Triceps Pushdown Machine",
                    notes: "الحفاظ على ثبات المرفقين.",
                    muscleGroupColor: "ترايسبس"
                },
                {
                    nameAr: "تمديد علوي للترايسبس بالدمبل بكلتا اليدين",
                    nameEn: "Overhead Dumbbell Extension",
                    setsReps: "3 × 12-15",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الترايسبس (الرأس الطويل)",
                    primaryMuscleEn: "Triceps (Long Head)",
                    secondaryMuscleAr: "الكتف",
                    secondaryMuscleEn: "Shoulders",
                    alternativeAr: "تمديد علوي بالكابل",
                    alternativeEn: "Cable Overhead Extension",
                    notes: "التركيز على تمديد الترايسبس بالكامل.",
                    muscleGroupColor: "ترايسبس"
                }
            ]
        },
        {
            dayName: "الأحد: ظهر (رئيسي) + بايسبس (متوسط) + جذع",
            exercises: [
                {
                    nameAr: "السحب الأمامي للأسفل بقبضة واسعة",
                    nameEn: "Lat Pulldown (Wide Grip)",
                    setsReps: "4 × 8-12",
                    rest: "60-90 ثانية",
                    primaryMuscleAr: "الظهر العريض (Lats)",
                    primaryMuscleEn: "Latissimus Dorsi",
                    secondaryMuscleAr: "البايسبس، الظهر الأوسط، الكتف الخلفي",
                    secondaryMuscleEn: "Biceps, Mid-Back, Rear Deltoids",
                    alternativeAr: "جهاز السحب الأمامي للأسفل",
                    alternativeEn: "Lat Pulldown Machine",
                    notes: "التركيز على سحب المرفقين للأسفل وللخلف، والتحكم في الحركة السلبية.",
                    muscleGroupColor: "ظهر"
                },
                 {
                    nameAr: "التجديف بالكابل بمسند للصدر أو جهاز التجديف",
                    nameEn: "Chest-Supported Cable Row or Machine Row",
                    setsReps: "4 × 10-12",
                    rest: "60-90 ثانية",
                    primaryMuscleAr: "الظهر الأوسط والعريض (Rhomboids, Lats, Traps)",
                    primaryMuscleEn: "Mid/Upper Back (Rhomboids, Lats, Traps)",
                    secondaryMuscleAr: "البايسبس، الكتف الخلفي",
                    secondaryMuscleEn: "Biceps, Rear Deltoids",
                    alternativeAr: "تجديف بالدمبل بذراع واحدة (مع دعم)",
                    alternativeEn: "Single-Arm Dumbbell Row (Supported)",
                    notes: "يوفر دعمًا للصدر لتقليل الضغط على أسفل الظهر. التركيز على سحب لوحي الكتف للخلف.",
                    muscleGroupColor: "ظهر"
                },
                {
                    nameAr: "السحب الأمامي للأسفل بقبضة معكوسة ضيقة",
                    nameEn: "Lat Pulldown (Reverse Close Grip)",
                    setsReps: "3 × 10-12",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الظهر العريض (الجزء السفلي)، البايسبس",
                    primaryMuscleEn: "Latissimus Dorsi (Lower), Biceps",
                    secondaryMuscleAr: "الظهر الأوسط",
                    secondaryMuscleEn: "Mid-Back",
                    alternativeAr: "جهاز السحب الأمامي للأسفل (نفس القبضة)",
                    alternativeEn: "Lat Pulldown Machine (Same Grip)",
                    notes: "استهداف الجزء السفلي من عضلة الظهر العريضة (Lats) وزيادة مشاركة البايسبس.",
                    muscleGroupColor: "ظهر"
                },
                 {
                    nameAr: "تمرين السحب المستقيم للأسفل بالكابل",
                    nameEn: "Straight-Arm Pulldown",
                    setsReps: "3 × 12-15",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الظهر العريض (Lats)",
                    primaryMuscleEn: "Latissimus Dorsi",
                    secondaryMuscleAr: "الترايسبس (بشكل طفيف)، الكتف الخلفي",
                    secondaryMuscleEn: "Triceps (Slightly), Rear Deltoids",
                    alternativeAr: null, // No direct machine alternative usually
                    alternativeEn: null,
                    notes: "تمرين عزل لعضلة الظهر العريضة (Lats). الحفاظ على استقامة الذراعين.",
                    muscleGroupColor: "ظهر"
                },
                {
                    nameAr: "مرجحة البايسبس بالبار المستقيم أو المتعرج",
                    nameEn: "Barbell Curl or EZ-Bar Curl",
                    setsReps: "3 × 8-12",
                    rest: "60 ثانية",
                    primaryMuscleAr: "البايسبس",
                    primaryMuscleEn: "Biceps Brachii",
                    secondaryMuscleAr: "العضدية (Brachialis)، الساعد",
                    secondaryMuscleEn: "Brachialis, Forearms",
                    alternativeAr: "جهاز مرجحة البايسبس",
                    alternativeEn: "Machine Bicep Curl",
                    notes: "حجم متوسط للبايسبس في هذا اليوم.",
                    muscleGroupColor: "بايسبس"
                },
                 {
                    nameAr: "تمرين بلانك",
                    nameEn: "Plank",
                    setsReps: "3 × 45-60 ثانية",
                    rest: "60 ثانية",
                    primaryMuscleAr: "عضلات الجذع العميقة (المستعرضة البطنية)",
                    primaryMuscleEn: "Core (Transverse Abdominis)",
                    secondaryMuscleAr: "البطن (المستقيمة)، المؤخرة، الكتفين",
                    secondaryMuscleEn: "Abs (Rectus Abdominis), Glutes, Shoulders",
                    alternativeAr: null,
                    alternativeEn: null,
                    notes: "التركيز على شد الجذع والحفاظ على استقامة الجسم.",
                    muscleGroupColor: "جذع"
                },
                {
                    nameAr: "تمرين بالوف برس بالكابل",
                    nameEn: "Pallof Press",
                    setsReps: "3 × 10-12 لكل جانب",
                    rest: "60 ثانية",
                    primaryMuscleAr: "عضلات الجذع المائلة والمقاومة للدوران",
                    primaryMuscleEn: "Core (Anti-Rotation, Obliques)",
                    secondaryMuscleAr: "الكتفين، الصدر",
                    secondaryMuscleEn: "Shoulders, Chest",
                    alternativeAr: "بالوف برس بشريط مقاومة",
                    alternativeEn: "Band Pallof Press",
                    notes: "تمرين مقاومة للدوران لتقوية العضلات المائلة (Obliques) والعضلات العميقة للجذع. آمن لأسفل الظهر.",
                    muscleGroupColor: "جذع"
                }
            ]
        },
         {
            dayName: "الاثنين: أرجل (مع التركيز على الأمان)",
            exercises: [
                {
                    nameAr: "جهاز ضغط الأرجل",
                    nameEn: "Leg Press",
                    setsReps: "4 × 10-15",
                    rest: "90 ثانية",
                    primaryMuscleAr: "الفخذ الأمامي (Quadriceps)، المؤخرة (Glutes)",
                    primaryMuscleEn: "Quadriceps, Glutes",
                    secondaryMuscleAr: "الفخذ الخلفي (Hamstrings)",
                    secondaryMuscleEn: "Hamstrings",
                    alternativeAr: null, // It is the machine exercise
                    alternativeEn: null,
                    notes: "وضع القدمين بعناية (بعرض الكتفين، قليلاً إلى الأعلى على اللوح) للتركيز على الفخذ الأمامي والمؤخرة مع تقليل الضغط على الركبة. التحكم في الحركة وعدم قفل الركبتين في الأعلى. تجنب النزول العميق جدًا إذا كان يسبب عدم راحة في الركبة أو تقوس أسفل الظهر.",
                    muscleGroupColor: "أرجل" // Generic color for composite leg exercises
                },
                {
                    nameAr: "جهاز ثني الأرجل (مستلقيًا أو جالسًا)",
                    nameEn: "Lying or Seated Hamstring Curl",
                    setsReps: "4 × 12-15",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الفخذ الخلفي (Hamstrings)",
                    primaryMuscleEn: "Hamstrings",
                    secondaryMuscleAr: "السمانة (Gastrocnemius)",
                    secondaryMuscleEn: "Gastrocnemius",
                    alternativeAr: null, // It is the machine exercise
                    alternativeEn: null,
                    notes: "التركيز على الانقباض الكامل لعضلات أوتار الركبة والتحكم في الحركة السلبية.",
                    muscleGroupColor: "فخذ خلفي"
                },
                {
                    nameAr: "جهاز مد الأرجل",
                    nameEn: "Leg Extension",
                    setsReps: "3 × 12-15",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الفخذ الأمامي (Quadriceps)",
                    primaryMuscleEn: "Quadriceps",
                    secondaryMuscleAr: "", // Mostly isolation
                    secondaryMuscleEn: "",
                    alternativeAr: null, // It is the machine exercise
                    alternativeEn: null,
                    notes: "يمكن أداؤه بذراع واحدة (ببطء وتحكم) إذا كان ذلك يقلل من أي إزعاج في الركبة. التركيز على انقباض الفخذ الأمامي.",
                    muscleGroupColor: "فخذ أمامي"
                },
                {
                    nameAr: "جهاز دفع باطن القدم (جلوسًا)",
                    nameEn: "Seated Calf Raise",
                    setsReps: "4 × 15-20",
                    rest: "45-60 ثانية",
                    primaryMuscleAr: "السمانة (النعلية - Soleus)",
                    primaryMuscleEn: "Calves (Soleus)",
                    secondaryMuscleAr: "",
                    secondaryMuscleEn: "",
                    alternativeAr: null,
                    alternativeEn: null,
                    notes: "التركيز على مدى الحركة الكامل والإحساس بالشد في عضلة السمانة.",
                    muscleGroupColor: "سمانة"
                },
                {
                    nameAr: "جهاز دفع باطن القدم (وقوفًا) أو على جهاز ضغط الأرجل",
                    nameEn: "Standing Calf Raise or Leg Press Calf Raise",
                    setsReps: "4 × 15-20",
                    rest: "45-60 ثانية",
                    primaryMuscleAr: "السمانة (التوأمية الساقية - Gastrocnemius)",
                    primaryMuscleEn: "Calves (Gastrocnemius)",
                    secondaryMuscleAr: "النعلية (Soleus)",
                    secondaryMuscleEn: "Soleus",
                    alternativeAr: "استخدم جهاز ضغط الأرجل إذا كان الوقوف يسبب إزعاجًا",
                    alternativeEn: "Use Leg Press if standing causes discomfort",
                    notes: "حافظ على استقامة الركبتين (دون قفلهما) وركز على الدفع بأصابع القدم الكبيرة.",
                    muscleGroupColor: "سمانة"
                }
            ]
        },
        {
            dayName: "الثلاثاء: أكتاف (أمامي/جانبي) + ترايسبس (ثقيل)",
            exercises: [
                 {
                    nameAr: "ضغط الكتف بالدمبل جلوسًا",
                    nameEn: "Seated Dumbbell Shoulder Press",
                    setsReps: "4 × 8-12",
                    rest: "60-90 ثانية",
                    primaryMuscleAr: "الأكتاف (الأمامي والجانبي)",
                    primaryMuscleEn: "Shoulders (Anterior & Lateral Deltoids)",
                    secondaryMuscleAr: "الترايسبس، الترابيس",
                    secondaryMuscleEn: "Triceps, Trapezius",
                    alternativeAr: "جهاز ضغط الكتف",
                    alternativeEn: "Machine Shoulder Press",
                    notes: "استخدام مسند الظهر للثبات وتقليل الضغط على أسفل الظهر. التركيز على الأداء الصحيح وعدم قفل المرفقين في الأعلى.",
                    muscleGroupColor: "أكتاف"
                },
                {
                    nameAr: "الرفرفة الجانبية بالدمبل",
                    nameEn: "Dumbbell Lateral Raise",
                    setsReps: "4 × 12-15",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الكتف الجانبي",
                    primaryMuscleEn: "Lateral Deltoids",
                    secondaryMuscleAr: "الكتف الأمامي، الترابيس",
                    secondaryMuscleEn: "Anterior Deltoids, Trapezius",
                    alternativeAr: "جهاز الرفرفة الجانبية",
                    alternativeEn: "Lateral Raise Machine",
                    notes: "التركيز على رفع المرفقين جانبًا، مع انحناء طفيف في المرفق.",
                    muscleGroupColor: "أكتاف"
                },
                {
                    nameAr: "الرفرفة الجانبية بالكابل بذراع واحدة",
                    nameEn: "Single-Arm Cable Lateral Raise",
                    setsReps: "3 × 12-15 لكل جانب",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الكتف الجانبي",
                    primaryMuscleEn: "Lateral Deltoids",
                    secondaryMuscleAr: "الكتف الأمامي، الترابيس",
                    secondaryMuscleEn: "Anterior Deltoids, Trapezius",
                    alternativeAr: null, // Cable is often preferred
                    alternativeEn: null,
                    notes: "**دروب سيت اختياري:** في المجموعة الأخيرة فقط لكل جانب. يوفر مقاومة مستمرة.",
                    muscleGroupColor: "أكتاف"
                },
                {
                    nameAr: "الرفرفة الأمامية بالدمبل أو بالكابل",
                    nameEn: "Dumbbell or Cable Front Raise",
                    setsReps: "3 × 12-15",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الكتف الأمامي",
                    primaryMuscleEn: "Anterior Deltoids",
                    secondaryMuscleAr: "الكتف الجانبي، الصدر العلوي",
                    secondaryMuscleEn: "Lateral Deltoids, Upper Chest",
                    alternativeAr: "جهاز الرفرفة الأمامية",
                    alternativeEn: "Front Raise Machine",
                    notes: "استهداف الكتف الأمامي. تجنب التأرجح.",
                    muscleGroupColor: "أكتاف"
                },
                 {
                    nameAr: "تمرين الغطس للترايسبس بين مقعدين أو بالجهاز المساعد",
                    nameEn: "Bench Dips or Assisted Dip Machine",
                    setsReps: "4 × 10-AMRAP",
                    rest: "60-90 ثانية",
                    primaryMuscleAr: "الترايسبس",
                    primaryMuscleEn: "Triceps",
                    secondaryMuscleAr: "الكتف الأمامي، الصدر السفلي",
                    secondaryMuscleEn: "Anterior Deltoids, Lower Chest",
                    alternativeAr: "جهاز الدفع للأسفل للترايسبس (إذا كان الغطس يسبب ألمًا)",
                    alternativeEn: "Triceps Pushdown Machine (if dips cause pain)",
                    notes: "AMRAP = أكبر عدد ممكن من التكرارات. حافظ على قرب الجسم من المقعد/الجهاز.",
                    muscleGroupColor: "ترايسبس"
                },
                {
                    nameAr: "تمديد فرنسي بالبار المتعرج (Skullcrushers)",
                    nameEn: "EZ-Bar Skullcrushers",
                    setsReps: "4 × 10-12",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الترايسبس (خاصة الرأس الطويل والأوسط)",
                    primaryMuscleEn: "Triceps (Especially Long & Medial Heads)",
                    secondaryMuscleAr: "", // Mostly isolation
                    secondaryMuscleEn: "",
                    alternativeAr: "تمديد الترايسبس بالدمبل أو بالكابل مستلقيًا",
                    alternativeEn: "Dumbbell Skullcrushers or Lying Cable Triceps Extension",
                    notes: "التحكم في الحركة وتجنب ملامسة البار للجبهة.",
                    muscleGroupColor: "ترايسبس"
                },
                {
                    nameAr: "دفع الكابل للأسفل للترايسبس بذراع واحدة وقبضة معكوسة",
                    nameEn: "Single-Arm Reverse Grip Triceps Pushdown",
                    setsReps: "3 × 12-15 لكل جانب",
                    rest: "60 ثانية",
                    primaryMuscleAr: "الترايسبس (الرأس الإنسي)",
                    primaryMuscleEn: "Triceps (Medial Head)",
                    secondaryMuscleAr: "الساعد",
                    secondaryMuscleEn: "Forearms",
                    alternativeAr: null, // Cable exercise
                    alternativeEn: null,
                    notes: "**دروب سيت اختياري:** في المجموعة الأخيرة فقط لكل جانب. يستهدف الرأس الإنسي (Medial Head) للترايسبس.",
                    muscleGroupColor: "ترايسبس"
                }
            ]
        },
        {
            dayName: "الأربعاء: بايسبس (ثقيل) + ساعد + بطن",
            exercises: [
                {
                    nameAr: "مرجحة البايسبس بالدمبل بالتبادل جلوسًا على بنش مائل",
                    nameEn: "Incline Dumbbell Curl",
                    setsReps: "4 × 8-12",
                    rest: "60-90 ثانية",
                    primaryMuscleAr: "البايسبس (الرأس الطويل)",
                    primaryMuscleEn: "Biceps Brachii (Long Head)",
                    secondaryMuscleAr: "العضدية (Brachialis)، الساعد",
                    secondaryMuscleEn: "Brachialis, Forearms",
                    alternativeAr: "جهاز مرجحة البايسبس",
                    alternativeEn: "Machine Bicep Curl",
                    notes: "البنش المائل يزيد من تمدد البايسبس في بداية الحركة. التركيز على لف الرسغ (Supination).",
                    muscleGroupColor: "بايسبس"
                },
                {
                    nameAr: "مرجحة المطرقة بالبار أو الدمبل",
                    nameEn: "Hammer Curl (Bar or Dumbbells)",
                    setsReps: "4 × 10-12",
                    rest: "60 ثانية",
                    primaryMuscleAr: "العضدية (Brachialis)، العضدية الكعبرية (Brachioradialis)",
                    primaryMuscleEn: "Brachialis, Brachioradialis",
                    secondaryMuscleAr: "البايسبس",
                    secondaryMuscleEn: "Biceps Brachii",
                    alternativeAr: "مرجحة المطرقة بالكابل (باستخدام الحبل)",
                    alternativeEn: "Cable Hammer Curl (Rope Attachment)",
                    notes: "تستهدف العضلة العضدية والعضدية الكعبرية بالإضافة إلى البايسبس.",
                    muscleGroupColor: "بايسبس" // Often grouped with Biceps training
                },
                {
                    nameAr: "سوبر سيت 1: مرجحة بريتشر + مرجحة التركيز",
                    nameEn: "Superset 1: Preacher Curl + Concentration Curl",
                    setsReps: "3 × 10-12 (لكل تمرين)",
                    rest: "0 بين التمرينين، 90 بعد السوبر سيت",
                    primaryMuscleAr: "البايسبس",
                    primaryMuscleEn: "Biceps Brachii",
                    secondaryMuscleAr: "العضدية (Brachialis)، الساعد",
                    secondaryMuscleEn: "Brachialis, Forearms",
                    alternativeAr: "جهاز مرجحة بريتشر (للجزء الأول)",
                    alternativeEn: "Preacher Curl Machine (for first part)",
                    notes: "**سوبر سيت:** أداء التمرينين بالتتالي دون راحة. البريتشر كيرل تعزل البايسبس، والتركيز كيرل تزيد الانقباض. **دروب سيت اختياري:** في المجموعة الأخيرة فقط لتمرين مرجحة التركيز (Concentration Curl).",
                    muscleGroupColor: "بايسبس"
                },
                 {
                    nameAr: "سوبر سيت 2: مرجحة الرسغ + مرجحة الرسغ العكسية",
                    nameEn: "Superset 2: Wrist Curl + Reverse Wrist Curl",
                    setsReps: "3 × 12-15 (لكل تمرين)",
                    rest: "0 بين التمرينين، 60 بعد السوبر سيت",
                    primaryMuscleAr: "الساعد (القابضة والباسطة)",
                    primaryMuscleEn: "Forearms (Flexors & Extensors)",
                    secondaryMuscleAr: "", // Isolation exercises
                    secondaryMuscleEn: "",
                    alternativeAr: null, // Typically done with free weights or specific grips
                    alternativeEn: null,
                    notes: "**سوبر سيت:** أداء التمرينين بالتتالي دون راحة. تستهدف عضلات الساعد القابضة والباسطة. **دروب سيت اختياري:** في المجموعة الأخيرة فقط لكل تمرين.",
                    muscleGroupColor: "ساعد"
                },
                {
                    nameAr: "رفع الساق المعلقة أو رفع الركبة المعلقة",
                    nameEn: "Hanging Leg Raise or Hanging Knee Raise",
                    setsReps: "3 × 15-AMRAP",
                    rest: "60 ثانية",
                    primaryMuscleAr: "البطن (الجزء السفلي)",
                    primaryMuscleEn: "Abs (Lower Rectus Abdominis), Hip Flexors",
                    secondaryMuscleAr: "العضلات المائلة (Obliques)",
                    secondaryMuscleEn: "Obliques",
                    alternativeAr: "رفع الساق/الركبة المستلقية (مع ضغط الظهر على الأرض)",
                    alternativeEn: "Lying Leg/Knee Raise (pressing lower back into floor)",
                    notes: "التركيز على استخدام عضلات البطن لرفع الساقين/الركبتين وتجنب تأرجح الجسم. إذا كان التعليق صعبًا أو يسبب ألمًا، استخدم البديل الأرضي مع ضمان عدم تقوس أسفل الظهر.",
                    muscleGroupColor: "بطن"
                },
                {
                    nameAr: "تمرين الدوران الروسي (بوزن الجسم أو خفيف)",
                    nameEn: "Russian Twist (Bodyweight or Light Weight)",
                    setsReps: "3 × 15-20 لكل جانب",
                    rest: "60 ثانية",
                    primaryMuscleAr: "العضلات المائلة (Obliques)",
                    primaryMuscleEn: "Obliques",
                    secondaryMuscleAr: "البطن (المستقيمة)",
                    secondaryMuscleEn: "Rectus Abdominis",
                    alternativeAr: "تمرين لمس الكعب بالتناوب مستلقيًا (أكثر أمانًا للظهر)",
                    alternativeEn: "Lying Alternating Heel Touches (safer for back)",
                    notes: "التركيز على دوران الجذع وليس الذراعين فقط. للحفاظ على سلامة الظهر، يمكن أداء الحركة ببطء وتحكم أو اختيار البديل المستلقي.",
                    muscleGroupColor: "بطن"
                }
            ]
        }
    ]
};

// --- DOM Elements ---
const workoutPlanContainer = document.getElementById('workout-plan');
const modal = document.getElementById('exerciseModal');
const modalTitle = document.getElementById('modal-title');
const modalSetsReps = document.getElementById('modal-sets-reps');
const modalRest = document.getElementById('modal-rest');
const modalPrimaryMuscleAr = document.getElementById('modal-primary-muscle-ar');
const modalPrimaryMuscleEn = document.getElementById('modal-primary-muscle-en');
const modalSecondaryMuscleAr = document.getElementById('modal-secondary-muscle-ar');
const modalSecondaryMuscleEn = document.getElementById('modal-secondary-muscle-en');
const modalAlternativeContainer = document.getElementById('modal-alternative-container');
const modalAlternativeAr = document.getElementById('modal-alternative-ar');
const modalAlternativeEn = document.getElementById('modal-alternative-en');
const modalNotesContainer = document.getElementById('modal-notes-container');
const modalNotes = document.getElementById('modal-notes');
const closeButton = document.querySelector('.close-button');

// --- Functions ---

// Function to create YouTube search URL
function createYoutubeSearchUrl(exerciseNameEn) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(exerciseNameEn + ' tutorial')}`;
}

// Function to display workout plan
function displayWorkoutPlan() {
    workoutPlan.days.forEach((day, dayIndex) => {
        // Create day section
        const daySection = document.createElement('section');
        daySection.classList.add('day-section');

        // Create day header
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('day-header');
        dayHeader.textContent = day.dayName;
        daySection.appendChild(dayHeader);

        // Create table for the day
        const table = document.createElement('table');
        table.classList.add('workout-table');

        // Create table header
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>التمرين</th>
                <th>الجلسات × التكرارات</th>
                <th>الراحة</th>
            </tr>
        `;
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        day.exercises.forEach((exercise, exerciseIndex) => {
            const row = document.createElement('tr');
            // Add data attribute for muscle group styling
            row.setAttribute('data-muscle-group', exercise.muscleGroupColor);
            // Add data attributes to store indices for modal retrieval
            row.setAttribute('data-day-index', dayIndex);
            row.setAttribute('data-exercise-index', exerciseIndex);

            // Extract notes about intensity techniques for brief display
            let shortNote = "";
            if (exercise.notes && exercise.notes.toLowerCase().includes("سوبر سيت:")) {
                shortNote = "(سوبر سيت)";
            } else if (exercise.notes && exercise.notes.toLowerCase().includes("دروب سيت اختياري:")) {
                 shortNote = "(دروب سيت اختياري)";
            }

            row.innerHTML = `
                <td>
                    <span class="exercise-name-ar">${exercise.nameAr}</span>
                    ${shortNote ? `<span class="exercise-note">${shortNote}</span>` : ''}
                    <a href="${createYoutubeSearchUrl(exercise.nameEn)}" target="_blank" class="exercise-link" onclick="event.stopPropagation()">${exercise.nameEn}</a>
                </td>
                <td>${exercise.setsReps}</td>
                <td>${exercise.rest}</td>
            `;

            // Add click listener to row (for modal)
            row.addEventListener('click', () => {
                openModal(dayIndex, exerciseIndex);
            });

            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        daySection.appendChild(table);
        workoutPlanContainer.appendChild(daySection);
    });
}

// Function to open and populate the modal
function openModal(dayIndex, exerciseIndex) {
    const exercise = workoutPlan.days[dayIndex].exercises[exerciseIndex];

    modalTitle.textContent = exercise.nameAr;
    modalSetsReps.textContent = exercise.setsReps;
    modalRest.textContent = exercise.rest;
    modalPrimaryMuscleAr.textContent = exercise.primaryMuscleAr || 'غير محدد';
    modalPrimaryMuscleEn.textContent = exercise.primaryMuscleEn || 'N/A';
    modalSecondaryMuscleAr.textContent = exercise.secondaryMuscleAr || 'لا يوجد';
    modalSecondaryMuscleEn.textContent = exercise.secondaryMuscleEn || 'None';

    // Show/hide alternative section
    if (exercise.alternativeAr && exercise.alternativeEn) {
        modalAlternativeAr.textContent = exercise.alternativeAr;
        modalAlternativeEn.textContent = exercise.alternativeEn;
        modalAlternativeContainer.style.display = 'block';
    } else {
        modalAlternativeContainer.style.display = 'none';
    }

     // Show/hide notes section
     if (exercise.notes && exercise.notes.trim() !== "") {
        modalNotes.textContent = exercise.notes;
        modalNotesContainer.style.display = 'block';
    } else {
        modalNotesContainer.style.display = 'none';
    }

    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// --- Event Listeners ---
closeButton.addEventListener('click', closeModal);

// Close modal if clicked outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key press
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});


// --- Initial Load ---
document.addEventListener('DOMContentLoaded', displayWorkoutPlan);