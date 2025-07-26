export interface CaseData {
  id: string;
  title: string;
  demographics: {
    age: number;
    gender: string;
    occupation?: string;
  };
  presentingComplaint: string;
  pastMedicalHistory: string[];
  examinationFindings: {
    visualAcuity: string;
    pupils: string;
    extraocularMovements: string;
    anteriorSegment: string;
    posteriorSegment: string;
    intraocularPressure?: string;
  };
  investigations: {
    description: string;
    findings: string;
    images?: {
      url: string;
      caption: string;
    }[];
  }[];
  diagnosis: string;
  managementPlan: string[];
  category: string;
}

export interface QuizData {
  id: string;
  caseId: string;
  questions: {
    id: string;
    type: 'multiple-choice' | 'true-false' | 'short-answer';
    question: string;
    options?: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export const cases: CaseData[] = [
  {
    id: "case-1",
    title: "Embolic Photopsias from Atrial Myxoma",
    demographics: {
      age: 46,
      gender: "Female",
      occupation: "Marketing Manager"
    },
    presentingComplaint: "Multiple episodes of transient flashes of light in the right eye over the past 3 months, each lasting 10-15 seconds. Episodes are followed by temporary dark spots in the central vision that resolve after 20-30 minutes. No headache, nausea, or neurological symptoms accompanying the visual disturbances.",
    pastMedicalHistory: [
      "Recent episodes of shortness of breath on exertion",
      "Palpitations noted over the past 6 months",
      "No previous eye problems",
      "No family history of cardiac disease"
    ],
    examinationFindings: {
      visualAcuity: "OD: 6/9, OS: 6/6",
      pupils: "Equal, reactive, no RAPD",
      extraocularMovements: "Full and pain-free in both eyes",
      anteriorSegment: "Both eyes: Clear cornea, deep anterior chamber, no inflammation",
      posteriorSegment: "OD: Multiple cotton wool spots and small retinal hemorrhages in the posterior pole. OS: Normal retinal appearance with clear optic disc",
      intraocularPressure: "OD: 15mmHg, OS: 14mmHg"
    },
    investigations: [
      {
        description: "Fundus Photography",
        findings: "Right eye shows multiple cotton wool spots and small flame-shaped hemorrhages scattered throughout the posterior pole, consistent with embolic retinal events. Left eye shows normal retinal vasculature."
      },
      {
        description: "Fluorescein Angiography",
        findings: "Multiple areas of capillary non-perfusion and delayed filling in branch arterioles in the right eye, suggesting embolic occlusion."
      },
      {
        description: "Echocardiogram",
        findings: "Large left atrial mass (4.2cm) attached to the interatrial septum, consistent with atrial myxoma."
      },
      {
        description: "Carotid Doppler",
        findings: "No significant stenosis. Normal flow patterns bilaterally."
      }
    ],
    diagnosis: "Embolic retinal arterial occlusions secondary to left atrial myxoma",
    managementPlan: [
      "Urgent cardiothoracic surgery referral for myxoma resection",
      "Anticoagulation therapy (warfarin) until surgery",
      "Regular ophthalmological monitoring for further embolic events",
      "Post-surgical cardiac follow-up",
      "Patient education regarding symptoms of further embolic events"
    ],
    category: "retinal-vascular"
  },
  {
    id: "case-2",
    title: "Autosomal Dominant Optic Atrophy",
    demographics: {
      age: 54,
      gender: "Male",
      occupation: "School Teacher"
    },
    presentingComplaint: "Long-standing bilateral reduced vision first noted during school screening at age 8. Vision has remained relatively stable at 6/12 in both eyes with very gradual decline over the decades. No acute visual symptoms, pain, or photophobia. Difficulty with detailed work and reading small print.",
    pastMedicalHistory: [
      "Strong maternal family history of vision problems affecting both males and females",
      "Mother had similar vision problems from childhood",
      "Maternal grandfather also affected",
      "No other significant medical history"
    ],
    examinationFindings: {
      visualAcuity: "OD: 6/12, OS: 6/12",
      pupils: "Equal, reactive, no RAPD",
      extraocularMovements: "Full in both eyes",
      anteriorSegment: "Both eyes: Normal cornea, anterior chamber, and lens",
      posteriorSegment: "Bilateral pale optic discs with temporal pallor more pronounced than nasal. Cup-disc ratio 0.3 bilaterally. Retinal vessels appear normal caliber",
      intraocularPressure: "OD: 16mmHg, OS: 15mmHg"
    },
    investigations: [
      {
        description: "Fundus Photography",
        findings: "Bilateral pale optic discs with temporal pallor more pronounced than nasal. The optic disc margins are well-defined with cupping consistent with optic atrophy.",
        images: [
          {
            url: "/lovable-uploads/97d3be6b-95aa-4081-9cce-5de62ac05a1a.png",
            caption: "Right eye fundus showing temporal optic disc pallor characteristic of optic atrophy"
          },
          {
            url: "/lovable-uploads/223d80cf-6998-4cd6-af7d-67f6e64d7cae.png", 
            caption: "Left eye fundus demonstrating bilateral optic atrophy with similar temporal pallor"
          }
        ]
      },
      {
        description: "Visual Field Test (Humphrey 24-2)",
        findings: "Bilateral central and cecocentral scotomas with preserved peripheral fields. Pattern consistent with optic neuropathy."
      },
      {
        description: "OCT Optic Nerve",
        findings: "Bilateral thinning of retinal nerve fiber layer, most pronounced in the temporal quadrants. Average RNFL thickness: OD 68μm, OS 65μm (normal >85μm)."
      },
      {
        description: "Genetic Testing",
        findings: "Heterozygous pathogenic variant in OPA1 gene (c.2713C>T), confirming autosomal dominant optic atrophy."
      },
      {
        description: "Family Screening",
        findings: "One of three children carries the same OPA1 mutation but currently has normal vision (age 22). Two children are unaffected."
      }
    ],
    diagnosis: "Autosomal Dominant Optic Atrophy (OPA1-related)",
    managementPlan: [
      "Genetic counseling for patient and family",
      "Annual ophthalmological monitoring with visual fields and OCT",
      "Low vision aids and occupational assessment",
      "Screening of affected child annually",
      "Patient education about the progressive nature and inheritance pattern"
    ],
    category: "neuro-ophthalmology"
  }
];

export const quizzes: QuizData[] = [
  {
    id: "quiz-1",
    caseId: "case-1",
    questions: [
      {
        id: "q1-1",
        type: "multiple-choice",
        question: "What is the most likely source of the embolic events in this patient?",
        options: [
          "Carotid artery stenosis",
          "Atrial fibrillation", 
          "Atrial myxoma",
          "Mitral valve prolapse"
        ],
        correctAnswer: "Atrial myxoma",
        explanation: "The echocardiogram revealed a large left atrial myxoma, which is the source of the embolic retinal arterial occlusions. Atrial myxomas are benign tumors that can fragment and cause systemic emboli."
      },
      {
        id: "q1-2",
        type: "true-false",
        question: "Photopsias followed by scotomas in a young patient should always be attributed to migraine.",
        correctAnswer: "false",
        explanation: "While migraine is common, photopsias can have serious underlying causes including retinal tears, embolic events, or white-dot syndromes. Always dilate pupils to exclude retinal pathology."
      },
      {
        id: "q1-3",
        type: "short-answer",
        question: "What is the most urgent management step for this patient?",
        correctAnswer: "cardiothoracic surgery referral",
        explanation: "Urgent surgical resection of the atrial myxoma is required to prevent further embolic events, which could be life-threatening or cause permanent visual loss."
      },
      {
        id: "q1-4",
        type: "multiple-choice",
        question: "Which investigation was most crucial for establishing the diagnosis?",
        options: [
          "Fluorescein angiography",
          "Echocardiogram",
          "Carotid Doppler",
          "Visual field test"
        ],
        correctAnswer: "Echocardiogram",
        explanation: "The echocardiogram identified the atrial myxoma, which was the underlying cause of the embolic retinal events. This was the key diagnostic test."
      }
    ]
  },
  {
    id: "quiz-2",
    caseId: "case-2",
    questions: [
      {
        id: "q2-1",
        type: "multiple-choice",
        question: "What is the inheritance pattern of this condition?",
        options: [
          "Autosomal recessive",
          "Autosomal dominant",
          "X-linked recessive",
          "Mitochondrial"
        ],
        correctAnswer: "Autosomal dominant",
        explanation: "Autosomal dominant optic atrophy (ADOA) is caused by mutations in genes like OPA1. It affects both sexes and typically shows a 50% transmission risk to offspring."
      },
      {
        id: "q2-2",
        type: "true-false",
        question: "The patient's affected child will definitely develop visual symptoms.",
        correctAnswer: "false",
        explanation: "ADOA shows variable expressivity and penetrance. Some carriers may remain asymptomatic throughout life, while others develop visual loss in childhood or adulthood."
      },
      {
        id: "q2-3",
        type: "short-answer",
        question: "Which gene mutation was identified in this family?",
        correctAnswer: "OPA1",
        explanation: "OPA1 is the most common gene associated with autosomal dominant optic atrophy, accounting for approximately 60-70% of cases. It encodes a mitochondrial protein."
      },
      {
        id: "q2-4",
        type: "multiple-choice",
        question: "What is the characteristic OCT finding in this condition?",
        options: [
          "Macular edema",
          "Retinal nerve fiber layer thinning",
          "Choroidal neovascularization",
          "Epiretinal membrane"
        ],
        correctAnswer: "Retinal nerve fiber layer thinning",
        explanation: "ADOA causes progressive loss of retinal ganglion cells, leading to characteristic thinning of the retinal nerve fiber layer, particularly in the temporal quadrants."
      }
    ]
  }
];

export const getCaseById = (id: string): CaseData | undefined => {
  return cases.find(case_ => case_.id === id);
};

export const getQuizByCaseId = (caseId: string): QuizData | undefined => {
  return quizzes.find(quiz => quiz.caseId === caseId);
};