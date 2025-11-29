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
const tabContent = document.getElementById('tabContent');
const faqContent = document.getElementById('faqContent');
const reviewGrid = document.getElementById('reviewGrid');
const stickyBar = document.getElementById('stickyBar');
const stickyCalories = document.getElementById('stickyCalories');
const limitationsCheckbox = document.getElementById('dietLimitations');
const limitationsField = document.getElementById('limitationsField');

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
        badge: 'Рекомендуем',
        program: 'Похудение 1400–1600 ккал',
        note: 'Максимальное разнообразие блюд',
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
        badge: 'Эконом',
        program: 'Фитнес рацион 1200–1400 ккал',
        note: 'Быстрая доставка по городу',
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
        badge: 'Премиум',
        program: 'Баланс 1700–1900 ккал',
        note: 'Органические продукты и суперфуды',
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
        badge: 'Белковый упор',
        program: 'Мышечный рост 2000–2200 ккал',
        note: 'Повышенное содержание белка',
        url: 'https://myfood.ru/?utm_source=fit-calc&utm_medium=landing&utm_campaign=partner&utm_content=my-food'
    }
];

const menus = {
    'Level Kitchen': {
        calories: '1500 ккал · БЖУ 120/60/150',
        meals: [
            'Завтрак: творожная запеканка с ягодами — 320 ккал',
            'Перекус: миндальное латте — 80 ккал',
            'Обед: лосось на пару с киноа — 430 ккал',
            'Полдник: салат с курицей и авокадо — 210 ккал',
            'Ужин: чечевое рагу с овощами — 360 ккал'
        ]
    },
    'Yamdiet': {
        calories: '1300 ккал · БЖУ 100/45/120',
        meals: [
            'Завтрак: омлет с томатами — 280 ккал',
            'Перекус: яблоко и орехи — 140 ккал',
            'Обед: куриная грудка с булгуром — 360 ккал',
            'Полдник: творожный мусс — 150 ккал',
            'Ужин: судак с овощами — 310 ккал'
        ]
    },
    'BeFit': {
        calories: '1800 ккал · БЖУ 140/65/180',
        meals: [
            'Завтрак: греческий йогурт с гранолой — 350 ккал',
            'Перекус: смузи с шпинатом — 170 ккал',
            'Обед: стейк индейки с бататом — 480 ккал',
            'Полдник: хумус с овощами — 180 ккал',
            'Ужин: дорадо с киноа — 420 ккал'
        ]
    },
    'My Food': {
        calories: '2100 ккал · БЖУ 160/70/210',
        meals: [
            'Завтрак: протеиновые панкейки — 420 ккал',
            'Перекус: творог с ягодами — 200 ккал',
            'Обед: паста с морепродуктами — 520 ккал',
            'Полдник: сырники без сахара — 240 ккал',
            'Ужин: буррито с говядиной — 520 ккал'
        ]
    }
};

const faqs = {
    delivery: [
        {
            question: 'Как происходит доставка питания?',
            answer: 'Готовые блюда доставляют ежедневно или 2–3 раза в неделю в термопакетах. Время доставки можно выбрать при оформлении заказа на сайте партнёра.'
        },
        {
            question: 'Можно менять блюда и указывать предпочтения?',
            answer: 'У большинства партнёров есть возможность выбрать меню на день или исключить продукты. Уточняйте при оформлении: мы передадим ваши пожелания в комментариях.'
        },
        {
            question: 'Как хранить и разогревать набор?',
            answer: 'Держите блюда в холодильнике при +2…+6 °C и разогревайте в микроволновке или духовке согласно инструкции на упаковке.'
        },
        {
            question: 'Есть ли пробные наборы?',
            answer: 'Да, многие сервисы предлагают пробные дни и скидки для новых клиентов. Мы вышлем действующие промокоды после расчёта.'
        }
    ],
    calculator: [
        {
            question: 'По какой формуле работает калькулятор?',
            answer: 'Используем формулу Миффлина–Сан Жеора: она учитывает пол, возраст, вес и рост, а затем умножает результат на коэффициент активности.'
        },
        {
            question: 'Насколько точны результаты?',
            answer: 'Цифры — ориентир. Отслеживайте вес и объёмы раз в неделю: если прогресс остановился, скорректируйте калорийность на 5–10% или добавьте активности.'
        },
        {
            question: 'Почему нельзя есть меньше 1200 ккал?',
            answer: 'Ниже 1200 ккал сложно покрыть потребности в белке, жирах и витаминах. Используйте дефицит умеренно и консультируйтесь с врачом.'
        },
        {
            question: 'Что делать после расчёта нормы?',
            answer: 'Используйте рекомендованную калорийность, чтобы выбрать подходящий рацион у партнёров или составить меню самостоятельно.'
        }
    ]
};

const reviews = [
    { name: 'Екатерина, Москва', result: '-4,5 кг за 5 недель', plan: 'Level Kitchen 1500 ккал', text: 'Еда вкусная, разнообразная, не считала калории — просто следовала готовым блюдам.' },
    { name: 'Игорь, Санкт-Петербург', result: '-6 кг за 6 недель', plan: 'Yamdiet 1300 ккал', text: 'Экономный вариант, но при этом хватает энергии для тренировок. Удобно забрать из постамата.' },
    { name: 'Мария, Екатеринбург', result: '-3 кг за 4 недели', plan: 'BeFit 1800 ккал', text: 'Нравится качество продуктов и упаковка. Нет чувства голода, удобно брать с собой.' },
    { name: 'Антон, Краснодар', result: '+2 кг мышц за 8 недель', plan: 'My Food 2100 ккал', text: 'Добавил силовые тренировки и просто ел готовые блюда. Рост силовых и без готовки.' },
    { name: 'Светлана, Казань', result: '-5,2 кг за 6 недель', plan: 'Level Kitchen 1500 ккал', text: 'Сервис сам подобрал рацион под мои калории, добавили промокод — получилось выгодно.' },
    { name: 'Дмитрий, Новосибирск', result: '-4 кг за 5 недель', plan: 'Yamdiet 1400 ккал', text: 'Нравится что меню простое и понятное, доставка всегда вовремя.' }
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
    targetCalories: null
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
            <div class="card__top">
                <div class="card__logo">${partner.name}</div>
                <span class="badge">${partner.badge}</span>
            </div>
            <h3>${partner.program}</h3>
            <p class="subtitle">${partner.note}</p>
            <ul>
                <li>Калорийность: ${partner.calories} ккал/сутки</li>
                <li>Приёмов пищи: ${partner.meals}</li>
                <li>Срок: ${partner.duration}</li>
                <li>Цена: ${partner.price}</li>
            </ul>
            <div class="card__cta">
                <span class="card__price">${matchesRange ? 'Под вашу норму' : 'Рядом с вашей нормой'}</span>
                <a class="button" href="${partner.url}" target="_blank" rel="noopener">Выбрать рацион</a>
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

const renderMenuTab = (partnerName) => {
    const data = menus[partnerName];
    if (!data) return;

    tabContent.innerHTML = `
        <div class="tab-content__header">
            <h3>${partnerName}</h3>
            <p class="subtitle">${data.calories}</p>
        </div>
        <ul>${data.meals.map((meal) => `<li>${meal}</li>`).join('')}</ul>
        <div class="tab-content__footer">
            <strong>Готовые блюда без готовки</strong>
            <a class="button button--ghost" href="#partner-plans">Посмотреть меню и оформить заказ</a>
        </div>
    `;
};

const renderReviews = () => {
    reviewGrid.innerHTML = '';
    reviews.forEach((review) => {
        const card = document.createElement('article');
        card.className = 'review';
        card.innerHTML = `
            <p class="review__title">${review.result}</p>
            <p class="review__meta">${review.name}</p>
            <p class="subtitle">${review.plan}</p>
            <p>${review.text}</p>
        `;
        reviewGrid.appendChild(card);
    });
};

const renderFaq = (category) => {
    const entries = faqs[category] || [];
    faqContent.innerHTML = '';
    entries.forEach((item) => {
        const block = document.createElement('article');
        block.className = 'faq__item';
        block.innerHTML = `
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
        `;
        faqContent.appendChild(block);
    });
};

const updateStickyBar = () => {
    if (!state.targetCalories) return;
    stickyCalories.textContent = formatCalories(state.targetCalories);
    const shouldShow = window.innerWidth <= 900;
    stickyBar.hidden = !shouldShow;
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
    recommendedField.textContent = formatCalories(mildDeficitCalories);
    maintainField.textContent = formatCalories(maintainCalories);
    mildDeficitField.textContent = formatCalories(mildDeficitCalories);
    aggressiveDeficitField.textContent = formatCalories(aggressiveDeficitCalories);

    proteinAmountField.textContent = formatGrams(macros.protein);
    fatAmountField.textContent = formatGrams(macros.fat);
    carbAmountField.textContent = formatGrams(macros.carbs);

    safetyNotice.hidden = mildDeficitCalories >= 1200;

    state.targetCalories = mildDeficitCalories;
    updateCalorieRange(mildDeficitCalories);
    renderPartnerCards();
    renderComparison();
    updateStickyBar();

    resultsSection.hidden = false;
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

form.addEventListener('submit', handleSubmit);
goalFilter.addEventListener('change', renderPartnerCards);
budgetFilter.addEventListener('change', renderPartnerCards);
limitationsCheckbox.addEventListener('change', () => {
    limitationsField.hidden = !limitationsCheckbox.checked;
});

window.addEventListener('resize', updateStickyBar);

document.querySelectorAll('.tabs button').forEach((tab) => {
    tab.addEventListener('click', () => {
        const container = tab.closest('.tabs');
        container.querySelectorAll('.tab').forEach((btn) => btn.classList.remove('tab--active'));
        tab.classList.add('tab--active');
        const tabName = tab.dataset.tab;
        if (menus[tabName]) {
            renderMenuTab(tabName);
        } else if (faqs[tabName]) {
            renderFaq(tabName);
        }
    });
});

renderMenuTab('Level Kitchen');
renderPartnerCards();
renderComparison();
renderFaq('delivery');
renderReviews();
