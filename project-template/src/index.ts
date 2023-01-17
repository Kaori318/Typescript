import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
// eslint-disable-next-line no-undef
window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', './img/avatar.png', 47);
  renderSearchFormBlock();
  renderSearchStubBlock();
  // eslint-disable-next-line no-undef
  renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
});