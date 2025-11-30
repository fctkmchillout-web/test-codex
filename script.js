const yearLabel = document.getElementById('year');
const form = document.getElementById('calorieForm');
const resultSection = document.getElementById('result');
const plansSection = document.getElementById('plans');
const resultCard = document.getElementById('resultCard');
const maintainValue = document.getElementById('maintainValue');
const deltaValue = document.getElementById('deltaValue');
const macrosValue = document.getElementById('macrosValue');
const safetyNote = document.getElementById('safetyNote');
const resultCalories = document.getElementById('resultCalories');
const resultGoal = document.getElementById('resultGoal');
const resultValue = document.getElementById('resultValue');
const resultSubtitle = document.getElementById('resultSubtitle');
const recommendTitle = document.getElementById('recommendTitle');
const recommendMeta = document.getElementById('recommendMeta');
const recommendBullets = document.getElementById('recommendBullets');
const recommendPrice = document.getElementById('recommendPrice');
const plansGrid = document.getElementById('plansGrid');
const showMoreBtn = document.getElementById('showMorePlans');
const reviewsSlider = document.getElementById('reviewsSlider');
const faqList = document.getElementById('faqList');
const stickyBar = document.getElementById('mobile-sticky-cta');
const stickyText = document.getElementById('stickyText');
const burger = document.querySelector('.topbar__burger');
const nav = document.querySelector('.topbar__nav');

const plans = [
  { name: 'Баланс', badge: 'Популярный', calories: '1400–1600', meals: '5 приёмов', bullets: ['Без жарки и сахара', 'Сезонные продукты', 'Доставка на следующий день'], price: 'от 690 ₽', goal: 'loss' },
  { name: 'Лайт эконом', badge: 'Эконом', calories: '1200–1400', meals: '4 приёма', bullets: ['Простые блюда', 'Удобно брать с собой', 'Оптимально для старта'], price: 'от 550 ₽', goal: 'loss' },
  { name: 'Поддержание', badge: 'Баланс', calories: '1700–1900', meals: '5 приёмов', bullets: ['Без экстремальных дефицитов', 'БЖУ 30/30/40', 'Гибкая смена блюд'], price: 'от 820 ₽', goal: 'maintain' },
  { name: 'Мышечный рост', badge: 'Белковый', calories: '2000–2300', meals: '6 приёмов', bullets: ['Повышенный белок', 'Удобно под тренировки', 'Сытные ужины'], price: 'от 890 ₽', goal: 'gain' }
];

const reviews = [
  { name: 'Екатерина', meta: 'Москва · -4,5 кг за 5 недель', text: 'Готовые блюда экономят время. Следовала рациону и похудела без голода.', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80' },
  { name: 'Игорь', meta: 'Санкт-Петербург · -6 кг', text: 'Удобно, что дефицит уже посчитан. Курьер привозит рано утром.', avatar: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=200&q=80' },
  { name: 'Мария', meta: 'Екатеринбург · -3 кг', text: 'Меню разнообразное, макросы сходятся с расчётом. Хочу продолжать.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Антон', meta: 'Краснодар · +2 кг мышц', text: 'Добавил силовые и готовые блюда с повышенным белком. Результат отличный.', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80' }
];

const faqs = [
  { q: 'Буду ли я голодать?', a: 'Мы используем умеренный дефицит 10–15% и рекомендуем не опускаться ниже 1200 ккал без врача.' },
  { q: 'Что если не понравится еда?', a: 'Можно сменить рацион или запросить другой сервис — оформление одно и то же.' },
  { q: 'Есть ли специальные рационы?', a: 'Да, доступны варианты без лактозы, без глютена и вегетарианские программы.' },
  { q: 'Нужно ли заниматься спортом?', a: 'Достаточно активности 2–3 раза в неделю, но прогресс ускорится с дополнительным движением.' },
  { q: 'Как оформляется заказ?', a: 'После выбора плана оставьте контакты — менеджер подтвердит время доставки и оплату.' },
  { q: 'На какой срок лучше заказывать?', a: 'Начните с 5–7 дней, чтобы оценить вкус и удобство. Потом переходите на подписку.' },
  { q: 'Что делать при хронических заболеваниях?', a: 'Всегда консультируйтесь с врачом и уточняйте ограничения в комментарии к заказу.' },
  { q: 'Чем Fit Calc отличается от калькулятора калорий?', a: 'Мы не только считаем норму, но и сразу даём готовые рационы и доставку.' }
];

const format = (value) => `${new Intl.NumberFormat('ru-RU').format(Math.round(value))} ккал`;
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

function calculate({ gender, age, height, weight, activity, goal }) {
  const bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
  const amr = bmr * activity;
  const target = goal === 'loss' ? amr * 0.85 : goal === 'gain' ? amr * 1.1 : amr;
  const protein = weight * 1.6;
  const fats = weight * 0.8;
  const carbs = (target - (protein * 4 + fats * 9)) / 4;
  return { bmr, amr, target, delta: target - amr, protein, fats, carbs };
}

function buildPlans(goal) {
  plansGrid.innerHTML = '';
  const visible = plans.filter((plan) => goal === 'maintain' ? plan.goal !== 'loss' : plan.goal === goal || plan.goal === 'loss');
  visible.forEach((plan) => {
    const card = document.createElement('article');
    card.className = 'plan-card';
    card.innerHTML = `
      <span class="plan-card__badge">${plan.badge}</span>
      <h3>${plan.name}</h3>
      <p class="subtitle">${plan.calories} ккал · ${plan.meals}</p>
      <ul class="list">
        ${plan.bullets.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <div class="price-row">
        <span class="price">${plan.price}</span>
        <a class="button" href="#promo-lead">Подобрать рацион</a>
      </div>
    `;
    plansGrid.appendChild(card);
  });
}

function buildReviews() {
  reviewsSlider.innerHTML = '';
  reviews.forEach((review) => {
    const card = document.createElement('article');
    card.className = 'review';
    card.innerHTML = `
      <div class="review__header">
        <img class="review__avatar" src="${review.avatar}" alt="${review.name}">
        <div>
          <p class="review__name">${review.name}</p>
          <p class="review__meta">${review.meta}</p>
        </div>
      </div>
      <p class="note">${review.text}</p>
    `;
    reviewsSlider.appendChild(card);
  });
}

function buildFaq() {
  faqList.innerHTML = '';
  faqs.forEach((item) => {
    const wrapper = document.createElement('details');
    wrapper.className = 'accordion__item';
    const summary = document.createElement('summary');
    summary.className = 'accordion__question';
    summary.textContent = item.q;
    const answer = document.createElement('div');
    answer.className = 'accordion__answer';
    answer.textContent = item.a;
    wrapper.appendChild(summary);
    wrapper.appendChild(answer);
    faqList.appendChild(wrapper);
  });
}

function showSticky() {
  if (window.innerWidth <= 900) {
    stickyBar.hidden = false;
  } else {
    stickyBar.hidden = true;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(form);
  const gender = data.get('gender');
  const age = Number(data.get('age'));
  const height = Number(data.get('height'));
  const weight = Number(data.get('weight'));
  const activity = Number(data.get('activity'));
  const goal = data.get('goal');
  if (!age || !height || !weight) return;

  const { amr, target, delta, protein, fats, carbs } = calculate({ gender, age, height, weight, activity, goal });
  maintainValue.textContent = format(amr);
  deltaValue.textContent = `${delta > 0 ? '+' : ''}${Math.round(delta)} ккал`;
  macrosValue.textContent = `${Math.round(protein)} г / ${Math.round(fats)} г / ${Math.round(Math.max(carbs, 0))} г`;
  resultCalories.textContent = format(target);
  resultGoal.textContent = goal === 'loss' ? 'Цель — похудение' : goal === 'gain' ? 'Цель — набор' : 'Поддержание веса';
  safetyNote.hidden = target >= 1200;
  resultCard.hidden = false;
  resultSection.hidden = false;
  plansSection.hidden = false;
  stickyBar.hidden = false;
  stickyText.textContent = `Ваша норма: ${format(target)}`;

  resultValue.textContent = format(target);
  resultSubtitle.textContent = goal === 'loss' ? 'Дефицит 10–15% для плавного снижения веса' : goal === 'gain' ? 'Лёгкий профицит для роста' : 'Поддержание текущей формы';

  const recommended = plans.find((plan) => plan.goal === goal) || plans[0];
  recommendTitle.textContent = recommended.name;
  recommendMeta.textContent = `${recommended.calories} ккал · ${recommended.meals}`;
  recommendBullets.innerHTML = recommended.bullets.map((item) => `<li>${item}</li>`).join('');
  recommendPrice.textContent = `${recommended.price} / день`;

  buildPlans(goal);
  resultSection.scrollIntoView({ behavior: 'smooth' });
}

form?.addEventListener('submit', handleSubmit);
showMoreBtn?.addEventListener('click', () => {
  showMoreBtn.hidden = true;
  buildPlans('maintain');
});

burger?.addEventListener('click', () => nav.classList.toggle('open'));
window.addEventListener('resize', showSticky);
window.addEventListener('DOMContentLoaded', () => {
  yearLabel.textContent = new Date().getFullYear();
  buildReviews();
  buildFaq();
  showSticky();
});
