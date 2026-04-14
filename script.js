// ========================================
// LANGUAGE TRANSLATIONS
// ========================================
const translations = {
    hi: {
        // Header
        'app-title': 'कृषिमित्र & जलधार',
        'notifications-title': 'सूचनाएं',
        
        // Tabs
        'tab-overview': 'ओवरव्यू',
        'tab-krishimitra': 'कृषिमित्र',
        'tab-jaldhar': 'जलधार',
        'tab-camera': 'कैमरा',
        'tab-settings': 'सेटिंग्स',
        
        // Overview Tab
        'overview-title': 'सिस्टम ओवरव्यू',
        'overview-soil-title': 'मृदा नमी',
        'overview-sensor1': 'सेंसर 1:',
        'overview-sensor2': 'सेंसर 2:',
        'overview-temp-title': 'तापमान',
        'overview-temp1': 'स्थान 1:',
        'overview-temp2': 'स्थान 2:',
        'overview-humidity-title': 'आर्द्रता',
        'overview-hum1': 'स्थान 1:',
        'overview-hum2': 'स्थान 2:',
        'overview-water-title': 'जल स्तर',
        'overview-ph-title': 'pH स्तर',
        'overview-air-title': 'वायु गुणवत्ता',
        
        // KrishiMitra Tab
        'soil-moisture-title': 'मृदा नमी',
        'sensor1-label': 'सेंसर 1',
        'sensor2-label': 'सेंसर 2',
        'temp-humidity-title': 'तापमान और आर्द्रता',
        'temp1-label': 'तापमान 1',
        'temp2-label': 'तापमान 2',
        'humidity1-label': 'आर्द्रता 1',
        'humidity2-label': 'आर्द्रता 2',
        'air-quality-title': 'वायु गुणवत्ता',
        'pump-control-title': 'पंप नियंत्रण',
        'pump-status-text': 'बंद',
        'auto-mode-text': 'ऑटो',
        'manual-mode-text': 'मैन्युअल',
        'pump-on-text': 'पंप चालू करें',
        'pump-off-text': 'पंप बंद करें',
        'auto-info-text': 'ऑटो मोड में, पंप मृदा नमी के आधार पर स्वचालित रूप से चालू/बंद होगा',
        'charts-title': 'रीयल-टाइम डेटा',
        
        // Jaldhar Tab
        'water-level-title': 'जल स्तर',
        'tank-height-label': 'टैंक की ऊंचाई:',
        'current-level-label': 'वर्तमान स्तर:',
        'ph-level-title': 'pH स्तर',
        'water-chart-title': 'जल निगरानी ग्राफ',
        
        // Camera Tab
        'live-feed-title': 'लाइव कैमरा फीड',
        'refresh-text': 'रीफ्रेश',
        'fullscreen-text': 'फुलस्क्रीन',
        'camera-error-text': 'कैमरा से कनेक्ट नहीं हो सका',
        'retry-text': 'पुनः प्रयास करें',
        'camera-status-text': 'डिस्कनेक्टेड',
        'last-update-label': 'अंतिम अपडेट:',
        
        // Settings Tab
        'general-settings-title': 'सामान्य सेटिंग्स',
        'dark-mode-label': 'डार्क मोड',
        'notifications-label': 'सूचनाएं',
        'auto-refresh-label': 'ऑटो रीफ्रेश',
        'threshold-settings-title': 'थ्रेशोल्ड सेटिंग्स',
        'temp-threshold-label': 'तापमान सीमा (°C)',
        'humidity-threshold-label': 'आर्द्रता सीमा (%)',
        'soil-threshold-label': 'न्यूनतम मृदा नमी (%)',
        'water-threshold-label': 'न्यूनतम जल स्तर (%)',
        'ph-min-threshold-label': 'न्यूनतम pH',
        'ph-max-threshold-label': 'अधिकतम pH',
        'save-text-1': 'सेव',
        'save-text-2': 'सेव',
        'save-text-3': 'सेव',
        'save-text-4': 'सेव',
        'save-text-5': 'सेव',
        'save-text-6': 'सेव',
        'about-title': 'जानकारी',
        'version-text': 'संस्करण: 1.0.0',
        'about-description': 'स्मार्ट कृषि निगरानी और नियंत्रण प्रणाली। Arduino R4 WiFi और विभिन्न सेंसरों के साथ एकीकृत।',
        'feature1': 'रीयल-टाइम मॉनिटरिंग',
        'feature2': 'स्वचालित पंप नियंत्रण',
        'feature3': 'लाइव कैमरा फीड',
        'feature4': 'स्मार्ट अलर्ट सिस्टम',
    },
    en: {
        // Header
        'app-title': 'KrishiMitra & Jaldhar',
        'notifications-title': 'Notifications',
        
        // Tabs
        'tab-overview': 'Overview',
        'tab-krishimitra': 'KrishiMitra',
        'tab-jaldhar': 'Jaldhar',
        'tab-camera': 'Camera',
        'tab-settings': 'Settings',
        
        // Overview Tab
        'overview-title': 'System Overview',
        'overview-soil-title': 'Soil Moisture',
        'overview-sensor1': 'Sensor 1:',
        'overview-sensor2': 'Sensor 2:',
        'overview-temp-title': 'Temperature',
        'overview-temp1': 'Location 1:',
        'overview-temp2': 'Location 2:',
        'overview-humidity-title': 'Humidity',
        'overview-hum1': 'Location 1:',
        'overview-hum2': 'Location 2:',
        'overview-water-title': 'Water Level',
        'overview-ph-title': 'pH Level',
        'overview-air-title': 'Air Quality',
        
        // KrishiMitra Tab
        'soil-moisture-title': 'Soil Moisture',
        'sensor1-label': 'Sensor 1',
        'sensor2-label': 'Sensor 2',
        'temp-humidity-title': 'Temperature & Humidity',
        'temp1-label': 'Temperature 1',
        'temp2-label': 'Temperature 2',
        'humidity1-label': 'Humidity 1',
        'humidity2-label': 'Humidity 2',
        'air-quality-title': 'Air Quality',
        'pump-control-title': 'Pump Control',
        'pump-status-text': 'Off',
        'auto-mode-text': 'Auto',
        'manual-mode-text': 'Manual',
        'pump-on-text': 'Turn Pump ON',
        'pump-off-text': 'Turn Pump OFF',
        'auto-info-text': 'In auto mode, pump will automatically turn on/off based on soil moisture',
        'charts-title': 'Real-time Data',
        
        // Jaldhar Tab
        'water-level-title': 'Water Level',
        'tank-height-label': 'Tank Height:',
        'current-level-label': 'Current Level:',
        'ph-level-title': 'pH Level',
        'water-chart-title': 'Water Monitoring Graph',
        
        // Camera Tab
        'live-feed-title': 'Live Camera Feed',
        'refresh-text': 'Refresh',
        'fullscreen-text': 'Fullscreen',
        'camera-error-text': 'Could not connect to camera',
        'retry-text': 'Retry',
        'camera-status-text': 'Disconnected',
        'last-update-label': 'Last Update:',
        
        // Settings Tab
        'general-settings-title': 'General Settings',
        'dark-mode-label': 'Dark Mode',
        'notifications-label': 'Notifications',
        'auto-refresh-label': 'Auto Refresh',
        'threshold-settings-title': 'Threshold Settings',
        'temp-threshold-label': 'Temperature Threshold (°C)',
        'humidity-threshold-label': 'Humidity Threshold (%)',
        'soil-threshold-label': 'Minimum Soil Moisture (%)',
        'water-threshold-label': 'Minimum Water Level (%)',
        'ph-min-threshold-label': 'Minimum pH',
        'ph-max-threshold-label': 'Maximum pH',
        'save-text-1': 'Save',
        'save-text-2': 'Save',
        'save-text-3': 'Save',
        'save-text-4': 'Save',
        'save-text-5': 'Save',
        'save-text-6': 'Save',
        'about-title': 'About',
        'version-text': 'Version: 1.0.0',
        'about-description': 'Smart agriculture monitoring and control system. Integrated with Arduino R4 WiFi and various sensors.',
        'feature1': 'Real-time Monitoring',
        'feature2': 'Automatic Pump Control',
        'feature3': 'Live Camera Feed',
        'feature4': 'Smart Alert System',
    }
};

// ========================================
// GLOBAL STATE
// ========================================
let currentTab = 'overview';
let notificationCount = 0;
let notifications = [];
let refreshInterval;

// ========================================
// API CONFIGURATION
// ========================================
const API_CONFIG = {
    baseURL: 'http://192.168.1.100',
    endpoints: {
        sensorData: '/api/sensors',
        pumpControl: '/api/pump',
        thresholds: '/api/thresholds',
        camera: '/cam-hi.jpg'
    },
    refreshInterval: 2000
};

// Mock data
const mockData = {
    soil: { sensor1: 45, sensor2: 52 },
    temperature: { sensor1: 28, sensor2: 27 },
    humidity: { sensor1: 65, sensor2: 68 },
    airQuality: 85,
    waterLevel: 75,
    ph: 7.2,
    pumpStatus: false,
    pumpMode: 'auto'
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Create backdrop for notifications
    const backdrop = document.createElement('div');
    backdrop.className = 'notification-backdrop';
    backdrop.onclick = toggleNotifications;
    document.body.appendChild(backdrop);
    
    loadSettings();
    initCharts();
    fetchSensorData();
    startAutoRefresh();
    updateTime();
    setInterval(updateTime, 1000);
    
    // Set camera refresh interval
    setInterval(() => {
        if (currentTab === 'camera') {
            const img = document.getElementById('camera-feed');
            const errorOverlay = document.getElementById('camera-error');
            if (img && errorOverlay.style.display === 'none') {
                img.src = `${API_CONFIG.baseURL}${API_CONFIG.endpoints.camera}?t=${Date.now()}`;
            }
        }
    }, 5000);
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
    document.getElementById('current-time').textContent = timeString;
}

// ========================================
// TAB SWITCHING
// ========================================
function switchTab(tabName) {
    currentTab = tabName;
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    setTimeout(() => {
        document.getElementById(`${tabName}-tab`).classList.add('active');
    }, 50);
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Close notification panel
    const panel = document.getElementById('notification-panel');
    const backdrop = document.querySelector('.notification-backdrop');
    if (panel.classList.contains('active')) {
        panel.classList.remove('active');
        backdrop.classList.remove('active');
    }
}

// ========================================
// NOTIFICATION MANAGEMENT
// ========================================
function toggleNotifications() {
    const panel = document.getElementById('notification-panel');
    const backdrop = document.querySelector('.notification-backdrop');
    
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
    
    // Check for duplicates
    const isDuplicate = notifications.some(n => 
        n.title === title && n.message === message && 
        (Date.now() - n.id) < 60000
    );
    
    if (isDuplicate) return;
    
    notifications.unshift(notification);
    notificationCount++;
    
    document.getElementById('notification-count').textContent = notificationCount;
    
    const notificationHTML = `
        <div class="notification-item ${type}">
            <h4>${title}</h4>
            <p>${message}</p>
            <div class="time">${timeString}</div>
        </div>
    `;
    
    const notificationList = document.getElementById('notification-list');
    notificationList.insertAdjacentHTML('afterbegin', notificationHTML);
    
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
        document.getElementById('notification-count').textContent = '0';
        document.getElementById('notification-list').innerHTML = '';
    }
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
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
            element.textContent = translations[lang][key];
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
    
    if (currentTab === 'overview') {
        fetchSensorData();
    }
}

// ========================================
// DARK MODE
// ========================================
function toggleDarkMode() {
    const isDark = document.getElementById('dark-mode-toggle').checked;
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
    document.getElementById(`${mode}-mode-btn`).classList.add('active');
    
    const manualControls = document.getElementById('manual-controls');
    const autoInfo = document.getElementById('auto-info');
    
    if (mode === 'manual') {
        manualControls.style.display = 'flex';
        autoInfo.style.display = 'none';
    } else {
        manualControls.style.display = 'none';
        autoInfo.style.display = 'flex';
    }
    
    setPumpModeAPI(mode);
    
    showToast(
        mode === 'auto' ? 
            (lang === 'hi' ? 'ऑटो मोड सक्रिय' : 'Auto mode activated') :
            (lang === 'hi' ? 'मैन्युअल मोड सक्रिय' : 'Manual mode activated'),
        'success'
    );
}

function togglePump(turnOn) {
    controlPump(turnOn ? 'on' : 'off');
}

async function controlPump(action) {
    try {
        mockData.pumpStatus = action === 'on';
        updatePumpStatus(mockData.pumpStatus);
        
        const lang = document.documentElement.lang;
        showToast(
            action === 'on' ? 
                (lang === 'hi' ? 'पंप चालू किया गया' : 'Pump turned on') :
                (lang === 'hi' ? 'पंप बंद किया गया' : 'Pump turned off'),
            'success'
        );
    } catch (error) {
        console.error('Error controlling pump:', error);
        const lang = document.documentElement.lang;
        showToast(lang === 'hi' ? 'पंप नियंत्रण में त्रुटि' : 'Error controlling pump', 'danger');
    }
}

async function setPumpModeAPI(mode) {
    try {
        mockData.pumpMode = mode;
    } catch (error) {
        console.error('Error setting pump mode:', error);
    }
}

function updatePumpStatus(status) {
    const indicator = document.getElementById('pump-indicator');
    const statusText = document.getElementById('pump-status-text');
    const lang = document.documentElement.lang;
    
    if (indicator) {
        if (status) {
            indicator.classList.add('on');
        } else {
            indicator.classList.remove('on');
        }
    }
    
    if (statusText) {
        statusText.textContent = status ? 
            (lang === 'hi' ? 'चालू' : 'On') : 
            (lang === 'hi' ? 'बंद' : 'Off');
    }
}

// ========================================
// CAMERA CONTROL
// ========================================
function refreshCamera() {
    const lang = document.documentElement.lang;
    const img = document.getElementById('camera-feed');
    const errorOverlay = document.getElementById('camera-error');
    
    errorOverlay.style.display = 'none';
    img.src = `${API_CONFIG.baseURL}${API_CONFIG.endpoints.camera}?t=${Date.now()}`;
    
    showToast(lang === 'hi' ? 'कैमरा रीफ्रेश किया गया' : 'Camera refreshed', 'success');
    updateLastUpdateTime();
}

function handleCameraError() {
    const errorOverlay = document.getElementById('camera-error');
    const statusIcon = document.getElementById('camera-status-icon');
    const statusText = document.getElementById('camera-status-text');
    const lang = document.documentElement.lang;
    
    errorOverlay.style.display = 'flex';
    statusIcon.classList.remove('connected');
    statusText.textContent = lang === 'hi' ? 'डिस्कनेक्टेड' : 'Disconnected';
}

function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('hi-IN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    document.getElementById('last-update-time').textContent = timeString;
    
    const statusIcon = document.getElementById('camera-status-icon');
    const statusText = document.getElementById('camera-status-text');
    const lang = document.documentElement.lang;
    
    statusIcon.classList.add('connected');
    statusText.textContent = lang === 'hi' ? 'कनेक्टेड' : 'Connected';
}

function toggleFullscreen() {
    const cameraView = document.getElementById('camera-view');
    
    if (!document.fullscreenElement) {
        cameraView.requestFullscreen().catch(err => {
            console.error('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// ========================================
// SETTINGS
// ========================================
function toggleNotificationPreference() {
    const enabled = document.getElementById('notifications-toggle').checked;
    localStorage.setItem('notifications_enabled', enabled);
}

function toggleAutoRefresh() {
    const enabled = document.getElementById('auto-refresh-toggle').checked;
    
    if (enabled) {
        startAutoRefresh();
    } else {
        stopAutoRefresh();
    }
    
    localStorage.setItem('auto_refresh', enabled);
}

function updateSliderValue(id, value) {
    const displayElement = document.getElementById(id + '-display');
    if (displayElement) {
        if (id.includes('ph')) {
            displayElement.textContent = parseFloat(value).toFixed(1);
        } else {
            displayElement.textContent = Math.round(value);
        }
    }
}

function saveThreshold(type) {
    const lang = document.documentElement.lang;
    let value;
    
    switch(type) {
        case 'temperature':
            value = document.getElementById('temp-threshold').value;
            localStorage.setItem('threshold_temperature', value);
            break;
        case 'humidity':
            value = document.getElementById('humidity-threshold').value;
            localStorage.setItem('threshold_humidity', value);
            break;
        case 'soil':
            value = document.getElementById('soil-threshold').value;
            localStorage.setItem('threshold_soil', value);
            break;
        case 'water':
            value = document.getElementById('water-threshold').value;
            localStorage.setItem('threshold_water', value);
            break;
        case 'phMin':
            value = document.getElementById('ph-min-threshold').value;
            localStorage.setItem('threshold_phMin', value);
            break;
        case 'phMax':
            value = document.getElementById('ph-max-threshold').value;
            localStorage.setItem('threshold_phMax', value);
            break;
    }
    
    showToast(lang === 'hi' ? 'सेटिंग्स सेव की गई' : 'Settings saved', 'success');
}

function loadSettings() {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    
    if (savedTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        document.getElementById('dark-mode-toggle').checked = true;
    }
    
    const tempThreshold = localStorage.getItem('threshold_temperature') || '35';
    document.getElementById('temp-threshold').value = tempThreshold;
    document.getElementById('temp-threshold-display').textContent = tempThreshold;
    
    const humidityThreshold = localStorage.getItem('threshold_humidity') || '80';
    document.getElementById('humidity-threshold').value = humidityThreshold;
    document.getElementById('humidity-threshold-display').textContent = humidityThreshold;
    
    const soilThreshold = localStorage.getItem('threshold_soil') || '30';
    document.getElementById('soil-threshold').value = soilThreshold;
    document.getElementById('soil-threshold-display').textContent = soilThreshold;
    
    const waterThreshold = localStorage.getItem('threshold_water') || '20';
    document.getElementById('water-threshold').value = waterThreshold;
    document.getElementById('water-threshold-display').textContent = waterThreshold;
    
    const phMinThreshold = localStorage.getItem('threshold_phMin') || '6.5';
    document.getElementById('ph-min-threshold').value = phMinThreshold;
    document.getElementById('ph-min-threshold-display').textContent = parseFloat(phMinThreshold).toFixed(1);
    
    const phMaxThreshold = localStorage.getItem('threshold_phMax') || '8.5';
    document.getElementById('ph-max-threshold').value = phMaxThreshold;
    document.getElementById('ph-max-threshold-display').textContent = parseFloat(phMaxThreshold).toFixed(1);
    
    const autoRefresh = localStorage.getItem('auto_refresh');
    if (autoRefresh === 'false') {
        document.getElementById('auto-refresh-toggle').checked = false;
        stopAutoRefresh();
    }
    
    const notificationsEnabled = localStorage.getItem('notifications_enabled');
    if (notificationsEnabled === 'false') {
        document.getElementById('notifications-toggle').checked = false;
    }
    
    const savedLang = localStorage.getItem('language') || 'hi';
    if (savedLang === 'en') {
        changeLanguage('en');
    }
}

// ========================================
// DATA FETCHING & UPDATE
// ========================================
function generateMockData() {
    return {
        soil: {
            sensor1: mockData.soil.sensor1 + (Math.random() * 4 - 2),
            sensor2: mockData.soil.sensor2 + (Math.random() * 4 - 2)
        },
        temperature: {
            sensor1: mockData.temperature.sensor1 + (Math.random() * 2 - 1),
            sensor2: mockData.temperature.sensor2 + (Math.random() * 2 - 1)
        },
        humidity: {
            sensor1: mockData.humidity.sensor1 + (Math.random() * 4 - 2),
            sensor2: mockData.humidity.sensor2 + (Math.random() * 4 - 2)
        },
        airQuality: mockData.airQuality + (Math.random() * 10 - 5),
        waterLevel: mockData.waterLevel + (Math.random() * 2 - 1),
        ph: mockData.ph + (Math.random() * 0.2 - 0.1),
        pumpStatus: mockData.pumpStatus,
        pumpMode: mockData.pumpMode
    };
}

async function fetchSensorData() {
    try {
        const data = generateMockData();
        updateUI(data);
        updateOverview(data);
        checkAlerts(data);
        updateCharts(data);
    } catch (error) {
        console.error('Error fetching sensor data:', error);
        showToast('डेटा लोड करने में त्रुटि', 'danger');
    }
}

function updateUI(data) {
    // Soil moisture
    updateSensorValue('soil1-value', data.soil.sensor1.toFixed(0));
    updateSensorValue('soil2-value', data.soil.sensor2.toFixed(0));
    updateProgress('soil1-progress', data.soil.sensor1);
    updateProgress('soil2-progress', data.soil.sensor2);
    
    // Temperature
    updateSensorValue('temp1-value', data.temperature.sensor1.toFixed(1));
    updateSensorValue('temp2-value', data.temperature.sensor2.toFixed(1));
    
    // Humidity
    updateSensorValue('humidity1-value', data.humidity.sensor1.toFixed(0));
    updateSensorValue('humidity2-value', data.humidity.sensor2.toFixed(0));
    
    // Air quality
    updateSensorValue('air-quality-value', data.airQuality.toFixed(0));
    updateAirQualityStatus(data.airQuality);
    
    // Water level
    updateSensorValue('water-level-value', data.waterLevel.toFixed(0));
    updateWaterLevel(data.waterLevel);
    
    // pH
    updateSensorValue('ph-value', data.ph.toFixed(1));
    updatePHIndicator(data.ph);
    
    // Pump
    updatePumpStatus(data.pumpStatus);
}

function updateOverview(data) {
    const lang = document.documentElement.lang;
    
    // Soil
    updateSensorValue('overview-soil1', data.soil.sensor1.toFixed(0));
    updateSensorValue('overview-soil2', data.soil.sensor2.toFixed(0));
    
    // Temperature
    updateSensorValue('overview-temp1-val', data.temperature.sensor1.toFixed(1));
    updateSensorValue('overview-temp2-val', data.temperature.sensor2.toFixed(1));
    
    // Humidity
    updateSensorValue('overview-humidity1-val', data.humidity.sensor1.toFixed(0));
    updateSensorValue('overview-humidity2-val', data.humidity.sensor2.toFixed(0));
    
    // Water
    updateSensorValue('overview-water-val', data.waterLevel.toFixed(0));
    const waterBar = document.getElementById('overview-water-bar');
    if (waterBar) waterBar.style.width = `${data.waterLevel}%`;
    
    // pH
    updateSensorValue('overview-ph-val', data.ph.toFixed(1));
    const phStatus = document.getElementById('overview-ph-status');
    if (phStatus) {
        if (data.ph < 6.5) {
            phStatus.textContent = lang === 'hi' ? 'अम्लीय' : 'Acidic';
            phStatus.className = 'status-badge danger';
        } else if (data.ph > 8.5) {
            phStatus.textContent = lang === 'hi' ? 'क्षारीय' : 'Alkaline';
            phStatus.className = 'status-badge warning';
        } else {
            phStatus.textContent = lang === 'hi' ? 'सामान्य' : 'Normal';
            phStatus.className = 'status-badge good';
        }
    }
    
    // Air quality
    updateSensorValue('overview-air-val', data.airQuality.toFixed(0));
    const airStatus = document.getElementById('overview-air-status');
    if (airStatus) {
        if (data.airQuality < 50) {
            airStatus.textContent = lang === 'hi' ? 'उत्कृष्ट' : 'Excellent';
            airStatus.className = 'status-badge good';
        } else if (data.airQuality < 100) {
            airStatus.textContent = lang === 'hi' ? 'अच्छा' : 'Good';
            airStatus.className = 'status-badge good';
        } else if (data.airQuality < 150) {
            airStatus.textContent = lang === 'hi' ? 'मध्यम' : 'Moderate';
            airStatus.className = 'status-badge warning';
        } else {
            airStatus.textContent = lang === 'hi' ? 'खराब' : 'Poor';
            airStatus.className = 'status-badge danger';
        }
    }
}

function updateSensorValue(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

function updateProgress(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.style.width = `${Math.min(100, Math.max(0, value))}%`;
        
        if (value < 30) {
            element.style.background = '#ef4444';
        } else if (value < 50) {
            element.style.background = '#f59e0b';
        } else {
            element.style.background = '#10b981';
        }
    }
}

function updateAirQualityStatus(value) {
    const statusElement = document.getElementById('air-quality-status');
    const lang = document.documentElement.lang;
    
    if (statusElement) {
        if (value < 50) {
            statusElement.textContent = lang === 'hi' ? 'उत्कृष्ट' : 'Excellent';
            statusElement.style.background = '#10b981';
        } else if (value < 100) {
            statusElement.textContent = lang === 'hi' ? 'अच्छा' : 'Good';
            statusElement.style.background = '#3b82f6';
        } else if (value < 150) {
            statusElement.textContent = lang === 'hi' ? 'मध्यम' : 'Moderate';
            statusElement.style.background = '#f59e0b';
        } else {
            statusElement.textContent = lang === 'hi' ? 'खराब' : 'Poor';
            statusElement.style.background = '#ef4444';
        }
    }
}

function updateWaterLevel(level) {
    const fillElement = document.getElementById('water-fill');
    const percentageElement = document.getElementById('water-percentage');
    const heightElement = document.getElementById('current-water-height');
    
    if (fillElement) fillElement.style.height = `${level}%`;
    if (percentageElement) percentageElement.textContent = `${level.toFixed(0)}%`;
    if (heightElement) {
        const height = (level / 100) * 20;
        heightElement.textContent = height.toFixed(1);
    }
}

function updatePHIndicator(ph) {
    const indicator = document.getElementById('ph-indicator');
    const statusElement = document.getElementById('ph-status');
    const lang = document.documentElement.lang;
    
    if (indicator) {
        const position = (ph / 14) * 100;
        indicator.style.left = `calc(${position}% - 10px)`;
    }
    
    if (statusElement) {
        if (ph < 6.5) {
            statusElement.textContent = lang === 'hi' ? 'अम्लीय' : 'Acidic';
            statusElement.style.background = '#ef4444';
        } else if (ph > 8.5) {
            statusElement.textContent = lang === 'hi' ? 'क्षारीय' : 'Alkaline';
            statusElement.style.background = '#8b5cf6';
        } else {
            statusElement.textContent = lang === 'hi' ? 'सामान्य' : 'Normal';
            statusElement.style.background = '#10b981';
        }
    }
}

function checkAlerts(data) {
    const thresholds = getThresholds();
    const lang = document.documentElement.lang;
    
    if (data.temperature.sensor1 > thresholds.temperature || data.temperature.sensor2 > thresholds.temperature) {
        addNotification(
            lang === 'hi' ? 'उच्च तापमान' : 'High Temperature',
            lang === 'hi' ? 'तापमान निर्धारित सीमा से अधिक है' : 'Temperature exceeds threshold',
            'warning'
        );
    }
    
    if (data.soil.sensor1 < thresholds.soil || data.soil.sensor2 < thresholds.soil) {
        addNotification(
            lang === 'hi' ? 'कम मृदा नमी' : 'Low Soil Moisture',
            lang === 'hi' ? 'मृदा नमी न्यूनतम स्तर से कम है' : 'Soil moisture below minimum level',
            'danger'
        );
    }
    
    if (data.waterLevel < thresholds.water) {
        addNotification(
            lang === 'hi' ? 'कम जल स्तर' : 'Low Water Level',
            lang === 'hi' ? 'जल स्तर न्यूनतम सीमा से कम है' : 'Water level below minimum threshold',
            'danger'
        );
    }
    
    if (data.ph < thresholds.phMin || data.ph > thresholds.phMax) {
        addNotification(
            lang === 'hi' ? 'असामान्य pH' : 'Abnormal pH',
            lang === 'hi' ? 'जल का pH स्तर सामान्य सीमा से बाहर है' : 'Water pH level outside normal range',
            'warning'
        );
    }
    
    if (data.airQuality > 150) {
        addNotification(
            lang === 'hi' ? 'खराब वायु गुणवत्ता' : 'Poor Air Quality',
            lang === 'hi' ? 'वायु गुणवत्ता खराब है' : 'Air quality is poor',
            'warning'
        );
    }
}

function getThresholds() {
    return {
        temperature: parseInt(localStorage.getItem('threshold_temperature') || '35'),
        humidity: parseInt(localStorage.getItem('threshold_humidity') || '80'),
        soil: parseInt(localStorage.getItem('threshold_soil') || '30'),
        water: parseInt(localStorage.getItem('threshold_water') || '20'),
        phMin: parseFloat(localStorage.getItem('threshold_phMin') || '6.5'),
        phMax: parseFloat(localStorage.getItem('threshold_phMax') || '8.5')
    };
}

function startAutoRefresh() {
    refreshInterval = setInterval(() => {
        fetchSensorData();
    }, API_CONFIG.refreshInterval);
}

function stopAutoRefresh() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
    }
}

// ========================================
// CHARTS
// ========================================
const chartColors = {
    primary: '#10b981',
    secondary: '#3b82f6',
    danger: '#ef4444',
    warning: '#f59e0b'
};

const chartData = {
    soil: { labels: [], sensor1: [], sensor2: [] },
    tempHumidity: { labels: [], temperature: [], humidity: [] },
    waterLevel: { labels: [], values: [] },
    ph: { labels: [], values: [] }
};

const MAX_DATA_POINTS = 20;

function initCharts() {
    const lang = document.documentElement.lang;
    
    // Soil Chart
    const soilCtx = document.getElementById('soilChart').getContext('2d');
    window.soilChart = new Chart(soilCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: lang === 'hi' ? 'सेंसर 1' : 'Sensor 1',
                    data: [],
                    borderColor: chartColors.primary,
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: lang === 'hi' ? 'सेंसर 2' : 'Sensor 2',
                    data: [],
                    borderColor: chartColors.secondary,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: true, position: 'top' },
                title: {
                    display: true,
                    text: lang === 'hi' ? 'मृदा नमी (%)' : 'Soil Moisture (%)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
    
    // Temp & Humidity Chart
    const tempHumCtx = document.getElementById('tempHumidityChart').getContext('2d');
    window.tempHumidityChart = new Chart(tempHumCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: lang === 'hi' ? 'तापमान (°C)' : 'Temperature (°C)',
                    data: [],
                    borderColor: chartColors.danger,
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y',
                },
                {
                    label: lang === 'hi' ? 'आर्द्रता (%)' : 'Humidity (%)',
                    data: [],
                    borderColor: chartColors.secondary,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y1',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: { mode: 'index', intersect: false },
            plugins: { legend: { display: true, position: 'top' } },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: { callback: value => value + '°C' }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    max: 100,
                    grid: { drawOnChartArea: false },
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
    
    // Water Level Chart
    const waterCtx = document.getElementById('waterLevelChart').getContext('2d');
    window.waterLevelChart = new Chart(waterCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: lang === 'hi' ? 'जल स्तर (%)' : 'Water Level (%)',
                data: [],
                borderColor: chartColors.secondary,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: lang === 'hi' ? 'जल स्तर (%)' : 'Water Level (%)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
    
    // pH Chart
    const phCtx = document.getElementById('phChart').getContext('2d');
    window.phChart = new Chart(phCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'pH',
                data: [],
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: lang === 'hi' ? 'pH स्तर' : 'pH Level'
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 14,
                    ticks: { callback: value => value + ' pH' }
                }
            }
        }
    });
}

function updateCharts(data) {
    const now = new Date();
    const timeLabel = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
    
    // Soil moisture
    chartData.soil.labels.push(timeLabel);
    chartData.soil.sensor1.push(data.soil.sensor1);
    chartData.soil.sensor2.push(data.soil.sensor2);
    
    if (chartData.soil.labels.length > MAX_DATA_POINTS) {
        chartData.soil.labels.shift();
        chartData.soil.sensor1.shift();
        chartData.soil.sensor2.shift();
    }
    
    window.soilChart.data.labels = chartData.soil.labels;
    window.soilChart.data.datasets[0].data = chartData.soil.sensor1;
    window.soilChart.data.datasets[1].data = chartData.soil.sensor2;
    window.soilChart.update('none');
    
    // Temperature & humidity
    chartData.tempHumidity.labels.push(timeLabel);
    chartData.tempHumidity.temperature.push(data.temperature.sensor1);
    chartData.tempHumidity.humidity.push(data.humidity.sensor1);
    
    if (chartData.tempHumidity.labels.length > MAX_DATA_POINTS) {
        chartData.tempHumidity.labels.shift();
        chartData.tempHumidity.temperature.shift();
        chartData.tempHumidity.humidity.shift();
    }
    
    window.tempHumidityChart.data.labels = chartData.tempHumidity.labels;
    window.tempHumidityChart.data.datasets[0].data = chartData.tempHumidity.temperature;
    window.tempHumidityChart.data.datasets[1].data = chartData.tempHumidity.humidity;
    window.tempHumidityChart.update('none');
    
    // Water level
    chartData.waterLevel.labels.push(timeLabel);
    chartData.waterLevel.values.push(data.waterLevel);
    
    if (chartData.waterLevel.labels.length > MAX_DATA_POINTS) {
        chartData.waterLevel.labels.shift();
        chartData.waterLevel.values.shift();
    }
    
    window.waterLevelChart.data.labels = chartData.waterLevel.labels;
    window.waterLevelChart.data.datasets[0].data = chartData.waterLevel.values;
    window.waterLevelChart.update('none');
    
    // pH
    chartData.ph.labels.push(timeLabel);
    chartData.ph.values.push(data.ph);
    
    if (chartData.ph.labels.length > MAX_DATA_POINTS) {
        chartData.ph.labels.shift();
        chartData.ph.values.shift();
    }
    
    window.phChart.data.labels = chartData.ph.labels;
    window.phChart.data.datasets[0].data = chartData.ph.values;
    window.phChart.update('none');
}

function updateChartLanguage(lang) {
    if (window.soilChart) {
        window.soilChart.data.datasets[0].label = lang === 'hi' ? 'सेंसर 1' : 'Sensor 1';
        window.soilChart.data.datasets[1].label = lang === 'hi' ? 'सेंसर 2' : 'Sensor 2';
        window.soilChart.options.plugins.title.text = lang === 'hi' ? 'मृदा नमी (%)' : 'Soil Moisture (%)';
        window.soilChart.update();
    }
    
    if (window.tempHumidityChart) {
        window.tempHumidityChart.data.datasets[0].label = lang === 'hi' ? 'तापमान (°C)' : 'Temperature (°C)';
        window.tempHumidityChart.data.datasets[1].label = lang === 'hi' ? 'आर्द्रता (%)' : 'Humidity (%)';
        window.tempHumidityChart.update();
    }
    
    if (window.waterLevelChart) {
        window.waterLevelChart.options.plugins.title.text = lang === 'hi' ? 'जल स्तर (%)' : 'Water Level (%)';
        window.waterLevelChart.update();
    }
    
    if (window.phChart) {
        window.phChart.options.plugins.title.text = lang === 'hi' ? 'pH स्तर' : 'pH Level';
        window.phChart.update();
    }
}