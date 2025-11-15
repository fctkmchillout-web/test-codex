const form = document.getElementById('calorieCalculator');
const resultsSection = document.getElementById('results');
const bmrField = document.getElementById('bmrValue');
const amrField = document.getElementById('amrValue');
const maintainField = document.getElementById('maintainCalories');
const mildDeficitField = document.getElementById('mildDeficitCalories');
const aggressiveDeficitField = document.getElementById('aggressiveDeficitCalories');
const proteinAmountField = document.getElementById('proteinAmount');
const fatAmountField = document.getElementById('fatAmount');
const carbAmountField = document.getElementById('carbAmount');
const safetyNotice = document.getElementById('safetyNotice');
const yearLabel = document.getElementById('year');

yearLabel.textContent = new Date().getFullYear();

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const formatCalories = (value) => `${new Intl.NumberFormat('ru-RU').format(Math.round(value))} ккал`;
const formatGrams = (value) => `${new Intl.NumberFormat('ru-RU').format(Math.max(Math.round(value), 0))} г`;

const calculateBMR = ({ gender, age, weight, height }) => {
    const base = 10 * weight + 6.25 * height - 5 * age;
    return gender === 'male' ? base + 5 : base - 161;
};

const calculateMacros = ({ weight, targetCalories }) => {
    const proteinGrams = weight * 1.6;
    const fatGrams = weight * 0.8;
    const caloriesFromProtein = proteinGrams * 4;
    const caloriesFromFat = fatGrams * 9;
    const remainingCalories = Math.max(targetCalories - caloriesFromProtein - caloriesFromFat, 0);
    const carbGrams = remainingCalories / 4;

    return {
        protein: proteinGrams,
        fat: fatGrams,
        carbs: carbGrams,
    };
};

const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const gender = formData.get('gender');
    const age = clamp(Number(formData.get('age')), 16, 80);
    const weight = clamp(Number(formData.get('weight')), 35, 250);
    const height = clamp(Number(formData.get('height')), 120, 220);
    const activity = Number(formData.get('activity'));

    if (!age || !weight || !height || !activity) {
        form.reportValidity();
        return;
    }

    const bmr = calculateBMR({ gender, age, weight, height });
    const amr = bmr * activity;
    const maintainCalories = amr;
    const mildDeficitCalories = amr * 0.85;
    const aggressiveDeficitCalories = amr * 0.75;

    const macros = calculateMacros({ weight, targetCalories: mildDeficitCalories });

    bmrField.textContent = formatCalories(bmr);
    amrField.textContent = formatCalories(amr);
    maintainField.textContent = formatCalories(maintainCalories);
    mildDeficitField.textContent = formatCalories(mildDeficitCalories);
    aggressiveDeficitField.textContent = formatCalories(aggressiveDeficitCalories);

    proteinAmountField.textContent = formatGrams(macros.protein);
    fatAmountField.textContent = formatGrams(macros.fat);
    carbAmountField.textContent = formatGrams(macros.carbs);

    safetyNotice.hidden = mildDeficitCalories >= 1200;

    resultsSection.hidden = false;
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

form.addEventListener('submit', handleSubmit);
