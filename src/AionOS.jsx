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
// DIAGNOSTIC LAYERS
// ============================================================================
const PROMPTS = [
  {
    id: "outcome",
    layer: "COMMITMENT_LAYER",
    question: "What outcome are you actually committed to—not what you think you should want, but what your body knows you need?",
    placeholder: "If you write something vague, the system will call you out...",
    systemPrompt: "ANALYZING: Authentic commitment vs. performative goals...",
    somaticPrompt: "Before answering: Take three breaths. What sensations are present in your chest and gut right now? If you feel nothing, that's the first problem."
  },
  {
    id: "obstacle",
    layer: "OBSTACLE_SUBSTRATE",
    question: "What's the real obstacle? Not the story you tell others, but the truth you avoid saying out loud.",
    placeholder: "If you blame someone else, the system will detect it...",
    systemPrompt: "DETECTING: External blame vs. internal accountability...",
    somaticPrompt: "Notice where you feel resistance in your body as you read this question. If you want to skip this, ask yourself why."
  },
  {
    id: "pattern",
    layer: "PATTERN_MEMORY",
    question: "What pattern keeps repeating because you're choosing it—even if unconsciously?",
    placeholder: "No victim story. What's YOUR role in keeping this alive?",
    systemPrompt: "SCANNING: Agency denial and responsibility avoidance...",
    somaticPrompt: "If this pattern had a physical location in your body, where would it live? What does it feel like? Don't intellectualize—feel it."
  },
  {
    id: "cost",
    layer: "CONSEQUENCE_MATRIX",
    question: "If nothing changes, what does staying in this pattern actually cost you? Not theory—the real price you're paying right now.",
    placeholder: "What are you sacrificing to stay comfortable in this dysfunction?",
    systemPrompt: "CALCULATING: Real cost vs. minimized cost...",
    somaticPrompt: "As you consider this cost, notice what happens in your body. Contraction? Expansion? Numbness? Whatever you feel, that's the truth."
  }
];

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

function diagnoseFromSignals(responses) {
  const allText = Object.values(responses).join(' ').toLowerCase();
  const scores = {};

  Object.keys(diagnosisPatterns).forEach(key => {
    const pattern = diagnosisPatterns[key];
    let score = 0;
    
    pattern.keywords.forEach(keyword => {
      if (allText.includes(keyword)) score += 2;
    });
    
    pattern.emotional.forEach(emotion => {
      if (allText.includes(emotion)) score += 3;
    });
    
    scores[key] = score;
  });

  const maxScore = Math.max(...Object.values(scores));
  const diagnosis = Object.keys(scores).find(key => scores[key] === maxScore);
  
  return diagnosis || 'SIGNAL_METABOLISM';
}

// ============================================================================
// ENHANCED PATTERN DETECTION (Real-time analysis + Accountability)
// ============================================================================

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
  
  return patterns;
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
  const textareaRef = useRef(null);

  // Real-time pattern detection
  useEffect(() => {
    if (currentResponse.length > 20 && stage === 'ritual') {
      const patterns = analyzeResponse(currentResponse, PROMPTS[currentPrompt].id);
      setDetectedPatterns(patterns);
    }
  }, [currentResponse, currentPrompt, stage]);
  
  // Contradiction detection across responses
  const detectContradictions = (newResponses) => {
    const found = [];
    
    // Example: If they say they're committed to outcome but use avoidance language about obstacles
    if (newResponses.outcome && newResponses.obstacle) {
      const outcomePatterns = analyzeResponse(newResponses.outcome, 'outcome');
      const obstaclePatterns = analyzeResponse(newResponses.obstacle, 'obstacle');
      
      if (outcomePatterns.includes('high_specificity') && obstaclePatterns.includes('external_attribution')) {
        found.push({
          type: 'commitment_vs_blame',
          message: 'You claim commitment but blame external factors for your obstacles'
        });
      }
      
      if (outcomePatterns.includes('aspiration_detected') && obstaclePatterns.includes('powerless_framing')) {
        found.push({
          type: 'desire_vs_powerlessness',
          message: 'You want the outcome but frame yourself as powerless to overcome obstacles'
        });
      }
    }
    
    // Pattern vs Cost contradictions
    if (newResponses.pattern && newResponses.cost) {
      const patternAnalysis = analyzeResponse(newResponses.pattern, 'pattern');
      const costAnalysis = analyzeResponse(newResponses.cost, 'cost');
      
      if (patternAnalysis.includes('external_attribution') && !costAnalysis.includes('high_specificity')) {
        found.push({
          type: 'pattern_minimization',
          message: 'You blame others for the pattern but can\'t articulate what it actually costs you'
        });
      }
    }
    
    return found;
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
        patterns: analyzeResponse(responses[key], key)
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
    
    const newResponses = {
      ...responses,
      [PROMPTS[currentPrompt].id]: currentResponse
    };
    setResponses(newResponses);
    
    // Detect contradictions
    const foundContradictions = detectContradictions(newResponses);
    if (foundContradictions.length > 0) {
      setContradictions(prev => [...prev, ...foundContradictions]);
    }
    
    setCurrentResponse('');
    setDetectedPatterns([]);

    if (currentPrompt < PROMPTS.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
    } else {
      setStage('processing');
      const diagnosisKey = diagnoseFromSignals(newResponses);
      
      // Decompilation sequence
      setTimeout(() => setDecompilingPhase(1), 500);
      setTimeout(() => setDecompilingPhase(2), 1500);
      setTimeout(() => setDecompilingPhase(3), 2500);
      setTimeout(() => setDecompilingPhase(4), 3500);
      setTimeout(() => {
        setDiagnosis({ key: diagnosisKey, data: DIAGNOSES[diagnosisKey] });
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
                <span className="text-green-700">{PROMPTS[currentPrompt].layer}</span>
              </div>
              <div className="flex gap-1">
                {PROMPTS.map((_, i) => (
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
                  &gt; {PROMPTS[currentPrompt].systemPrompt}
                </p>
              </div>

              {/* Main Interface */}
              <div className="p-8 space-y-6">
                {/* Somatic Check-In */}
                {PROMPTS[currentPrompt].somaticPrompt && (
                  <div className="border-l-4 border-yellow-600 bg-yellow-950 bg-opacity-20 p-4">
                    <p className="text-xs text-yellow-500 font-bold mb-2 uppercase tracking-wide">Somatic Check</p>
                    <p className="text-sm text-yellow-400 leading-relaxed">
                      {PROMPTS[currentPrompt].somaticPrompt}
                    </p>
                  </div>
                )}
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-green-400 leading-tight">
                    {PROMPTS[currentPrompt].question}
                  </h2>
                  
                  <div className="relative">
                    <textarea
                      ref={textareaRef}
                      value={currentResponse}
                      onChange={(e) => setCurrentResponse(e.target.value)}
                      placeholder={PROMPTS[currentPrompt].placeholder}
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
                  {currentPrompt < PROMPTS.length - 1 ? 'NEXT QUESTION' : 'SHOW ME THE TRUTH'}
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
            {/* Header */}
            <div className="border border-green-900 bg-black p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-green-700 mb-1">YOUR PATTERN</p>
                  <h1 className="text-3xl font-bold text-red-500">{diagnosis.data.name}</h1>
                  <p className="text-sm text-green-600 mt-1">{diagnosis.data.code}</p>
                </div>
                <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${diagnosis.data.color} flex items-center justify-center border-2 border-green-900`}>
                  <DiagnosisIcon className="w-10 h-10 text-white" />
                </div>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  setStage('intro');
                  setDomain(null);
                  setCurrentPrompt(0);
                  setResponses({});
                  setContradictions([]);
                  setDiagnosis(null);
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
                EXPORT SESSION DATA
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
              <button
                onClick={() => window.print()}
                className="py-3 bg-red-900 hover:bg-red-800 text-red-400 font-semibold border border-red-700 transition-colors text-sm"
              >
                SAVE (IF YOU DARE)
              </button>
            </div>
            <p className="text-xs text-green-700 text-center mt-4">The question is: What will you do with this information?</p>
            <p className="text-xs text-yellow-600 text-center mt-2">Want to help improve AION OS? Export your session data and share your feedback.</p>
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
                  {PROMPTS.map((prompt, i) => (
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
    </div>
  );
}
