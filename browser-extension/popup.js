// PriXplainer Chrome Extension
// API endpoint for the website scan function
const API_URL = 'https://hclsesnrhxvbxbnhxery.supabase.co/functions/v1/website-scan';

let currentDomain = '';
let scanResult = null;

// DOM Elements
const idleState = document.getElementById('idle-state');
const scanningState = document.getElementById('scanning-state');
const errorState = document.getElementById('error-state');
const resultsState = document.getElementById('results-state');
const currentDomainEl = document.getElementById('current-domain');
const scanBtn = document.getElementById('scan-btn');
const retryBtn = document.getElementById('retry-btn');
const scanAnotherBtn = document.getElementById('scan-another-btn');
const copyBtn = document.getElementById('copy-btn');
const scanningText = document.getElementById('scanning-text');
const errorMessage = document.getElementById('error-message');

// Initialize popup
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Get the current tab's URL
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url) {
      const url = new URL(tab.url);
      currentDomain = url.hostname;
      currentDomainEl.textContent = currentDomain;
    } else {
      currentDomainEl.textContent = 'Unable to detect';
      scanBtn.disabled = true;
    }
  } catch (error) {
    console.error('Error getting current tab:', error);
    currentDomainEl.textContent = 'Unable to detect';
    scanBtn.disabled = true;
  }
});

// Event listeners
scanBtn.addEventListener('click', () => performScan());
retryBtn.addEventListener('click', () => performScan());
scanAnotherBtn.addEventListener('click', () => showState('idle'));
copyBtn.addEventListener('click', () => copyReport());

// Show different states
function showState(state) {
  idleState.style.display = state === 'idle' ? 'block' : 'none';
  scanningState.style.display = state === 'scanning' ? 'block' : 'none';
  errorState.style.display = state === 'error' ? 'block' : 'none';
  resultsState.classList.toggle('visible', state === 'results');
}

// Perform the scan
async function performScan() {
  if (!currentDomain) return;

  showState('scanning');
  
  const messages = [
    'Analyzing privacy practices...',
    'Checking data collection policies...',
    'Scanning for dark patterns...',
    'Evaluating tracking technologies...',
    'Generating risk assessment...'
  ];

  let messageIndex = 0;
  const messageInterval = setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    scanningText.textContent = messages[messageIndex];
  }, 2000);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: currentDomain }),
    });

    clearInterval(messageInterval);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Request failed with status ${response.status}`);
    }

    scanResult = await response.json();
    displayResults(scanResult);
    showState('results');
  } catch (error) {
    clearInterval(messageInterval);
    console.error('Scan error:', error);
    errorMessage.textContent = error.message || 'Failed to scan website. Please try again.';
    showState('error');
  }
}

// Display scan results
function displayResults(result) {
  // Trust Score
  const trustScoreEl = document.getElementById('trust-score');
  trustScoreEl.textContent = result.score;
  trustScoreEl.className = 'score-value';
  if (result.score >= 70) {
    trustScoreEl.classList.add('high');
  } else if (result.score >= 40) {
    trustScoreEl.classList.add('medium');
  } else {
    trustScoreEl.classList.add('low');
  }

  // Risk Badge
  const riskBadge = document.getElementById('risk-badge');
  riskBadge.textContent = `${result.risk_level} Risk`;
  riskBadge.className = 'risk-badge ' + result.risk_level.toLowerCase();

  // Summary
  document.getElementById('summary').textContent = result.summary;

  // Risks
  const risksList = document.getElementById('risks-list');
  risksList.innerHTML = '';
  if (result.immediate_risks && result.immediate_risks.length > 0) {
    result.immediate_risks.slice(0, 4).forEach(risk => {
      const riskItem = document.createElement('div');
      riskItem.className = 'risk-item';
      const icon = getSeverityIcon(risk.severity);
      riskItem.innerHTML = `
        <span class="risk-icon">${icon}</span>
        <span>${risk.text}</span>
      `;
      risksList.appendChild(riskItem);
    });
    document.getElementById('risks-section').style.display = 'block';
  } else {
    document.getElementById('risks-section').style.display = 'none';
  }

  // Dark Patterns
  const darkPatternsSection = document.getElementById('dark-patterns-section');
  const darkPatternsList = document.getElementById('dark-patterns-list');
  darkPatternsList.innerHTML = '';
  
  if (result.dark_patterns && result.dark_patterns.detected && result.dark_patterns.items.length > 0) {
    result.dark_patterns.items.slice(0, 3).forEach(pattern => {
      const patternItem = document.createElement('div');
      patternItem.className = 'risk-item';
      patternItem.innerHTML = `
        <span class="risk-icon">🎭</span>
        <span><strong>${pattern.type}:</strong> ${pattern.evidence}</span>
      `;
      darkPatternsList.appendChild(patternItem);
    });
    darkPatternsSection.style.display = 'block';
  } else {
    darkPatternsSection.style.display = 'none';
  }

  // Confidence note
  document.getElementById('confidence-note').textContent = 
    `Analysis confidence: ${result.confidence}`;
}

// Get icon based on severity
function getSeverityIcon(severity) {
  switch (severity) {
    case 'red': return '🔴';
    case 'yellow': return '🟡';
    case 'green': return '🟢';
    default: return '⚪';
  }
}

// Copy report to clipboard
async function copyReport() {
  if (!scanResult) return;

  const report = `
PriXplainer Privacy Report
===========================
Website: ${scanResult.domain}
Trust Score: ${scanResult.score}/100
Risk Level: ${scanResult.risk_level}

Summary:
${scanResult.summary}

Key Risks:
${scanResult.immediate_risks.map(r => `• ${r.text}`).join('\n')}

${scanResult.dark_patterns.detected ? `Dark Patterns Detected:
${scanResult.dark_patterns.items.map(p => `• ${p.type}: ${p.evidence}`).join('\n')}` : ''}

Recommended Actions:
${scanResult.actions.map(a => `• ${a.title}: ${a.text}`).join('\n')}

---
Generated by PriXplainer - https://consenterra.lovable.app
  `.trim();

  try {
    await navigator.clipboard.writeText(report);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  } catch (error) {
    console.error('Failed to copy:', error);
  }
}
