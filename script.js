// ========================================
// LANGUAGE TRANSLATIONS
// ========================================
const translations = {
    hi: {
        'app-title': 'कृषिमित्र & जलधार',
        'notifications-title': 'सूचनाएं',
        'tab-overview': 'ओवरव्यू',
        'tab-krishimitra': 'कृषिमित्र',
        'tab-jaldhar': 'जलधार',
        'tab-camera': 'कैमरा',
        'tab-settings': 'सेटिंग्स',
        'widget-soil-title': 'मृदा नमी',
        'widget-temp-title': 'तापमान',
        'widget-humidity-title': 'आर्द्रता',
        'widget-water-title': 'जल स्तर',
        'widget-ph-title': 'pH स्तर',
        'widget-air-title': 'वायु गुणवत्ता',
        'soil-title': 'मृदा नमी',
        'avg-soil-label': 'औसत मृदा नमी',
        'climate-title': 'जलवायु डेटा',
        'avg-temp-label': 'औसत तापमान',
        'avg-humidity-label': 'औसत आर्द्रता',
        'air-title': 'वायु गुणवत्ता',
        'charts-title': 'रीयल-टाइम ट्रेंड',
        'pump-title': 'पंप नियंत्रण',
        'pump-status': 'बंद',
        'auto-text': 'ऑटो',
        'manual-text': 'मैन्युअल',
        'on-text': 'चालू करें',
        'off-text': 'बंद करें',
        'auto-info': 'ऑटो मोड में पंप स्वचालित रूप से नियंत्रित होता है',
        'water-title': 'जल टैंक स्तर',
        'height-label': 'टैंक ऊंचाई:',
        'current-label': 'वर्तमान स्तर:',
        'ph-section-title': 'pH मापन',
        'water-charts-title': 'जल निगरानी',
        'camera-title': 'लाइव कैमरा',
        'stream-text': 'स्ट्रीम शुरू करें',
        'refresh-text': 'रीफ्रेश',
        'fullscreen-text': 'फुलस्क्रीन',
        'placeholder-text': 'स्ट्रीम शुरू करने के लिए बटन दबाएं',
        'loading-text': 'लोड हो रहा है...',
        'stream-status': 'बंद',
        'update-label': 'कैमरा IP:',
        'camera-ip': '192.168.1.11',
        'last-update-label': 'अंतिम अपडेट:',
        'general-title': 'सामान्य सेटिंग्स',
        'dark-label': 'डार्क मोड',
        'notif-label': 'सूचनाएं',
        'refresh-label': 'ऑटो रीफ्रेश',
        'threshold-title': 'थ्रेशोल्ड सेटिंग्स',
        'temp-threshold-label': 'तापमान (°C)',
        'soil-threshold-label': 'न्यूनतम मृदा नमी (%)',
        'water-threshold-label': 'न्यूनतम जल स्तर (%)',
        'ph-min-threshold-label': 'न्यूनतम pH',
        'ph-max-threshold-label': 'अधिकतम pH',
        'humidity-threshold-label': 'आर्द्रता (%)',
        'soil-status': 'सामान्य',
        'humidity-status': 'आदर्श',
        'ph-status': 'तटस्थ',
        'ph-badge': 'तटस्थ',
        'air-status': 'अच्छा'
    },
    en: {
        'app-title': 'KrishiMitra & Jaldhar',
        'notifications-title': 'Notifications',
        'tab-overview': 'Overview',
        'tab-krishimitra': 'KrishiMitra',
        'tab-jaldhar': 'Jaldhar',
        'tab-camera': 'Camera',
        'tab-settings': 'Settings',
        'widget-soil-title': 'Soil Moisture',
        'widget-temp-title': 'Temperature',
        'widget-humidity-title': 'Humidity',
        'widget-water-title': 'Water Level',
        'widget-ph-title': 'pH Level',
        'widget-air-title': 'Air Quality',
        'soil-title': 'Soil Moisture',
        'avg-soil-label': 'Average Soil Moisture',
        'climate-title': 'Climate Data',
        'avg-temp-label': 'Average Temperature',
        'avg-humidity-label': 'Average Humidity',
        'air-title': 'Air Quality',
        'charts-title': 'Real-time Trends',
        'pump-title': 'Pump Control',
        'pump-status': 'Off',
        'auto-text': 'Auto',
        'manual-text': 'Manual',
        'on-text': 'Turn On',
        'off-text': 'Turn Off',
        'auto-info': 'Pump is automatically controlled in auto mode',
        'water-title': 'Water Tank Level',
        'height-label': 'Tank Height:',
        'current-label': 'Current Level:',
        'ph-section-title': 'pH Measurement',
        'water-charts-title': 'Water Monitoring',
        'camera-title': 'Live Camera',
        'stream-text': 'Start Stream',
        'refresh-text': 'Refresh',
        'fullscreen-text': 'Fullscreen',
        'placeholder-text': 'Press button to start stream',
        'loading-text': 'Loading...',
        'stream-status': 'Stopped',
        'update-label': 'Camera IP:',
        'camera-ip': '192.168.1.11',
        'last-update-label': 'Last Update:',
        'general-title': 'General Settings',
        'dark-label': 'Dark Mode',
        'notif-label': 'Notifications',
        'refresh-label': 'Auto Refresh',
        'threshold-title': 'Threshold Settings',
        'temp-threshold-label': 'Temperature (°C)',
        'soil-threshold-label': 'Min Soil Moisture (%)',
        'water-threshold-label': 'Min Water Level (%)',
        'ph-min-threshold-label': 'Minimum pH',
        'ph-max-threshold-label': 'Maximum pH',
        'humidity-threshold-label': 'Humidity (%)',
        'soil-status': 'Normal',
        'humidity-status': 'Ideal',
        'ph-status': 'Neutral',
        'ph-badge': 'Neutral',
        'air-status': 'Good'
    }
};

// ========================================
// GLOBAL STATE
// ========================================
let currentTab = 'overview';
let notificationCount = 0;
let notifications = [];
let refreshInterval;
let graphUpdateInterval;
let cameraUpdateInterval;
let isStreamActive = false;

// ========================================
// API CONFIGURATION (UPDATED WITH YOUR IP)
// ========================================
const API_CONFIG = {
    baseURL: 'http://192.168.1.11',  // Your ESP32-CAM IP
    endpoints: {
        sensorData: '/api/sensors',
        pumpControl: '/api/pump',
        thresholds: '/api/thresholds',
        camera: ''  // Empty for iframe (uses baseURL directly)
    },
    refreshInterval: 2000,
    graphUpdateInterval: 3000
};

// ========================================
// DUMMY DATA GENERATION
// ========================================
function generateRandomValue(min, max, decimals = 0) {
    const value = Math.random() * (max - min) + min;
    return decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.round(value);
}

function generateDummyData() {
    return {
        soil: {
            sensor1: generateRandomValue(30, 70, 1),
            sensor2: generateRandomValue(30, 70, 1)
        },
        temperature: {
            sensor1: generateRandomValue(20, 35, 1),
            sensor2: generateRandomValue(20, 35, 1)
        },
        humidity: {
            sensor1: generateRandomValue(40, 90, 0),
            sensor2: generateRandomValue(40, 90, 0)
        },
        airQuality: generateRandomValue(50, 150, 0),
        waterLevel: generateRandomValue(20, 90, 1),
        ph: generateRandomValue(6, 8.5, 1),
        pumpStatus: false,
        pumpMode: 'auto'
    };
}

function calculateAverages(data) {
    return {
        soilAvg: ((data.soil.sensor1 + data.soil.sensor2) / 2).toFixed(1),
        tempAvg: ((data.temperature.sensor1 + data.temperature.sensor2) / 2).toFixed(1),
        humidityAvg: Math.round((data.humidity.sensor1 + data.humidity.sensor2) / 2),
        airQuality: Math.round(data.airQuality),
        waterLevel: data.waterLevel.toFixed(1),
        ph: data.ph.toFixed(1)
    };
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const backdrop = document.createElement('div');
    backdrop.className = 'notification-backdrop';
    backdrop.onclick = toggleNotifications;
    document.body.appendChild(backdrop);
    
    loadSettings();
    initCharts();
    initMiniChart();
    fetchSensorData();
    startAutoRefresh();
    startGraphUpdates();
    updateTime();
    setInterval(updateTime, 1000);
});

// ========================================
// TIME UPDATE
// ========================================
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('hi-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// ========================================
// TAB SWITCHING
// ========================================
function switchTab(tabName) {
    currentTab = tabName;
    
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    setTimeout(() => {
        const tabElement = document.getElementById(`${tabName}-tab`);
        if (tabElement) {
            tabElement.classList.add('active');
        }
    }, 50);
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    const panel = document.getElementById('notification-panel');
    const backdrop = document.querySelector('.notification-backdrop');
    if (panel && panel.classList.contains('active')) {
        panel.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
    }
}

// ========================================
// NOTIFICATION MANAGEMENT
// ========================================
function toggleNotifications() {
    const panel = document.getElementById('notification-panel');
    const backdrop = document.querySelector('.notification-backdrop');
    
    if (!panel || !backdrop) return;
    
    if (panel.classList.contains('active')) {
        panel.classList.remove('active');
        backdrop.classList.remove('active');
    } else {
        panel.classList.add('active');
        backdrop.classList.add('active');
    }
}

function addNotification(title, message, type = 'info') {
    const lang = document.documentElement.lang;
    const now = new Date();
    const timeString = now.toLocaleTimeString('hi-IN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const notification = {
        id: Date.now(),
        title,
        message,
        type,
        time: timeString
    };
    
    const isDuplicate = notifications.some(n => 
        n.title === title && n.message === message && 
        (Date.now() - n.id) < 60000
    );
    
    if (isDuplicate) return;
    
    notifications.unshift(notification);
    notificationCount++;
    
    const countElement = document.getElementById('notification-count');
    if (countElement) {
        countElement.textContent = notificationCount;
    }
    
    const notificationHTML = `
        <div class="notification-item ${type}">
            <h4>${title}</h4>
            <p>${message}</p>
            <div class="time">${timeString}</div>
        </div>
    `;
    
    const notificationList = document.getElementById('notification-list');
    if (notificationList) {
        notificationList.insertAdjacentHTML('afterbegin', notificationHTML);
    }
    
    if (localStorage.getItem('notifications_enabled') !== 'false') {
        showToast(title, type);
    }
    
    if (notifications.length > 50) {
        notifications = notifications.slice(0, 50);
        const items = notificationList.querySelectorAll('.notification-item');
        if (items.length > 50) {
            items[items.length - 1].remove();
        }
    }
}

function clearNotifications() {
    const lang = document.documentElement.lang;
    if (confirm(lang === 'hi' ? 'सभी सूचनाएं हटाएं?' : 'Clear all notifications?')) {
        notifications = [];
        notificationCount = 0;
        const countElement = document.getElementById('notification-count');
        if (countElement) countElement.textContent = '0';
        const listElement = document.getElementById('notification-list');
        if (listElement) listElement.innerHTML = '';
    }
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// LANGUAGE SWITCHING
// ========================================
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'SPAN' && element.closest('.threshold-row label')) {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('.lang-btn-header').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    localStorage.setItem('language', lang);
    updateChartLanguage(lang);
    updateStatusBadges(lang);
    
    showToast(lang === 'hi' ? 'भाषा बदली गई' : 'Language changed', 'success');
}

function updateStatusBadges(lang) {
    fetchSensorData();
}

// ========================================
// DARK MODE
// ========================================
function toggleDarkMode() {
    const toggle = document.getElementById('dark-toggle');
    if (!toggle) return;
    
    const isDark = toggle.checked;
    const html = document.documentElement;
    
    if (isDark) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

// ========================================
// PUMP CONTROL
// ========================================
function setPumpMode(mode) {
    const lang = document.documentElement.lang;
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const modeBtn = document.getElementById(`${mode}-btn`);
    if (modeBtn) modeBtn.classList.add('active');
    
    const controls = document.getElementById('pump-controls');
    const message = document.getElementById('auto-message');
    
    if (controls && message) {
        if (mode === 'manual') {
            controls.style.display = 'flex';
            message.style.display = 'none';
        } else {
            controls.style.display = 'none';
            message.style.display = 'flex';
        }
    }
    
    showToast(
        mode === 'auto' ? 
            (lang === 'hi' ? 'ऑटो मोड सक्रिय' : 'Auto mode activated') :
            (lang === 'hi' ? 'मैन्युअल मोड सक्रिय' : 'Manual mode activated'),
        'success'
    );
}

function togglePump(turnOn) {
    const lang = document.documentElement.lang;
    updatePumpStatus(turnOn);
    
    showToast(
        turnOn ? 
            (lang === 'hi' ? 'पंप चालू किया गया' : 'Pump turned on') :
            (lang === 'hi' ? 'पंप बंद किया गया' : 'Pump turned off'),
        'success'
    );
}

function updatePumpStatus(status) {
    const dot = document.getElementById('pump-dot');
    const statusText = document.getElementById('pump-status');
    const lang = document.documentElement.lang;
    
    if (dot) {
        if (status) {
            dot.classList.add('on');
        } else {
            dot.classList.remove('on');
        }
    }
    
    if (statusText) {
        statusText.textContent = status ? 
            (lang === 'hi' ? 'चालू' : 'On') : 
            (lang === 'hi' ? 'बंद' : 'Off');
    }
}

// ========================================
// CAMERA CONTROL (IFRAME VERSION)
// ========================================
function toggleStream() {
    const lang = document.documentElement.lang;
    const btn = document.getElementById('stream-btn');
    const btnText = document.getElementById('stream-text');
    const placeholder = document.getElementById('camera-placeholder');
    const iframeContainer = document.getElementById('camera-iframe-container');
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('stream-status');
    
    if (!btn || !placeholder || !iframeContainer) return;
    
    isStreamActive = !isStreamActive;
    
    if (isStreamActive) {
        // Start stream
        placeholder.style.display = 'none';
        iframeContainer.style.display = 'block';
        btn.classList.add('active');
        btn.querySelector('i').className = 'fas fa-stop';
        if (btnText) btnText.textContent = lang === 'hi' ? 'स्ट्रीम बंद करें' : 'Stop Stream';
        
        if (statusDot) statusDot.classList.add('active');
        if (statusText) statusText.textContent = lang === 'hi' ? 'चालू' : 'Active';
        
        startCameraStream();
        showToast(lang === 'hi' ? 'कैमरा स्ट्रीम शुरू' : 'Camera stream started', 'success');
    } else {
        // Stop stream
        placeholder.style.display = 'flex';
        iframeContainer.style.display = 'none';
        btn.classList.remove('active');
        btn.querySelector('i').className = 'fas fa-play';
        if (btnText) btnText.textContent = lang === 'hi' ? 'स्ट्रीम शुरू करें' : 'Start Stream';
        
        if (statusDot) statusDot.classList.remove('active');
        if (statusText) statusText.textContent = lang === 'hi' ? 'बंद' : 'Stopped';
        
        stopCameraStream();
        showToast(lang === 'hi' ? 'कैमरा स्ट्रीम बंद' : 'Camera stream stopped', 'info');
    }
}

function startCameraStream() {
    const iframe = document.getElementById('camera-iframe');
    const loadingOverlay = document.getElementById('loading-overlay');
    
    if (iframe) {
        // Show loading overlay
        if (loadingOverlay) {
            loadingOverlay.classList.remove('hidden');
        }
        
        // Set iframe source to ESP32-CAM IP
        iframe.src = API_CONFIG.baseURL;
        
        // Hide loading overlay after iframe loads
        iframe.onload = function() {
            if (loadingOverlay) {
                setTimeout(() => {
                    loadingOverlay.classList.add('hidden');
                }, 500);
            }
            updateLastUpdateTime();
        };
        
        // Handle iframe error
        iframe.onerror = function() {
            handleCameraError();
        };
    }
    
    updateLastUpdateTime();
}

function stopCameraStream() {
    const iframe = document.getElementById('camera-iframe');
    if (iframe) {
        iframe.src = '';
    }
    
    if (cameraUpdateInterval) {
        clearInterval(cameraUpdateInterval);
        cameraUpdateInterval = null;
    }
}

function refreshCamera() {
    if (!isStreamActive) {
        const lang = document.documentElement.lang;
        showToast(lang === 'hi' ? 'पहले स्ट्रीम शुरू करें' : 'Start stream first', 'warning');
        return;
    }
    
    const iframe = document.getElementById('camera-iframe');
    const loadingOverlay = document.getElementById('loading-overlay');
    
    if (iframe) {
        if (loadingOverlay) {
            loadingOverlay.classList.remove('hidden');
        }
        
        // Reload iframe
        iframe.src = iframe.src;
        
        setTimeout(() => {
            if (loadingOverlay) {
                loadingOverlay.classList.add('hidden');
            }
        }, 1000);
    }
    
    updateLastUpdateTime();
    
    const lang = document.documentElement.lang;
    showToast(lang === 'hi' ? 'कैमरा रीफ्रेश किया गया' : 'Camera refreshed', 'success');
}

function handleCameraError() {
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    const lang = document.documentElement.lang;
    
    if (loadingOverlay && loadingText) {
        loadingText.textContent = lang === 'hi' ? 'कनेक्शन विफल' : 'Connection Failed';
        loadingOverlay.style.background = 'rgba(239, 68, 68, 0.9)';
    }
    
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('stream-status');
    
    if (statusDot) statusDot.classList.remove('active');
    if (statusText) statusText.textContent = lang === 'hi' ? 'त्रुटि' : 'Error';
    
    showToast(lang === 'hi' ? 'कैमरा से कनेक्ट नहीं हो सका' : 'Could not connect to camera', 'danger');
}

function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('hi-IN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    const timeElement = document.getElementById('last-update');
    if (timeElement) timeElement.textContent = timeString;
}

function toggleFullscreen() {
    const iframeContainer = document.getElementById('camera-iframe-container');
    if (!iframeContainer) return;
    
    if (!document.fullscreenElement) {
        iframeContainer.requestFullscreen().catch(err => {
            console.error('Error attempting to enable fullscreen:', err);
        });
        iframeContainer.classList.add('fullscreen');
    } else {
        document.exitFullscreen();
        iframeContainer.classList.remove('fullscreen');
    }
}

// Listen for fullscreen change
document.addEventListener('fullscreenchange', () => {
    const iframeContainer = document.getElementById('camera-iframe-container');
    if (!document.fullscreenElement && iframeContainer) {
        iframeContainer.classList.remove('fullscreen');
    }
});

// ========================================
// SETTINGS FUNCTIONS
// ========================================
function toggleNotificationPreference() {
    const toggle = document.getElementById('notif-toggle');
    if (!toggle) return;
    
    const enabled = toggle.checked;
    localStorage.setItem('notifications_enabled', enabled);
    
    const lang = document.documentElement.lang;
    showToast(
        enabled ? 
            (lang === 'hi' ? 'सूचनाएं सक्षम' : 'Notifications enabled') :
            (lang === 'hi' ? 'सूचनाएं अक्षम' : 'Notifications disabled'),
        'success'
    );
}

function toggleAutoRefresh() {
    const toggle = document.getElementById('auto-toggle');
    if (!toggle) return;
    
    const enabled = toggle.checked;
    
    if (enabled) {
        startAutoRefresh();
        startGraphUpdates();
    } else {
        stopAutoRefresh();
        stopGraphUpdates();
    }
    
    localStorage.setItem('auto_refresh', enabled);
}

function updateThreshold(type, value) {
    const valueElement = document.getElementById(type + '-value');
    if (valueElement) {
        if (type.includes('ph')) {
            valueElement.textContent = parseFloat(value).toFixed(1);
        } else {
            valueElement.textContent = Math.round(value);
        }
    }
}

function saveThreshold(type) {
    const lang = document.documentElement.lang;
    const rangeElement = document.getElementById(type + '-range');
    if (!rangeElement) return;
    
    const value = rangeElement.value;
    localStorage.setItem(`threshold_${type}`, value);
    
    showToast(
        lang === 'hi' ? 
            'थ्रेशोल्ड सेव किया गया' : 
            'Threshold saved',
        'success'
    );
}

function loadSettings() {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    
    if (savedTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        const toggle = document.getElementById('dark-toggle');
        if (toggle) toggle.checked = true;
    }
    
    const thresholds = {
        'temp': localStorage.getItem('threshold_temp') || '35',
        'humidity': localStorage.getItem('threshold_humidity') || '80',
        'soil': localStorage.getItem('threshold_soil') || '30',
        'water': localStorage.getItem('threshold_water') || '20',
        'ph-min': localStorage.getItem('threshold_ph-min') || '6.5',
        'ph-max': localStorage.getItem('threshold_ph-max') || '8.5'
    };
    
    Object.keys(thresholds).forEach(type => {
        const range = document.getElementById(type + '-range');
        const value = document.getElementById(type + '-value');
        if (range && value) {
            range.value = thresholds[type];
            if (type.includes('ph')) {
                value.textContent = parseFloat(thresholds[type]).toFixed(1);
            } else {
                value.textContent = Math.round(thresholds[type]);
            }
        }
    });
    
    const autoRefresh = localStorage.getItem('auto_refresh');
    if (autoRefresh === 'false') {
        const toggle = document.getElementById('auto-toggle');
        if (toggle) toggle.checked = false;
        stopAutoRefresh();
        stopGraphUpdates();
    }
    
    const notificationsEnabled = localStorage.getItem('notifications_enabled');
    if (notificationsEnabled === 'false') {
        const toggle = document.getElementById('notif-toggle');
        if (toggle) toggle.checked = false;
    }
    
    const savedLang = localStorage.getItem('language') || 'hi';
    if (savedLang === 'en') {
        document.querySelectorAll('.lang-btn-header').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === 'en') {
                btn.classList.add('active');
            }
        });
        changeLanguage('en');
    }
}

function getThresholds() {
    return {
        temp: parseFloat(localStorage.getItem('threshold_temp') || '35'),
        humidity: parseFloat(localStorage.getItem('threshold_humidity') || '80'),
        soil: parseFloat(localStorage.getItem('threshold_soil') || '30'),
        water: parseFloat(localStorage.getItem('threshold_water') || '20'),
        phMin: parseFloat(localStorage.getItem('threshold_ph-min') || '6.5'),
        phMax: parseFloat(localStorage.getItem('threshold_ph-max') || '8.5')
    };
}

// ========================================
// DATA FETCHING & UPDATE
// ========================================
async function fetchSensorData() {
    try {
        const data = generateDummyData();
        const averages = calculateAverages(data);
        
        updateUI(data, averages);
        updateOverview(data, averages);
        checkAlerts(data, averages);
        
    } catch (error) {
        console.error('Error fetching sensor data:', error);
    }
}

function updateUI(data, averages) {
    updateElement('soil-avg', averages.soilAvg);
    updateProgressBar('soil-bar', parseFloat(averages.soilAvg));
    
    updateElement('temp-avg', averages.tempAvg);
    updateElement('humidity-avg', averages.humidityAvg);
    
    updateElement('air-avg', averages.airQuality);
    updateAirQualityStatus(parseFloat(averages.airQuality));
    
    updateElement('water-percentage', averages.waterLevel + '%');
    updateElement('current-height', ((parseFloat(averages.waterLevel) / 100) * 20).toFixed(1));
    updateWaterLevel(parseFloat(averages.waterLevel));
    
    updateElement('ph-value', averages.ph);
    updatePHIndicator(parseFloat(averages.ph));
}

function updateOverview(data, averages) {
    const lang = document.documentElement.lang;
    
    updateElement('overview-soil', averages.soilAvg);
    updateCircularProgress('soil-ring', parseFloat(averages.soilAvg));
    updateStatus('soil-status', parseFloat(averages.soilAvg), 30, 70);
    
    updateElement('overview-temp', averages.tempAvg);
    
    updateElement('overview-humidity', averages.humidityAvg);
    updateHumidityBars(parseFloat(averages.humidityAvg));
    updateStatus('humidity-status', parseFloat(averages.humidityAvg), 40, 80);
    
    updateElement('tank-label', averages.waterLevel + '%');
    updateElement('water-height', ((parseFloat(averages.waterLevel) / 100) * 20).toFixed(1) + ' cm');
    updateWaterLevel(parseFloat(averages.waterLevel));
    
    updateElement('overview-ph', averages.ph);
    updatePHPointer('ph-pointer', parseFloat(averages.ph));
    updatePHStatus('ph-status', parseFloat(averages.ph));
    
    updateElement('overview-air', averages.airQuality);
    updateAirGauge('air-gauge', parseFloat(averages.airQuality));
    updateAirStatus('air-status', parseFloat(averages.airQuality));
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

function updateProgressBar(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.style.width = `${Math.min(100, Math.max(0, value))}%`;
    }
}

function updateCircularProgress(id, value) {
    const element = document.getElementById(id);
    if (element) {
        const circumference = 327;
        const offset = circumference - (value / 100) * circumference;
        element.style.strokeDashoffset = offset;
    }
}

function updateHumidityBars(value) {
    const bars = document.querySelectorAll('.humidity-bars .bar');
    bars.forEach((bar, index) => {
        const barHeight = Math.random() * 40 + 40;
        const isActive = index === 3;
        
        if (isActive) {
            bar.style.height = `${value}%`;
            bar.classList.add('active');
        } else {
            bar.style.height = `${barHeight}%`;
            bar.classList.remove('active');
        }
    });
}

function updateStatus(id, value, min, max) {
    const element = document.getElementById(id);
    const lang = document.documentElement.lang;
    if (!element) return;
    
    if (value < min) {
        element.textContent = lang === 'hi' ? 'कम' : 'Low';
        element.className = 'status-badge danger';
    } else if (value > max) {
        element.textContent = lang === 'hi' ? 'अधिक' : 'High';
        element.className = 'status-badge warning';
    } else {
        element.textContent = lang === 'hi' ? 'सामान्य' : 'Normal';
        element.className = 'status-badge good';
    }
}

function updateWaterLevel(level) {
    const fillElement = document.getElementById('water-fill');
    
    if (fillElement) fillElement.style.height = `${level}%`;
}

function updatePHPointer(id, ph) {
    const element = document.getElementById(id);
    if (element) {
        const position = (ph / 14) * 100;
        element.style.left = `calc(${position}% - 16px)`;
    }
}

function updatePHStatus(id, ph) {
    const element = document.getElementById(id);
    const lang = document.documentElement.lang;
    if (!element) return;
    
    if (ph < 6.5) {
        element.textContent = lang === 'hi' ? 'अम्लीय' : 'Acidic';
        element.className = 'status-badge danger';
    } else if (ph > 8.5) {
        element.textContent = lang === 'hi' ? 'क्षारीय' : 'Alkaline';
        element.className = 'status-badge warning';
    } else {
        element.textContent = lang === 'hi' ? 'तटस्थ' : 'Neutral';
        element.className = 'status-badge good';
    }
}

function updateAirGauge(id, value) {
    const element = document.getElementById(id);
    if (element) {
        const percentage = Math.min(100, (value / 200) * 100);
        element.style.width = `${percentage}%`;
    }
}

function updateAirStatus(id, value) {
    const element = document.getElementById(id);
    const lang = document.documentElement.lang;
    if (!element) return;
    
    if (value < 50) {
        element.textContent = lang === 'hi' ? 'उत्कृष्ट' : 'Excellent';
        element.className = 'status-badge good';
    } else if (value < 100) {
        element.textContent = lang === 'hi' ? 'अच्छा' : 'Good';
        element.className = 'status-badge good';
    } else if (value < 150) {
        element.textContent = lang === 'hi' ? 'मध्यम' : 'Moderate';
        element.className = 'status-badge warning';
    } else {
        element.textContent = lang === 'hi' ? 'खराब' : 'Poor';
        element.className = 'status-badge danger';
    }
}

function updateAirQualityStatus(value) {
    const element = document.getElementById('air-status-label');
    const lang = document.documentElement.lang;
    if (!element) return;
    
    if (value < 50) {
        element.textContent = lang === 'hi' ? 'उत्कृष्ट' : 'Excellent';
        element.className = 'air-status-label good';
    } else if (value < 100) {
        element.textContent = lang === 'hi' ? 'अच्छा' : 'Good';
        element.className = 'air-status-label good';
    } else if (value < 150) {
        element.textContent = lang === 'hi' ? 'मध्यम' : 'Moderate';
        element.className = 'air-status-label warning';
    } else {
        element.textContent = lang === 'hi' ? 'खराब' : 'Poor';
        element.className = 'air-status-label danger';
    }
}

function updatePHIndicator(ph) {
    const indicator = document.getElementById('ph-indicator');
    const statusElement = document.getElementById('ph-badge');
    const lang = document.documentElement.lang;
    
    if (indicator) {
        const position = (ph / 14) * 100;
        indicator.style.left = `calc(${position}% - 16px)`;
    }
    
    if (statusElement) {
        if (ph < 6.5) {
            statusElement.textContent = lang === 'hi' ? 'अम्लीय' : 'Acidic';
            statusElement.className = 'status-badge danger';
        } else if (ph > 8.5) {
            statusElement.textContent = lang === 'hi' ? 'क्षारीय' : 'Alkaline';
            statusElement.className = 'status-badge warning';
        } else {
            statusElement.textContent = lang === 'hi' ? 'तटस्थ' : 'Neutral';
            statusElement.className = 'status-badge good';
        }
    }
}

function checkAlerts(data, averages) {
    const thresholds = getThresholds();
    const lang = document.documentElement.lang;
    
    const tempAvg = parseFloat(averages.tempAvg);
    if (tempAvg > thresholds.temp) {
        addNotification(
            lang === 'hi' ? 'उच्च तापमान' : 'High Temperature',
            lang === 'hi' ? `तापमान ${tempAvg}°C है` : `Temperature is ${tempAvg}°C`,
            'warning'
        );
    }
    
    const humidityAvg = parseFloat(averages.humidityAvg);
    if (humidityAvg > thresholds.humidity) {
        addNotification(
            lang === 'hi' ? 'उच्च आर्द्रता' : 'High Humidity',
            lang === 'hi' ? `आर्द्रता ${humidityAvg}% है` : `Humidity is ${humidityAvg}%`,
            'warning'
        );
    }
    
    const soilAvg = parseFloat(averages.soilAvg);
    if (soilAvg < thresholds.soil) {
        addNotification(
            lang === 'hi' ? 'कम मृदा नमी' : 'Low Soil Moisture',
            lang === 'hi' ? `मृदा नमी ${soilAvg}% है` : `Soil moisture is ${soilAvg}%`,
            'danger'
        );
    }
    
    const waterLevel = parseFloat(averages.waterLevel);
    if (waterLevel < thresholds.water) {
        addNotification(
            lang === 'hi' ? 'कम जल स्तर' : 'Low Water Level',
            lang === 'hi' ? `जल स्तर ${waterLevel}% है` : `Water level is ${waterLevel}%`,
            'danger'
        );
    }
    
    const ph = parseFloat(averages.ph);
    if (ph < thresholds.phMin) {
        addNotification(
            lang === 'hi' ? 'pH बहुत कम' : 'pH Too Low',
            lang === 'hi' ? `pH स्तर ${ph} है (न्यूनतम: ${thresholds.phMin})` : `pH level is ${ph} (min: ${thresholds.phMin})`,
            'warning'
        );
    } else if (ph > thresholds.phMax) {
        addNotification(
            lang === 'hi' ? 'pH बहुत अधिक' : 'pH Too High',
            lang === 'hi' ? `pH स्तर ${ph} है (अधिकतम: ${thresholds.phMax})` : `pH level is ${ph} (max: ${thresholds.phMax})`,
            'warning'
        );
    }
}

function startAutoRefresh() {
    if (refreshInterval) clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        fetchSensorData();
    }, API_CONFIG.refreshInterval);
}

function stopAutoRefresh() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
        refreshInterval = null;
    }
}

function startGraphUpdates() {
    if (graphUpdateInterval) clearInterval(graphUpdateInterval);
    graphUpdateInterval = setInterval(() => {
        updateChartsWithDummyData();
    }, API_CONFIG.graphUpdateInterval);
}

function stopGraphUpdates() {
    if (graphUpdateInterval) {
        clearInterval(graphUpdateInterval);
        graphUpdateInterval = null;
    }
}

// ========================================
// CHARTS (Keeping all chart code from previous version)
// ========================================
const chartColors = {
    primary: '#10b981',
    secondary: '#3b82f6',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#06b6d4'
};

const chartData = {
    soil: { labels: [], values: [] },
    climate: { labels: [], temp: [], humidity: [] },
    water: { labels: [], values: [] },
    ph: { labels: [], values: [] }
};

const MAX_DATA_POINTS = 20;

function createGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

function initCharts() {
    const lang = document.documentElement.lang;
    
    const soilCtx = document.getElementById('soilChart');
    if (soilCtx) {
        const ctx = soilCtx.getContext('2d');
        const gradient = createGradient(ctx, 'rgba(16, 185, 129, 0.4)', 'rgba(16, 185, 129, 0.05)');
        
        window.soilChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: lang === 'hi' ? 'औसत मृदा नमी' : 'Average Soil Moisture',
                    data: [],
                    borderColor: chartColors.primary,
                    backgroundColor: gradient,
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: chartColors.primary,
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                    duration: 750,
                    easing: 'easeInOutQuart'
                },
                plugins: {
                    legend: { 
                        display: true, 
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: { size: 12, weight: '600' }
                        }
                    },
                    title: {
                        display: true,
                        text: lang === 'hi' ? 'मृदा नमी ट्रेंड' : 'Soil Moisture Trend',
                        font: { size: 16, weight: 'bold' },
                        padding: 20
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        },
                        ticks: { 
                            callback: value => value + '%',
                            font: { size: 11 }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 11 } }
                    }
                }
            }
        });
    }
    
    const climateCtx = document.getElementById('climateChart');
    if (climateCtx) {
        const ctx = climateCtx.getContext('2d');
        const tempGradient = createGradient(ctx, 'rgba(239, 68, 68, 0.4)', 'rgba(239, 68, 68, 0.05)');
        const humidityGradient = createGradient(ctx, 'rgba(59, 130, 246, 0.4)', 'rgba(59, 130, 246, 0.05)');
        
        window.climateChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: lang === 'hi' ? 'तापमान (°C)' : 'Temperature (°C)',
                        data: [],
                        borderColor: chartColors.danger,
                        backgroundColor: tempGradient,
                        tension: 0.4,
                        yAxisID: 'y',
                        borderWidth: 3,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: chartColors.danger,
                        pointBorderWidth: 2,
                        fill: true
                    },
                    {
                        label: lang === 'hi' ? 'आर्द्रता (%)' : 'Humidity (%)',
                        data: [],
                        borderColor: chartColors.secondary,
                        backgroundColor: humidityGradient,
                        tension: 0.4,
                        yAxisID: 'y1',
                        borderWidth: 3,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: chartColors.secondary,
                        pointBorderWidth: 2,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                    duration: 750,
                    easing: 'easeInOutQuart'
                },
                interaction: { mode: 'index', intersect: false },
                plugins: { 
                    legend: { 
                        display: true, 
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: { size: 12, weight: '600' }
                        }
                    },
                    title: {
                        display: true,
                        text: lang === 'hi' ? 'तापमान और आर्द्रता ट्रेंड' : 'Temperature & Humidity Trend',
                        font: { size: 16, weight: 'bold' },
                        padding: 20
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        },
                        ticks: { 
                            callback: value => value + '°C',
                            font: { size: 11 }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        max: 100,
                        grid: { drawOnChartArea: false },
                        ticks: { 
                            callback: value => value + '%',
                            font: { size: 11 }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 11 } }
                    }
                }
            }
        });
    }
    
    const waterCtx = document.getElementById('waterChart');
    if (waterCtx) {
        const ctx = waterCtx.getContext('2d');
        const gradient = createGradient(ctx, 'rgba(6, 182, 212, 0.4)', 'rgba(6, 182, 212, 0.05)');
        
        window.waterChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: lang === 'hi' ? 'जल स्तर' : 'Water Level',
                    data: [],
                    borderColor: chartColors.info,
                    backgroundColor: gradient,
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: chartColors.info,
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                    duration: 750,
                    easing: 'easeInOutQuart'
                },
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: lang === 'hi' ? 'जल स्तर ट्रेंड' : 'Water Level Trend',
                        font: { size: 16, weight: 'bold' },
                        padding: 20
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        },
                        ticks: { 
                            callback: value => value + '%',
                            font: { size: 11 }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 11 } }
                    }
                }
            }
        });
    }
    
    const phCtx = document.getElementById('phChart');
    if (phCtx) {
        const ctx = phCtx.getContext('2d');
        const gradient = createGradient(ctx, 'rgba(139, 92, 246, 0.4)', 'rgba(139, 92, 246, 0.05)');
        
        window.phChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'pH',
                    data: [],
                    borderColor: '#8b5cf6',
                    backgroundColor: gradient,
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#8b5cf6',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                    duration: 750,
                    easing: 'easeInOutQuart'
                },
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: lang === 'hi' ? 'pH स्तर ट्रेंड' : 'pH Level Trend',
                        font: { size: 16, weight: 'bold' },
                        padding: 20
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 14,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        },
                        ticks: { 
                            callback: value => value + ' pH',
                            font: { size: 11 }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 11 } }
                    }
                }
            }
        });
    }
}

function initMiniChart() {
    const miniCtx = document.getElementById('miniTempChart');
    if (miniCtx) {
        const ctx = miniCtx.getContext('2d');
        const gradient = createGradient(ctx, 'rgba(239, 68, 68, 0.3)', 'rgba(239, 68, 68, 0)');
        
        window.miniTempChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    borderColor: chartColors.danger,
                    backgroundColor: gradient,
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        });
    }
}

function updateChartsWithDummyData() {
    const now = new Date();
    const timeLabel = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
    
    const soilValue = generateRandomValue(30, 70, 1);
    const tempValue = generateRandomValue(20, 35, 1);
    const humidityValue = generateRandomValue(40, 90, 0);
    const waterValue = generateRandomValue(20, 90, 1);
    const phValue = generateRandomValue(6, 8.5, 1);
    
    if (window.soilChart) {
        chartData.soil.labels.push(timeLabel);
        chartData.soil.values.push(soilValue);
        
        if (chartData.soil.labels.length > MAX_DATA_POINTS) {
            chartData.soil.labels.shift();
            chartData.soil.values.shift();
        }
        
        window.soilChart.data.labels = chartData.soil.labels;
        window.soilChart.data.datasets[0].data = chartData.soil.values;
        window.soilChart.update('none');
    }
    
    if (window.climateChart) {
        chartData.climate.labels.push(timeLabel);
        chartData.climate.temp.push(tempValue);
        chartData.climate.humidity.push(humidityValue);
        
        if (chartData.climate.labels.length > MAX_DATA_POINTS) {
            chartData.climate.labels.shift();
            chartData.climate.temp.shift();
            chartData.climate.humidity.shift();
        }
        
        window.climateChart.data.labels = chartData.climate.labels;
        window.climateChart.data.datasets[0].data = chartData.climate.temp;
        window.climateChart.data.datasets[1].data = chartData.climate.humidity;
        window.climateChart.update('none');
    }
    
    if (window.miniTempChart) {
        const miniData = chartData.climate.temp.slice(-10);
        const miniLabels = chartData.climate.labels.slice(-10);
        
        window.miniTempChart.data.labels = miniLabels;
        window.miniTempChart.data.datasets[0].data = miniData;
        window.miniTempChart.update('none');
    }
    
    if (window.waterChart) {
        chartData.water.labels.push(timeLabel);
        chartData.water.values.push(waterValue);
        
        if (chartData.water.labels.length > MAX_DATA_POINTS) {
            chartData.water.labels.shift();
            chartData.water.values.shift();
        }
        
        window.waterChart.data.labels = chartData.water.labels;
        window.waterChart.data.datasets[0].data = chartData.water.values;
        window.waterChart.update('none');
    }
    
    if (window.phChart) {
        chartData.ph.labels.push(timeLabel);
        chartData.ph.values.push(phValue);
        
        if (chartData.ph.labels.length > MAX_DATA_POINTS) {
            chartData.ph.labels.shift();
            chartData.ph.values.shift();
        }
        
        window.phChart.data.labels = chartData.ph.labels;
        window.phChart.data.datasets[0].data = chartData.ph.values;
        window.phChart.update('none');
    }
}

function updateChartLanguage(lang) {
    if (window.soilChart) {
        window.soilChart.data.datasets[0].label = lang === 'hi' ? 'औसत मृदा नमी' : 'Average Soil Moisture';
        window.soilChart.options.plugins.title.text = lang === 'hi' ? 'मृदा नमी ट्रेंड' : 'Soil Moisture Trend';
        window.soilChart.update();
    }
    
    if (window.climateChart) {
        window.climateChart.data.datasets[0].label = lang === 'hi' ? 'तापमान (°C)' : 'Temperature (°C)';
        window.climateChart.data.datasets[1].label = lang === 'hi' ? 'आर्द्रता (%)' : 'Humidity (%)';
        window.climateChart.options.plugins.title.text = lang === 'hi' ? 'तापमान और आर्द्रता ट्रेंड' : 'Temperature & Humidity Trend';
        window.climateChart.update();
    }
    
    if (window.waterChart) {
        window.waterChart.data.datasets[0].label = lang === 'hi' ? 'जल स्तर' : 'Water Level';
        window.waterChart.options.plugins.title.text = lang === 'hi' ? 'जल स्तर ट्रेंड' : 'Water Level Trend';
        window.waterChart.update();
    }
    
    if (window.phChart) {
        window.phChart.options.plugins.title.text = lang === 'hi' ? 'pH स्तर ट्रेंड' : 'pH Level Trend';
        window.phChart.update();
    }
}