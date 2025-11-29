const form = document.getElementById('calorieCalculator');
const resultsSection = document.getElementById('results');
const bmrField = document.getElementById('bmrValue');
const amrField = document.getElementById('amrValue');
const recommendedField = document.getElementById('recommendedCalories');
const maintainField = document.getElementById('maintainCalories');
const mildDeficitField = document.getElementById('mildDeficitCalories');
const aggressiveDeficitField = document.getElementById('aggressiveDeficitCalories');
const proteinAmountField = document.getElementById('proteinAmount');
const fatAmountField = document.getElementById('fatAmount');
const carbAmountField = document.getElementById('carbAmount');
const safetyNotice = document.getElementById('safetyNotice');
const yearLabel = document.getElementById('year');
const calorieRangeField = document.getElementById('calorieRange');
const partnerCardsContainer = document.getElementById('partnerCards');
const goalFilter = document.getElementById('goalFilter');
const budgetFilter = document.getElementById('budgetFilter');
const comparisonBody = document.getElementById('comparisonBody');
const reviewGrid = document.getElementById('reviewGrid');
const stickyBar = document.getElementById('stickyBar');
const stickyCalories = document.getElementById('stickyCalories');
const summaryCalories = document.getElementById('summaryCalories');
const summaryMaintain = document.getElementById('summaryMaintain');
const summaryDeficit = document.getElementById('summaryDeficit');
const summaryMacros = document.getElementById('summaryMacros');
const summaryEmpty = document.getElementById('summaryEmpty');
const calcResultCard = document.getElementById('calcResultCard');
const resultTitle = document.getElementById('resultTitle');
const resultSubtitle = document.getElementById('resultSubtitle');
const resultsLead = document.getElementById('resultsLead');
const resultDynamic = document.getElementById('resultDynamic');
const resultDetail = document.getElementById('resultDetail');
const resultMacros = document.getElementById('resultMacros');
const planTitle = document.getElementById('planTitle');
const planMeals = document.getElementById('planMeals');
const planFit = document.getElementById('planFit');
const planResult = document.getElementById('planResult');
const planPrice = document.getElementById('planPrice');
const dayCaloriesLabel = document.getElementById('dayCalories');
const heroCalories = document.getElementById('heroCalories');
const heroDelta = document.getElementById('heroDelta');
const heroProtein = document.getElementById('heroProtein');
const heroFat = document.getElementById('heroFat');
const heroCarbs = document.getElementById('heroCarbs');

const partners = [
    {
        id: 'level-kitchen',
        name: 'Level Kitchen',
        budget: 'balance',
        goal: 'loss',
        calories: 1500,
        meals: 5,
        duration: '6–7 дней',
        price: 'от 690 ₽/день',
        badge: 'Популярный выбор',
        program: 'Лайт',
        note: 'Без сахара и жареного',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
        url: 'https://levelkitchen.com/?utm_source=fit-calc&utm_medium=landing&utm_campaign=partner&utm_content=level-kitchen'
    },
    {
        id: 'yamdiet',
        name: 'Yamdiet',
        budget: 'economy',
        goal: 'loss',
        calories: 1300,
        meals: 4,
        duration: '5–7 дней',
        price: 'от 590 ₽/день',
        badge: 'Экономно',
        program: 'Лайт',
        note: 'Доставка каждый день с 7:00 до 10:00',
        image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&w=900&q=80',
        url: 'https://yamdiet.com/?utm_source=fit-calc&utm_medium=landing&utm_campaign=partner&utm_content=yamdiet'
    },
    {
        id: 'befit',
        name: 'BeFit',
        budget: 'premium',
        goal: 'maintain',
        calories: 1800,
        meals: 5,
        duration: '7 дней',
        price: 'от 890 ₽/день',
        badge: 'Максимальный результат',
        program: 'Баланс',
        note: 'Органические продукты и суперфуды',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
        url: 'https://befit.ru/?utm_source=fit-calc&utm_medium=landing&utm_campaign=partner&utm_content=befit'
    },
    {
        id: 'my-food',
        name: 'My Food',
        budget: 'balance',
        goal: 'gain',
        calories: 2100,
        meals: 6,
        duration: '5 дней',
        price: 'от 820 ₽/день',
        badge: 'Вегетарианский',
        program: 'Плюс',
        note: 'Без сахара и жареного',
        image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80',
        url: 'https://myfood.ru/?utm_source=fit-calc&utm_medium=landing&utm_campaign=partner&utm_content=my-food'
    }
];

const goalLabels = {
    loss: 'Похудение',
    maintain: 'Поддержание',
    gain: 'Набор'
};

const goalTexts = {
    loss: 'похудения',
    maintain: 'поддержания веса',
    gain: 'набора массы'
};

const goalAdjustments = {
    loss: { type: 'дефицит', percent: 15 },
    maintain: { type: 'баланс', percent: 0 },
    gain: { type: 'профицит', percent: 10 }
};

const reviews = [
    { name: 'Анна, 32 года, Москва', result: '–5 кг за первый месяц', plan: 'Рацион 1400 ккал', text: '«Всегда срывалась на работе: то перекусы, то доставка фастфуда. С рационом на 1400 ккал за первый месяц ушло 5 кг, и самое главное — вообще не голодала. Очень удобно, что ничего не нужно считать и готовить.»', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80' },
    { name: 'Игорь, 37 лет, Санкт-Петербург', result: '–7 кг за 6 недель', plan: 'Рацион 1800 ккал', text: '«Нужно было быстро привести себя в форму к сезону, но на диеты сил нет. Заказал рацион на 1800 ккал, плюс ходил пешком. За 6 недель –7 кг. Еда нормальная, не диетическая трава, порции плотные.»', avatar: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=200&q=80' },
    { name: 'Екатерина, 28 лет, Екатеринбург', result: 'Экономия времени', plan: 'Рацион 1500 ккал', text: '«Главное — экономия времени. Раньше по воскресеньям готовила на неделю, теперь просто получаю коробку утром. Вес потихоньку уходит, но бонусом — стала меньше уставать.»', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80' }
];

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

    return { protein: proteinGrams, fat: fatGrams, carbs: carbGrams };
};

const state = {
    targetCalories: null,
    goal: 'loss'
};

const updateCalorieRange = (target) => {
    if (!target) {
        calorieRangeField.textContent = '—';
        return;
    }
    const min = Math.round(target * 0.9);
    const max = Math.round(target * 1.1);
    calorieRangeField.textContent = `${new Intl.NumberFormat('ru-RU').format(min)}–${new Intl.NumberFormat('ru-RU').format(max)}`;
};

const renderPartnerCards = () => {
    partnerCardsContainer.innerHTML = '';
    const goalValue = goalFilter.value;
    const budgetValue = budgetFilter.value;
    const target = state.targetCalories;
    const range = target ? { min: target * 0.9, max: target * 1.1 } : null;

    const filtered = partners
        .filter((partner) => (goalValue === 'all' || partner.goal === goalValue) && (budgetValue === 'all' || partner.budget === budgetValue))
        .sort((a, b) => {
            const score = (item) => {
                const rangeScore = range ? (item.calories >= range.min && item.calories <= range.max ? 0 : 1) : 1;
                const budgetScore = budgetValue === 'all' ? 0 : item.budget === budgetValue ? 0 : 1;
                return rangeScore + budgetScore;
            };
            return score(a) - score(b);
        });

    filtered.forEach((partner) => {
        const matchesRange = range ? partner.calories >= range.min && partner.calories <= range.max : false;
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card__media">
                <img src="${partner.image}" alt="${partner.name} меню" loading="lazy">
                <span class="card__pill card__pill--${partner.goal}">${partner.badge}</span>
            </div>
            <div class="card__top">
                <div class="card__logo">${partner.name}</div>
                <span class="badge">${goalLabels[partner.goal]}</span>
            </div>
            <h3>Рацион “${partner.program} ${partner.calories} ккал”</h3>
            <ul class="card__list">
                <li>${partner.meals} приёмов пищи в день</li>
                <li>В калорийности, подходящей вашей цели</li>
                <li>${partner.note}</li>
                <li>Доставка каждый день с 7:00 до 10:00</li>
            </ul>
            <div class="card__cta">
                <span class="card__price">${partner.price} · ${matchesRange ? 'Подходит вашей норме' : 'Ближайший по калорийности'}</span>
                <a class="button" href="${partner.url}" target="_blank" rel="noopener">Выбрать и оформить доставку</a>
            </div>
        `;
        partnerCardsContainer.appendChild(card);
    });
};

const renderComparison = () => {
    comparisonBody.innerHTML = '';
    const target = state.targetCalories;
    partners.forEach((partner) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="Сервис"><span class="brand">${partner.name}</span></td>
            <td data-label="Калорийность под вас">${target ? formatCalories(target) : `${partner.calories} ккал`}</td>
            <td data-label="Цена от/день">${partner.price}</td>
            <td data-label="Приёмов пищи">${partner.meals}</td>
            <td data-label="Для кого подходит">${partner.goal === 'loss' ? 'Похудение' : partner.goal === 'gain' ? 'Набор' : 'Поддержание'}</td>
            <td data-label="Особенности">${partner.note}</td>
            <td data-label="">
                <a class="button" href="${partner.url}" target="_blank" rel="noopener">Выбрать</a>
            </td>
        `;
        comparisonBody.appendChild(row);
    });
};

const renderReviews = () => {
    reviewGrid.innerHTML = '';
    reviews.forEach((review) => {
        const card = document.createElement('article');
        card.className = 'review';
        card.innerHTML = `
            <div class="review__header">
                <img class="review__avatar" src="${review.avatar}" alt="${review.name}" loading="lazy">
                <div class="review__info">
                    <p class="review__title">${review.result}</p>
                    <p class="review__meta">${review.name}</p>
                    <p class="subtitle">${review.plan}</p>
                </div>
            </div>
            <p>${review.text}</p>
        `;
        reviewGrid.appendChild(card);
    });
};

const updateStickyBar = () => {
    if (!state.targetCalories) return;
    stickyCalories.textContent = formatCalories(state.targetCalories);
    stickyBar.hidden = false;
};

const updatePlanCard = ({ targetCalories, goal, macros, amr }) => {
    const adjustment = goalAdjustments[goal] || goalAdjustments.loss;
    const goalText = goalTexts[goal] || goalTexts.loss;
    const deficitCalories = Math.abs(amr - targetCalories);
    resultDynamic.innerHTML = `Ваша ориентировочная норма — <strong>${formatCalories(amr)}</strong>.`;
    if (adjustment.type === 'дефицит' && adjustment.percent > 0) {
        resultDetail.innerHTML = `Для комфортного ${goalText} мы заложили безопасный дефицит <strong>${adjustment.percent}%</strong> — это примерно <strong>${formatCalories(deficitCalories)}</strong>.`;
    } else if (adjustment.type === 'профицит') {
        resultDetail.innerHTML = `Для комфортного ${goalText} заложили умеренный профицит <strong>${adjustment.percent}%</strong> — это примерно <strong>${formatCalories(deficitCalories)}</strong>.`;
    } else {
        resultDetail.innerHTML = `Для комфортного ${goalText} сохраняем баланс без дефицита.`;
    }

    resultMacros.textContent = `${formatGrams(macros.protein)} / ${formatGrams(macros.fat)} / ${formatGrams(macros.carbs)}`;
    const planCalories = Math.round(targetCalories / 50) * 50;
    const rangeMin = Math.round(targetCalories * 0.95);
    const rangeMax = Math.round(targetCalories * 1.05);
    const mealsCount = targetCalories > 2000 ? 6 : 5;
    const avgResult = goal === 'gain' ? '+2 кг за 6–8 недель' : 'до –4.7 кг за 4 недели';
    const priceDay = Math.max(650, Math.round(planCalories / 2));
    const priceMonth = priceDay * 30;

    planTitle.textContent = `Рацион “Баланс ${planCalories} ккал”`;
    planMeals.textContent = `${mealsCount} приёмов пищи в день`;
    planFit.textContent = `Подходит вашей норме: ${new Intl.NumberFormat('ru-RU').format(rangeMin)}–${new Intl.NumberFormat('ru-RU').format(rangeMax)} ккал`;
    planResult.textContent = `Средний результат клиентов — ${avgResult}`;
    planPrice.textContent = `${new Intl.NumberFormat('ru-RU').format(priceDay)} ₽/день · ${new Intl.NumberFormat('ru-RU').format(priceMonth)} ₽/месяц`;
    dayCaloriesLabel.textContent = formatCalories(planCalories);
    heroCalories.textContent = new Intl.NumberFormat('ru-RU').format(Math.round(targetCalories));
    heroDelta.textContent = `${adjustment.type === 'профицит' ? '+' : ''}${adjustment.percent}%`;
    heroProtein.textContent = `${Math.round(macros.protein)}г`;
    heroFat.textContent = `${Math.round(macros.fat)}г`;
    heroCarbs.textContent = `${Math.round(macros.carbs)}г`;
};

const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const gender = formData.get('gender');
    const age = clamp(Number(formData.get('age')), 16, 80);
    const weight = clamp(Number(formData.get('weight')), 35, 250);
    const height = clamp(Number(formData.get('height')), 120, 220);
    const activity = Number(formData.get('activity'));
    const goal = formData.get('goal');

    if (!age || !weight || !height || !activity) {
        form.reportValidity();
        return;
    }

    const bmr = calculateBMR({ gender, age, weight, height });
    const amr = bmr * activity;
    const adjustment = goalAdjustments[goal] || goalAdjustments.loss;
    const maintainCalories = amr;
    const targetCalories = adjustment.type === 'профицит'
        ? amr * (1 + adjustment.percent / 100)
        : adjustment.type === 'баланс'
            ? amr
            : amr * (1 - adjustment.percent / 100);
    const aggressiveDeficitCalories = amr * 0.75;

    const macros = calculateMacros({ weight, targetCalories });

    bmrField.textContent = formatCalories(bmr);
    amrField.textContent = formatCalories(amr);
    recommendedField.textContent = formatCalories(targetCalories);
    maintainField.textContent = formatCalories(maintainCalories);
    mildDeficitField.textContent = formatCalories(Math.min(targetCalories, maintainCalories));
    aggressiveDeficitField.textContent = formatCalories(aggressiveDeficitCalories);

    proteinAmountField.textContent = formatGrams(macros.protein);
    fatAmountField.textContent = formatGrams(macros.fat);
    carbAmountField.textContent = formatGrams(macros.carbs);

    summaryCalories.textContent = formatCalories(targetCalories);
    summaryMaintain.textContent = formatCalories(maintainCalories);
    summaryDeficit.textContent = formatCalories(targetCalories);
    summaryMacros.textContent = `${formatGrams(macros.protein)} / ${formatGrams(macros.fat)} / ${formatGrams(macros.carbs)}`;
    calcResultCard.classList.add('filled');
    summaryEmpty.hidden = true;

    safetyNotice.hidden = targetCalories >= 1200;

    state.targetCalories = targetCalories;
    state.goal = goal;
    updateCalorieRange(targetCalories);
    renderPartnerCards();
    renderComparison();
    updateStickyBar();

    resultTitle.textContent = 'Ваша норма калорий рассчитана';
    resultSubtitle.textContent = 'Рекомендуемая калорийность и БЖУ готовы';
    resultsLead.textContent = 'Ваша ориентировочная норма и рекомендованный рацион под вашу цель.';
    updatePlanCard({ targetCalories, goal, macros, amr });

    resultsSection.hidden = false;
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

form.addEventListener('submit', handleSubmit);
goalFilter.addEventListener('change', renderPartnerCards);
budgetFilter.addEventListener('change', renderPartnerCards);

window.addEventListener('resize', updateStickyBar);

renderPartnerCards();
renderComparison();
renderReviews();
