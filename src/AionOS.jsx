// AION OS v2.6 — Somatic Intelligence & Accountability System
// Consciousness-level diagnostic protocol for restoring human capacity

import React, { useState, useEffect, useRef } from 'react';
import { Zap, Target, TrendingDown, Users, DollarSign, AlertCircle, Terminal } from 'lucide-react';

// ============================================================================
// DOMAIN AWARENESS
// ============================================================================
const DOMAINS = {
  BUSINESS: {
    name: 'Business / Leadership',
    contextWords: ['revenue', 'team', 'growth', 'scale', 'market', 'client', 'employee', 'operations', 'sales', 'strategy'],
    icon: Target
  },
  PERSONAL: {
    name: 'Personal / Relationships',
    contextWords: ['relationship', 'partner', 'family', 'dating', 'marriage', 'friendship', 'connection', 'intimacy', 'trust', 'boundaries'],
    icon: Users
  },
  HEALTH: {
    name: 'Health / Habits',
    contextWords: ['weight', 'exercise', 'diet', 'sleep', 'energy', 'fitness', 'habit', 'health', 'body', 'wellness'],
    icon: Zap
  },
  PROFESSIONAL: {
    name: 'Professional / Workplace',
    contextWords: ['job', 'role', 'manager', 'team', 'workplace', 'career', 'performance', 'conflict', 'culture', 'coworker', 'hr', 'leadership'],
    icon: Users
  }
};

// ============================================================================
// DIAGNOSTIC TAXONOMY
// ============================================================================
const DIAGNOSES = {
  SIGNAL_METABOLISM: {
    name: "Signal Metabolism Failure",
    code: "PATTERN_SM_001",
    icon: Zap,
    description: "You're drowning in information because you're avoiding making a decision. The 'overwhelm' is a defense mechanism—it lets you stay busy without committing.",
    cost: "Every day you stay paralyzed, opportunities pass to people who make imperfect decisions faster than you make perfect ones. Your overthinking is expensive.",
    pathway: "Decision Velocity + Embodied Clarity",
    color: "from-red-600 to-orange-600",
    signature: "analysis_paralysis :: decision_avoidance :: perfectionism_as_defense",
    avoidance: "You use 'needing more data' as permission to stay stuck."
  },
  OFFER_MARKET: {
    name: "Offer–Market Misalignment",
    code: "PATTERN_OM_002",
    icon: Target,
    description: "Your solution isn't the problem. Your unwillingness to claim a position and own it is. You're trying to please everyone, which means you serve no one.",
    cost: "Diluted messaging. Confused prospects. Revenue leaking everywhere because you won't commit to who you're actually for.",
    pathway: "Positioning Clarity + Message Courage",
    color: "from-purple-600 to-pink-600",
    signature: "positioning_avoidance :: people_pleasing :: commitment_phobia",
    avoidance: "You call it 'testing' when it's really fear of being seen."
  },
  OPERATIONAL_DRIFT: {
    name: "Operational Drift",
    code: "PATTERN_OD_003",
    icon: TrendingDown,
    description: "Your systems are broken because you'd rather stay busy than fix what's actually broken. The chaos gives you an excuse for why you're not growing.",
    cost: "Burnout. Wasted energy. Growth that feels like punishment because your infrastructure can't handle it. You're building on sand.",
    pathway: "System Integrity + Sustainable Scale",
    color: "from-blue-600 to-cyan-600",
    signature: "chaos_as_identity :: efficiency_avoidance :: growth_self_sabotage",
    avoidance: "You wear 'busy' like a badge instead of admitting you're afraid to build something that actually works."
  },
  TALENT_CULTURE: {
    name: "Talent–Culture Friction",
    code: "PATTERN_TC_004",
    icon: Users,
    description: "Your best people are leaving because you haven't created a culture worth staying for. You blame them, but the pattern is you.",
    cost: "Turnover costs you more than money—it costs you momentum, trust, and the ability to build anything lasting. You're a training ground for your competitors.",
    pathway: "Leadership Accountability + Cultural Integrity",
    color: "from-green-600 to-emerald-600",
    signature: "leadership_avoidance :: accountability_deficit :: cultural_negligence",
    avoidance: "You say 'people just don't get it' when the real issue is you haven't defined what 'it' is."
  },
  CONVERSION_NARRATIVE: {
    name: "Conversion Narrative Collapse",
    code: "PATTERN_CN_005",
    icon: DollarSign,
    description: "People don't buy because your story doesn't compel them. You're explaining features when you should be addressing the fear that keeps them from acting.",
    cost: "Traffic without revenue. Attention without conversion. You're close to the sale but can't close it because you don't understand what people actually buy.",
    pathway: "Narrative Coherence + Trust Architecture",
    color: "from-yellow-600 to-orange-600",
    signature: "story_failure :: trust_gap :: emotional_disconnection",
    avoidance: "You focus on tactics (A/B testing, copy tweaks) to avoid the real work: telling a story that matters."
  }
};

// ============================================================================
// DIAGNOSTIC LAYERS - DOMAIN AWARE
// ============================================================================
const PROMPTS = {
  BUSINESS: [
    {
      id: "outcome",
      layer: "COMMITMENT_LAYER",
      question: "What business outcome are you actually committed to—not what looks good on a pitch deck, but what your gut knows needs to happen?",
      placeholder: "If you write something vague, the system will call you out...",
      systemPrompt: "ANALYZING: Authentic commitment vs. performative goals...",
      somaticPrompt: "Before answering: Take three breaths. What sensations are present in your chest and gut right now? If you feel nothing, that's the first problem."
    },
    {
      id: "obstacle",
      layer: "OBSTACLE_SUBSTRATE",
      question: "What's the real obstacle blocking growth? Not market conditions or your team—the truth you avoid admitting in board meetings.",
      placeholder: "If you blame someone else, the system will detect it...",
      systemPrompt: "DETECTING: External blame vs. internal accountability...",
      somaticPrompt: "Notice where you feel resistance in your body as you read this question. If you want to skip this, ask yourself why."
    },
    {
      id: "pattern",
      layer: "PATTERN_MEMORY",
      question: "What operational pattern keeps repeating because you're choosing it—even if unconsciously?",
      placeholder: "No victim story. What's YOUR role in keeping this alive?",
      systemPrompt: "SCANNING: Agency denial and responsibility avoidance...",
      somaticPrompt: "If this pattern had a physical location in your body, where would it live? What does it feel like? Don't intellectualize—feel it."
    },
    {
      id: "cost",
      layer: "CONSEQUENCE_MATRIX",
      question: "If nothing changes, what does this pattern cost your business? Not projections—the real revenue, time, or talent you're losing right now.",
      placeholder: "What are you sacrificing to stay comfortable in this dysfunction?",
      systemPrompt: "CALCULATING: Real cost vs. minimized cost...",
      somaticPrompt: "As you consider this cost, notice what happens in your body. Contraction? Expansion? Numbness? Whatever you feel, that's the truth."
    }
  ],
  PERSONAL: [
    {
      id: "outcome",
      layer: "COMMITMENT_LAYER",
      question: "What do you actually want from this relationship or situation—not what you should want, but what your body knows you need?",
      placeholder: "If you write something vague, the system will call you out...",
      systemPrompt: "ANALYZING: Authentic commitment vs. performative goals...",
      somaticPrompt: "Before answering: Take three breaths. What sensations are present in your chest and gut right now? If you feel nothing, that's the first problem."
    },
    {
      id: "obstacle",
      layer: "OBSTACLE_SUBSTRATE",
      question: "What's really in your way? Not them, not circumstances—the truth about yourself you avoid saying out loud.",
      placeholder: "If you blame someone else, the system will detect it...",
      systemPrompt: "DETECTING: External blame vs. internal accountability...",
      somaticPrompt: "Notice where you feel resistance in your body as you read this question. If you want to skip this, ask yourself why."
    },
    {
      id: "pattern",
      layer: "PATTERN_MEMORY",
      question: "What relationship pattern keeps showing up because you keep choosing it—even if you don't see how?",
      placeholder: "No victim story. What's YOUR role in keeping this alive?",
      systemPrompt: "SCANNING: Agency denial and responsibility avoidance...",
      somaticPrompt: "If this pattern had a physical location in your body, where would it live? What does it feel like? Don't intellectualize—feel it."
    },
    {
      id: "cost",
      layer: "CONSEQUENCE_MATRIX",
      question: "If this pattern continues, what does it cost you? Not someday—the connection, intimacy, or peace you're losing right now.",
      placeholder: "What are you sacrificing to stay comfortable in this dysfunction?",
      systemPrompt: "CALCULATING: Real cost vs. minimized cost...",
      somaticPrompt: "As you consider this cost, notice what happens in your body. Contraction? Expansion? Numbness? Whatever you feel, that's the truth."
    }
  ],
  HEALTH: [
    {
      id: "outcome",
      layer: "COMMITMENT_LAYER",
      question: "What physical outcome are you actually committed to—not what you post about, but what your body is demanding from you?",
      placeholder: "If you write something vague, the system will call you out...",
      systemPrompt: "ANALYZING: Authentic commitment vs. performative goals...",
      somaticPrompt: "Before answering: Take three breaths. What sensations are present in your chest and gut right now? If you feel nothing, that's the first problem."
    },
    {
      id: "obstacle",
      layer: "OBSTACLE_SUBSTRATE",
      question: "What's the real obstacle? Not time or motivation—the truth about why you sabotage your own health.",
      placeholder: "If you blame someone else, the system will detect it...",
      systemPrompt: "DETECTING: External blame vs. internal accountability...",
      somaticPrompt: "Notice where you feel resistance in your body as you read this question. If you want to skip this, ask yourself why."
    },
    {
      id: "pattern",
      layer: "PATTERN_MEMORY",
      question: "What habit pattern keeps repeating because you're choosing it—even if you say you're not?",
      placeholder: "No victim story. What's YOUR role in keeping this alive?",
      systemPrompt: "SCANNING: Agency denial and responsibility avoidance...",
      somaticPrompt: "If this pattern had a physical location in your body, where would it live? What does it feel like? Don't intellectualize—feel it."
    },
    {
      id: "cost",
      layer: "CONSEQUENCE_MATRIX",
      question: "If nothing changes, what does this pattern cost your body and energy? Not theory—the vitality, health, or years you're losing right now.",
      placeholder: "What are you sacrificing to stay comfortable in this dysfunction?",
      systemPrompt: "CALCULATING: Real cost vs. minimized cost...",
      somaticPrompt: "As you consider this cost, notice what happens in your body. Contraction? Expansion? Numbness? Whatever you feel, that's the truth."
    }
  ],
  PROFESSIONAL: [
    {
      id: "outcome",
      layer: "COMMITMENT_LAYER",
      question: "What professional outcome are you actually committed to—not what you tell your manager, but what you know you need in this role or workplace?",
      placeholder: "If you write something vague, the system will call you out...",
      systemPrompt: "ANALYZING: Authentic commitment vs. performative goals...",
      somaticPrompt: "Before answering: Take three breaths. What sensations are present in your chest and gut right now? If you feel nothing, that's the first problem."
    },
    {
      id: "obstacle",
      layer: "OBSTACLE_SUBSTRATE",
      question: "What's the real obstacle at work? Not your manager or the system—the truth about yourself you avoid mentioning in meetings.",
      placeholder: "If you blame someone else, the system will detect it...",
      systemPrompt: "DETECTING: External blame vs. internal accountability...",
      somaticPrompt: "Notice where you feel resistance in your body as you read this question. If you want to skip this, ask yourself why."
    },
    {
      id: "pattern",
      layer: "PATTERN_MEMORY",
      question: "What workplace pattern keeps repeating across teams and roles because you're choosing it—even if you don't see how?",
      placeholder: "No victim story. What's YOUR role in keeping this alive?",
      systemPrompt: "SCANNING: Agency denial and responsibility avoidance...",
      somaticPrompt: "If this pattern had a physical location in your body, where would it live? What does it feel like? Don't intellectualize—feel it."
    },
    {
      id: "cost",
      layer: "CONSEQUENCE_MATRIX",
      question: "If this pattern continues, what does it cost your effectiveness and relationships at work? Not someday—the credibility, energy, or opportunities you're losing right now.",
      placeholder: "What are you sacrificing to stay comfortable in this dysfunction?",
      systemPrompt: "CALCULATING: Real cost vs. minimized cost...",
      somaticPrompt: "As you consider this cost, notice what happens in your body. Contraction? Expansion? Numbness? Whatever you feel, that's the truth."
    }
  ]
};

// ============================================================================
// PATTERN RECOGNITION ENGINE
// ============================================================================
const diagnosisPatterns = {
  SIGNAL_METABOLISM: {
    keywords: ['data', 'unclear', 'confused', 'overwhelmed', 'too much', 'noise', 'don\'t know', 'tracking', 'metrics', 'dashboard', 'reporting', 'information', 'paralysis'],
    emotional: ['confused', 'overwhelmed', 'scattered', 'lost', 'drowning'],
    deflection: ['maybe', 'not sure', 'complicated', 'it\'s complex'],
    avoidance: ['eventually', 'someday', 'when things calm down']
  },
  OFFER_MARKET: {
    keywords: ['market', 'audience', 'targeting', 'messaging', 'positioning', 'competition', 'pricing', 'leads', 'wrong customers', 'fit', 'niche', 'segment'],
    emotional: ['frustrated', 'stuck', 'invisible', 'ignored'],
    deflection: ['they don\'t understand', 'wrong audience', 'market isn\'t ready'],
    avoidance: ['need more research', 'testing', 'not the right time']
  },
  OPERATIONAL_DRIFT: {
    keywords: ['process', 'systems', 'efficiency', 'bottleneck', 'slow', 'broken', 'inefficient', 'waste', 'redundant', 'manual', 'workflow', 'scale', 'capacity'],
    emotional: ['exhausted', 'burnt out', 'grinding', 'trapped'],
    deflection: ['always been this way', 'too busy to fix', 'need more resources'],
    avoidance: ['after this quarter', 'when we hire', 'temporary situation']
  },
  TALENT_CULTURE: {
    keywords: ['team', 'people', 'culture', 'hiring', 'retention', 'turnover', 'morale', 'alignment', 'communication', 'leadership', 'politics', 'conflict', 'resistance'],
    emotional: ['frustrated', 'disappointed', 'alone', 'betrayed', 'angry'],
    deflection: ['they just don\'t get it', 'wrong people', 'can\'t find good talent'],
    avoidance: ['need better hiring process', 'culture takes time', 'generational issue']
  },
  CONVERSION_NARRATIVE: {
    keywords: ['conversion', 'cart', 'abandon', 'sales', 'funnel', 'landing', 'traffic', 'visitors', 'bounce', 'engagement', 'messaging', 'story', 'trust', 'urgency'],
    emotional: ['disappointed', 'confused', 'powerless'],
    deflection: ['price sensitive market', 'competition undercutting', 'people don\'t understand value'],
    avoidance: ['need more traffic first', 'testing messaging', 'market education']
  }
};

function diagnoseFromSignals(responses, analysisData) {
  const allText = Object.values(responses).join(' ').toLowerCase();
  const scores = {};
  const maxPossibleScore = {};

  Object.keys(diagnosisPatterns).forEach(key => {
    const pattern = diagnosisPatterns[key];
    let score = 0;
    let possibleScore = 0;
    
    // Keyword matching
    pattern.keywords.forEach(keyword => {
      possibleScore += 2;
      if (allText.includes(keyword)) score += 2;
    });
    
    // Emotional matching (higher weight)
    pattern.emotional.forEach(emotion => {
      possibleScore += 3;
      if (allText.includes(emotion)) score += 3;
    });
    
    // Deflection patterns (medium weight)
    pattern.deflection.forEach(deflect => {
      possibleScore += 2;
      if (allText.includes(deflect)) score += 2;
    });
    
    // Avoidance language (medium weight)
    pattern.avoidance.forEach(avoid => {
      possibleScore += 2;
      if (allText.includes(avoid)) score += 2;
    });
    
    scores[key] = score;
    maxPossibleScore[key] = possibleScore;
  });

  // Boost score based on contradiction count (strong signal)
  const contradictionBonus = Object.keys(analysisData).filter(k => 
    analysisData[k]?.patterns?.includes('self_contradiction')
  ).length * 5;
  
  // Boost based on passive language (strong signal)
  const passiveBonus = Object.values(analysisData).filter(a => 
    a.agency === 'passive'
  ).length * 3;
  
  // Apply bonuses proportionally
  Object.keys(scores).forEach(key => {
    if (scores[key] > 0) {
      scores[key] += contradictionBonus + passiveBonus;
      maxPossibleScore[key] += contradictionBonus + passiveBonus;
    }
  });

  // Calculate confidence scores
  const confidenceScores = {};
  Object.keys(scores).forEach(key => {
    confidenceScores[key] = maxPossibleScore[key] > 0 
      ? Math.round((scores[key] / maxPossibleScore[key]) * 100)
      : 0;
  });

  // Get top 3 patterns
  const sortedPatterns = Object.keys(scores)
    .map(key => ({ key, score: scores[key], confidence: confidenceScores[key] }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  
  return {
    primary: sortedPatterns[0]?.key || 'SIGNAL_METABOLISM',
    patterns: sortedPatterns
  };
}

// ============================================================================
// ENHANCED PATTERN DETECTION (Real-time analysis + Accountability)
// ============================================================================

// Extract meaningful phrases for quoting back
function extractKeyPhrases(text) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const phrases = [];
  
  // Extract sentences with strong language
  sentences.forEach(sentence => {
    const lower = sentence.toLowerCase();
    if (lower.includes('i ') || lower.includes('my ') || lower.includes('me ')) {
      const trimmed = sentence.trim();
      if (trimmed.length > 20 && trimmed.length < 120) {
        phrases.push(trimmed);
      }
    }
  });
  
  return phrases.slice(0, 2); // Return top 2 most relevant phrases
}

// Specificity scoring
function calculateSpecificity(text) {
  const numbers = (text.match(/\d+|\$|%/g) || []).length;
  const wordCount = text.split(/\s+/).length;
  const concreteNouns = (text.match(/\b(day|week|month|person|team|customer|revenue|hour|meeting|project|client)\b/gi) || []).length;
  
  let score = 0;
  if (numbers > 2) score += 3;
  if (concreteNouns > 3) score += 2;
  if (wordCount < 30) score += 1; // Brevity suggests clarity
  
  return score >= 3 ? 'high' : score >= 1 ? 'medium' : 'low';
}

// Agency analysis
function analyzeAgency(text) {
  const lower = text.toLowerCase();
  const passiveIndicators = (lower.match(/\b(was|were|been|being|can't|couldn't|unable|impossible|forced|made me|have to)\b/g) || []).length;
  const activeIndicators = (lower.match(/\b(i will|i am|i did|i choose|i decided|i'm going to|i created|i built)\b/g) || []).length;
  
  if (passiveIndicators > activeIndicators * 2) return 'passive';
  if (activeIndicators > passiveIndicators * 2) return 'active';
  return 'mixed';
}

// Emotional authenticity check
function checkEmotionalAuthenticity(text) {
  const lower = text.toLowerCase();
  const performativeWords = (lower.match(/\b(should|supposed to|right thing|proper|appropriate)\b/g) || []).length;
  const genuineEmotions = (lower.match(/\b(feel|feeling|scared|angry|frustrated|excited|terrified|hopeful)\b/g) || []).length;
  
  if (performativeWords > genuineEmotions) return 'performative';
  if (genuineEmotions > 0) return 'authentic';
  return 'neutral';
}

function analyzeResponse(text, promptId) {
  const patterns = [];
  const lower = text.toLowerCase();
  const wordCount = text.split(/\s+/).length;
  
  // Extract key phrases for quoting
  const keyPhrases = extractKeyPhrases(text);
  
  // Specificity analysis
  const specificity = calculateSpecificity(text);
  if (specificity === 'low') patterns.push('vague_narrative');
  if (specificity === 'high') patterns.push('high_specificity');
  
  // Agency analysis
  const agency = analyzeAgency(text);
  if (agency === 'passive') patterns.push('powerless_framing');
  if (agency === 'active') patterns.push('agency_claimed');
  
  // Emotional authenticity
  const authenticity = checkEmotionalAuthenticity(text);
  if (authenticity === 'performative') patterns.push('performative_response');
  if (authenticity === 'authentic') patterns.push('authentic_emotion');
  
  // Temporal orientation
  const futureWords = (lower.match(/will|going to|plan|next|future/g) || []).length;
  const pastWords = (lower.match(/was|were|had|previous|before/g) || []).length;
  if (futureWords > pastWords + 2) patterns.push('future_oriented');
  if (pastWords > futureWords + 2) patterns.push('past_anchored');
  
  // Emotional valence
  if (/afraid|fear|scared|anxious|worry/i.test(lower)) patterns.push('fear_detected');
  if (/hope|want|wish|dream/i.test(lower)) patterns.push('aspiration_detected');
  
  // Deflection patterns
  if (/they|them|people|others|someone/i.test(lower) && wordCount > 30) {
    const personalWords = (lower.match(/\bi\b|\bme\b|\bmy\b|\bmine\b/g) || []).length;
    const externalWords = (lower.match(/\bthey\b|\bthem\b|\btheir\b|\bpeople\b|\bothers\b/g) || []).length;
    if (externalWords > personalWords * 2) patterns.push('external_attribution');
  }
  
  // Avoidance language
  if (/maybe|might|probably|possibly|not sure|i think|kind of|sort of/i.test(lower)) patterns.push('uncertainty_markers');
  if (/eventually|someday|at some point|one day|when things|after/i.test(lower)) patterns.push('temporal_avoidance');
  
  // Contradiction indicators
  if (/but|however|although|though/i.test(lower)) {
    const contradictions = (lower.match(/but|however|although|though/g) || []).length;
    if (contradictions > 1) patterns.push('self_contradiction');
  }
  
  // Rationalization
  if (/because|reason|explain|understand|make sense/i.test(lower) && wordCount > 40) patterns.push('over_explaining');
  
  return { patterns, keyPhrases, specificity, agency, authenticity };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function AionOS() {
  const [stage, setStage] = useState('intro');
  const [domain, setDomain] = useState(null);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [responses, setResponses] = useState({});
  const [currentResponse, setCurrentResponse] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);
  const [detectedPatterns, setDetectedPatterns] = useState([]);
  const [decompilingPhase, setDecompilingPhase] = useState(0);
  const [contradictions, setContradictions] = useState([]);
  const [analysisData, setAnalysisData] = useState({});
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const textareaRef = useRef(null);
  
  // Check for admin mode on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setStage('admin');
    }
  }, []);

  // Real-time pattern detection
  useEffect(() => {
    if (currentResponse.length > 20 && stage === 'ritual') {
      const domainPrompts = PROMPTS[domain];
      const analysis = analyzeResponse(currentResponse, domainPrompts[currentPrompt].id);
      setDetectedPatterns(analysis.patterns);
    }
  }, [currentResponse, currentPrompt, stage, domain]);
  
  // Contradiction detection across responses
  const detectContradictions = (newResponses, analyzedData) => {
    const found = [];
    
    // Example: If they say they're committed to outcome but use avoidance language about obstacles
    if (newResponses.outcome && newResponses.obstacle) {
      const outcomeAnalysis = analyzedData.outcome;
      const obstacleAnalysis = analyzedData.obstacle;
      
      if (outcomeAnalysis.patterns.includes('high_specificity') && obstacleAnalysis.patterns.includes('external_attribution')) {
        const outcomeQuote = outcomeAnalysis.keyPhrases[0] || newResponses.outcome.slice(0, 80);
        const obstacleQuote = obstacleAnalysis.keyPhrases[0] || newResponses.obstacle.slice(0, 80);
        found.push({
          type: 'commitment_vs_blame',
          message: `You said "${outcomeQuote}" but then blamed external factors for obstacles`,
          quotes: [outcomeQuote, obstacleQuote]
        });
      }
      
      if (outcomeAnalysis.patterns.includes('aspiration_detected') && obstacleAnalysis.patterns.includes('powerless_framing')) {
        const outcomeQuote = outcomeAnalysis.keyPhrases[0] || newResponses.outcome.slice(0, 80);
        found.push({
          type: 'desire_vs_powerlessness',
          message: `You want the outcome but frame yourself as powerless to act`,
          quotes: [outcomeQuote]
        });
      }
    }
    
    // Pattern vs Cost contradictions
    if (newResponses.pattern && newResponses.cost) {
      const patternAnalysis = analyzedData.pattern;
      const costAnalysis = analyzedData.cost;
      
      if (patternAnalysis.patterns.includes('external_attribution') && !costAnalysis.patterns.includes('high_specificity')) {
        found.push({
          type: 'pattern_minimization',
          message: `You blame others for the pattern but can't articulate what it actually costs you`,
          quotes: []
        });
      }
    }
    
    return found;
  };

  // Submit feedback
  const submitFeedback = () => {
    const feedbackData = {
      timestamp: new Date().toISOString(),
      rating: feedbackRating,
      comment: feedbackComment,
      email: userEmail,
      domain: DOMAINS[domain]?.name,
      diagnosis: diagnosis?.data?.name,
      responses: responses
    };
    
    // Store in localStorage
    const existingFeedback = JSON.parse(localStorage.getItem('aionos_feedback') || '[]');
    existingFeedback.push(feedbackData);
    localStorage.setItem('aionos_feedback', JSON.stringify(existingFeedback));
    
    // Optional: Send via mailto (simple, no backend needed)
    if (userEmail) {
      const subject = encodeURIComponent('AION OS Feedback');
      const body = encodeURIComponent(
        `Rating: ${feedbackRating}/5\n` +
        `Comment: ${feedbackComment}\n\n` +
        `Diagnosis: ${diagnosis?.data?.name}\n` +
        `Domain: ${DOMAINS[domain]?.name}\n` +
        `Timestamp: ${new Date().toISOString()}`
      );
      window.location.href = `mailto:feedback@aionos.ai?subject=${subject}&body=${body}`;
    }
    
    setShowFeedback(false);
    alert('Thank you for your feedback!');
  };
  
  // Export session data for analysis
  const exportSessionData = () => {
    const sessionData = {
      timestamp: new Date().toISOString(),
      domain: DOMAINS[domain]?.name,
      responses: responses,
      detectedPatterns: Object.keys(responses).map(key => ({
        question: key,
        response: responses[key],
        analysis: analysisData[key]
      })),
      contradictions: contradictions,
      diagnosis: {
        pattern: diagnosis?.data?.name,
        code: diagnosis?.data?.code,
        signature: diagnosis?.data?.signature
      }
    };
    
    const dataStr = JSON.stringify(sessionData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `aionos-session-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleResponseSubmit = () => {
    if (!currentResponse.trim()) return;
    
    // Get domain-specific prompts
    const domainPrompts = PROMPTS[domain];
    
    // Analyze current response
    const analysis = analyzeResponse(currentResponse, domainPrompts[currentPrompt].id);
    
    const newResponses = {
      ...responses,
      [domainPrompts[currentPrompt].id]: currentResponse
    };
    setResponses(newResponses);
    
    // Store full analysis data
    const newAnalysisData = {
      ...analysisData,
      [domainPrompts[currentPrompt].id]: analysis
    };
    setAnalysisData(newAnalysisData);
    
    // Detect contradictions
    const foundContradictions = detectContradictions(newResponses, newAnalysisData);
    if (foundContradictions.length > 0) {
      setContradictions(prev => [...prev, ...foundContradictions]);
    }
    
    setCurrentResponse('');
    setDetectedPatterns([]);

    if (currentPrompt < domainPrompts.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
    } else {
      setStage('processing');
      const diagnosisResult = diagnoseFromSignals(newResponses, newAnalysisData);
      
      // Decompilation sequence
      setTimeout(() => setDecompilingPhase(1), 500);
      setTimeout(() => setDecompilingPhase(2), 1500);
      setTimeout(() => setDecompilingPhase(3), 2500);
      setTimeout(() => setDecompilingPhase(4), 3500);
      setTimeout(() => {
        setDiagnosis({ 
          key: diagnosisResult.primary, 
          data: DIAGNOSES[diagnosisResult.primary],
          patterns: diagnosisResult.patterns,
          allPatterns: diagnosisResult.patterns.map(p => ({
            ...p,
            data: DIAGNOSES[p.key]
          }))
        });
        setStage('diagnosis');
      }, 5000);
    }
  };

  const DiagnosisIcon = diagnosis?.data?.icon;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* ================================================================== */}
      {/* INTRO STAGE */}
      {/* ================================================================== */}
      {stage === 'intro' && (
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-2xl w-full space-y-6 border border-green-900 p-10 bg-black">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-red-500" />
                <span className="text-xs text-red-600">WARNING</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-green-500">
                AION <span className="text-red-500">OS</span>
              </h1>
              <p className="text-xl text-red-400 mt-3">This AI will call you out.</p>
              <p className="text-sm text-green-600 mt-1">No validation. No comfort. Just truth.</p>
            </div>
            
            <div className="h-px bg-red-900"></div>
            
            <div className="space-y-3 text-green-300 text-sm">
              <p className="text-base text-red-400">If you want to be told what you want to hear, go back to ChatGPT.</p>
              <p className="text-sm text-yellow-600">&gt; This system will detect when you're lying to yourself</p>
              <p className="text-sm text-yellow-600">&gt; It will name your contradictions in real-time</p>
              <p className="text-sm text-yellow-600">&gt; It will not let you deflect</p>
              <div className="h-px bg-green-900 my-4"></div>
              <p className="text-sm text-green-500">Most people can't handle this. Can you?</p>
            </div>
            
            <button
              onClick={() => setStage('domain')}
              className="w-full px-6 py-3 bg-red-900 hover:bg-red-800 text-red-400 font-semibold border border-red-700 transition-colors text-sm"
            >
              I'M READY
            </button>
            <p className="text-xs text-green-700 text-center mt-2">By continuing, you acknowledge this system will challenge you.</p>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* DOMAIN SELECTION */}
      {/* ================================================================== */}
      {stage === 'domain' && (
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6">
            <div className="border border-green-900 bg-black p-8">
              <h2 className="text-2xl font-bold text-green-500 mb-2">Select Context</h2>
              <p className="text-sm text-green-600 mb-8">Choose the area where you're stuck. The system will adapt.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(DOMAINS).map(([key, domain]) => {
                  const DomainIcon = domain.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setDomain(key);
                        setStage('ritual');
                      }}
                      className="p-6 border-2 border-green-900 hover:border-green-600 bg-black hover:bg-green-950 hover:bg-opacity-20 transition-all group"
                    >
                      <DomainIcon className="w-10 h-10 text-green-600 group-hover:text-green-500 mb-3" />
                      <h3 className="text-lg font-bold text-green-400 group-hover:text-green-300 mb-1">{domain.name}</h3>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* RITUAL STAGE */}
      {/* ================================================================== */}
      {stage === 'ritual' && domain && (
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl w-full">
            {/* System Status Bar */}
            <div className="mb-8 p-4 border border-green-900 bg-black space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-green-600">LAYER {currentPrompt + 1}/4</span>
                  <span className="text-green-800">|</span>
                  <span className="text-green-700">{DOMAINS[domain].name}</span>
                </div>
                <span className="text-green-700">{PROMPTS[domain][currentPrompt].layer}</span>
              </div>
              <div className="flex gap-1">
                {PROMPTS[domain].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 ${
                      i < currentPrompt ? 'bg-green-600' :
                      i === currentPrompt ? 'bg-green-500' :
                      'bg-green-950'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="border border-green-900 bg-black">
              {/* System Prompt */}
              <div className="p-4 border-b border-green-900 bg-green-950 bg-opacity-20">
                <p className="text-sm text-green-600 animate-pulse">
                  &gt; {PROMPTS[domain][currentPrompt].systemPrompt}
                </p>
              </div>

              {/* Main Interface */}
              <div className="p-8 space-y-6">
                {/* Psychological Pressure at Q3 */}
                {currentPrompt === 2 && (
                  <div className="border-l-4 border-red-600 bg-red-950 bg-opacity-30 p-4 mb-4">
                    <p className="text-sm text-red-400 font-bold leading-relaxed">
                      ⚠ Most people quit here. The discomfort you're feeling is the pattern protecting itself.
                    </p>
                  </div>
                )}
                
                {/* Somatic Check-In */}
                {PROMPTS[domain][currentPrompt].somaticPrompt && (
                  <div className="border-l-4 border-yellow-600 bg-yellow-950 bg-opacity-20 p-4">
                    <p className="text-xs text-yellow-500 font-bold mb-2 uppercase tracking-wide">Somatic Check</p>
                    <p className="text-sm text-yellow-400 leading-relaxed">
                      {PROMPTS[domain][currentPrompt].somaticPrompt}
                    </p>
                  </div>
                )}
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-green-400 leading-tight">
                    {PROMPTS[domain][currentPrompt].question}
                  </h2>
                  
                  <div className="relative">
                    <textarea
                      ref={textareaRef}
                      value={currentResponse}
                      onChange={(e) => setCurrentResponse(e.target.value)}
                      placeholder={PROMPTS[domain][currentPrompt].placeholder}
                      className="w-full h-48 bg-black border border-green-800 p-6 text-lg text-green-300 placeholder-green-900 focus:border-green-600 focus:outline-none resize-none font-mono"
                      autoFocus
                    />
                    
                    {/* Pattern Detection - Now Confrontational */}
                    {detectedPatterns.length > 0 && (
                      <div className="mt-4 p-4 border-2 border-red-800 bg-red-950 bg-opacity-30">
                        <p className="text-xs text-red-500 font-bold mb-2 uppercase tracking-wide">⚠ Pattern Detected</p>
                        <div className="space-y-1">
                          {detectedPatterns.slice(0, 3).map((pattern, i) => (
                            <p key={i} className="text-sm text-red-300 leading-relaxed">
                              • {pattern === 'external_attribution' ? 'You\'re blaming others' :
                                 pattern === 'temporal_avoidance' ? 'You\'re postponing action' :
                                 pattern === 'powerless_framing' ? 'You\'re claiming helplessness' :
                                 pattern === 'self_contradiction' ? 'Your answer contradicts itself' :
                                 pattern === 'over_explaining' ? 'You\'re rationalizing, not answering' :
                                 pattern.replace(/_/g, ' ')}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleResponseSubmit}
                  disabled={!currentResponse.trim() || currentResponse.trim().length < 20}
                  className="w-full py-3 bg-green-900 hover:bg-green-800 disabled:bg-green-950 disabled:text-green-900 text-green-400 font-semibold border border-green-700 disabled:border-green-950 transition-colors text-sm"
                >
                  {currentPrompt < PROMPTS[domain].length - 1 ? 'NEXT QUESTION' : 'SHOW ME THE TRUTH'}
                </button>
                {currentResponse.trim().length > 0 && currentResponse.trim().length < 20 && (
                  <p className="text-xs text-red-600 mt-2">Write more. One-word answers are avoidance.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* PROCESSING STAGE - DECOMPILATION SEQUENCE */}
      {/* ================================================================== */}
      {stage === 'processing' && (
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-xl w-full border border-green-900 bg-black p-10">
            <div className="space-y-6">
              <div className="text-center">
                <Terminal className="w-12 h-12 text-green-500 mx-auto mb-3 animate-pulse" />
                <h2 className="text-xl font-bold text-green-500">ANALYZING YOUR PATTERNS</h2>
                <p className="text-xs text-green-700 mt-2">Detecting avoidance, contradictions, and self-deception...</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className={`flex items-center gap-3 transition-opacity ${decompilingPhase >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                  <span className="text-green-600">[1]</span>
                  <span className="text-green-500">Reading your answers</span>
                  {decompilingPhase >= 1 && <span className="text-green-600 ml-auto">✓</span>}
                </div>
                
                <div className={`flex items-center gap-3 transition-opacity ${decompilingPhase >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                  <span className="text-green-600">[2]</span>
                  <span className="text-green-500">Detecting contradictions</span>
                  {decompilingPhase >= 2 && <span className="text-green-600 ml-auto">✓</span>}
                </div>
                
                <div className={`flex items-center gap-3 transition-opacity ${decompilingPhase >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                  <span className="text-green-600">[3]</span>
                  <span className="text-green-500">Identifying your pattern</span>
                  {decompilingPhase >= 3 && <span className="text-green-600 ml-auto">✓</span>}
                </div>
                
                <div className={`flex items-center gap-3 transition-opacity ${decompilingPhase >= 4 ? 'opacity-100' : 'opacity-30'}`}>
                  <span className="text-green-600">[4]</span>
                  <span className="text-green-500">Preparing feedback</span>
                  {decompilingPhase >= 4 && <span className="text-green-600 ml-auto">✓</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* DIAGNOSIS STAGE - SOURCE CODE REVEAL */}
      {/* ================================================================== */}
      {stage === 'diagnosis' && diagnosis && (
        <div className="min-h-screen p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header with Confidence Scores */}
            <div className="border border-green-900 bg-black p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-green-700 mb-1">PRIMARY PATTERN</p>
                  <h1 className="text-3xl font-bold text-red-500">{diagnosis.data.name}</h1>
                  <p className="text-sm text-green-600 mt-1">{diagnosis.data.code}</p>
                  {diagnosis.patterns && diagnosis.patterns[0] && (
                    <p className="text-sm text-yellow-500 mt-2">
                      Pattern Match: {diagnosis.patterns[0].confidence}%
                    </p>
                  )}
                </div>
                <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${diagnosis.data.color} flex items-center justify-center border-2 border-green-900`}>
                  <DiagnosisIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Alternative Patterns */}
              {diagnosis.allPatterns && diagnosis.allPatterns.length > 1 && (
                <div className="border-t border-green-900 pt-4">
                  <p className="text-xs text-green-700 mb-3">ALTERNATIVE PATTERNS DETECTED:</p>
                  <div className="space-y-2">
                    {diagnosis.allPatterns.slice(1).map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-green-500">{p.data?.name}</span>
                        <span className="text-yellow-600">{p.confidence}%</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-green-700 mt-3">
                    Algorithm shows multiple patterns. Use professional judgment to determine primary focus.
                  </p>
                </div>
              )}
            </div>

            {/* Dual View: Source Code + Human Readable */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LEFT: Pattern Signature */}
              <div className="border border-green-900 bg-black p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-green-600">PATTERN SIGNATURE</h3>
                  <span className="text-xs text-green-700">SOURCE CODE</span>
                </div>
                
                <div className="bg-green-950 bg-opacity-20 border border-green-900 p-4 font-mono text-sm">
                  <p className="text-green-500 mb-2">&gt; Operating pattern detected:</p>
                  <p className="text-red-400 text-xs leading-relaxed">
                    {diagnosis.data.signature}
                  </p>
                </div>

                {/* Technical Analysis Metrics */}
                <div className="bg-black border border-green-800 p-4 space-y-2 text-xs font-mono">
                  <p className="text-green-600 font-bold mb-3">PATTERN ANALYSIS METRICS:</p>
                  <div className="space-y-1 text-green-400">
                    <p>→ Contradictions detected: <span className="text-red-400">{contradictions.length}</span></p>
                    <p>→ Passive language: <span className="text-yellow-400">
                      {Object.values(analysisData).filter(a => a.agency === 'passive').length}/{Object.keys(responses).length} responses
                    </span></p>
                    <p>→ Specificity score: <span className="text-yellow-400">
                      {Object.values(analysisData).filter(a => a.specificity === 'high').length > 2 ? 'High' : 
                       Object.values(analysisData).filter(a => a.specificity === 'low').length > 2 ? 'Low' : 'Medium'}
                    </span></p>
                    <p>→ Emotional authenticity: <span className="text-yellow-400">
                      {Object.values(analysisData).filter(a => a.authenticity === 'authentic').length > 1 ? 'Authentic' : 
                       Object.values(analysisData).filter(a => a.authenticity === 'performative').length > 1 ? 'Performative' : 'Mixed'}
                    </span></p>
                  </div>
                  <p className="text-green-700 mt-3 pt-3 border-t border-green-900">These aren't opinions. These are measurements.</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-green-700">&gt; Pattern class:</p>
                  <p className="text-green-400 pl-4">{diagnosis.data.code}</p>
                  
                  <p className="text-green-700 mt-4">&gt; Intervention pathway:</p>
                  <p className="text-green-400 pl-4">{diagnosis.data.pathway}</p>
                </div>
                
                {/* Contradictions Detected */}
                {contradictions.length > 0 && (
                  <div className="mt-6 border-2 border-red-800 bg-red-950 bg-opacity-30 p-5">
                    <p className="text-sm text-red-500 font-bold mb-3 uppercase tracking-wide">⚠ Contradictions Found</p>
                    <div className="space-y-2">
                      {contradictions.map((c, i) => (
                        <p key={i} className="text-sm text-red-300 leading-relaxed pl-3 border-l-2 border-red-700">
                          {c.message}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT: Human-Readable Diagnosis */}
              <div className="border border-green-900 bg-black p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-red-600 mb-4">WHAT YOU'RE AVOIDING</h3>
                  <p className="text-green-300 leading-relaxed">
                    {diagnosis.data.description}
                  </p>
                </div>

                <div className="h-px bg-green-900"></div>
                
                <div>
                  <h3 className="text-sm font-bold text-yellow-600 mb-4">YOUR PATTERN</h3>
                  <p className="text-yellow-400 leading-relaxed text-sm">
                    {diagnosis.data.avoidance}
                  </p>
                </div>

                <div className="h-px bg-green-900"></div>

                <div>
                  <h3 className="text-sm font-bold text-red-600 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    COST OF STAYING HERE
                  </h3>
                  <p className="text-green-400 leading-relaxed">
                    {diagnosis.data.cost}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button
                onClick={() => setShowFeedback(true)}
                className="py-3 bg-blue-900 hover:bg-blue-800 text-blue-400 font-semibold border border-blue-700 transition-colors text-sm"
              >
                RATE ACCURACY
              </button>
              <button
                onClick={() => {
                  setStage('intro');
                  setDomain(null);
                  setCurrentPrompt(0);
                  setResponses({});
                  setContradictions([]);
                  setDiagnosis(null);
                  setFeedbackRating(0);
                  setFeedbackComment('');
                }}
                className="py-3 bg-green-900 hover:bg-green-800 text-green-400 font-semibold border border-green-700 transition-colors text-sm"
              >
                START OVER
              </button>
              <button
                onClick={() => setStage('brief')}
                className="py-3 bg-green-900 hover:bg-green-800 text-green-400 font-semibold border border-green-700 transition-colors text-sm"
              >
                FULL BREAKDOWN
              </button>
              <button
                onClick={exportSessionData}
                className="py-3 bg-yellow-900 hover:bg-yellow-800 text-yellow-400 font-semibold border border-yellow-700 transition-colors text-sm"
              >
                EXPORT DATA
              </button>
            </div>
            
            {/* Feedback Modal */}
            {showFeedback && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-8 z-50">
                <div className="max-w-2xl w-full border border-green-900 bg-black p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-green-500 mb-2">Rate This Diagnosis</h2>
                    <p className="text-sm text-green-600">Your feedback improves the algorithm.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-green-400 mb-3">How accurate was this pattern detection?</p>
                      <div className="flex gap-3">
                        {[1, 2, 3, 4, 5].map(rating => (
                          <button
                            key={rating}
                            onClick={() => setFeedbackRating(rating)}
                            className={`w-12 h-12 border-2 font-bold text-lg transition-all ${ 
                              feedbackRating >= rating 
                                ? 'border-yellow-500 bg-yellow-900 text-yellow-400' 
                                : 'border-green-900 bg-green-950 text-green-700 hover:border-green-700'
                            }`}
                          >
                            {rating}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-green-700 mt-2">1 = Completely wrong | 5 = Perfectly accurate</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-green-400 mb-2">What would make this more accurate? (optional)</p>
                      <textarea
                        value={feedbackComment}
                        onChange={(e) => setFeedbackComment(e.target.value)}
                        placeholder="If the diagnosis missed something or got it wrong, tell us..."
                        className="w-full h-32 bg-black border border-green-800 p-4 text-sm text-green-300 placeholder-green-900 focus:border-green-600 focus:outline-none resize-none font-mono"
                      />
                    </div>
                    
                    <div>
                      <p className="text-sm text-green-400 mb-2">Email (optional - to receive results)</p>
                      <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-black border border-green-800 p-3 text-sm text-green-300 placeholder-green-900 focus:border-green-600 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      onClick={submitFeedback}
                      disabled={feedbackRating === 0}
                      className="flex-1 py-3 bg-green-900 hover:bg-green-800 disabled:bg-green-950 disabled:text-green-900 text-green-400 font-semibold border border-green-700 disabled:border-green-950 transition-colors text-sm"
                    >
                      SUBMIT FEEDBACK
                    </button>
                    <button
                      onClick={() => setShowFeedback(false)}
                      className="px-6 py-3 bg-red-900 hover:bg-red-800 text-red-400 font-semibold border border-red-700 transition-colors text-sm"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
              <button
                onClick={() => window.print()}
                className="py-3 bg-red-900 hover:bg-red-800 text-red-400 font-semibold border border-red-700 transition-colors text-sm"
              >
                SAVE (IF YOU DARE)
              </button>
            </div>
            <p className="text-xs text-green-700 text-center mt-4">The question is: What will you do with this information?</p>
            <p className="text-xs text-yellow-600 text-center mt-2">Your feedback helps improve pattern detection accuracy.</p>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* CONSULTANT BRIEF */}
      {/* ================================================================== */}
      {stage === 'brief' && diagnosis && (
        <div className="min-h-screen p-8 bg-black">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="border border-green-900 bg-black p-5 flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-green-500">DIAGNOSTIC BRIEF</h1>
                <p className="text-xs text-green-700">Consultant access</p>
              </div>
              <button
                onClick={() => setStage('diagnosis')}
                className="px-4 py-2 bg-green-900 hover:bg-green-800 border border-green-700 text-green-400 transition-colors text-sm"
              >
                BACK
              </button>
            </div>

            <div className="border border-green-900 bg-black p-8 space-y-8">
              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs text-green-700 font-bold">IDENTIFIED PATTERN</h2>
                <p className="text-2xl font-bold text-red-500">{diagnosis.data.name}</p>
                <p className="text-sm text-green-600">Pattern ID: {diagnosis.data.code}</p>
                <p className="text-xs text-green-700 font-mono">Signature: {diagnosis.data.signature}</p>
              </div>

              <div className="h-px bg-green-900"></div>

              {/* Extracted Signals */}
              <div className="space-y-4">
                <h2 className="text-xs text-green-700 font-bold">EXTRACTED SIGNALS (RAW DATA)</h2>
                <div className="space-y-4">
                  {PROMPTS[domain].map((prompt, i) => (
                    <div key={i} className="border border-green-900 bg-green-950 bg-opacity-10 p-4 space-y-2">
                      <p className="text-xs text-green-600">[{prompt.layer}]</p>
                      <p className="text-sm text-green-700">{prompt.question}</p>
                      <p className="text-green-300 pl-4 text-sm border-l-2 border-green-900">{responses[prompt.id]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-green-900"></div>

              {/* Consultant Intelligence */}
              <div className="space-y-4">
                <h2 className="text-xs text-green-700 font-bold">RECOMMENDED ENGAGEMENT APPROACH</h2>
                <p className="text-green-300 leading-relaxed text-sm">
                  Open with acknowledgment of their 90-day commitment. Mirror the obstacle they identified—don't minimize it. 
                  Position the diagnosis as pattern recognition, not judgment. Emphasize that the {diagnosis.data.name.toLowerCase()} 
                  is a systems issue, not a personal failure. The pathway ({diagnosis.data.pathway}) is designed specifically 
                  to interrupt the recurring pattern they described. Frame this as inevitability intervention—if nothing changes, 
                  the cost compounds exponentially.
                </p>
              </div>

              <div className="h-px bg-green-900"></div>

              {/* Suggested Package */}
              <div className="space-y-4">
                <h2 className="text-xs text-green-700 font-bold">SUGGESTED INTERVENTION PACKAGE</h2>
                <div className="border border-green-700 bg-green-950 bg-opacity-20 p-6 space-y-2">
                  <p className="text-xl font-bold text-green-400">{diagnosis.data.pathway}</p>
                  <p className="text-green-600 text-sm">90-day intensive engagement protocol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* ADMIN VIEW */}
      {/* ================================================================== */}
      {stage === 'admin' && (
        <div className="min-h-screen p-8 bg-black">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="border border-green-900 bg-black p-6 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-green-500">AION OS - Admin Dashboard</h1>
                <p className="text-sm text-green-700 mt-1">User Feedback & Analytics</p>
              </div>
              <button
                onClick={() => {
                  window.location.href = window.location.pathname;
                }}
                className="px-4 py-2 bg-green-900 hover:bg-green-800 border border-green-700 text-green-400 transition-colors text-sm"
              >
                EXIT ADMIN
              </button>
            </div>

            {(() => {
              const feedbackData = JSON.parse(localStorage.getItem('aionos_feedback') || '[]');
              const avgRating = feedbackData.length > 0 
                ? (feedbackData.reduce((sum, f) => sum + f.rating, 0) / feedbackData.length).toFixed(1)
                : 'N/A';
              const emails = feedbackData.filter(f => f.email).map(f => f.email);
              
              const exportToCSV = () => {
                const headers = ['Timestamp', 'Rating', 'Email', 'Domain', 'Diagnosis', 'Comment'];
                const rows = feedbackData.map(f => [
                  f.timestamp,
                  f.rating,
                  f.email || '',
                  f.domain || '',
                  f.diagnosis || '',
                  (f.comment || '').replace(/,/g, ';')
                ]);
                
                const csv = [
                  headers.join(','),
                  ...rows.map(r => r.join(','))
                ].join('\\n');
                
                const blob = new Blob([csv], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `aionos-feedback-${Date.now()}.csv`;
                link.click();
                URL.revokeObjectURL(url);
              };

              return (
                <>
                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="border border-green-900 bg-black p-6">
                      <p className="text-xs text-green-700 mb-2">TOTAL COMPLETIONS</p>
                      <p className="text-4xl font-bold text-green-500">{feedbackData.length}</p>
                    </div>
                    <div className="border border-green-900 bg-black p-6">
                      <p className="text-xs text-green-700 mb-2">AVERAGE RATING</p>
                      <p className="text-4xl font-bold text-yellow-500">{avgRating}</p>
                      <p className="text-xs text-green-700 mt-1">out of 5</p>
                    </div>
                    <div className="border border-green-900 bg-black p-6">
                      <p className="text-xs text-green-700 mb-2">EMAILS CAPTURED</p>
                      <p className="text-4xl font-bold text-blue-500">{emails.length}</p>
                    </div>
                    <div className="border border-green-900 bg-black p-6">
                      <p className="text-xs text-green-700 mb-2">WITH COMMENTS</p>
                      <p className="text-4xl font-bold text-purple-500">{feedbackData.filter(f => f.comment).length}</p>
                    </div>
                  </div>

                  {/* Export Button */}
                  <div className="border border-green-900 bg-black p-4 flex items-center justify-between">
                    <p className="text-sm text-green-400">Export all feedback data to CSV for analysis</p>
                    <button
                      onClick={exportToCSV}
                      disabled={feedbackData.length === 0}
                      className="px-6 py-2 bg-yellow-900 hover:bg-yellow-800 disabled:bg-green-950 disabled:text-green-900 text-yellow-400 font-semibold border border-yellow-700 disabled:border-green-950 transition-colors text-sm"
                    >
                      EXPORT CSV
                    </button>
                  </div>

                  {/* Feedback Table */}
                  <div className="border border-green-900 bg-black p-6">
                    <h2 className="text-xl font-bold text-green-500 mb-4">Recent Feedback</h2>
                    {feedbackData.length === 0 ? (
                      <p className="text-green-700 text-center py-8">No feedback collected yet. Users must complete diagnosis and submit rating.</p>
                    ) : (
                      <div className="space-y-4 max-h-[600px] overflow-y-auto">
                        {feedbackData.reverse().map((feedback, i) => (
                          <div key={i} className="border border-green-900 bg-green-950 bg-opacity-10 p-4 space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  {[1,2,3,4,5].map(star => (
                                    <span key={star} className={star <= feedback.rating ? 'text-yellow-500' : 'text-green-900'}>★</span>
                                  ))}
                                </div>
                                <span className="text-sm text-green-600">{new Date(feedback.timestamp).toLocaleString()}</span>
                              </div>
                              {feedback.email && (
                                <span className="text-sm text-blue-400">{feedback.email}</span>
                              )}
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <p className="text-green-500"><span className="text-green-700">Domain:</span> {feedback.domain}</p>
                              <p className="text-green-500"><span className="text-green-700">Diagnosis:</span> {feedback.diagnosis}</p>
                            </div>
                            {feedback.comment && (
                              <div className="border-l-2 border-green-700 pl-3">
                                <p className="text-xs text-green-700 mb-1">Comment:</p>
                                <p className="text-sm text-green-300">{feedback.comment}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Email List */}
                  {emails.length > 0 && (
                    <div className="border border-green-900 bg-black p-6">
                      <h2 className="text-xl font-bold text-green-500 mb-4">Collected Emails ({emails.length})</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {emails.map((email, i) => (
                          <p key={i} className="text-sm text-blue-400 font-mono">{email}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
