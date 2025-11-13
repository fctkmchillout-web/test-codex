const calculatorForm = document.getElementById('calculator');
const resultsSection = document.getElementById('results');
const summaryParagraph = document.getElementById('summary');
const caloriesOutput = document.getElementById('calories');
const proteinsOutput = document.getElementById('proteins');
const fatsOutput = document.getElementById('fats');
const carbsOutput = document.getElementById('carbs');
const proteinSlider = document.getElementById('protein');
const proteinLabel = document.getElementById('proteinValue');
const yearLabel = document.getElementById('year');

yearLabel.textContent = new Date().getFullYear();

proteinSlider.addEventListener('input', () => {
    proteinLabel.textContent = `${proteinSlider.value}%`;
});

const formatNumber = (value, fractionDigits = 0) =>
    new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    }).format(value);

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const calculate = (data) => {
    const { gender, age, height, weight, activity, goal, proteinShare } = data;

    const ageValue = clamp(Number(age), 10, 100);
    const heightValue = clamp(Number(height), 120, 250);
    const weightValue = clamp(Number(weight), 35, 250);

    const base = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + (gender === 'male' ? 5 : -161);
    const goalAdjustment = 1 + Number(goal);
    const activityMultiplier = Number(activity);
    const calories = Math.round(base * activityMultiplier * goalAdjustment);

    const proteinPercent = Number(proteinShare) / 100;
    const fatPercent = clamp((1 - proteinPercent) * 0.4, 0.2, 0.35);
    const carbsPercent = 1 - proteinPercent - fatPercent;

    const proteins = Math.round((calories * proteinPercent) / 4);
    const fats = Math.round((calories * fatPercent) / 9);
    const carbs = Math.round((calories * carbsPercent) / 4);

    return {
        calories,
        proteins,
        fats,
        carbs,
        proteinPercent,
        fatPercent,
        carbsPercent,
    };
};

const showResults = (result, data) => {
    const { calories, proteins, fats, carbs, proteinPercent, fatPercent, carbsPercent } = result;
    const { goal } = data;

    caloriesOutput.textContent = `${formatNumber(calories)} ккал`;
    proteinsOutput.textContent = `${formatNumber(proteins)} г`;
    fatsOutput.textContent = `${formatNumber(fats)} г`;
    carbsOutput.textContent = `${formatNumber(carbs)} г`;

    const goalText = {
        '-0.15': 'для снижения веса',
        '0': 'для поддержания веса',
        '0.15': 'для набора мышечной массы',
    }[goal] || '';

    summaryParagraph.textContent = `Макросы распределены так: белки — ${(proteinPercent * 100).toFixed(0)}%, жиры — ${(fatPercent * 100).toFixed(0)}%, углеводы — ${(carbsPercent * 100).toFixed(0)}% ${goalText}.`;

    resultsSection.hidden = false;
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

calculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(calculatorForm);
    const data = {
        gender: formData.get('gender'),
        age: formData.get('age'),
        height: formData.get('height'),
        weight: formData.get('weight'),
        activity: formData.get('activity'),
        goal: formData.get('goal'),
        proteinShare: proteinSlider.value,
    };

    const isValid = ['age', 'height', 'weight'].every((field) => {
        const value = Number(data[field]);
        return Number.isFinite(value) && value > 0;
    });

    if (!isValid) {
        calculatorForm.reportValidity();
        return;
    }

    const result = calculate(data);
    showResults(result, data);
});
