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
const comparisonCards = document.getElementById('comparisonCards');
const tabContent = document.getElementById('tabContent');
const faqContent = document.getElementById('faqContent');
const reviewGrid = document.getElementById('reviewGrid');
const featuredReview = document.getElementById('featuredReview');
const stickyBar = document.getElementById('stickyBar');
const stickyCalories = document.getElementById('stickyCalories');
const limitationsCheckbox = document.getElementById('dietLimitations');
const limitationsField = document.getElementById('limitationsField');
const headline = document.getElementById('headline');
const headlineCalories = document.getElementById('headlineCalories');

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
        tag: 'Лучший вкус',
        program: 'Похудение 1400–1600 ккал',
        note: 'Максимальное разнообразие блюд',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
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
        badge: 'Бюджетно',
        tag: 'Доставка быстро',
        program: 'Фитнес рацион 1200–1400 ккал',
        note: 'Быстрая доставка по городу',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=70',
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
        badge: 'Для спорта',
        tag: 'Больше белка',
        program: 'Баланс 1700–1900 ккал',
        note: 'Органические продукты и суперфуды',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
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
        tag: 'Для набора',
        program: 'Мышечный рост 2000–2200 ккал',
        note: 'Повышенное содержание белка',
        image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80',
        url: 'https://myfood.ru/?utm_source=fit-calc&utm_medium=landing&utm_campaign=partner&utm_content=my-food'
    }
];

const menus = {
    'Level Kitchen': {
        calories: '1500 ккал · БЖУ 120/60/150',
        photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
        meals: [
            { time: '08:00', title: 'Творожная запеканка с ягодами', calories: '320 ккал' },
            { time: '11:00', title: 'Миндальное латте', calories: '80 ккал' },
            { time: '14:00', title: 'Лосось на пару с киноа', calories: '430 ккал' },
            { time: '17:00', title: 'Салат с курицей и авокадо', calories: '210 ккал' },
            { time: '20:00', title: 'Чечевое рагу с овощами', calories: '360 ккал' }
        ]
    },
    'Yamdiet': {
        calories: '1300 ккал · БЖУ 100/45/120',
        photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
        meals: [
            { time: '08:00', title: 'Омлет с томатами', calories: '280 ккал' },
            { time: '11:00', title: 'Яблоко и орехи', calories: '140 ккал' },
            { time: '14:00', title: 'Куриная грудка с булгуром', calories: '360 ккал' },
            { time: '17:00', title: 'Творожный мусс', calories: '150 ккал' },
            { time: '20:00', title: 'Судак с овощами', calories: '310 ккал' }
        ]
    },
    'BeFit': {
        calories: '1800 ккал · БЖУ 140/65/180',
        photo: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
        meals: [
            { time: '08:00', title: 'Греческий йогурт с гранолой', calories: '350 ккал' },
            { time: '11:00', title: 'Смузи со шпинатом', calories: '170 ккал' },
            { time: '14:00', title: 'Стейк индейки с бататом', calories: '480 ккал' },
            { time: '17:00', title: 'Хумус с овощами', calories: '180 ккал' },
            { time: '20:00', title: 'Дорадо с киноа', calories: '420 ккал' }
        ]
    },
    'My Food': {
        calories: '2100 ккал · БЖУ 160/70/210',
        photo: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80',
        meals: [
            { time: '08:00', title: 'Протеиновые панкейки', calories: '420 ккал' },
            { time: '11:00', title: 'Творог с ягодами', calories: '200 ккал' },
            { time: '14:00', title: 'Паста с морепродуктами', calories: '520 ккал' },
            { time: '17:00', title: 'Сырники без сахара', calories: '240 ккал' },
            { time: '20:00', title: 'Буррито с говядиной', calories: '520 ккал' }
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
    { name: 'Екатерина, Москва', result: '-4,5 кг за 5 недель', plan: 'Level Kitchen 1500 ккал', text: 'Еда вкусная, разнообразная, не считала калории — просто следовала готовым блюдам.', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80' },
    { name: 'Игорь, Санкт-Петербург', result: '-6 кг за 6 недель', plan: 'Yamdiet 1300 ккал', text: 'Экономный вариант, но при этом хватает энергии для тренировок. Удобно забрать из постамата.', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
    { name: 'Мария, Екатеринбург', result: '-3 кг за 4 недели', plan: 'BeFit 1800 ккал', text: 'Нравится качество продуктов и упаковка. Нет чувства голода, удобно брать с собой.', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80' },
    { name: 'Антон, Краснодар', result: '+2 кг мышц за 8 недель', plan: 'My Food 2100 ккал', text: 'Добавил силовые тренировки и просто ел готовые блюда. Рост силовых и без готовки.', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
    { name: 'Светлана, Казань', result: '-5,2 кг за 6 недель', plan: 'Level Kitchen 1500 ккал', text: 'Сервис сам подобрал рацион под мои калории, добавили промокод — получилось выгодно.', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
    { name: 'Дмитрий, Новосибирск', result: '-4 кг за 5 недель', plan: 'Yamdiet 1400 ккал', text: 'Нравится что меню простое и понятное, доставка всегда вовремя.', photo: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80' }
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
    calorieRangeField.textContent = `${new Intl.NumberFormat('ru-RU').format(min)}–${new Intl.NumberFormat('ru-RU').format(max)} `;
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
            <img class="card__image" src="${partner.image}" alt="${partner.name} рацион">
            <div class="card__tag">${partner.tag}</div>
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
    comparisonCards.innerHTML = '';
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
                <a class="button button--ghost" href="${partner.url}" target="_blank" rel="noopener">Выбрать</a>
            </td>
        `;
        comparisonBody.appendChild(row);

        const card = document.createElement('article');
        card.className = 'comparison-card';
        card.innerHTML = `
            <div class="comparison-card__header">
                <strong>${partner.name}</strong>
                <span class="badge">${partner.badge}</span>
            </div>
            <ul class="comparison-card__list">
                <li>🔥 Калории: ${partner.calories} ккал</li>
                <li>⏱️ Приёмов: ${partner.meals}</li>
                <li>🎯 Цель: ${partner.goal === 'loss' ? 'Похудение' : partner.goal === 'gain' ? 'Набор' : 'Поддержание'}</li>
                <li>💰 Цена: ${partner.price}</li>
                <li>✨ ${partner.note}</li>
            </ul>
            <a class="button button--ghost" href="${partner.url}" target="_blank" rel="noopener">Выбрать</a>
        `;
        comparisonCards.appendChild(card);
    });
};

const renderMenuTab = (partnerName) => {
    const data = menus[partnerName];
    if (!data) return;

    const times = data.meals.map((meal) => `<span>${meal.time}</span>`).join('');
    const mealItems = data.meals
        .map((meal) => `<div class="timeline__item"><strong>${meal.title}</strong><span class="subtitle">${meal.calories}</span></div>`)
        .join('');

    tabContent.innerHTML = `
        <div class="tab-content__header">
            <h3>${partnerName}</h3>
            <p class="subtitle">${data.calories}</p>
        </div>
        <div class="timeline">
            <div class="timeline__times">${times}</div>
            <div class="timeline__items">${mealItems}</div>
        </div>
        <div class="tab-content__media">
            <img src="${data.photo}" alt="Блюда ${partnerName}">
        </div>
        <div class="tab-content__summary">
            <strong>Итого за день: ${data.calories}</strong>
            <a class="button button--ghost" href="#partner-plans">Посмотреть меню и оформить заказ</a>
        </div>
    `;
};

const renderReviews = () => {
    reviewGrid.innerHTML = '';
    featuredReview.innerHTML = '';
    if (!reviews.length) return;

    const [first, ...rest] = reviews;
    const featured = document.createElement('article');
    featured.className = 'featured-card';
    featured.innerHTML = `
        <div class="review__header">
            <img class="review__avatar" src="${first.photo}" alt="${first.name}">
            <div>
                <p class="review__title">${first.result}</p>
                <p class="subtitle">${first.plan}</p>
            </div>
        </div>
        <strong>${first.result}</strong>
        <p>${first.text}</p>
    `;
    featuredReview.appendChild(featured);

    rest.forEach((review) => {
        const card = document.createElement('article');
        card.className = 'review';
        card.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <img class="review__avatar" src="${review.photo}" alt="${review.name}">
                <div>
                    <p class="review__title">${review.result}</p>
                    <p class="review__meta">${review.name}</p>
                </div>
            </div>
            <p class="subtitle">${review.plan}</p>
            <p>${review.text}</p>
        `;
        reviewGrid.appendChild(card);
    });
};

const renderFaq = (category) => {
    const entries = faqs[category] || [];
    faqContent.innerHTML = '';
    entries.forEach((item, index) => {
        const block = document.createElement('article');
        block.className = 'accordion';
        if (index === 0) block.classList.add('accordion--open');
        block.innerHTML = `
            <button class="accordion__header" aria-expanded="${index === 0}">
                <span>${item.question}</span>
                <span>${index === 0 ? '−' : '+'}</span>
            </button>
            <div class="accordion__content">${item.answer}</div>
        `;
        const toggle = block.querySelector('.accordion__header');
        toggle.addEventListener('click', () => {
            const isOpen = block.classList.toggle('accordion--open');
            toggle.setAttribute('aria-expanded', isOpen);
            toggle.querySelector('span:last-child').textContent = isOpen ? '−' : '+';
        });
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
    headlineCalories.textContent = formatCalories(mildDeficitCalories);

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
